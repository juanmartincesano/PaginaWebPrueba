const main1 = (req, res, next) => {
    res.send('1')
};
const main2 = (req, res, next) => {
    res.send('2')
};
const main3 = (req, res, next) => {
    res.send('3')
};
const main4 = (req, res, next) => {
    res.send('4')
};

module.exports = {
    main1,
    main2,
    main3,
    main4
}