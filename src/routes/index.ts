import { lazy } from 'react';
import { LazyComponent } from '@/components';

// layout 组件不做懒加载
import Layout from '@/layouts';

const Home = lazy(() => import('@/pages/home'));

export const routes = [
  {
    path: '/',
    element: LazyComponent({ lazyChildren: Layout }),
    children: [
      {
        path: '',
        element: LazyComponent({ lazyChildren: Home }),
      },
    ],
  },
];


//
// export const routes = [
//   {
//     path: '/',
//     element: LazyImportComponent({ lazyChildren: Layout }),
//     children: [
//       {
//         path: '',
//         element: LazyImportComponent({ lazyChildren: Home }),
//       },
//       {
//         path: 'demo',
//         element: LazyImportComponent({ lazyChildren: Demo }),
//       },
//       {
//         path: 'serCenter',
//         children: [
//           {
//             path: '',
//             element: LazyImportComponent({ lazyChildren: ServiceCenter }),
//           },
//           {
//             path: 'cuService',
//             element: LazyImportComponent({ lazyChildren: CustomerService }),
//           },
//         ],
//       },
//       {
//         path: 'serbusiness',
//         children: [
//           {
//             path: '',
//             element: LazyImportComponent({ lazyChildren: ServiceBusiness }),
//           },
//           {
//             path: 'curbusiness',
//             element: LazyImportComponent({ lazyChildren: CurBusiness }),
//           },
//         ],
//       },
//       { path: 'login', element: LazyImportComponent({ lazyChildren: Login }) },
//       {
//         path: 'register',
//         element: LazyImportComponent({ lazyChildren: Register }),
//       },
//       {
//         path: 'forgetPsw',
//         children: [
//           {
//             path: '',
//             element: LazyImportComponent({ lazyChildren: ForgetPsw }),
//           },
//         ],
//       },
//   }
// ]
