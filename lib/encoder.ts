                            //         _______ _______ ______ _   _ _______ _____ ____  _   _
//      /\|__   __|__   __|  ____| \ | |__   __|_   _/ __ \| \ | |
//     /  \  | |     | |  | |__  |  \| |  | |    | || |  | |  \| |
//    / /\ \ | |     | |  |  __| | . ` |  | |    | || |  | | . ` |
//   / ____ \| |     | |  | |____| |\  |  | |   _| || |__| | |\  |
//  /_/    \_\_|     |_|  |______|_| \_|  |_|  |_____\____/|_| \_|

// THIS CODE IS SHIT. ITS NOT SAFE. DONT USE IT FOR BIG PROTECTION SYSTEMS!!!
// I DONT TAKE RESPONSIBILITY FOR ANYTHING THAT HAPPENS WHEN YOU USE THIS CODE.
// YOU HAVE BEEN WARNED.

const languages = [
    'Fortnite', 'FortniteRP', 'BattleBus', 'VBucks', 'SkullTrooper', 'ChugJug',
    'Noob', 'Dance', 'FN', 'Pickaxe', 'V-Bucks', 'Epic', 'Legendary', 'Fedox', 'GameOver'
];

const encode = (text: string, language: string = 'fortnite'): string => {
    const output: string[] = [];
    for (const letter of text) {
        const encoded: string[] = [];
        const charCode = letter.charCodeAt(0);
        const temporary = charCode.toString().split('');
        for (const code of temporary) {
            const index = parseInt(code);
            if (index >= 0 && index < languages.length) {
                encoded.push(languages[index]);
            } else {
                // Handle invalid index
                encoded.push('?');
            }
        }
        output.push(encoded.join(' '));
    }
    return output.join('. ');
};

const decode = (text: string, language: string = 'fortnite'): string => {
    const output: string[] = [];
    const encoded = text.split('. ');
    for (const char of encoded) {
        const codes = char.split(' ');
        let characterCode = 0;
        for (const code of codes) {
            const index = languages.indexOf(code);
            if (index !== -1) {
                characterCode = characterCode * 10 + index;
            } else {
                characterCode = 0;
            }
        }
        output.push(String.fromCharCode(characterCode));
    }
    return output.join('');
};

export {
    encode,
    decode
}
