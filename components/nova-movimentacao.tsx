import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { useState } from "react";

const NovaMovimentacaoModal = () => {
  const [displayBasic, setDisplayBasic] = useState(false);

  return (<>
    <Button type="button" className="p-button-sm gap-2" onClick={() => setDisplayBasic(true)}>
      <i className="pi pi-plus"></i>
      <span className="hidden sm:block">Nova movimentação</span>
    </Button>
    <Dialog 
    modal 
    header="Nova movimentação"
    footer={<Button type="button" label="Salvar" onClick={() => setDisplayBasic(false)} icon="pi pi-check" />} 
    visible={displayBasic} 
    onHide={() => setDisplayBasic(false)} style={{ maxWidth: '40rem', width: '90%' }}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.
      </p>
    </Dialog>
  </>);
};

export default NovaMovimentacaoModal;
