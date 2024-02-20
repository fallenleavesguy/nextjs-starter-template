import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  // A list of all locales that are supported
  locales: ['zh-HK', 'zh-CN'],
 
  // Used when no locale matches
  defaultLocale: 'zh-HK'
});
 
export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-HK|zh-CN)/:path*']
};