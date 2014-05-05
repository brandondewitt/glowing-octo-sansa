
/*
 * GET product page.
 */

exports.index = function(req, res){
  res.render('product', { title: 'Product Page' });
};