import { useQuery } from '@tanstack/react-query';
import { listClients } from '../services/clients';
import { listProjectsWithRelations } from '../services/projects';
import { listTransactions } from '../services/transactions';
import { listTeamMembers } from '../services/teamMembers';
import { listLeads } from '../services/leads';
import { listCards, normalizeCard } from '../services/cards';
import { listPockets } from '../services/pockets';
import { listPackages } from '../services/packages';
import { listAddOns } from '../services/addOns';
import { listCalendarEvents } from '../services/calendarEvents';
import { listContracts } from '../services/contracts';
import { listPromoCodes } from '../services/promoCodes';
import { getProfile } from '../services/profile';
import { listAllTeamPayments } from '../services/teamProjectPayments';
import { listTeamPaymentRecords } from '../services/teamPaymentRecords';
import { listNotifications } from '../services/notifications';

// Limit default fetches to 100 for performance
const DEFAULT_LIMIT = 100;

export const useClientsQuery = () => useQuery({
    queryKey: ['clients'],
    queryFn: () => listClients({ limit: 5000 }),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useProjectsQuery = () => useQuery({
    queryKey: ['projects'],
    queryFn: () => listProjectsWithRelations({ limit: 5000 }),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useTransactionsQuery = () => useQuery({
    queryKey: ['transactions'],
    queryFn: () => listTransactions({ limit: DEFAULT_LIMIT }),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useTeamMembersQuery = () => useQuery({
    queryKey: ['teamMembers'],
    queryFn: () => listTeamMembers({ limit: DEFAULT_LIMIT }),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useLeadsQuery = () => useQuery({
    queryKey: ['leads'],
    queryFn: () => listLeads({ limit: DEFAULT_LIMIT }),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useCardsQuery = () => useQuery({
    queryKey: ['cards'],
    queryFn: () => listCards().then(res => res.map(normalizeCard)),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const usePocketsQuery = () => useQuery({
    queryKey: ['pockets'],
    queryFn: () => listPockets(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const usePackagesQuery = () => useQuery({
    queryKey: ['packages'],
    queryFn: () => listPackages(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useAddOnsQuery = () => useQuery({
    queryKey: ['addOns'],
    queryFn: () => listAddOns(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useCalendarEventsQuery = () => useQuery({
    queryKey: ['calendarEvents'],
    queryFn: () => listCalendarEvents(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

// ─── Auxiliary domain queries ────────────────────────────────────────────
// Migrated from useAuxiliaryData's useEffect+useState pattern.
// React Query is the single source of truth for these too.

export const useContractsQuery = () => useQuery({
    queryKey: ['contracts'],
    queryFn: () => listContracts(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const usePromoCodesQuery = () => useQuery({
    queryKey: ['promoCodes'],
    queryFn: () => listPromoCodes(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useProfileQuery = () => useQuery({
    queryKey: ['profile'],
    queryFn: () => getProfile(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useTeamProjectPaymentsQuery = () => useQuery({
    queryKey: ['teamProjectPayments'],
    queryFn: () => listAllTeamPayments(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useTeamPaymentRecordsQuery = () => useQuery({
    queryKey: ['teamPaymentRecords'],
    queryFn: () => listTeamPaymentRecords(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});

export const useNotificationsQuery = () => useQuery({
    queryKey: ['notifications'],
    queryFn: () => listNotifications(),
    staleTime: 30 * 1000,
    refetchOnWindowFocus: true,
    refetchOnMount: true,
});
