import React from 'react';

import Catalogue from './components/Catalogue';
import Looks from './components/Looks'

const Builder = () => {
    return (
        <div className="builder">
            <Looks />
            <Catalogue />
        </div>
    );
}

export default Builder;
