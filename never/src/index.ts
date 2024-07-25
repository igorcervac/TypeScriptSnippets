function fn(a: string | number | boolean): boolean | never {
    if (typeof a === 'string'){
        return true;
    }

    if (typeof a === 'number'){
        return false;
    }

    throw new Error('Invalid type');
}

fn('test');
fn(100);
//fn(false)