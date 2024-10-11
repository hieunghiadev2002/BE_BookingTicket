const swaggerJSDoc = require("swagger-jsdoc");

// Cấu hình Swagger
const swaggerOptions = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Booking API',
      version: '1.0.0',
      description: 'API documentation for the Booking application',
    },
    contact: {
      
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
    components: {
      schemas: {
            Xe: {
          type: 'object',
          properties: {
            tenXe: {
              type: 'string',
              description: 'The name of the vehicle',
              example: 'Toyota Camry'
            },
            bienSoXe: {
              type: 'string',
              description: 'The license plate of the vehicle',
              example: 'ABC-1234'
            },
            nhaSanXuat: {
              type: 'string',
              description: 'The manufacturer of the vehicle',
              example: 'Toyota'
            },
            colorXe: {
              type: 'string',
              description: 'The color of the vehicle',
              example: 'Red'
            }
          }
        }, 
        LoaiXe: {
          type: 'object',
          properties: {
            tenLoaiXe: {
              type: 'string',
              description: 'The name of the vehicle type',
              example: 'Sedan'
            }
          }
        }
      }
    },
  },
  apis: ['./src/routes/*.js'], // Path to the API docs
};
const swaggerDocs = swaggerJSDoc(swaggerOptions);
module.exports = swaggerDocs;