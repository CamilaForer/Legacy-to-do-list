

const Modal = (_) => {
    return (
        <>
            {/* Button trigger modal */}
            <button type="button"class="btn-modal" data-toggle="modal" data-target="#exampleModal">
                📂
                {/* BsFillCollectionFill */}
                {/* AiFillFolderOpen */}
            </button>
            {/* Modal */}
            <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                role="dialog"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button className="btn-filter">Eliminadas</button>
                            <button className="btn-filter">Realizadas</button>
                            <button
                                type="button"
                                class="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">x</span>
                            </button>
                        </div>
                        <div class="modal-body">...</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Modal;
