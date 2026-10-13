import React from 'react';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { Packages } from './Packages';

vi.mock('../../services/profile', () => ({
  upsertProfile: vi.fn(() => new Promise(() => {})),
  updateProfile: vi.fn(() => new Promise(() => {})),
}));

describe('Packages catalog layout', () => {
  it('renders package and add-on sections separately with add-ons below packages', () => {
    render(
      <Packages
        packages={[
          {
            id: 'pkg-1',
            name: 'Paket Premium',
            price: 5000000,
            category: 'Wedding',
            region: 'vendor',
            physicalItems: [],
            digitalItems: ['Album Digital'],
            processingTime: '7 hari',
            photographers: '2 fotografer',
          },
        ]}
        setPackages={vi.fn()}
        addOns={[
          { id: 'addon-1', name: 'Album', price: 900000, region: 'vendor' },
        ]}
        setAddOns={vi.fn()}
        projects={[]}
        profile={{ packageCategories: ['Wedding'] } as any}
        setProfile={vi.fn()}
        showNotification={vi.fn()}
        initialAction={null}
        setInitialAction={vi.fn()}
      />,
    );

    const packageHeading = screen.getByRole('heading', { name: 'Paket' });
    const addOnHeading = screen.getByRole('heading', { name: 'Add-On' });

    expect(packageHeading).toBeTruthy();
    expect(addOnHeading).toBeTruthy();
    expect(packageHeading.compareDocumentPosition(addOnHeading) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
  });

  it('updates package order immediately while the server save is still pending', () => {
    render(
      <Packages
        packages={[
          {
            id: 'pkg-1',
            name: 'Paket Pertama',
            price: 5000000,
            category: 'Wedding',
            region: 'vendor',
            physicalItems: [],
            digitalItems: [],
          },
          {
            id: 'pkg-2',
            name: 'Paket Kedua',
            price: 7000000,
            category: 'Wedding',
            region: 'vendor',
            physicalItems: [],
            digitalItems: [],
          },
        ]}
        setPackages={vi.fn()}
        addOns={[]}
        setAddOns={vi.fn()}
        projects={[]}
        profile={{
          publicPageConfig: { packageOrder: ['pkg-1', 'pkg-2'] },
        } as any}
        setProfile={vi.fn()}
        showNotification={vi.fn()}
        initialAction={null}
        setInitialAction={vi.fn()}
      />,
    );

    const firstPackageCard = screen.getByText('Paket Pertama').closest('.group');
    expect(firstPackageCard).toBeTruthy();
    fireEvent.click(within(firstPackageCard as HTMLElement).getByRole('button', { name: 'Pindah ke Bawah' }));

    expect(within(firstPackageCard as HTMLElement).getByText('#2')).toBeTruthy();
    expect(screen.getByText('Paket Kedua').closest('.group')?.textContent).toContain('#1');
  });
});
