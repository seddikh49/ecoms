import { DataTypes } from 'sequelize';
import { sequelize } from '../postgres/postgres.js';

const Product = sequelize.define('Product', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: { msg: "اسم المنتج لا يمكن أن يكون فارغًا" }
    }
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: { msg: "وصف المنتج لا يمكن أن يكون فارغًا" }
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: { msg: "سعر المنتج لا يمكن أن يكون فارغًا" }
    }
  },
  image: {
    type: DataTypes.ARRAY(DataTypes.STRING), // مصفوفة صور
    allowNull: false,
    validate: {
      notEmpty: { msg: "يجب رفع صورة على الأقل" }
    }
  },
  categoryId: {
    type: DataTypes.UUID,
    allowNull: false
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false
  }
}, {
  tableName: 'products',
  timestamps: false
});

export default Product;