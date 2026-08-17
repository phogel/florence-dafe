import React from 'react';
import '../assets/styles.css';
import { mainNavLinks, PageId } from './navLinks';

/**
 * The active link is derived from the `activePage` prop rather than
 * `window.location`, so it is correct in the statically rendered HTML and cannot
 * cause a hydration mismatch.
 */
export const Header = ({ activePage }: { activePage?: PageId }) => {
  return (
    <menu>
      <p className="florence"> FLORENCE DAFE </p>
      <nav>
        {mainNavLinks.map(({ title, href, page }) => {
          const isActive = page === activePage;
          return (
            <a
              href={href}
              className={isActive ? 'button active' : 'button'}
              title={title}
              aria-current={isActive ? 'page' : undefined}
              key={page}
            >
              {' '}
              {title}{' '}
            </a>
          );
        })}
      </nav>
    </menu>
  );
};
