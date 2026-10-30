# HENZER main website

Independent static corporate website for https://henzer.co. The existing `/workspace/henzer` partnership checkout is unchanged. Original bottle and HZ SVG assets were copied from that project. No framework, dependencies, build step, credentials, application forms, analytics, or checkout.

## Local development

From `/workspace/henzer-main`, run `python3 -m http.server 8080`. Check `/`, `/privacy.html`, and the mobile navigation. Stop the server with Ctrl+C. This project is separate from the partnership website; do not publish it to the partnership Netlify site.

## Deploy as a new Netlify project

1. Create a **new GitHub repository** for the contents of this directory. Do not push these files to henzer-alt/henzer. Upload the contents or initialize Git here, commit, and push to the new repository you control.
2. In Netlify, choose **Add new project → Import an existing project**, connect GitHub, and select the new repository. Leave the build command empty and set publish directory to `.`. The included `netlify.toml` configures the publish directory and security headers.
3. Deploy to a new Netlify project and verify all navigation, the privacy page, email links, and every partnership link on mobile and desktop. Partnership links must open https://partners.henzer.co.
4. The intended production domain is henzer.co. Domain assignment and any DNS work must be handled separately by the owner. Do not alter the existing partners.henzer.co project, DNS, nameservers, MX, SPF, DKIM, or Zoho settings.

No deployment or DNS changes have been performed. Review privacy language against actual hosting and email practices before launch. The contact address is consistently support@henzer.co (the brief’s display address); the supplied brief had a different underlying mailto destination.

## Files

- `index.html`: complete main website, SEO and Open Graph metadata
- `styles.css`: responsive layouts, keyboard focus, reduced motion
- `script.js`: mobile menu and dynamic copyright year
- `privacy.html`: main website privacy information
- `assets/mark.svg`, `assets/bottle.svg`: unmodified original brand assets
- `assets/social.svg`: branded social artwork source
- `netlify.toml`: deployment and security configuration

Social crawlers vary in SVG support; use a PNG export of social.svg for broad compatibility.

## Validation completed

Local HTTP requests returned 200 for the main page, privacy page, CSS, JavaScript, and original SVG assets. All 23 main-page links were checked for valid internal targets or expected destinations. JavaScript syntax passed. Playwright with system Chromium passed 375px, 768px, and 1440px viewport checks, no horizontal overflow, mobile menu opening, Escape dismissal, section-link dismissal, visible mobile partner CTA, and no page JavaScript errors. These checks do not verify external email delivery or Netlify deployment. Open Graph uses the included PNG export.
