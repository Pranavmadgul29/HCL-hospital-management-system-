import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Patient {
  id: number;
  name: string;
  age: number;
  gender: string;
  disease: string;
  doctor: string;
  status: string;
}

@Component({
  selector: 'app-hospital',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hospital.html',
  styleUrl: './hospital.css',
})
export class Hospital {
  activePage = 'Dashboard';

  patients: Patient[] = [
    {
      id: 1,
      name: 'Rahul Sharma',
      age: 25,
      gender: 'Male',
      disease: 'Fever',
      doctor: 'Dr. Amit',
      status: 'Admitted',
    },
    {
      id: 2,
      name: 'Priya Patil',
      age: 32,
      gender: 'Female',
      disease: 'Diabetes',
      doctor: 'Dr. Sneha',
      status: 'Discharged',
    },
    {
      id: 3,
      name: 'Amit Kumar',
      age: 40,
      gender: 'Male',
      disease: 'Heart Problem',
      doctor: 'Dr. Raj',
      status: 'Admitted',
    },
  ];

  doctors = [
    { name: 'Dr. Amit', department: 'General Medicine' },
    { name: 'Dr. Sneha', department: 'Cardiology' },
    { name: 'Dr. Raj', department: 'Neurology' },
    { name: 'Dr. Priya', department: 'Orthopedics' },
  ];

  appointments = [
    { patient: 'Rahul Sharma', doctor: 'Dr. Amit', date: '2026-11-04', time: '10:00 AM' },
    { patient: 'Priya Patil', doctor: 'Dr. Sneha', date: '2026-11-05', time: '11:30 AM' },
  ];

  departments = [
    'Cardiology',
    'Neurology',
    'Orthopedics',
    'General Medicine',
    'Pediatrics',
    'Dermatology',
  ];

  searchText = '';

  newPatient: Patient = this.emptyPatient();

  emptyPatient(): Patient {
    return {
      id: 0,
      name: '',
      age: 0,
      gender: 'Male',
      disease: '',
      doctor: '',
      status: 'Admitted',
    };
  }

  get filteredPatients() {
    return this.patients.filter(
      (patient) =>
        patient.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        patient.disease.toLowerCase().includes(this.searchText.toLowerCase()),
    );
  }

  get admittedCount() {
    return this.patients.filter((p) => p.status === 'Admitted').length;
  }

  openPage(page: string) {
    this.activePage = page;
  }

  addPatient() {
    if (
      this.newPatient.name.trim() &&
      this.newPatient.age > 0 &&
      this.newPatient.disease.trim() &&
      this.newPatient.doctor
    ) {
      this.patients.push({
        ...this.newPatient,
        id: Date.now(),
      });

      this.newPatient = this.emptyPatient();
      this.activePage = 'Patients';

      alert('Patient added successfully!');
    }
  }

  deletePatient(id: number) {
    this.patients = this.patients.filter((p) => p.id !== id);
  }
}
