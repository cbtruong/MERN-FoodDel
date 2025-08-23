npm i express mongoose jsonwebtoken bcrypt cors dotenv body-parser multer stripe validator nodemon

# Description library

## express

    Framework phổ biến nhất cho Node.js để xây dựng REST API và ứng dụng web.
    Cung cấp router, middleware, xử lý request/response dễ dàng.

## mongoose

    Thư viện kết nối và làm việc với MongoDB.
    Hỗ trợ định nghĩa schema, model, validation dữ liệu, và thao tác CRUD tiện lợi.

## jsonwebtoken (JWT)

    Dùng để tạo và xác thực JSON Web Token.
    Phục vụ cho xác thực người dùng (authentication) và phân quyền (authorization).

## bcrypt

    Thư viện để băm (hash) mật khẩu và so sánh mật khẩu khi đăng nhập.
    Đảm bảo mật khẩu không lưu trữ dạng plain text trong database.

## cors

    Middleware để bật CORS (Cross-Origin Resource Sharing).
    Cho phép client từ domain khác gọi API (ví dụ: frontend React gọi API backend Node).

## dotenv

    Dùng để quản lý biến môi trường thông qua file .env.
    Giúp ẩn các thông tin nhạy cảm như API key, connection string, secret key.

## body-parser

    Middleware giúp phân tích dữ liệu request body (JSON, form-data).
    Giờ đã được tích hợp sẵn trong Express (express.json() và express.urlencoded()), nhưng vẫn có thể dùng riêng.

## multer

    Middleware để upload file trong Node.js (ảnh, video, tài liệu...).
    Xử lý dữ liệu multipart/form-data.

## validator

    Cung cấp nhiều hàm để validate dữ liệu (email hợp lệ, số điện thoại, URL, chuỗi trống...).
    Tránh lỗi dữ liệu đầu vào không hợp lệ.

## nodemon

    Công cụ giúp tự động restart server Node.js khi có thay đổi trong code.
    Rất hữu ích khi phát triển (không cần chạy node server.js lại mỗi lần sửa code).