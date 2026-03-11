import { ButtonLink, SectionTitle, Text } from '@/shared/components';
import { SOCIALS, texts } from '@/shared/constants';
import { getItemKey } from '@/shared/helpers';

import { SocialLink } from '../../ui/SocialLink/SocialLink';

import styles from './Footer.module.scss';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__content}>
        <SectionTitle className={styles.footer__title} color="pink">
          ГДЕ КУПИТЬ
        </SectionTitle>
        <div className={styles.footer__text}>
          <Text>{texts.FOOTER_FIRST_PARAGRAPH}</Text>
          <Text color="pink">{texts.FOOTER_SECOND_PARAGRAPH}</Text>
        </div>
        <div className={styles.footer__links}>
          <ButtonLink className={styles.footer__link} link="#">
            КУПИТЬ ОНЛАЙН СМАРТФОН&nbsp;ИЗ&nbsp;СЕРИИ&nbsp;Mi&nbsp;10T
          </ButtonLink>
          <ButtonLink className={styles.footer__link} link="#">
            КУПИТЬ ОНЛАЙН ВЕЩИ&nbsp;ИЗ&nbsp;КАПСУЛЬНОЙ&nbsp;КОЛЛЕКЦИИ
          </ButtonLink>
        </div>
        <ul className={styles.footer__socialLinks}>
          {!!SOCIALS.length &&
            SOCIALS.map(({ label, link, icon: Icon }, index) => (
              <li key={getItemKey(label, index)}>
                <SocialLink link={link} className={styles.footer__socialLink}>
                  <Icon />
                </SocialLink>
              </li>
            ))}
        </ul>
        <Text size="sm" className={styles.footer__copy}>
          &copy;&nbsp;2020 Xiaomi &amp;&nbsp;AYT&Lambda;&Omicron; Creative. Все
          права защищены
        </Text>
      </div>
    </footer>
  );
};
