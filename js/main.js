console.log(`======= Javascript Function Task =======`);


/*
عكس ترتيب العناصر في المصفوفة 
الوصف:
اكتب دالة تستقبل مصفوفة من العناصر (سواء أرقام أو نصوص) وتُرجع مصفوفة جديدة تحتوي على نفس العناصر ولكن بترتيب عكسي.

المطلوب:
استخدم حلقة for للتكرار على المصفوفة.
أضف كل عنصر إلى بداية مصفوفة جديدة باستخدام unshift.
لا تستخدم المصفوفة الأصلية مباشرة.
*/

function contraryArray(numbered) {
    let contraryArray = [];
    for (let i = 0; i < numbered.length; i++) {
        contraryArray.unshift(numbered[i]);
    }
    return contraryArray;
}
let mainArray = [1, 2, 3, 4, 5];
let contrary = contraryArray(mainArray);
console.log(contrary); 



console.log(`======= Javascript Function Task =======`);

/*
حذف العناصر المتكررة في المصفوفة 
الوصف:
اكتب دالة تستقبل مصفوفة من الأرقام أو النصوص وتُرجع مصفوفة جديدة تحتوي على العناصر الفريدة فقط (أي حذف العناصر المكررة).

المطلوب:
استخدم حلقة for للتكرار على المصفوفة.
استخدم شرط if للتحقق مما إذا كان العنصر غير موجود في المصفوفة الجديدة.
أضف العناصر الفريدة فقط إلى المصفوفة الجديدة.
*/

function duplicater(num) {
    let emptyArray = [];
    for (let i = 0; i < num.length; i++){
        if (emptyArray.includes(num[i])){
            emptyArray.push(num[i]);
        }
    }
    return emptyArray;

}
let newArray = [4, 5, 6, 8, 4, 2, 5, 1];
let empty = duplicater(newArray);
console.log(empty.sort());


/*
التحقق من وجود عنصر معين في المصفوفة (مستوى صعب)
الوصف:
اكتب دالة تستقبل مصفوفة وعنصراً محدداً، وتتحقق مما إذا كان العنصر موجوداً في المصفوفة أم لا. تُرجع true إذا كان العنصر موجوداً وfalse إذا لم يكن موجوداً.

المطلوب:
استخدم حلقة for للتكرار على المصفوفة.
استخدم شرط if للمقارنة بين العنصر المدخل وعناصر المصفوفة.
أرجع true بمجرد العثور على العنصر وإلا أرجع false.
*/


function checkedElement(sum, element){
    for( let i = 0; i < sum.lenght; i++){
        if(sum[i] === element){
            return true;
        }
    }
    return false
}
