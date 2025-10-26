import NotebookIllustration from './illustrations/NotebookIllustration';
import WelldoneIllustration from './illustrations/WelldoneIllustration';

const illustrationMap = {
  taskbook: NotebookIllustration,
  done: WelldoneIllustration,
};

const Illustration = ({ illustration, ...props }) => {
  const Component = illustrationMap[illustration];

  return <Component {...props} />;
};

export default Illustration;
