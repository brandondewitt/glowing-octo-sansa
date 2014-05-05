
/*
 * GET product page.
 */

exports.list = function(req, res){
  res.render('product', { title: 'Product Page' });
};