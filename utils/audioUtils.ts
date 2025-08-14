// Audio processing utilities inspired by the Troy Chryssos article

export interface WaveformData {
  data: number[];
  sampleRate: number;
  duration: number;
}

/**
 * Process audio file to extract waveform data
 * This is a simplified version - in production you'd use Web Audio API or a backend service
 */
export const processAudioFile = async (audioFile: File): Promise<WaveformData> => {
  return new Promise((resolve, reject) => {
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const reader = new FileReader();

    reader.onload = async (e) => {
      try {
        const arrayBuffer = e.target?.result as ArrayBuffer;
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);
        
        // Extract audio data
        const channelData = audioBuffer.getChannelData(0); // Use first channel
        const sampleRate = audioBuffer.sampleRate;
        const duration = audioBuffer.duration;
        
        // Process the data to create waveform
        const waveformData = processAudioData(channelData, sampleRate);
        
        resolve({
          data: waveformData,
          sampleRate,
          duration
        });
      } catch (error) {
        reject(error);
      }
    };

    reader.onerror = reject;
    reader.readAsArrayBuffer(audioFile);
  });
};

/**
 * Process raw audio data to create waveform visualization data
 */
const processAudioData = (channelData: Float32Array, sampleRate: number): number[] => {
  const dataLength = channelData.length;
  const samplesPerPixel = Math.ceil(dataLength / 1000); // 1000 data points
  const waveform: number[] = [];
  
  for (let i = 0; i < 1000; i++) {
    const start = i * samplesPerPixel;
    const end = Math.min(start + samplesPerPixel, dataLength);
    
    // Calculate RMS (Root Mean Square) for this segment
    let sum = 0;
    for (let j = start; j < end; j++) {
      sum += channelData[j] * channelData[j];
    }
    const rms = Math.sqrt(sum / (end - start));
    
    // Normalize to 0-1 range
    const normalized = Math.min(1, rms * 10); // Scale factor for better visualization
    waveform.push(normalized);
  }
  
  return waveform;
};

/**
 * Generate realistic waveform data for demo purposes
 * This mimics the processing described in the article
 */
export const generateRealisticWaveform = (duration: number, complexity: number = 1): number[] => {
  const dataPoints = Math.floor(duration * 100); // 100 points per second
  const waveform: number[] = [];
  
  for (let i = 0; i < dataPoints; i++) {
    // Create a more realistic pattern with multiple sine waves
    const time = i / dataPoints;
    const baseValue = 
      Math.sin(time * 2 * Math.PI * 2) * 0.3 + // Low frequency
      Math.sin(time * 2 * Math.PI * 8) * 0.2 + // Medium frequency
      Math.sin(time * 2 * Math.PI * 20) * 0.1; // High frequency
    
    // Add some randomness for realism
    const noise = (Math.random() - 0.5) * 0.1;
    const value = Math.max(0, Math.min(1, (baseValue + 0.5 + noise) * complexity));
    
    waveform.push(value);
  }
  
  return waveform;
};

/**
 * Chunk waveform data for better performance (as mentioned in the article)
 */
export const chunkWaveformData = (data: number[], targetLength: number): number[] => {
  if (data.length <= targetLength) return data;
  
  const chunkSize = Math.ceil(data.length / targetLength);
  const chunks: number[] = [];
  
  for (let i = 0; i < targetLength; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, data.length);
    const chunk = data.slice(start, end);
    
    // Calculate average amplitude for this chunk
    const average = chunk.reduce((sum, val) => sum + val, 0) / chunk.length;
    chunks.push(average);
  }
  
  return chunks;
};

/**
 * Normalize waveform data to a specific range (0-100 as mentioned in the article)
 */
export const normalizeWaveformData = (data: number[], maxValue: number = 100): number[] => {
  const maxAmplitude = Math.max(...data);
  if (maxAmplitude === 0) return data;
  
  return data.map(value => Math.round((value / maxAmplitude) * maxValue));
}; 