export interface Project {
  _id: string;
  title: string;
  description: string;
  videoPreview: object;
  images: any[];
  startDate: Date;
  endDate: Date;
}
