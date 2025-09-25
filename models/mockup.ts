interface Mockup {
    images: { description: string; url: string }[];
}

export interface WebMockup extends Mockup {
    url: string;
}
