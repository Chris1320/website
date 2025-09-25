interface Mockup {
    images: { description: string; url: string }[];
}

export interface WebMockup extends Mockup {
    url: string;
}

export type DesktopMockup = Mockup;
export type MobileMockup = Mockup;
