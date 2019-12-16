import React from 'react';
import { storiesOf } from '@storybook/react';

import AddonItem from './AddonItem';

import KnobsSVG from '../../../images/addons/knobs.svg';

storiesOf('Frontpage|screens/AddonScreen/AddonItem', module)
  .add('official', () => (
    <AddonItem
      appearance="official"
      image={<img src={KnobsSVG} alt="knobs" />}
      title="Knobs"
      desc="Interact with component inputs dynamically in the Storybook UI"
      addonUrl="https://google.com"
    />
  ))
  .add('community', () => (
    <AddonItem
      title="Props combinations"
      desc="Given possible values for each prop, renders your component with all combinations of prop values. Useful for finding edge cases or just seeing all component states at once."
      addonUrl="https://google.com"
    />
  ));
