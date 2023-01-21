const MEDIA_QUERY = '@media screen';

const breakPoints = {
  mobile: '320',
  tablet: '767',
  desktop: '1350',
};

export const mainTheme = {
  fontFamily: {
    primary: 'Poppins, sans-serif',
    secondary: 'Arial, sans-serif',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
  },
  fontSize: {
    xSmall: '12px',
    small: '14px',
    medium: '16px',
    large: '18px',
    xLarge: '20px',
    xxLarge: '22px',
    huge: '32px',
    xHuge: '50px',
    hugest: '60px',
  },
  color: {
    primary: {
      primary0: '#FFFFFF',
      primary100: '#D3AD7F',
      primary200: '#938E8E',
      primary300: '#191919',
      primary400: '#101010',
      primary500: '#605D5D',
    },
    secondary: {},
  },
  devices: {
    mobile: `${MEDIA_QUERY} and (min-width: ${breakPoints.mobile}px) and (max-width: ${breakPoints.tablet}px)`,
    tablet: `${MEDIA_QUERY} and (min-width: ${breakPoints.tablet}px) and (max-width: ${breakPoints.desktop}px)`,
    tabletAndDesktop: `${MEDIA_QUERY} and (min-width: ${breakPoints.tablet}px)`,
    desktop: `${MEDIA_QUERY} and (min-width: ${breakPoints.desktop}px)`,
  },
};
