import React from 'react';
import Routes from './Routes/routes';

const App = () => {

  const posts = [
    {
      id: 1,
      title: 'My First Post',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vestibulum risus vel sapien interdum, in consectetur lorem pretium. Donec euismod purus non risus consequat, eget sagittis velit tristique. Sed fermentum diam vel nisl ullamcorper, a lacinia leo rutrum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Sed congue magna ex, non rhoncus mi efficitur et. Cras sit amet lectus vitae metus convallis bibendum eget et nulla. Mauris sed dapibus elit, vel fringilla nisi. Fusce ac congue ante.',
    },
    {
      id: 2,
      title: 'My Second Post',
      content:
        'Aliquam malesuada sapien nec diam dapibus, in laoreet velit commodo. Curabitur lacinia ultricies sapien, sit amet commodo libero lacinia eget. Aliquam pellentesque accumsan felis vel sagittis. Nam sit amet nisl consequat, luctus tellus quis, sollicitudin sapien. Nunc quis dui tincidunt, commodo purus vitae, consectetur lectus. Sed nec posuere dolor, vel feugiat justo. Nulla facilisi. In hac habitasse platea dictumst. Nam sed pretium nibh. Sed sed risus tortor.',
    },
    {
      id: 3,
      title: 'My Third Post',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut et varius ante, nec bibendum orci. Aliquam sed mauris in lorem venenatis elementum eget eu quam. Aenean vitae elit eget neque consectetur tincidunt eget vel neque. Donec lacinia risus et lectus lacinia tincidunt. Duis aliquam, sapien vel placerat tincidunt, risus felis varius purus, non interdum velit velit eget dolor. Sed at enim non nisi dignissim fringilla a a risus. Vivamus euismod, sapien id blandit congue, eros mi bibendum quam, quis interdum turpis libero ac purus.',
    },
    {
      id: 4,
      title: 'My Fourth Post',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut et varius ante, nec bibendum orci. Aliquam sed mauris in lorem venenatis elementum eget eu quam. Aenean vitae elit eget neque consectetur tincidunt eget vel neque. Donec lacinia risus et lectus lacinia tincidunt. Duis aliquam, sapien vel placerat tincidunt, risus felis varius purus, non interdum velit velit eget dolor. Sed at enim non nisi dignissim fringilla a a risus. Vivamus euismod, sapien id blandit congue, eros mi bibendum quam, quis interdum turpis libero ac purus.',
    }, {
      id: 5,
      title: 'My Firth Post',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut et varius ante, nec bibendum orci. Aliquam sed mauris in lorem venenatis elementum eget eu quam. Aenean vitae elit eget neque consectetur tincidunt eget vel neque. Donec lacinia risus et lectus lacinia tincidunt. Duis aliquam, sapien vel placerat tincidunt, risus felis varius purus, non interdum velit velit eget dolor. Sed at enim non nisi dignissim fringilla a a risus. Vivamus euismod, sapien id blandit congue, eros mi bibendum quam, quis interdum turpis libero ac purus.',
    }, {
      id: 6,
      title: 'My Sixth Post',
      content:
        'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut et varius ante, nec bibendum orci. Aliquam sed mauris in lorem venenatis elementum eget eu quam. Aenean vitae elit eget neque consectetur tincidunt eget vel neque. Donec lacinia risus et lectus lacinia tincidunt. Duis aliquam, sapien vel placerat tincidunt, risus felis varius purus, non interdum velit velit eget dolor. Sed at enim non nisi dignissim fringilla a a risus. Vivamus euismod, sapien id blandit congue, eros mi bibendum quam, quis interdum turpis libero ac purus.',
    },
  ];




  return (
    <div>
      <Routes posts={posts} />
    </div>
  );
};

export default App;
