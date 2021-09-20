import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { emptyIdea, Idea } from '@playground/api-interfaces';
import { IdeasFacade } from '@playground/core-state';
import { Observable } from 'rxjs';

@Component({
  selector: 'playground-ideas',
  templateUrl: './ideas.component.html',
  styleUrls: ['./ideas.component.scss'],
})
export class IdeasComponent implements OnInit {
  ideas$: Observable<Idea[]> = this.ideasFacade.allIdeas$;
  selectedIdea$: Observable<Idea> = this.ideasFacade.selectedIdeas$;
  form: FormGroup;
  constructor(
    private ideasFacade: IdeasFacade,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.ideasFacade.loadIdeas();
    this.reset();
  }

  // loadIdea(){}
  // viewIdea(){}

  selectIdea(idea: Idea) {
    this.ideasFacade.selectIdea(idea.key);
    this.form.patchValue(idea);
  }

  // saveIdea(idea: Idea){}
  // updateIdea(idea: Idea){}
  // createIdea(idea: Idea){}
  // deleteIdea(idea: Idea){}

  reset() {
    this.selectIdea(emptyIdea);
    this.form.reset();
  }

  cancel() {
    this.reset();
  }

  private initForm() {
    this.form = this.formBuilder.group({
      id: [null],
      activity: [''],
      type: [''],
      participants: [''],
      price: [''],
      link: [''],
      key: [''],
      accessibility: [''],
    });
  }
}
