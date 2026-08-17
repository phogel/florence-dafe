/**
 * Single source of truth for site navigation.
 *
 * A `PageId` names both the page's markdown source (`<page>.md`) and the nav entry to
 * highlight while it is open.
 */
export type PageId =
  'index' | 'publications' | 'research_in_progress' | 'teaching' | 'contact' | 'news' | 'datenschutz' | 'impressum';

export type NavLink = {
  title: string;
  href: string;
  page: PageId;
};

/** Links shown in the main header navigation. */
export const mainNavLinks: NavLink[] = [
  { title: 'Home', href: '/', page: 'index' },
  { title: 'Publications', href: 'publications.html', page: 'publications' },
  { title: 'Research in Progress', href: 'research_in_progress.html', page: 'research_in_progress' },
  { title: 'Teaching', href: 'teaching.html', page: 'teaching' },
  { title: 'Contact', href: 'contact.html', page: 'contact' },
];

/** The footer repeats the main navigation and adds the Impressum. */
export const footerNavLinks: NavLink[] = [
  ...mainNavLinks,
  { title: 'Impressum', href: 'impressum.html', page: 'impressum' },
];
