import { Component, OnInit, Input } from "@angular/core";
import { FormGroup } from "@angular/forms";

@Component({
  selector: "app-sub-form",
  templateUrl: "./sub-form.component.html",
  styleUrls: ["./sub-form.component.css"],
})
export class SubFormComponent implements OnInit {
  @Input() form: FormGroup;

  constructor() {}

  ngOnInit(): void {}
}
