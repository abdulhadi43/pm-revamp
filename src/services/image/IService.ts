

export interface IService {
  processImages(directoryPath: string): Promise<void>;
}
