import { Component, OnInit } from "@angular/core";
// import { AngularFireDatabase } from 'angularfire2/database';
import { Validators, FormGroup, FormBuilder } from "@angular/forms";
import { NavController } from "@ionic/angular";
// import  {firebase} from 'firebase/firestore';
// import firebase from 'firebase';
import { AngularFirestore } from "@angular/fire/firestore";

@Component({
  selector: "app-emergency-contacts",
  templateUrl: "./emergency-contacts.page.html",
  styleUrls: ["./emergency-contacts.page.scss"],
})
export class EmergencyContactsPage implements OnInit {
  numberForm: FormGroup;
  contacts: any;
  phone :number;
  num:number= +91;
  name: any;
  contact : any;

  constructor(public navCtrl: NavController , public firestore: AngularFirestore) {
    
  }

  ngOnInit() {
    this.firestore.collection('contacts')
    .valueChanges({idField: 'contact_id'})
    .subscribe(contact => {
      this.contacts = contact;
      console.log(this.contacts);
    })
  }

  // validateMinMax(min, max) {
  //   return [
  //     "",
  //     [
  //       Validators.required,
  //       Validators.minLength(min),
  //       Validators.maxLength(max),
  //       Validators.pattern("[0-9]+"), // validates input is digit
  //     ],
  //   ];
  // }

  // buildForm() {
  //   this.numberForm = this.fb.group({
  //     country: this.validateMinMax(1, 2),
  //     area: this.validateMinMax(3, 3),
  //     prefix: this.validateMinMax(3, 3),
  //     line: this.validateMinMax(4, 4),
  //   });
  // }

  // get e164() {
  //   const form = this.numberForm.value;
  //   const num = form.country + form.area + form.prefix + form.line;
  //   return `+${num}`;
  // }

  addNum(){
    this.firestore.collection("contacts").add({
      person : {
        name: this.name,
        phone : `+${this.num}` + this.phone,
      }
     
   }).then((data)=>{
       console.log(data);
   }).catch((err) => {
     console.log("Error " + err);
   })
  }

}
