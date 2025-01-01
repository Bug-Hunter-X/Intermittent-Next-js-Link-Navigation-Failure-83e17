```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const navigateTo = (path) => {
    router.push(path, undefined, { shallow: true });
  };

  return (
    <div>
      <a onClick={() => navigateTo('/')}>Home</a>
      <a onClick={() => navigateTo('/about')}>About</a>
    </div>
  );
}

export default MyComponent;
```