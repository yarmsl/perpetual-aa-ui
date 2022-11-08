import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import InfoIcon from '@mui/icons-material/Info';
import InsightsIcon from '@mui/icons-material/Insights';
import QuizIcon from '@mui/icons-material/Quiz';

export const menuItems: IMenuListItem[] = [
  {
    pathname: 'create',
    primaryText: 'Create',
    Icon: AddCircleRoundedIcon,
  },
  {
    pathname: 'trade',
    primaryText: 'Trade',
    Icon: InsightsIcon,
  },
  {
    pathname: 'how-it-works',
    primaryText: 'How it works',
    Icon: InfoIcon,
  },
  {
    pathname: 'faq',
    primaryText: 'F.A.Q.',
    Icon: QuizIcon,
  },
];
