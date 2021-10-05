import React, { useState } from 'react';

const TipCalculator = () => {
    const [tipPrecentage, setTipPercentage ] = useState(0);
    const [ billAmount, setBillAmount ] = useState(0);
    const [ totalGuests, setTotalGuests ] = useState(1);
    const [ tipAmount, setTipAmount ] = useState(0);
    const [ sharedBillAmount, setSharedBillAmount ] = useState(0);
    const [ total, setTotal ] = useState(0);

    const calculate = (e) => {
        e.preventDefault();
        const formValid = +billAmount > 0 && +tipPrecentage > 0;
        if (!formValid) {
            return;
        }
        const tipAmount = +billAmount *(+tipPrecentage / 100);
        const sharedTotal = (+billAmount * (1 + tipPrecentage / 100) / totalGuests);
        const total = +billAmount * (1 + tipPrecentage / 100);
        setSharedBillAmount(sharedTotal)
        setTipAmount(tipAmount);
        setTotal(total); 
    };

    return (
        <div className="container">
            <form className="tip-form" onSubmit={calculate}>
            <div>
                <label>Bill Total</label>
                <input value={billAmount} onChange={(e) => setBillAmount(e.target.value)} />
            </div>
            <div>
                <label>Tip Precentage</label>
                <input value={tipPrecentage} onChange={(e) => setTipPercentage(e.target.value)} />
            </div>
            <div>
                <label>Split the Tip</label>
                <input value={totalGuests} onChange={(e) => setTotalGuests(e.target.value)} />
            </div>
            <button type="submit">Calculate Tip</button>

            </form>
            <div>
                <label>Amount due</label>
                <p>Tip amount: ${tipAmount.toFixed(2)}</p>
                <p>Bill Total with tip: ${total.toFixed(2)}</p>
                <p>The bill split between {totalGuests} guest is ${sharedBillAmount.toFixed(2)}</p>
            </div>
        </div>
    )
};

export default TipCalculator;