import { LogoLink } from '.';

export default {
  title: 'LogoLink',
  component: LogoLink,
  args: {
    children: 'LogoLink',
    srcImg: 'assets/images/logo.svg',
    link: 'https://localhost',
  },
};

export const ImageOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

export const TextOnly = (args) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  );
};

TextOnly.args = {
  srcImg: '',
};
