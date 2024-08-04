import React from 'react';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

interface OutputSectionProps {
    outputText: string;
    onCopy: () => void;
}

const OutputSection: React.FC<OutputSectionProps> = ({ outputText, onCopy }) => (
    <div className='space-y-2 pt-12'>
        <p className='text-white font-semibold'>Output</p>
        <Textarea
            className='bg-dark-200 border-dark-300 text-white'
            value={outputText}
            readOnly
        />
        <Button onClick={onCopy} className='bg-gradient-to-r from-primary-light to-primary-dark w-full hover:tracking-widest transition-all'>
            Copy Output
        </Button>
    </div>
);

export default OutputSection;
