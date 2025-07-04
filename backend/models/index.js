import Category from './category.js';
import Product from './products.js';

// تعريف العلاقات
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

export { Category, Product };