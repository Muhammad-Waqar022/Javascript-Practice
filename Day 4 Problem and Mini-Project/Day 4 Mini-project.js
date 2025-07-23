function userProfile(name="Unknown",age=null,email="example@.com",city="Unknown"){
    this.name=name;
    this.age=age;
    this.email=email;
    this.city=city;
    this.greet=()=>`Hello, I'm ${this.name} from ${this.city}`;
}
let user1=new userProfile("Waqar",19,"ranawaqar4343@gmail.com","Lahore");
let user2=new userProfile("Arslan",21,"arslan3116@gmail.com");

const extraInfo={
    profession:"Developer",
    country:"Pakistan"
}
let fullProfile={...user1,...extraInfo}
let fullProfile2={...user2,...extraInfo}
console.log(user1.greet())
console.log(JSON.stringify(fullProfile,null,2))
console.log(JSON.stringify(fullProfile2,null,2))