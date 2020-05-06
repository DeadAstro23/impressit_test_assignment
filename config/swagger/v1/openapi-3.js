/* eslint-disable no-dupe-keys */
module.exports = {
  openapi: '3.0.2',
  info: {
    version: process.env.npm_package_version,
    title: 'Impressit Service',
    license: {
      name: 'Proprietary',
    },
  },
  servers: [
    {
      url: '/',
      description: 'Root',
    },
  ],
  tags: [
    {
      name: 'Book',
      description: 'Book operations.',
    },
  ],
  paths: {
    '/dev/api/v1/books': {
      get: {
        description: 'Retrieves array of books.',
        operationId: 'getAllBooks',
        tags: [
          'Books',
        ],
        parameters: [],
        responses: {
          200: {
            $ref: '#/components/responses/Books',
          },
          204: {
            $ref: '#/components/responses/NoContent',
          },
          400: {
            $ref: '#/components/responses/BadRequest',
          },
          500: {
            $ref: '#/components/responses/InternalServerError',
          },
        },
      },
    },
    '/dev/api/v1/book/{id}': {
      get: {
        description: 'Retrieves book of id.',
        operationId: 'getBookById',
        tags: [
          'Books',
        ],
        parameters: [
          {
            $ref: '#/components/parameters/ID',
          },
        ],
        responses: {
          200: {
            $ref: '#/components/responses/Books',
          },
          204: {
            $ref: '#/components/responses/NoContent',
          },
          400: {
            $ref: '#/components/responses/BadRequest',
          },
          500: {
            $ref: '#/components/responses/InternalServerError',
          },
        },
      },
    },
    '/dev/api/v1/book': {
      post: {
        description: 'Add new book.',
        operationId: 'addBook',
        tags: [
          'Books',
        ],
        parameters: [],
        requestBody: {
          required: true,
          $ref: '#/components/requestBodies/Book',
        },
        responses: {
          201: {
            $ref: '#/components/responses/Created',
          },
          400: {
            $ref: '#/components/responses/BadRequest',
          },
          500: {
            $ref: '#/components/responses/InternalServerError',
          },
        },
      },
    },
    '/dev/api/v1/book/{id}': {
      delete: {
        description: 'Deletes book by its ID.',
        operationId: 'deleteBookById',
        tags: [
          'Books',
        ],
        parameters: [
          {
            $ref: '#/components/parameters/Id',
          },
        ],
        responses: {
          204: {
            $ref: '#/components/responses/NoContent',
          },
          400: {
            $ref: '#/components/responses/BadRequest',
          },
          405: {
            $ref: '#/components/responses/MethodNotAllowed',
          },
          500: {
            $ref: '#/components/responses/InternalServerError',
          },
        },
      },
    },
    '/dev/api/v1/book/{id}': {
      put: {
        description: 'Deletes book by its ID.',
        operationId: 'deleteBookById',
        tags: [
          'Books',
        ],
        parameters: [
          {
            $ref: '#/components/parameters/Id',
          },
        ],
        responses: {
          204: {
            $ref: '#/components/responses/NoContent',
          },
          400: {
            $ref: '#/components/responses/BadRequest',
          },
          405: {
            $ref: '#/components/responses/MethodNotAllowed',
          },
          500: {
            $ref: '#/components/responses/InternalServerError',
          },
        },
      },
    },
  },
  components: {
    parameters: {
      ID: {
        name: 'id',
        in: 'path',
        description: 'ID for a given book.',
        required: true,
        schema: {
          type: 'string',
        },
      },
    },
    responses: {
      BadRequest: {
        description: 'Bad Request',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                status: {
                  type: 'integer',
                  example: 400,
                },
                error: {
                  type: 'string',
                  example: 'Bad Request',
                },
              },
            },
          },
        },
      },
      Created: {
        description: 'Created',
      },
      InternalServerError: {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                status: {
                  type: 'integer',
                  example: 500,
                },
                error: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
      NoContent: {
        description: 'No Content',
      },
      NotFound: {
        description: 'Not Found',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                status: {
                  type: 'integer',
                  example: 404,
                },
                error: {
                  type: 'string',
                  example: 'Not Found',
                },
              },
            },
          },
        },
      },
      OK: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: true,
                },
                status: {
                  type: 'integer',
                  example: 200,
                },
                data: {
                  type: 'object',
                },
              },
            },
          },
        },
      },
      Book: {
        description: 'OK',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: true,
                },
                status: {
                  type: 'integer',
                  example: 200,
                },
                data: {
                  type: 'object',
                  properties: {
                    count: {
                      type: 'integer',
                      example: 1,
                    },
                    posts: {
                      type: 'array',
                      items: {
                        $ref: '#/components/schemas/Content',
                      },
                    },
                  },
                },
              },
            },
          },
        },
      },
      RequestTimeout: {
        description: 'Request Timeout',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                success: {
                  type: 'boolean',
                  example: false,
                },
                status: {
                  type: 'integer',
                  example: 408,
                },
                error: {
                  type: 'string',
                  example: 'Request Timeout',
                },
              },
            },
          },
        },
      },
    },
    schemas: {
      Content: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
          },
          name: {
            type: 'string',
          },
          releaseDate: {
            type: 'integer',
          },
          authorName: {
            type: 'string',
          },
        },
      },
    },
  },
};
