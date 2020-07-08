import { Component, OnInit, ViewChild } from '@angular/core';
import { BookService } from './../shared/book.service';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export interface Destination {
  name: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})

export class BookingComponent implements OnInit {
  destinationArray: Destination[] = [];
  bookForm: FormGroup;

  ngOnInit() { 
    this.bookApi.GetBookList();
    this.submitBookForm();
  }
  
  constructor(
    public fb: FormBuilder,
    private bookApi: BookService
  ) { }

  /* Remove dynamic languages */
  remove(destination: Destination): void {
    const index = this.destinationArray.indexOf(destination);
    if (index >= 0) {
      this.destinationArray.splice(index, 1);
    }
  }

  /* Reactive book form */
  submitBookForm() {
    this.bookForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
    telephone: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
    country: ['', [Validators.required]],
    guest_no: ['', [Validators.required]],
    arrival: ['', [Validators.required]],
    departure: ['', [Validators.required]],
    destination: [this.destinationArray],
    message: ['', [Validators.required]]
    })
  }

  /* Get errors */
  public handleError = (controlName: string, errorName: string) => {
    return this.bookForm.controls[controlName].hasError(errorName);
  }

  /* Add dynamic languages 
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;
    // Add language
    if ((value || '').trim() && this.destinationArray.length < 5) {
      this.destinationArray.push({ name: value.trim() })
    }
    // Reset the input value
    if (input) {
      input.value = '';
    }
  }*/
  
  /* Date */
  formatDate(e) {
    var convertDate1 = new Date(e.target.value).toISOString().substring(0, 10);
    var convertDate2 = new Date(e.target.value).toISOString().substring(0, 10);
    this.bookForm.get('arrival').setValue(convertDate1, {
      onlyself: true
    })
    this.bookForm.get('departure').setValue(convertDate2, {
      onlyself: true
    })
  }

  /* Reset form */
  resetForm() {
    this.bookForm.reset();
  } 
  
  get name() {
    return this.bookForm.get('name');
  }
  get email() {
    return this.bookForm.get('email');
  }
  get telephone() {
    return this.bookForm.get('telephone');
  }
  get country() {
    return this.bookForm.get('country');
  }
  get guest_no() {
    return this.bookForm.get('guest_no');
  }
  get destination() {
    return this.bookForm.get('destination');
  }
  get message() {
    return this.bookForm.get('message');
  }
  /* Submit book */
  submitBook() {
    
      this.bookApi.AddBook(this.bookForm.value); // Submit student data using CRUD API
      alert("Submitted successfully");
      this.resetForm();  // Reset form when clicked on reset button
     
  }
 
}
