export interface Project {
  [x: string]: any;
  _id: string;
  title: string;
  description: string;
  content: any;
  videoPreview?: VideoPrerview;
  images: any[];
  startDate: Date;
  endDate: Date;
  github: string;
}

interface VideoPrerview {
  _type: string;
  asset: {
    _ref: string;
    _type: string;
  };
}
