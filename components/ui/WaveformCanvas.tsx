"use client";

import React, { useRef, useEffect, useCallback, useState } from 'react';

interface WaveformCanvasProps {
  width: number;
  height: number;
  waveformData?: number[];
  progress: number; // 0 to 1
  isPlaying: boolean;
  onSeek: (progress: number) => void;
  className?: string;
}

// Generate realistic waveform data if none provided
const generateWaveformData = (length: number): number[] => {
  const data: number[] = [];
  for (let i = 0; i < length; i++) {
    // Create a more realistic waveform pattern
    const baseValue = Math.sin(i * 0.1) * 0.5 + 0.5;
    const noise = Math.random() * 0.3;
    const value = Math.max(0, Math.min(1, baseValue + noise));
    data.push(value);
  }
  return data;
};

// Chunk waveform data for better performance
const chunkWaveformData = (data: number[], chunkSize: number): number[] => {
  const chunks: number[] = [];
  for (let i = 0; i < data.length; i += chunkSize) {
    const chunk = data.slice(i, i + chunkSize);
    const average = chunk.reduce((sum, val) => sum + val, 0) / chunk.length;
    chunks.push(average);
  }
  return chunks;
};

const WaveformCanvas: React.FC<WaveformCanvasProps> = ({
  width,
  height,
  waveformData,
  progress,
  isPlaying,
  onSeek,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hoverX, setHoverX] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Generate or use provided waveform data
  const data = waveformData || generateWaveformData(200);
  const chunkedData = chunkWaveformData(data, Math.ceil(data.length / 100));

  // Paint the waveform
  const paintWaveform = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, width, height);

    const barWidth = 2;
    const barMargin = 1;
    const totalBarWidth = barWidth + barMargin;
    const maxBars = Math.floor(width / totalBarWidth);
    const barsToShow = Math.min(chunkedData.length, maxBars);
    const playedBars = Math.floor(progress * barsToShow);

    // Calculate center line
    const centerY = height / 2;

    for (let i = 0; i < barsToShow; i++) {
      const x = i * totalBarWidth;
      const amplitude = chunkedData[i] || 0;
      const barHeight = Math.max(1, amplitude * (height * 0.8));
      
      // Determine bar color based on state
      let fillColor: string;
      const isPlayed = i < playedBars;
      const isHovered = isHovering && hoverX !== null && x <= hoverX && x + barWidth >= hoverX;

      if (isHovered) {
        fillColor = isPlayed ? '#94b398' : '#badebf'; // Hover colors
      } else if (isPlayed) {
        fillColor = '#F4915C'; // Played color (orange)
      } else {
        fillColor = '#E6FF02B3'; // Unplayed color (yellow with opacity)
      }

      // Draw the bar
      ctx.fillStyle = fillColor;
      ctx.fillRect(
        x,
        centerY - barHeight / 2,
        barWidth,
        barHeight
      );

      // Add subtle animation for playing state
      if (isPlaying && isPlayed) {
        const animationOffset = Math.sin(Date.now() * 0.01 + i * 0.1) * 0.5;
        ctx.fillStyle = `rgba(244, 145, 92, ${0.3 + animationOffset * 0.2})`;
        ctx.fillRect(
          x,
          centerY - barHeight / 2,
          barWidth,
          barHeight
        );
      }
    }
  }, [width, height, chunkedData, progress, isPlaying, hoverX, isHovering]);

  // Handle mouse events
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    setHoverX(x);
    setIsHovering(true);
  }, []);

  const handleMouseLeave = useCallback(() => {
    setHoverX(null);
    setIsHovering(false);
  }, []);

  const handleClick = useCallback((e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, x / width));
    onSeek(newProgress);
  }, [width, onSeek]);

  // Paint on changes
  useEffect(() => {
    paintWaveform();
  }, [paintWaveform]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={`cursor-pointer ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{
        display: 'block',
        borderRadius: '4px'
      }}
    />
  );
};

export default WaveformCanvas; 