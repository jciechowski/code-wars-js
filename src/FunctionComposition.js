function Composer() {

}

Composer.prototype.compose = (f, g) => {
    return () => {
        return f.call(null, g.apply(null, arguments));
    };
};