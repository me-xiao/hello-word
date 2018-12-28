//格式化参数
const formatParams = str=>{
    const result = str.replace(/(?<=([\{]))\S{1}/ig, '\n  $&')
    .replace(/(?<=([,]))[\s]*(?=(["]))/ig, '\n  ')
    .replace(/[\s\S](?=([\}]))/ig, '$&\n')
    .replace(/^\s+|\s+$/ig, '');
    return result;
};
export default formatParams;

// module.exports = ajax;