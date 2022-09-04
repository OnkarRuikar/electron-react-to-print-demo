import React, {forwardRef} from "react";
import "../assets/css/Bill.css";

export const Bill = forwardRef((props, ref) => (
    <div className="bill" ref={ref}>
      <table className="body-wrap">
        <tbody>
        <tr>
          <td></td>
          <td className="container" width="600">
            <div className="content">
              <table className="main" width="100%" cellPadding="0"
                     cellSpacing="0">
                <tbody>
                <tr>
                  <td className="content-wrap align-center">
                    <table width="100%" cellPadding="0" cellSpacing="0">
                      <tbody>
                      <tr>
                        <td className="content-block align-center">
                          <h2>Thanks for visiting us!</h2>
                        </td>
                      </tr>
                      <tr>
                        <td className="content-block">
                          <table className="invoice">
                            <tbody>
                            <tr>
                              <td>
                                Jane Smith
                                <br/>
                                Invoice #12345
                                <br/>
                                January 01 2022
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table className="invoice-items"
                                       cellPadding="0" cellSpacing="0">
                                  <tbody>
                                  <tr>
                                    <td>Service 1</td>
                                    <td className="align-right">$ 20.00</td>
                                  </tr>
                                  <tr>
                                    <td>Service 2</td>
                                    <td className="align-right">$ 10.00</td>
                                  </tr>
                                  <tr>
                                    <td>Service 3</td>
                                    <td className="align-right">$ 6.00</td>
                                  </tr>
                                  <tr className="total">
                                    <td className="align-right" width="80%">
                                      Total
                                    </td>
                                    <td className="align-right">$ 36.00</td>
                                  </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                      <tr>
                        <td className="content-block align-center">
                          <a>View in browser</a>
                        </td>
                      </tr>
                      <tr>
                        <td className="content-block align-center">
                          Acme Inc. 123 Vna Ness, San Francisco 94112
                        </td>
                      </tr>
                      </tbody>
                    </table>
                  </td>
                </tr>
                </tbody>
              </table>
              <div className="footer">
                <table width="100%">
                  <tbody>
                  <tr>
                    <td className="align-center content-block">
                      Questions? Email <a
                        href="mailto:">acmeinc@company.inc</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </td>
          <td></td>
        </tr>
        </tbody>
      </table>
    </div>
));

