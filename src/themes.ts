/* eslint-disable import/no-unused-modules */
type BasicTheme = {
  palette: {
    themePrimary: string;
    themeLighterAlt: string;
    themeLighter: string;
    themeLight: string;
    themeTertiary: string;
    themeSecondary: string;
    themeDarkAlt: string;
    themeDark: string;
    themeDarker: string;
    neutralLighterAlt: string;
    neutralLighter: string;
    neutralLight: string;
    neutralQuaternaryAlt: string;
    neutralQuaternary: string;
    neutralTertiaryAlt: string;
    neutralTertiary: string;
    neutralSecondary: string;
    neutralPrimaryAlt: string;
    neutralPrimary: string;
    neutralDark: string;
    black: string;
    white: string;
  };
};

// base theme
export const baselight: BasicTheme = {
  palette: {
    themePrimary: '#128712',
    themeLighterAlt: '#f1faf1',
    themeLighter: '#cbeccb',
    themeLight: '#a2dba2',
    themeTertiary: '#58b758',
    themeSecondary: '#239623',
    themeDarkAlt: '#107a10',
    themeDark: '#0d670d',
    themeDarker: '#0a4c0a',
    neutralLighterAlt: '#faf9f8',
    neutralLighter: '#f3f2f1',
    neutralLight: '#edebe9',
    neutralQuaternaryAlt: '#e1dfdd',
    neutralQuaternary: '#d0d0d0',
    neutralTertiaryAlt: '#c8c6c4',
    neutralTertiary: '#a19f9d',
    neutralSecondary: '#605e5c',
    neutralPrimaryAlt: '#3b3a39',
    neutralPrimary: '#323130',
    neutralDark: '#201f1e',
    black: '#000000',
    white: '#ffffff',
  },
};

export const baseDark: BasicTheme = {
  palette: {
    themePrimary: '#0dbd0d',
    themeLighterAlt: '#010801',
    themeLighter: '#021e02',
    themeLight: '#043904',
    themeTertiary: '#087108',
    themeSecondary: '#0ca60c',
    themeDarkAlt: '#20c320',
    themeDark: '#3ccd3c',
    themeDarker: '#68da68',
    neutralLighterAlt: '#323232',
    neutralLighter: '#313131',
    neutralLight: '#2f2f2f',
    neutralQuaternaryAlt: '#2c2c2c',
    neutralQuaternary: '#2a2a2a',
    neutralTertiaryAlt: '#282828',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#333333',
  },
};

export const baseHightContrast: BasicTheme = {
  palette: {
    themePrimary: '#0dbd0d',
    themeLighterAlt: '#010801',
    themeLighter: '#021e02',
    themeLight: '#043904',
    themeTertiary: '#087108',
    themeSecondary: '#0ca60c',
    themeDarkAlt: '#20c320',
    themeDark: '#3ccd3c',
    themeDarker: '#68da68',
    neutralLighterAlt: '#323232',
    neutralLighter: '#313131',
    neutralLight: '#2f2f2f',
    neutralQuaternaryAlt: '#2c2c2c',
    neutralQuaternary: '#2a2a2a',
    neutralTertiaryAlt: '#282828',
    neutralTertiary: '#c8c8c8',
    neutralSecondary: '#d0d0d0',
    neutralPrimaryAlt: '#dadada',
    neutralPrimary: '#ffffff',
    neutralDark: '#f4f4f4',
    black: '#f8f8f8',
    white: '#333333',
  },
};

type CompoundTheme = {
  colorSet?: {
    generic: {
      zoneDialog: BasicTheme;
      zonePopover: BasicTheme;
    };
    dashboard: {
      zone1: BasicTheme;
      zone2: BasicTheme;
      zone3: BasicTheme;
    };
    nlu: {
      zone1: BasicTheme;
      zone2: BasicTheme;
      zone3: BasicTheme;
      zone4: BasicTheme;
    };
    dialog: {
      zone1: BasicTheme;
      zone2: BasicTheme;
      zone3: BasicTheme;
      zone4: BasicTheme;
      zone5: BasicTheme;
    };
  };
};

export type CustomThemeType = BasicTheme & CompoundTheme;

// compound theme
export const dark: CustomThemeType = {
  ...baseDark,
  colorSet: {
    generic: {
      // popovers
      // dialogs
      zoneDialog: {
        ...baseDark,
      },
      zonePopover: {
        ...baseDark,
      },
    },
    dashboard: {
      zone1: { ...baseDark },
      zone2: { ...baseDark },
      zone3: { ...baseDark },
    },
    nlu: {
      zone1: { ...baseDark },
      zone2: { ...baseDark },
      zone3: { ...baseDark },
      zone4: { ...baseDark },
    },
    dialog: {
      zone1: { ...baseDark },
      zone2: { ...baseDark },
      zone3: { ...baseDark },
      zone4: { ...baseDark },
      zone5: { ...baseDark },
    },
  },
};

export const light: CustomThemeType = {
  ...baselight,
  colorSet: {
    generic: {
      // popovers
      // dialogs
      zoneDialog: {
        ...baselight,
      },
      zonePopover: {
        ...baselight,
      },
    },
    dashboard: {
      zone1: { ...baselight },
      zone2: { ...baselight },
      zone3: { ...baselight },
    },
    nlu: {
      zone1: { ...baselight },
      zone2: { ...baselight },
      zone3: { ...baselight },
      zone4: { ...baselight },
    },
    dialog: {
      zone1: { ...baselight }, // we can use more descriptive naming
      zone2: { ...baselight },
      zone3: { ...baselight },
      zone4: { ...baselight },
      zone5: { ...baselight },
    },
  },
};

export const blend: CustomThemeType = {
  ...baseDark,
  colorSet: {
    generic: {
      // popovers
      // dialogs
      zoneDialog: {
        ...baseDark,
      },
      zonePopover: {
        ...baseDark,
      },
    },
    dashboard: {
      zone1: { ...baseDark },
      zone2: { ...baseDark },
      zone3: { ...baselight },
    },
    nlu: {
      zone1: { ...baseDark },
      zone2: { ...baseDark },
      zone3: { ...baseDark },
      zone4: { ...baselight },
    },
    dialog: {
      zone1: { ...baselight },
      zone2: { ...baseDark },
      zone3: { ...baselight },
      zone4: { ...baselight },
      zone5: { ...baseDark },
    },
  },
};

export const hightContrast: CustomThemeType = {
  ...baseHightContrast,
  colorSet: {
    generic: {
      // popovers
      // dialogs
      zoneDialog: {
        ...baseHightContrast,
      },
      zonePopover: {
        ...baseHightContrast,
      },
    },
    dashboard: {
      zone1: { ...baseHightContrast },
      zone2: { ...baseHightContrast },
      zone3: { ...baseHightContrast },
    },
    nlu: {
      zone1: { ...baseHightContrast },
      zone2: { ...baseHightContrast },
      zone3: { ...baseHightContrast },
      zone4: { ...baseHightContrast },
    },
    dialog: {
      zone1: { ...baseHightContrast }, // we can use more descriptive naming
      zone2: { ...baseHightContrast },
      zone3: { ...baseHightContrast },
      zone4: { ...baseHightContrast },
      zone5: { ...baseHightContrast },
    },
  },
};
