import React from 'react';
import { render } from '@testing-library/react';
import GlobalStyle from './GlobalStyle';
import Quote from './Quote';
import HeroSection from './HeroSection';
import DesignSection from './DesignSection';
import DisplaySection from './DisplaySection';
import ProcessorSection from './ProcessorSection';
import BatterySection from './BatterySection';
import ColorContextProvider from './ColorContextProvider';
import ColorSection from './ColorSection';
import CamaraSection from './CamaraSection';
import PricingSection from './PricingSection';

describe('App components', () => {
    it('renders GlobalStyle', () => {
        render(<GlobalStyle />);
    });

    it('renders Quote', () => {
        render(<Quote />);
    });

    it('renders HeroSection', () => {
        render(<HeroSection />);
    });

    it('renders DesignSection', () => {
        render(<DesignSection />);
    });

    it('renders DisplaySection', () => {
        render(<DisplaySection />);
    });

    it('renders ProcessorSection', () => {
        render(<ProcessorSection />);
    });

    it('renders BatterySection', () => {
        render(<BatterySection />);
    });

    it('renders ColorSection', () => {
        render(
            <ColorContextProvider>
                <ColorSection />
            </ColorContextProvider>
        );
    });

    it('renders CamaraSection', () => {
        render(
            <ColorContextProvider>
                <CamaraSection />
            </ColorContextProvider>
        );
    });

    it('renders PricingSection', () => {
        render(
            <ColorContextProvider>
                <PricingSection />
            </ColorContextProvider>
        );
    });
});