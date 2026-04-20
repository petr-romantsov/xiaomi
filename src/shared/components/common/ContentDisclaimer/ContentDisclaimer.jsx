import clsx from 'clsx';

import { texts } from '../../../constants';
import { Text } from '../../ui/Text/Text';

import styles from './ContemtDisclaimer.module.scss';

export const ContentDisclaimer = ({ className = '' }) => {
  return (
    <Text
      size="xs"
      color="pink"
      className={clsx(className, styles.contentDisclaimer)}
    >
      {texts.CONTENT_DISCLAIMER}
    </Text>
  );
};
