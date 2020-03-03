class Worker{
    firstName;
    secondName;
    rate;
    days;
    constructor(firstName,secondName,rate,days){
        this.firstName=firstName
        this.secondName=secondName
        this.rate=rate
        this.days=days
    }
    getSalary(){
        return this.rate*this.days
    }
}

const worker1 = new Worker('Ivan', 'Ivanov', 10, 31);
// console.log(worker1.firstName); 
// console.log(worker1.secondName); 
// console.log(worker1.rate); 
// console.log(worker1.days);
// console.log(worker1.getSalary());  

const worker2 = new Worker('Anna-Mariya', 'Perchak', 15, 27);

console.log(`First worker`)
console.log(worker1)
console.log(`Second worker`)
console.log(worker2)
console.log(`The sum of 2 salary ${worker1.getSalary()+worker2.getSalary()}`)


class MyString{
    reverse(str){
        var splitString = str.split("")
        var reverseArray = splitString.reverse()
        var joinArray = reverseArray.join("")
        return joinArray
    }
    ucFirst(str){
        return str[0].toUpperCase() + str.slice(1);
    }
    ucWords(str){

        for(let i=0;i<=str.length;i++){
            if(str[i]==' '){
                str=str[i+1].toUpperCase() + str.slice(i+2);
            }
            else if (i==0){
                str[0].toUpperCase() + str.slice(1);
            }
        }
        return str
    }
}
const str = new MyString();

console.log(str.reverse('IVAN')); 
console.log(str.ucFirst('arsenal')); 
console.log(str.ucWords('arsenal arsenal arsenal'))
