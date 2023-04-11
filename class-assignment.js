class Job{

    constructor(name, industry, requiresDegree,field, remoteAble, securityClearance,supervisory){

    this.name = name;
    this.industry = industry;
    this.requiresDegree = requiresDegree;
    this.field = field;
    this.remoteAble = remoteAble;
    this.securityClearance=securityClearance;
    this.supervisory=supervisory;

    }
   getName(){
    return(this.name);
    }
    getFieldandIndustry(){
        return ("The job's field and industry is in "+ this.field + " & " +this.industry +" respectively.");
       
    }
    getRemoteAble(){
        if(this.remoteAble === false){
            return(this.remoteAble+", this job IS NOT remote-able");
        } else{
            return(this.remoteAble+", this job IS remote-able");
        }

    }



}


class Teacher extends Job{
    constructor(name, industry, requiresDegree,field,remotable, state, yearRound){
        super(name, industry, requiresDegree,field,remotable);
        this.state = state;
        this.yearRound = yearRound;
    }

    getState(){
        return("The state this job is in is: "+this.state);
    }

    getyearRound(){
        if(this.yearRound === false){
            return(this.yearRound+", this job IS NOT year-round");
        } else{
            return(this.yearRound+", this job IS year-round");
        }
    }



}

console.log("--------Job Class--------");
console.log();

let accountingJob = new Job("Payroll Admin",'Public', true, "Accounting", true, false, true);
console.log(accountingJob.getRemoteAble());
console.log(accountingJob.getFieldandIndustry());

console.log("--------");

let bankingJob = new Job("Investment Banker",'Public',true, "Finance", false, false, false);
console.log(bankingJob.getName());
console.log(bankingJob.getRemoteAble());

console.log("--------");

let constructionJob = new Job("Foreman",'Government', false, "Construction", false, true, true);
console.log(constructionJob.getName());
console.log(constructionJob.getRemoteAble());

console.log();
console.log("--------Teacher Class Extended from Job--------");

let scienceEducator = new Teacher("Heath Sciences Teacher", "Government/Public", true, "Science", false, "Michigan", false);
console.log(scienceEducator.getState());
console.log(scienceEducator.getyearRound());

console.log("--------");

let collegeProfessor = new Teacher("Computer Science Faculty", "Public University", true, "Science", false, "Iowa", true);
console.log(collegeProfessor.getState());
console.log(collegeProfessor.getyearRound());



