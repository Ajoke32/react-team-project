import React, { useState } from 'react';
import './ColorContrastChecker.css';

interface ColorContrastProps {
    foregroundColor: string;
    backgroundColor: string;
    contrast: string;
    onContrastChange: (contrastValue: string) => void;

    contrastOptions: string[];
}

const ColorContrastChecker: React.FC<ColorContrastProps> = ({ foregroundColor, backgroundColor,onContrastChange, contrastOptions}) => {
    const [contrast, setContrast] = useState<string>('');

    const getContrastRatio = (color1: string, color2: string):string => {
        const getLuminance = (color: string) => {
            const rgbaMatches = color.match(/\d+/g);
            if (!rgbaMatches) {
                return 0;
            }

            const rgba = rgbaMatches.map((channel: string) => parseInt(channel, 10));
            const [r, g, b] = rgba.slice(0, 3).map((channel: number) => {
                let value = channel / 255;
                return value <= 0.03928
                    ? value / 12.92
                    : Math.pow((value + 0.055) / 1.055, 2.4);
            });

            return 0.2126 * r + 0.7152 * g + 0.0722 * b;
        };

        const luminance1 = getLuminance(color1);
        const luminance2 = getLuminance(color2);
        const contrastRatio = (Math.max(luminance1, luminance2) + 0.05) /
            (Math.min(luminance1, luminance2) + 0.05);

        return contrastRatio.toFixed(2);
    };

    const handleContrastChange = (contrastValue: string) => {
        console.log('Hello!');
        setContrast(contrastValue);
    };

    const contrastRatio = getContrastRatio(foregroundColor, backgroundColor);

    const getContrastText = (contrast: number): string => {
        // Функція для визначення текстуального опису контрастності
        const highContrastThreshold = 7;
        const mediumContrastThreshold = 4.5;

        if (contrast >= highContrastThreshold) {
            return 'Високий рівень контрастності';
        } else if (contrast >= mediumContrastThreshold) {
            return 'Середній рівень контрастності';
        } else {
            return 'Низький рівень контрастності';
        }
    };

    const contrastText = getContrastText(Number(contrastRatio));

    return (
        <div className="contrast-selector">
            <select
                id="contrastSelect"
                value={contrast}
                onChange={(e) => handleContrastChange(e.target.value)}>
                {contrastOptions.map((option) => (
                    <option key={option} value={option}>
                        {option.charAt(0).toUpperCase() + option.slice(1)} Contrast
                    </option>
                ))}
            </select>
        </div>
    );
};

export default ColorContrastChecker;
