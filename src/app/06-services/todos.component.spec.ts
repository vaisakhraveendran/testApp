import { TodosComponent } from './todos.component'; 
import { TodoService } from './todo.service'; 
import {  Observable } from 'rxjs';
import  'rxjs/add/observable/from' ;

describe('TodosComponent', () => {
  let component: TodosComponent;
  let service: TodoService;

  beforeEach(() => {
    service =new TodoService(null);
    component= new TodosComponent(service);
  });

  it('should set todos properties with items returned from the server', () => {
    spyOn(service,'getTodos').and.callFake(()=> {

      return Observable.from([
        [1,2,3]

      ])
    })

    component.ngOnInit();
    expect(component.todos.length).toBeGreaterThan(0);  
  });
});