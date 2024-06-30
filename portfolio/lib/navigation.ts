import {createSharedPathnamesNavigation} from 'next-intl/navigation';
import {locales} from '@/locale/i18n';

export const {Link, redirect, usePathname, useRouter} =
    createSharedPathnamesNavigation({locales, /* ... */});