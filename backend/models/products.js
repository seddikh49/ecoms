import { DataTypes } from 'sequelize';
import { sequelize } from '../postgres/postgres.js';


const Product = sequelize.define('Product', {
   id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4, // لإنشاء UUID تلقائي عند إدخال بيانات جديدة
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "اسم المنتج لا يمكن أن يكون فارغًا"
      }
    }
  },

  description: {
    type: DataTypes.TEXT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "وصف المنتج لا يمكن أن يكون فارغًا"
      }
    }
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "سعر المنتج لا يمكن أن يكون فارغًا"
      }
    }
  },
  image: {
    type: DataTypes.ARRAY(DataTypes.STRING), // Assuming it's an array of image URLs
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "يجب رفع صورة على الاقل"
      }
    }
  },
  category: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: {
        msg: "يجب تحديد الفئة"
      }
    }
  },
  date: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'products',
  timestamps: false
});

export default Product;