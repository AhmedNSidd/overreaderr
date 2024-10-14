import { AppShellHeader, AppShellMain, AppShell as Shell } from '@mantine/core';
import Image from 'next/image';
import { PropsWithChildren } from 'react';

type Props = PropsWithChildren;

export default function AppShell({ children }: Props) {
  return (
    <Shell header={{ height: 64 }} padding="md">
      <AppShellHeader>
        <Image src="/logo.svg" alt="Logo" width={64} height={64} />
      </AppShellHeader>
      <AppShellMain>{children}</AppShellMain>
    </Shell>
  );
}
