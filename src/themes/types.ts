/**
 * 主题系统类型定义
 * 支持 Light/Dark 模式 + 多种强调色组合
 */

/** 基础模式主题配置（light/dark） */
export interface ModeTheme {
  name: string;
  bg: {
    primary: string;
    secondary: string;
    tertiary: string;
    hover: string;
    active: string;
  };
  text: {
    primary: string;
    secondary: string;
    tertiary: string;
    muted: string;
  };
  border: {
    default: string;
    strong: string;
  };
  shadow: {
    sm: string;
    md: string;
    lg: string;
  };
}

/** 强调色主题配置 */
export interface AccentTheme {
  name: string;
  label: {
    'zh-CN': string;
    'en-US': string;
    'ja-JP'?: string;
    'ko-KR'?: string;
  };
  default: string;
  hover: string;
  light: string; // 浅色模式下的背景色
  lightDark: string; // 深色模式下的背景色
}

/** 语义色（固定，不随主题变化） */
export interface SemanticColors {
  success: string;
  warning: string;
  error: string;
}

/** 完整的主题配置 */
export interface ThemeConfig {
  mode: ModeTheme;
  accent: AccentTheme;
  semantic: SemanticColors;
}

/** 支持的主题模式 */
export type ThemeMode = 'light' | 'dark';

/** 支持的强调色名称 */
export type AccentColor =
  | 'emerald' // 宝石绿
  | 'lava' // 熔岩橙
  | 'titanium' // 钛金属
  | 'celadon' // 影青色
  | 'rosegold' // 流金粉
  | 'danxia' // 丹霞紫
  | 'deepsea' // 深海蓝
  | 'cambrian' // 寒武岩灰
  | 'pearl'; // 珍珠白

/** 强调色信息（用于 UI 展示） */
export interface AccentInfo {
  name: AccentColor;
  label: string;
  color: string;
}
