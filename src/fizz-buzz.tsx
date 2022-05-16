import React from 'react';
import Reset, {
    Buzz, CountUp, Fizz, FizzBuzz as FizzBuzzButton,
} from './buttons';

class FizzBuzz extends React.Component {
    state = {
        count: 1,
    };

    setStateOfParent = (counter: number) => {
        // eslint-disable-next-line no-console
        console.log(counter);
        this.setState((state: {count: number}, props: {counter: number}) => ({
            count: state.count + props.counter,
        }));
        // eslint-disable-next-line no-console
        console.log(this.state.count);
    };

    // eslint-disable-next-line class-methods-use-this
    render() {
        return (
            <>
                <div className="block my-4">
                    <CountUp value={this.state.count} parentStateChanger={this.setStateOfParent}/>
                </div>
                <div className="block my-5">
                    <p className='py-5 px-2 font-extrabold font-xl'>{this.state.count}</p>
                </div>
                <div className="block my-4">
                    <Buzz value={this.state.count} parentStateChanger={this.setStateOfParent}/>
                    <Fizz value={this.state.count} parentStateChanger={this.setStateOfParent}/>
                    <FizzBuzzButton
                        value={this.state.count}
                        parentStateChanger={this.setStateOfParent}
                    />
                </div>
                <div className="block my-4">
                    <Reset parentStateChanger={this.setStateOfParent}/>
                </div>
            </>
        );
    }
}

export default FizzBuzz;
