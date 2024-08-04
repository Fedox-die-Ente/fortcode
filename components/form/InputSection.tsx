import React, { ChangeEvent } from 'react';
import { Textarea } from '../ui/textarea';

interface InputSectionProps {
    inputText: string;
    onInputChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const InputSection: React.FC<InputSectionProps> = ({ inputText, onInputChange }) => (
    <div className='space-y-2 pt-12'>
        <p className='text-white font-semibold'>Input</p>
        <Textarea
            className='bg-dark-200 border-dark-300 text-white'
            placeholder="Type your message here."
            value={inputText}
            onChange={onInputChange}
        />
    </div>
);

export default InputSection;
