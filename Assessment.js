'use strict'
let customers = [
    {'id'    : 1,
     'f_name':'Abby',
     'l_name':'Thomas',
     'gender':'M',
     'married':true,
     'age'    : 32,
     'expense':500,
     'purchased':['Shampoo','Toys','Book']
    },

    {'id'    : 2,
    'f_name':'Jerry',
    'l_name':'Tom',
    'gender':'M',
    'married':true,
    'age'    : 64,
    'expense':100,
    'purchased':['Stick','Blade','Mic']},
     
    {'id'    : 3,
     'f_name':'Diana',
     'l_name':'Cherry',
     'gender':'F',
     'married':true,
     'age'    : 22,
     'expense':1500,
     'purchased':['Lipstick','NailPolis','Bag','Book']
    },
    {'id'    : 4,
     'f_name':'Dev',
     'l_name':'Currian',
     'gender':'M',
     'married':true,
     'age'    : 82,
     'expense':90,
     'purchased':['Book']
    },
    {'id'    : 5,
     'f_name':'Maria',
     'l_name':'Ghomes',
     'gender':'F',
     'married':false,
     'age'    : 7,
     'expense':300,
     'purchased':['Toys']
    }
   ]

   // 1) What items senior citizans have purchased >60
   customers.forEach(function(citizan){
    if(citizan.age>60){
           // console.log(`the following customers ${citizan.f_name} ${citizan.l_name} purchased things are ${citizan.purchased}`);
    }

   });

   // 2) add full_name to existing list where married Female its Mrs, 
   // unmarried female its Ms., for all male its Mr.
//example : 
//'full_name': Ms.Maria Gomes

customers.forEach(function(member){
    let title;
    if(member.gender === 'M' & member.married == true){
        title ='Mr.'
    } else if(member.gender === 'F' & member.married === true){
        title = 'Mrs.'
    } else {
        title = 'Ms.'
    }
    //console.log(`${title} ${member.f_name} ${member.l_name}`)
})


// 3) check for young customer, the out put will be true of false, 
//true if any customer found with age < 10 else it should be false

const CustomerData=customers.map((youngCustomer=> youngCustomer.age<10))
console.log(CustomerData[3])


   
    


