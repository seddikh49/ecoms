// import { orderValidationSchema } from "../validator/validate.js";
import Order from "../models/orders.js";

const addOrder = async (req, res) => {

   console.log(req.headers)
    try {
        const { fullName, phone, wilaya, commune, productName, quantity, status, notification } = req.body;
        // console.log(fullName, phone, wilaya, commune, productName, quantity, status, notification )
        const orderData = await Order.findOne({
            where: { phone }
        });
        if (orderData) {
            const msg = {}
            msg.message = "رقم الهاتف هذا تم الطلب به مسبقا "
            return res.json({ success: false, msg: msg });
        }
        const order = await Order.create({
            fullName,
            phone,
            wilaya,
            commune,
            productName,
            quantity,
            status,
            notification,
            // لو عندك حقل التاريخ وتبي تحط التاريخ الحالي تلقائياً، Sequelize يتعامل معه لو معرفته defaultValue
        });
        console.log({"===>" : order})
        console.log("message")
        res.json({ success: true, msg: "تم طلب المنتج بنجاح " });
    } catch (error) {
        res.json({ success: false, msg: error })
    }
};



const deleteOrder = async (req, res) => {
    try {
        const { id } = req.params
        console.log(id)
        const deletedOrder = await Order.destroy({
            where: {
                id: id
            }
        })

        if (deletedOrder) {
            return res.json({ success: true, msg: 'لقد تم حذف الطلب' })
        } else {
            res.json({ success: false, msg: "لا يمكنك هذا هذا الطلب" })
        }

    } catch (error) {
        console.log(error)
    }
}



const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll(); // Sequelize
        res.json({ success: true, orders });  // جمع البيانات وإرسالها
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'فشل في جلب الطلبات' });
    }
};






const updateOrder = async (req, res) => {
    try {
        const { id } = req.params;
        const { status, notification } = req.body;

        // const updatedOrder = await Order.findByIdAndUpdate(
        //     id, 
        //     {
        //         status

        //     },
        // );
        const updatedOrder = await Order.update(
            { status },                 // القيم الجديدة
            { where: { id } }           // شرط التحديث
        );

        if (updatedOrder) {
            return res.json({ success: true, msg: 'تم تحديث الطلب بنجاح', status: status });
        } else {
            return res.json({ success: false, msg: 'لا يمكن تحديث هذا الطلب' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, msg: 'حدث خطأ أثناء التحديث' });
    }
};



const updateAllNotifications = async (req, res) => {
    try {
        // تحديث كل السجلات وجعل notification = 0
        const [affectedRows] = await Order.update(
            { notification: 0 },     // القيم الجديدة
            { where: {} }            // بدون شروط = كل السجلات
        );

        if (affectedRows > 0) {
            res.json({ success: true, msg: "تم تحديث جميع الإشعارات بنجاح" });
        } else {
            res.json({ success: false, msg: "لا توجد طلبات لتحديثها" });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, msg: "حدث خطأ أثناء التحديث" });
    }
};
export { addOrder, getAllOrders, deleteOrder, updateOrder, updateAllNotifications };