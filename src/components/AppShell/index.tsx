import { AppShellHeader, AppShellMain, AppShell as Shell } from '@mantine/core';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function AppShell({ children }: Props) {
  return (
    <Shell header={{ height: 60 }} padding="md">
      <AppShellHeader>
        <Image src="/logo.svg" alt="Logo" width={64} height={64} />
      </AppShellHeader>
      da
      <AppShellMain>{children}</AppShellMain>
    </Shell>
  );
}
