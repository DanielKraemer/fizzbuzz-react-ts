/* eslint-disable no-console */

function checkFizzBuzz(type: string, value: number) {
    switch (type) {
        case 'fizz':
            if (value % 3 === 0 && value % 5 !== 0 && value % 15 !== 0) return true;
            return false;
        case 'buzz':
            if (value % 5 === 0 && value % 3 !== 0 && value % 15 !== 0) return true;
            return false;
        case 'fizzBuzz':
            if (value % 15 === 0) return true;
            return false;
        case 'countUp':
            if (value % 3 !== 0 && value % 5 !== 0 && value % 15 !== 0) return true;
            return false;
        default:
            // eslint-disable-next-line no-alert
            alert('The given type is no valid fizz fuzz checker type');
    }
    return false;
}

export default function Reset(props: { parentStateChanger: (arg0: number) => void; }) {
    const buttonHandler = () => {
        props.parentStateChanger(1);
    };

    return (
        <button onClick={buttonHandler} className="inline-block mx-4 bg-red-600 px-4 font-xs transform hover:scale-105 duration-300 motion-reduce:transform-none rounded-md">RESET</button>
    );
}

export function CountUp(props: { parentStateChanger: (arg0: number) => void, value: number }) {
    const buttonHandler = () => {
        const nextPossibleValue = props.value + 1;
        if (checkFizzBuzz('countUp', nextPossibleValue)) {
            props.parentStateChanger(nextPossibleValue);
            return;
        }
        props.parentStateChanger(1);
    };

    return (
        <button onClick={buttonHandler} className="inline-block mx-4 bg-lime-600 px-4 transform hover:scale-105 duration-300 motion-reduce:transform-none rounded-md">+1</button>
    );
}

export function Fizz(props: { parentStateChanger: (arg0: number) => void, value: number }) {
    const buttonHandler = () => {
        const nextPossibleValue = props.value + 1;
        if (checkFizzBuzz('fizz', nextPossibleValue)) {
            props.parentStateChanger(nextPossibleValue);
            return;
        }
        props.parentStateChanger(1);
    };

    return (
        <button onClick={buttonHandler} className="mx-4 bg-stone-600 px-4 transform hover:scale-105 duration-300 motion-reduce:transform-none rounded-md">Fizz!</button>
    );
}

export function Buzz(props: { parentStateChanger: (arg0: number) => void, value: number }) {
    const buttonHandler = () => {
        const nextPossibleValue = props.value + 1;
        if (checkFizzBuzz('buzz', nextPossibleValue)) {
            props.parentStateChanger(nextPossibleValue);
            return;
        }
        props.parentStateChanger(1);
    };

    return (
        <button onClick={buttonHandler} className="mx-4 bg-stone-600 px-4 transform hover:scale-105 duration-300 motion-reduce:transform-none rounded-md">Buzz!</button>
    );
}

export function FizzBuzz(props: { parentStateChanger: (arg0: number) => void, value: number }) {
    const buttonHandler = () => {
        const nextPossibleValue = props.value + 1;
        if (checkFizzBuzz('fizzBuzz', nextPossibleValue)) {
            props.parentStateChanger(nextPossibleValue);
            return;
        }
        props.parentStateChanger(1);
    };

    return (
        <button onClick={buttonHandler} className="mx-4 bg-stone-600 px-4 transform hover:scale-105 duration-300 motion-reduce:transform-none rounded-md">FizzBuzz!</button>
    );
}
