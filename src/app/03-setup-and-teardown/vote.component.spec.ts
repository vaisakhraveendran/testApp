import { VoteComponent } from './vote.component'; 



describe('VoteComponent', () => {
    let component:VoteComponent;
    
  //runs before every tests.
  beforeEach(()=>{

    component=new VoteComponent();
  })
 //afterEach
 //beforeAll
 //afterAll
  it('should incremnet  total votes when up voted', () => {
//Arrange
    
    //ACT
    component.upVote();
    //Assert
    expect(component.totalVotes).toBe(1);

  });

  it('should decrement  total votes when down voted', () => {
    //Arrange
        
        //ACT
        component.downVote();
        //Assert
        expect(component.totalVotes).toBe(-1);
    
      });
});