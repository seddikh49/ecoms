
import Products from "../components/Products"
import TextContent from "../components/TextContent";
import SortSelect from "../components/SortProducts";
import { GoChevronDown } from "react-icons/go";


import axios from "axios";
import HandleCategories from "../components/HandleCategories";

export const metadata = {
    title: 'المنتجات | موقعنا',
};

export default async function Collection() {



    return (
        <>
            <div className="mt-10 flex xl:flex-row lg:flex-row sm:flex-col  xm:flex-col gap-5" dir="rtl">

                <div className="xl:w-50 lg:w-48 sm:w-full xm:w-full px-3 flex  " dir="rtl">
                    <HandleCategories  />
                </div>
                <div dir="rtl" className="w-full p-5">
                    <div className="flex xm:items-start p-3  justify-between items-center px-10 sm:flex-col-reverse xm:flex-col-reverse xl:flex-row lg:flex-row md:flex-row gap-4" dir="rtl">
                        <TextContent text1={'جميع المنتجات'} />
                        <div className="w-60">
                            <SortSelect />
                        </div>
                       
                    </div>
                    <div className="">
                        <Products />
                    </div>
                </div>

            </div>


        </>
    )
}

