'use client'
import React, { useState, ChangeEvent } from 'react';

import { encode, decode } from '../lib/encoder';
import Header from '../components/form/Header';
import InputSection from '../components/form/InputSection';
import OutputSection from '../components/form/OutputSection';
import ModeSelector from '../components/form/ModeSelector';

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [inputText, setInputText] = useState<string>("");
    const [outputText, setOutputText] = useState<string>("");
    const [mode, setMode] = useState<string>("encode");

    const handleInputChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
        const text = event.target.value;
        setInputText(text);
        if (mode === "encode") {
            setOutputText(encode(text));
        } else {
            setOutputText(decode(text));
        }
    };

    const handleModeChange = (value: string) => {
        setMode(value);
        if (value === "encode") {
            setOutputText(encode(inputText));
        } else {
            setOutputText(decode(inputText));
        }
    };

    const handleCopy = () => {
        navigator.clipboard.writeText(outputText);
    };

    return (
        <main className='bg-dark-200 w-full h-full flex flex-col'>
            <Header />
            <div className='flex-grow flex items-end justify-center p-4 rounded-lg'>
                <div className='cool-bg p-4 w-full max-w-4xl rounded-2xl border border-dark-300'>
                    <InputSection inputText={inputText} onInputChange={handleInputChange} />
                    <OutputSection outputText={outputText} onCopy={handleCopy} />
                    <ModeSelector onModeChange={handleModeChange} />
                </div>
            </div>
        </main>
    );
};

export default Layout;
