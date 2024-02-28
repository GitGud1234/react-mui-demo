import { Typography } from '@mui/material';

export const MuiTypography = () => {
  return (
    <div>
      <Typography variant="h1">h1 Heading</Typography>
      <Typography variant="h2">h2 Heading</Typography>
      <Typography variant="h3">h3 Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4 Heading
      </Typography>
      <Typography variant="h5">h5 Heading</Typography>
      <Typography variant="h6">h6 Heading</Typography>

      <Typography variant="subtitle1">h6 style: Sub title1</Typography>
      <Typography variant="subtitle2">h6 style: Sub title2</Typography>

      <Typography variant="body1">
        this is default paragraph text at 16px Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Debitis nihil culpa ex commodi. Aut
        laudantium dolores tempora recusandae dolorum repellendus odit quo
        officia, porro minima. Rem ut quas quasi perferendis.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse magnam
        impedit labore amet unde corporis accusamus sed earum eligendi
        recusandae autem odit fuga quis explicabo non, dolore nobis rem beatae.
      </Typography>
    </div>
  );
};
