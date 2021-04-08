# Multilingual Fonts Switch

Switch to corresponding font family when page language is changed.

## Sample

- English: Inter
- Simplified Chinese (简体中文): Noto Sans SC
- Traditional Chinese (正体中文): Noto Sans TC
- Japanese (日本語): Noto Sans JP
- Korean (한국어): Noto Sans KR
- Arabian (عربى): Tajawal (RTL)

## Approach

- Default: All in one stylesheet with [Google Fonts CSS API v2](https://developers.google.com/fonts/docs/css2)
- Alternate: Separated font stylesheets with `rel=alternate`

## Vendor

- [Bootstrap5](https://github.com/twbs/bootstrap)
- [Google Fonts](https://fonts.google.com/)
