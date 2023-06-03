import LinkAndCopy from '@/components/common/LinkAndCopy';
import { getFee, shortenString } from '@/components/common/utils';
import React from 'react';

export interface ERC20Transfer {
    key: number;
    address: string | null;
    from: string;
    to: string;
    tokenId: string;
    symbol: string;
    decimals: number | null;
    name: string | null;
    sender: string;
}

function ERC20Transfers({ key, address, symbol, from, to, tokenId, decimals, name, sender }: ERC20Transfer) {
    if (sender && (sender.toLowerCase() == to.toLowerCase() || sender.toLowerCase() == from.toLowerCase())) {
        return (
            <div key={key} className="flex items-center">
                From: <LinkAndCopy link={null} text={shortenString(from)} copyText={from} />
                To: <LinkAndCopy link={null} text={shortenString(to)} copyText={to} />{' '}
                
                    <div>
                        TokenId:&nbsp;
                        {parseInt(tokenId) }{' '}
                        {symbol ? symbol : ""}{' '}
                        ({name ? name: ""})
                    </div>
            </div>
        );
    } else return <></>;
}

export default ERC20Transfers;