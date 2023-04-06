import { TranslateResult } from 'vue-i18n'; // Import the TranslateResult type from vue-i18n

declare module 'vue/types/vue' {
  interface Vue {
    t: (key: string, ...params: any[]) => TranslateResult;
  }
}
