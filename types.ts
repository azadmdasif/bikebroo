
import React from 'react';

export interface SectionRefs {
  [key: string]: React.RefObject<HTMLDivElement>;
}

export interface NavLink {
  name: string;
  sectionKey: keyof SectionRefs;
}
