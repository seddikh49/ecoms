import Category from './category.js';
import Product from './Product.js';

// تعريف العلاقة
Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });