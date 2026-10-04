export interface YraEvent {
  id: string;
  bannerText: string;
  bannerColor: string;
  tag: string;
  tagType: string;
  title: string;
  dateInfo: string;
  price?: string;
  description?: string;
  buttonText: string;
  buttonType: string;
}

export const eventList: YraEvent[] = [
  {
    id: 'bootcamp',
    bannerText: 'BOOTCAMP',
    bannerColor: '#45a5ba',
    tag: 'TRAINING',
    tagType: 'training',
    title: 'YRA Global Research Bootcamp 2026',
    dateInfo: '20 Aug · Online · 4 Weeks',
    price: 'Registration fee: ₦15,000',
    buttonText: 'Register now',
    buttonType: 'solid',
  },
  {
    id: 'slr',
    bannerText: 'SLR',
    bannerColor: '#fca35d',
    tag: 'SEMINAR',
    tagType: 'seminar',
    title: 'How to Write a Systematic Literature Review',
    dateInfo: '30 Aug · Online · 1 Day',
    description: 'Practical SLR writing and publication session.',
    buttonText: 'View details',
    buttonType: 'outline',
  },
  {
    id: 'spss',
    bannerText: 'SPSS',
    bannerColor: '#5eb4c8',
    tag: 'WORKSHOP',
    tagType: 'workshop',
    title: 'Data Analysis with SPSS for Researchers',
    dateInfo: '10 Sep · Online · 2 Days',
    description: 'Hands-on statistical analysis workshop.',
    buttonText: 'View details',
    buttonType: 'outline',
  },
];
