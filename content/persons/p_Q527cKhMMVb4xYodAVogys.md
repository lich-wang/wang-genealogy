---
schema: wang-person/v1
id: p_Q527cKhMMVb4xYodAVogys
status: active
merged_into: null
display_name: 王郡
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k1PpRHXhxiP9LYyLJeDX46
        subject_person_id: p_Q527cKhMMVb4xYodAVogys
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AENF69h1byECw1MvntkXrp
          claim_id: c_k1PpRHXhxiP9LYyLJeDX46
          source_id: s_h6Zm4ctJ5A1BUEdXT5f2fh
          stance: supports
          locator: CBDB:335217
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335217）
          source: &a1
            id: s_h6Zm4ctJ5A1BUEdXT5f2fh
            source_type: api_record
            title: 中国历代人物传记资料库：王郡（CBDB 335217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335217&o=json
            external_identifier: CBDB:335217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.454Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WHsJsd3R4HT7XEoEPA5NVz
        subject_person_id: p_Q527cKhMMVb4xYodAVogys
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郡，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335217）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yUJOb7D1Nl8htWrVBr3USb
          claim_id: c_WHsJsd3R4HT7XEoEPA5NVz
          source_id: s_h6Zm4ctJ5A1BUEdXT5f2fh
          stance: supports
          locator: CBDB:335217
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pvhJHbO8yPj_0SXkv2NwOG
        subject_person_id: p_xsB7dQbxgv1VM3fErdpLd2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q527cKhMMVb4xYodAVogys
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Sw-rGx3FLP-1KdxyA-7ah
          claim_id: c_pvhJHbO8yPj_0SXkv2NwOG
          source_id: s_DX_KKGuL9uponP75cWbKTw
          stance: supports
          locator: CBDB：兄弟 王京（205560）之父／母 王秉忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王郡 与 王京 为同胞（CBDB 记「兄」），王京 之父／母即 王郡 之父／母。
          source:
            id: s_DX_KKGuL9uponP75cWbKTw
            source_type: api_record
            title: 中国历代人物传记资料库：王郡（CBDB 335217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335217&o=json
            external_identifier: CBDB:335217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_xsB7dQbxgv1VM3fErdpLd2
        status: active
        display_name: 王秉忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_nOxQOO5JsDvZJhf_cAAxSX
        subject_person_id: p_Q527cKhMMVb4xYodAVogys
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P-boOE8ujkw-iLvY_U1cLq
          claim_id: c_nOxQOO5JsDvZJhf_cAAxSX
          source_id: s_DX_KKGuL9uponP75cWbKTw
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205560 王京）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_DX_KKGuL9uponP75cWbKTw
            source_type: api_record
            title: 中国历代人物传记资料库：王郡（CBDB 335217）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335217&o=json
            external_identifier: CBDB:335217
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iKF3URQYd2AiG1hYtKBDpV
        status: active
        display_name: 王京
        merged_into_person_id: null
---

# 王郡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郡 | accepted |
| bio.summary | 王郡，明人物。隆慶二年進士，籍贯上高。（中国历代人物传记资料库 CBDB 335217） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_xsB7dQbxgv1VM3fErdpLd2 | 王秉忠 | accepted |
| other | p_iKF3URQYd2AiG1hYtKBDpV | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王郡（CBDB 335217）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335217&o=json)
