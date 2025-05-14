export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div>
        <div>
          <h4>Контакты</h4>
          <p>academia@platonica.pro</p>
        </div>
        <div>© {currentYear} ACADEMIA PLATONICA MTÜ</div>
      </div>
    </footer>
  );
}
