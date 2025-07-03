import { DataTypes } from 'sequelize';
import { sequelize } from '../postgres/postgres.js';

const Category = sequelize.define('Category', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,  // توليد id تلقائي من نوع UUID
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true, // لا يمكن تكرار نفس اسم الفئة
    validate: {
      notEmpty: {
        msg: "اسم الفئة لا يمكن أن يكون فارغًا"
      }
    }
  }
}, {
  tableName: 'categories',
  timestamps: false  // إذا لا تحتاج createdAt و updatedAt
});

export default Category;