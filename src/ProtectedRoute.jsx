export default function ProtectedRoute({ children, condition, noAccess }) {
  return !condition ? noAccess : children;
}
