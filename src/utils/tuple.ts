type Lit = string | number | boolean | undefined | null | void;
const tuple = <T extends Lit[]>(...args: T) => args;

export default tuple;