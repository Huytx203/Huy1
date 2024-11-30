  // src/components/Evaluate.jsx
  import { Button } from 'flowbite-react';
import React from 'react';

  // Sample data structure for reviews
  const reviews = {
    average: 4, // Example average rating
    totalCount: 10, // Example total count of reviews
    counts: [
      { rating: 5, count: 7.5 },
      { rating: 4, count: 2 },
      { rating: 3, count: 0.5 },
    ],
    featured: [
      { id: 1, author: "Thiện Trương", avatarSrc: "/assets/avt_02.jpeg", rating: 5, content: "MTA làm việc rất chuyên nghiệp, chiến lược hiệu quả giúp doanh thu tăng nhanh. Rất hài lòng!" },
      { id: 2, author: "aaa", avatarSrc: "C:/Users/ADMIN/Downloads/avt_02.jpeg", rating: 5, content: "Tôi rất hài lòng với dịch vụ của agency này. Đội ngũ làm việc rất chuyên nghiệp và luôn sẵn sàng giải đáp mọi thắc mắc của tôi. Chiến dịch marketing mà họ đề xuất không chỉ sáng tạo mà còn mang lại kết quả vượt mong đợi. Sau 3 tháng, doanh thu của công ty tôi đã tăng 35%. Rất đáng để hợp tác lâu dài!" },
      { id: 3, author: "c", avatarSrc: "C:/Users/ADMIN/Downloads/avt_01.jpeg", rating: 4, content: "Ý tưởng sáng tạo, đội ngũ tận tâm, kết quả vượt mong đợi. Chắc chắn sẽ hợp tác lâu dài!" },

    ],
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  function StarIcon(props) {
    return <span {...props}>★</span>; // Placeholder for the star icon
  }

  function Evaluate() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:py-32">
          <div className="lg:col-span-4">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900">Đánh giá của khách hàng</h2>

            <div className="mt-3 flex items-center ">
              <div>
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      aria-hidden="true"
                      className={classNames(
                        reviews.average > rating ? 'text-orange-400' : 'text-gray-300',  'text-2xl shrink-0',
                        'size-5 shrink-0',
                      )}
                    />
                  ))}
                </div>
                <p className="sr-only">{reviews.average}trong số 5 sao</p>
              </div>
              <p className="ml-4 text-sm text-gray-900">Dựa trên {reviews.totalCount} đánh giá</p>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Review data</h3>

              <dl className="space-y-3">
                {reviews.counts.map((count) => (
                  <div key={count.rating} className="flex items-center text-sm">
                    <dt className="flex flex-1 items-center">
                      <p className="w-3 font-medium text-gray-900">
                        {count.rating}
                        <span className="sr-only"> star reviews</span>
                      </p>
                      <div aria-hidden="true" className="ml-1 flex flex-1 items-center">
                        <StarIcon
                          aria-hidden="true"
                          className={classNames(count.count > 0 ? 'text-orange-400' : 'text-gray-300', 'size-5 shrink-0')}
                        />

                        <div className="relative ml-3 flex-1">
                          <div className="h-3 rounded-full border border-gray-200 bg-gray-100" />
                          {count.count > 0 ? (
                            <div
                              style={{ width: `calc(${count.count} / ${reviews.totalCount} * 100%)` }}
                              className="absolute inset-y-0 rounded-full border border-yellow-400 bg-yellow-400" /*Chỉnh màu của % đánh giá */
                            />
                          ) : null}
                        </div>
                      </div>
                    </dt>
                    <dd className="ml-3 w-10 text-right text-sm tabular-nums text-gray-900">
                      {Math.round((count.count / reviews.totalCount) * 100)}%
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="mt-10">
              <h3 className="text-lg font-medium text-gray-900">Chia sẻ suy nghĩ của bạn</h3>
              <p className="mt-1 text-sm text-gray-600">
                Nếu bạn đã sử dụng dịch vụ của chúng tôi, hãy chia sẻ suy nghĩ của bạn với những khách hàng khác.
              </p>
                {/*
              <a
                href="#"
                className="mt-6 inline-flex w-full items-center justify-center rounded-md border border-gray-300 bg-white px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 sm:w-auto lg:w-full"
              >
                Viết đánh giá
              </a>
              */}
            </div>
          </div>

          <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
            <h3 className="sr-only">Recent reviews</h3>

            <div className="flow-root">
              <div className="-my-12 divide-y divide-gray-200">
                {reviews.featured.map((review) => (
                  <div key={review.id} className="py-12">
                    <div className="flex items-center">
                      <img alt={`${review.author}.`} src={review.avatarSrc} className="size-12 rounded-full" />
                      <div className="ml-4">
                        <h4 className="text-sm font-bold text-gray-900">{review.author}</h4>
                        <div className="mt-1 flex items-center">
                          {[0, 1, 2, 3, 4].map((rating) => (
                            <StarIcon
                              key={rating}
                              aria-hidden="true"
                              className={classNames(
                                review.rating > rating ? 'text-orange-400' : 'text-gray-300', 
                                'size-5 shrink-0',
                              )}
                            />
                          ))}
                        </div>
                        <p className="sr-only">{review.rating} out of 5 stars</p>
                      </div>
                    </div>

                    <div
                      dangerouslySetInnerHTML={{ __html: review.content }}
                      className="mt-4 space-y-6 text-base italic text-gray-600"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  export default Evaluate;