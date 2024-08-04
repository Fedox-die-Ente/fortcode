import React from 'react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select";

interface ModeSelectorProps {
    onModeChange: (value: string) => void;
}

const ModeSelector: React.FC<ModeSelectorProps> = ({ onModeChange }) => (
    <div className='space-y-2 pt-12 pb-12'>
        <p className='text-white font-semibold'>Mode</p>
        <Select onValueChange={onModeChange} defaultValue="encode">
            <SelectTrigger className="w-full bg-dark-200 border-dark-300 text-white focus:border-none focus:ring-0">
                <SelectValue className='text-white' placeholder="Select mode" />
            </SelectTrigger>
            <SelectContent className='bg-dark-200 border-dark-300'>
                <SelectGroup>
                    <SelectLabel className='text-white'>Which mode do you prefer?</SelectLabel>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="encode">Encode</SelectItem>
                    <SelectItem className='text-white focus:text-white hover:bg-dark-300 focus:bg-dark-300' value="decode">Decode</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    </div>
);

export default ModeSelector;
