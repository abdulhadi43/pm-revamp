

export interface IImageRepository {
  processImages(directoryPath: string): Promise<void>;
}
