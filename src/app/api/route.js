export const feedback = [
  {
    id: 1,
    message: "This is so much delicious",
  },
  {
    id: 2,
    message: "The weather is humble",
  },
];


export async function GET(request) {
  return Response.json({
    status: 200,
    message: "API is working",
  });
}
