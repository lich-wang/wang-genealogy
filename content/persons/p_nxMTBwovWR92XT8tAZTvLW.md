---
schema: wang-person/v1
id: p_nxMTBwovWR92XT8tAZTvLW
status: active
merged_into: null
display_name: 王學謨
revision: 13
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_J9ARLg5oPJaE45PjHNFhK7
        subject_person_id: p_nxMTBwovWR92XT8tAZTvLW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1Z5565yP11utU6YKP3uSUE
          claim_id: c_J9ARLg5oPJaE45PjHNFhK7
          source_id: s_uvZh4JMBU3jqhX14F6MtNK
          stance: supports
          locator: CBDB:204228
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204228）
          source: &a1
            id: s_uvZh4JMBU3jqhX14F6MtNK
            source_type: api_record
            title: 中国历代人物传记资料库：王學謨（CBDB 204228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204228&o=json
            external_identifier: CBDB:204228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pTQsHyRXmAft2CCKLzWqqJ
        subject_person_id: p_nxMTBwovWR92XT8tAZTvLW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1529年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dKQPxQLWB1R6f84BNyirg7
          claim_id: c_pTQsHyRXmAft2CCKLzWqqJ
          source_id: s_uvZh4JMBU3jqhX14F6MtNK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EXjmeDGknCGPyzHhZQrE9s
        subject_person_id: p_nxMTBwovWR92XT8tAZTvLW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王學謨（生于1529年），明人物。明清進士進士，籍贯朝邑，入仕進士，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 204228）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_aZh8LoP_C2ayMc-IPUDjD8
          claim_id: c_EXjmeDGknCGPyzHhZQrE9s
          source_id: s_uvZh4JMBU3jqhX14F6MtNK
          stance: supports
          locator: CBDB:204228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__1ely_7UJqYtlcL0_--gNa
        subject_person_id: p_CTanKyckA8Emf57Dk1Jm7o
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kDYZXlZhd4RNn9cMZb9Ddb
          claim_id: c__1ely_7UJqYtlcL0_--gNa
          source_id: s_htcTWEbRxiKntM1va2ty9n
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_htcTWEbRxiKntM1va2ty9n
            source_type: api_record
            title: 中国历代人物传记资料库：王世卿（CBDB 316256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316256&o=json
            external_identifier: CBDB:316256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.961Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CTanKyckA8Emf57Dk1Jm7o
        status: active
        display_name: 王世卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_yzVnCLXofS3x9fd_WbBrK4
        subject_person_id: p_fVWCspCFwJnj5sBz8z7Ce4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Fzi5FYdhnOfb_YeAr4qE17
          claim_id: c_yzVnCLXofS3x9fd_WbBrK4
          source_id: s_bdDMZnsa3QCFaPp5z4CC18
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bdDMZnsa3QCFaPp5z4CC18
            source_type: api_record
            title: 中国历代人物传记资料库：王文美（CBDB 316254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316254&o=json
            external_identifier: CBDB:316254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fVWCspCFwJnj5sBz8z7Ce4
        status: active
        display_name: 王文美
        merged_into_person_id: null
    - claim:
        id: c_Mm_oF1a-fbLAjDHUlVmcFz
        subject_person_id: p_WKvxpBkHJcT4cjKq3B86vA
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UTOoMP4WqiEQLjI2qbH88M
          claim_id: c_Mm_oF1a-fbLAjDHUlVmcFz
          source_id: s_QFp1j1fMQmGfxMBJ1TF6Ap
          stance: supports
          locator: 嘉靖三十二年進士登科錄:一卷，第三甲第二十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QFp1j1fMQmGfxMBJ1TF6Ap
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 316255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316255&o=json
            external_identifier: CBDB:316255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WKvxpBkHJcT4cjKq3B86vA
        status: active
        display_name: 王崑
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_T5hvx_-AthdBAYRn9ly9Q8
        subject_person_id: p_4RJHMKDkRKmqcKp8MAKp3U
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TIHEqA5jIr5hBtend0Srdd
          claim_id: c_T5hvx_-AthdBAYRn9ly9Q8
          source_id: s_J4UG3rrf-Sy8E8cU8yfSyp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J4UG3rrf-Sy8E8cU8yfSyp
            source_type: api_record
            title: 中国历代人物传记资料库：王學誥（CBDB 316262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json
            external_identifier: CBDB:316262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4RJHMKDkRKmqcKp8MAKp3U
        status: active
        display_name: 王學誥
        merged_into_person_id: null
    - claim:
        id: c_hTIQ10fuN_iMdyUprOrIoJ
        subject_person_id: p_An7txcyErXqQRxNdWrST9P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nGGLsl8hd2Q-uPzuPAuAll
          claim_id: c_hTIQ10fuN_iMdyUprOrIoJ
          source_id: s_9walWAVyBn3ACYfjDa_s3g
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9walWAVyBn3ACYfjDa_s3g
            source_type: api_record
            title: 中国历代人物传记资料库：王學誨（CBDB 316268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json
            external_identifier: CBDB:316268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_An7txcyErXqQRxNdWrST9P
        status: active
        display_name: 王學誨
        merged_into_person_id: null
    - claim:
        id: c_TpgQtvfLWCIJoGdfZ7TicC
        subject_person_id: p_HRM7GsrH6RKGj5BRRsKgDG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_35d2gt0bAw9MkVDi__0osl
          claim_id: c_TpgQtvfLWCIJoGdfZ7TicC
          source_id: s_HgD0Xxzrq68_JZ66XYjctx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HgD0Xxzrq68_JZ66XYjctx
            source_type: api_record
            title: 中国历代人物传记资料库：王學讓（CBDB 316266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json
            external_identifier: CBDB:316266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HRM7GsrH6RKGj5BRRsKgDG
        status: active
        display_name: 王學讓
        merged_into_person_id: null
    - claim:
        id: c_sk3FiWElT3045CLJg8qKIy
        subject_person_id: p_VmNztxaoRL5NcE9AQEx6nn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fhGlYcDfWgrD0qu1YBJDr8
          claim_id: c_sk3FiWElT3045CLJg8qKIy
          source_id: s_1t0BHaXzrb_ihFLgw9K1Ua
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1t0BHaXzrb_ihFLgw9K1Ua
            source_type: api_record
            title: 中国历代人物传记资料库：王學詩（CBDB 316259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316259&o=json
            external_identifier: CBDB:316259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VmNztxaoRL5NcE9AQEx6nn
        status: active
        display_name: 王學詩
        merged_into_person_id: null
    - claim:
        id: c_slxsoY0uCTN2NGlZGkB-Ac
        subject_person_id: p_WYkYmR1X2JspjyQZrTdLz8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5qMni6Xv9IyNhRKyWHBOJ3
          claim_id: c_slxsoY0uCTN2NGlZGkB-Ac
          source_id: s_oJhsoIN3aDNxIX2WLEIDFq
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_oJhsoIN3aDNxIX2WLEIDFq
            source_type: api_record
            title: 中国历代人物传记资料库：王學仕（CBDB 316264）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json
            external_identifier: CBDB:316264
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WYkYmR1X2JspjyQZrTdLz8
        status: active
        display_name: 王學仕
        merged_into_person_id: null
    - claim:
        id: c_7ta6SRRwzLTm_AY32O87xd
        subject_person_id: p_ds7Xs587VEtetVc8UbqxG2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4dewaU3Zre4ti2GtrPZY2n
          claim_id: c_7ta6SRRwzLTm_AY32O87xd
          source_id: s_Ke6XlMMCQU5xScNokoFPNk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Ke6XlMMCQU5xScNokoFPNk
            source_type: api_record
            title: 中国历代人物传记资料库：王學誠（CBDB 316260）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316260&o=json
            external_identifier: CBDB:316260
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ds7Xs587VEtetVc8UbqxG2
        status: active
        display_name: 王學誠
        merged_into_person_id: null
    - claim:
        id: c_gMjc5cQnHztBh31zUZ2SmS
        subject_person_id: p_j1YheM1SAEiE8T3Hfe1zHv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nxMTBwovWR92XT8tAZTvLW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yJe8DLlhfjA04dVVQ3XCbq
          claim_id: c_gMjc5cQnHztBh31zUZ2SmS
          source_id: s_sT6az9mt5XxOmZ8Ffs6gnC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sT6az9mt5XxOmZ8Ffs6gnC
            source_type: api_record
            title: 中国历代人物传记资料库：王學誦（CBDB 316265）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316265&o=json
            external_identifier: CBDB:316265
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j1YheM1SAEiE8T3Hfe1zHv
        status: active
        display_name: 王學誦
        merged_into_person_id: null
    - claim:
        id: c_MP_yEqpesgG-DnO1UbHpSR
        subject_person_id: p_nxMTBwovWR92XT8tAZTvLW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qYb8W8AwRpiY9fnCPE4R5L
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IzV9W-mN5QLg7Vvcu9i2Uo
          claim_id: c_MP_yEqpesgG-DnO1UbHpSR
          source_id: s_sQm9jJoijcRRHkONiIs_sd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sQm9jJoijcRRHkONiIs_sd
            source_type: api_record
            title: 中国历代人物传记资料库：王化行（CBDB 316267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316267&o=json
            external_identifier: CBDB:316267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qYb8W8AwRpiY9fnCPE4R5L
        status: active
        display_name: 王化行
        merged_into_person_id: null
    - claim:
        id: c_T2BAynjf_4ONxnTGF5wee_
        subject_person_id: p_nxMTBwovWR92XT8tAZTvLW
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_saQsFGrBWgv33hMqqA1j8Q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DlPneCUSG2sfwfPqH3-GEJ
          claim_id: c_T2BAynjf_4ONxnTGF5wee_
          source_id: s_sn5hUxj3A-hCDIEilb87Zt
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204228 王學謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sn5hUxj3A-hCDIEilb87Zt
            source_type: api_record
            title: 中国历代人物传记资料库：王學吉（CBDB 316261）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316261&o=json
            external_identifier: CBDB:316261
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_saQsFGrBWgv33hMqqA1j8Q
        status: active
        display_name: 王學吉
        merged_into_person_id: null
---

# 王學謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王學謨 | accepted |
| birth.date | 1529年 | accepted |
| bio.summary | 王學謨（生于1529年），明人物。明清進士進士，籍贯朝邑，入仕進士，曾任提刑按察使司僉事。（中国历代人物传记资料库 CBDB 204228） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CTanKyckA8Emf57Dk1Jm7o | 王世卿 | accepted |
| ancestors | p_fVWCspCFwJnj5sBz8z7Ce4 | 王文美 | accepted |
| ancestors | p_WKvxpBkHJcT4cjKq3B86vA | 王崑 | accepted |
| other | p_4RJHMKDkRKmqcKp8MAKp3U | 王學誥 | accepted |
| other | p_An7txcyErXqQRxNdWrST9P | 王學誨 | accepted |
| other | p_HRM7GsrH6RKGj5BRRsKgDG | 王學讓 | accepted |
| other | p_VmNztxaoRL5NcE9AQEx6nn | 王學詩 | accepted |
| other | p_WYkYmR1X2JspjyQZrTdLz8 | 王學仕 | accepted |
| other | p_ds7Xs587VEtetVc8UbqxG2 | 王學誠 | accepted |
| other | p_j1YheM1SAEiE8T3Hfe1zHv | 王學誦 | accepted |
| other | p_qYb8W8AwRpiY9fnCPE4R5L | 王化行 | accepted |
| other | p_saQsFGrBWgv33hMqqA1j8Q | 王學吉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王化行（CBDB 316267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316267&o=json)
- [中国历代人物传记资料库：王崑（CBDB 316255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316255&o=json)
- [中国历代人物传记资料库：王世卿（CBDB 316256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316256&o=json)
- [中国历代人物传记资料库：王文美（CBDB 316254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316254&o=json)
- [中国历代人物传记资料库：王學誠（CBDB 316260）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316260&o=json)
- [中国历代人物传记资料库：王學誥（CBDB 316262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316262&o=json)
- [中国历代人物传记资料库：王學誨（CBDB 316268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316268&o=json)
- [中国历代人物传记资料库：王學吉（CBDB 316261）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316261&o=json)
- [中国历代人物传记资料库：王學謨（CBDB 204228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204228&o=json)
- [中国历代人物传记资料库：王學讓（CBDB 316266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316266&o=json)
- [中国历代人物传记资料库：王學詩（CBDB 316259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316259&o=json)
- [中国历代人物传记资料库：王學仕（CBDB 316264）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316264&o=json)
- [中国历代人物传记资料库：王學誦（CBDB 316265）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=316265&o=json)
