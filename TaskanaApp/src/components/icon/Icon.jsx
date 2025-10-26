import InboxIcon from './icons/inboxIcon';
import LoadingIcon from './icons/LoadingIcon';
import MoonIcon from './icons/moonIcon';
import PlusIcon from './icons/plusIcon';
import SunIcon from './icons/sunIcon';

const iconMap = {
  inbox: InboxIcon,
  moon: MoonIcon,
  sun: SunIcon,
  plus: PlusIcon,
  loading: LoadingIcon,
};

const Icon = ({ icon, ...props }) => {
  const IconComponent = iconMap[icon];

  if (!IconComponent) {
    return null;
  }

  return <IconComponent {...props} />;
};

export default Icon;
