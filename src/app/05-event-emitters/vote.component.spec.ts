import { VoteComponent } from './vote.component'; 

describe('VoteComponent', () => {
  var component: VoteComponent; 

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('raise vote chnag event when upvoted', () => {

    let totalvotes=null;
    component.voteChanged.subscribe(tv=>totalvotes=tv);
    component.upVote();
    expect(totalvotes).toBe(1);

  });

});