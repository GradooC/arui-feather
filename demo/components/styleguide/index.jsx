/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

/* eslint import/first: 0 */
/* eslint import/no-extraneous-dependencies: [2, {"devDependencies": true}] */
import '../../../src/polyfills';

import StyleGuide from 'react-styleguidist/lib/rsg-components/StyleGuide';
import processSections from 'react-styleguidist/lib/utils/processSections';
import { getPlayground, isPlayground } from '../playground-with-share-example-button/utils';

import '../../../src/main.css';
import './demo-styles.css';

export default function (props) {
    if (isPlayground()) {
        /* eslint global-require: 0 */
        /* eslint import/no-webpack-loader-syntax: 0 */
        /* eslint import/no-unresolved: 0 */
        const styleguide = require('!!react-styleguidist/loaders/styleguide-loader!react-styleguidist/lib/index.js');
        const sections = getPlayground(processSections(styleguide.sections));
        /* eslint react/prop-types: 0 */
        return (
            <StyleGuide { ...props } sections={ sections } isolatedComponent={ true } />
        );
    }

    return (
        <StyleGuide { ...props } />
    );
}