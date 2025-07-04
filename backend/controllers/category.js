import { Category } from '../models/index.js';
// إضافة فئة جديدة
export const addCategory = async (req, res) => {
  try {
    const { name } = req.body;
    console.log(req.body)
    // التأكد من وجود اسم الفئة
    if (!name) {
      return res.status(400).json({ message: "اسم الفئة مطلوب" });
    }

    // التحقق من عدم تكرار الفئة
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory) {
      return res.status(409).json({ message: "هذه الفئة موجودة بالفعل" });
    }

    const category = await Category.create({ name });
    return res.status(201).json({ success: true, category });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء إضافة الفئة" });
  }
};


// جلب جميع الفئات
export const getAllCategories = async (req, res) => {
  
  try {
    const categories = await Category.findAll();
    return res.status(200).json({ success: true, categories })
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "حدث خطأ أثناء جلب الفئات" });
  }
};


// حذف فئة
export const deleteCategory = async (req, res) => {
  try {
    
    const { id } = req.params;
console.log(id)
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "الفئة غير موجودة" });
    }

    await category.destroy();
    return res.json({ success: true, msg: "تم حذف الفئة" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء حذف الفئة" });
  }
};


// تعديل فئة
export const updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ message: "الفئة غير موجودة" });
    }

    if (!name) {
      return res.status(400).json({ message: "اسم الفئة مطلوب" });
    }

    // التحقق من عدم وجود فئة أخرى بنفس الاسم
    const existingCategory = await Category.findOne({ where: { name } });
    if (existingCategory && existingCategory.id !== id) {
      return res.status(409).json({ message: "هناك فئة أخرى بنفس الاسم" });
    }

    category.name = name;
    await category.save();

    res.json(category);

  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "حدث خطأ أثناء تعديل الفئة" });
  }
};