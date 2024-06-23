// Bonett, D., & Wright, T. (2014). Formula (2)
function n1() {
    //arguments
    k = document.ss_reg_dp.k.value;
    R2 = document.ss_reg_dp.R2.value;
    w = document.ss_reg_dp.w.value;
    //returns
    n = Math.ceil(16* R2* Math.pow(1 - R2, 2)* Math.pow(1.96 / w, 2) + 2 + 1*k)
    //return
    document.ss_reg_dp.n.value = n;
    return;
}