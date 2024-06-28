import FadeIn from "@/components/FadeIn";
import { useTranslations } from 'next-intl';

export default function About() {
    const t = useTranslations('about');

    return (
        <section className="flex flex-col">
            <FadeIn as={"h2"} className="md:text-5xl text-4xl mb-8 font-bold uppercase">
                {t('title1')} <span className="text-primary drop-shadow-xl">{t('title2')}</span>
            </FadeIn>

            <FadeIn className={"space-y-4"} delay={0.1}>
                <p>{t('paragraph1')}</p>
                <p>{t('paragraph2')}</p>
                <p>{t('paragraph3')}</p>
            </FadeIn>
        </section>
    );
}
