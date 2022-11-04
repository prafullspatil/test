import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let debug : DebugElement;
  let HTMLel: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
                 BrowserModule,
                 FormsModule,
                 ReactiveFormsModule
    ] 
  }).compileComponents().then(() =>
  fixture = TestBed.createComponent(ContactComponent));

  component = fixture.componentInstance;    //cotactComponentTest Instance

  debug = fixture.debugElement.query(By.css('form'));

  HTMLel = debug.nativeElement;


  });

  it('should have as text "contact page',async( () => {
    expect(component.text).toEqual('contact page');
  }));

  it('should set submitted to true',async( () => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it('should call the onSubmit method',async( () => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    HTMLel = fixture.debugElement.query(By.css('button')).nativeElement;
    HTMLel.click(); 
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

  it('form should be invalid ',async( () => {
    
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  // it('form should be valid ',async( () => {
    
  //   component.contactForm.controls['email'].setValue('admin@gmail.com');
  //   component.contactForm.controls['name'].setValue('aman');
  //   component.contactForm.controls['text'].setValue('hiii');
  //   expect(component.contactForm.valid).toBeTruthy();
  // }));

});
