Kiến trúc sản phẩm:

-   Database: Sử dụng Prisma để tạo model, tự động chuyển đổi sang cơ sở
    dữ liệu PostgresSQL

-   Backend (NestJS) :

    -   Quản lí từng tính năng theo các module dựa theo kiến trúc của
        NestJS. Mỗi module gồm các file controller và service.

    -   Controller có nhiệm vụ xử lí những request tới server và trả về
        response cho client.

    -   Service kết nối tới database, thực hiện các thao tác liên quan
        tới truy vấn dữ liệu.

    -   Sử dụng REST API để giao tiếp với Frontend

-   Frontend (NextJS, TailwindCSS):

    -   NextJS: Tạo component, tạo route tới các page

    -   TailwindCSS: CSS giao diện
