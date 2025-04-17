'use client';

import Separator from '@node-core/ui-components/Common/Separator';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import Link from '@/components/Link';
import { BASE_CHANGELOG_URL } from '@/next.constants.mjs';
import { getNodeApiLink } from '@/util/getNodeApiLink';

import styles from './index.module.css';

type MinorReleasesTableProps = {
  releases: Array<string>;
};

export const MinorReleasesTable: FC<MinorReleasesTableProps> = ({
  releases,
}) => {
  const t = useTranslations('components.minorReleasesTable');

  return (
    <table>
      <thead>
        <tr>
          <th>{t('version')}</th>
          <th>{t('links')}</th>
        </tr>
      </thead>
      <tbody>
        {releases.map(release => (
          <tr key={release}>
            <td>v{release}</td>
            <td>
              <div className={styles.links}>
                <Link
                  kind="neutral"
                  href={`https://nodejs.org/download/release/v${release}/`}
                >
                  {t('actions.release')}
                </Link>
                <Separator orientation="vertical" />
                <Link kind="neutral" href={`${BASE_CHANGELOG_URL}${release}`}>
                  {t('actions.changelog')}
                </Link>
                <Separator orientation="vertical" />
                <Link kind="neutral" href={getNodeApiLink(`v${release}`)}>
                  {t('actions.docs')}
                </Link>
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
