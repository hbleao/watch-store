export default function routes(this: any) {
  this.urlPrefix = 'http://teste';
  this.namespace = 'api';

  this.resource('product');
  this.get('products', async (schema: any) => {
    return schema.products.all().models
  });
}
