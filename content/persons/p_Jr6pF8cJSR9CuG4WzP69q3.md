---
schema: wang-person/v1
id: p_Jr6pF8cJSR9CuG4WzP69q3
status: active
merged_into: null
display_name: 王垔
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vZZ7xyrWqqEDqgzYfgWqcC
        subject_person_id: p_Jr6pF8cJSR9CuG4WzP69q3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3yo3ezUrHGBQDDPg9YcMLD
          claim_id: c_vZZ7xyrWqqEDqgzYfgWqcC
          source_id: s_Yp66ezA7GWnvDC2QEkCXY7
          stance: supports
          locator: CBDB:272411
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（272411）
          source: &a1
            id: s_Yp66ezA7GWnvDC2QEkCXY7
            source_type: api_record
            title: 中国历代人物传记资料库：王垔（CBDB 272411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272411&o=json
            external_identifier: CBDB:272411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.889Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_79nypk6j1TkeFWVMkTyzwL
        subject_person_id: p_Jr6pF8cJSR9CuG4WzP69q3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王垔，明人物。弘治十五年進士，籍贯武進。（中国历代人物传记资料库 CBDB 272411）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XEusMYKYKpeWMqCCdW5_mR
          claim_id: c_79nypk6j1TkeFWVMkTyzwL
          source_id: s_Yp66ezA7GWnvDC2QEkCXY7
          stance: supports
          locator: CBDB:272411
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DyzVJrYyzN93dpd019__r0
        subject_person_id: p_uV1YjCTPo5QWbEPfDKw9o3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Jr6pF8cJSR9CuG4WzP69q3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f_oO-QphOkX81q7emdhTNm
          claim_id: c_DyzVJrYyzN93dpd019__r0
          source_id: s_Bj0bNtvQtFY79LsrSRGrhU
          stance: supports
          locator: CBDB：兄弟 王奎（126602）之父／母 王公甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王垔 与 王奎 为同胞（CBDB 记「兄」），王奎 之父／母即 王垔 之父／母。
          source:
            id: s_Bj0bNtvQtFY79LsrSRGrhU
            source_type: api_record
            title: 中国历代人物传记资料库：王垔（CBDB 272411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272411&o=json
            external_identifier: CBDB:272411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uV1YjCTPo5QWbEPfDKw9o3
        status: active
        display_name: 王公甫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZLibHbIrwzHimlf1pVhSgr
        subject_person_id: p_DBSpMx5KF2ajdMrE1Fppef
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Jr6pF8cJSR9CuG4WzP69q3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ATzOp2ql78VQXaeLW8G2jW
          claim_id: c_ZLibHbIrwzHimlf1pVhSgr
          source_id: s_Bj0bNtvQtFY79LsrSRGrhU
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126602 王奎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Bj0bNtvQtFY79LsrSRGrhU
            source_type: api_record
            title: 中国历代人物传记资料库：王垔（CBDB 272411）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272411&o=json
            external_identifier: CBDB:272411
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DBSpMx5KF2ajdMrE1Fppef
        status: active
        display_name: 王奎
        merged_into_person_id: null
---

# 王垔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王垔 | accepted |
| bio.summary | 王垔，明人物。弘治十五年進士，籍贯武進。（中国历代人物传记资料库 CBDB 272411） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uV1YjCTPo5QWbEPfDKw9o3 | 王公甫 | accepted |
| other | p_DBSpMx5KF2ajdMrE1Fppef | 王奎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王垔（CBDB 272411）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=272411&o=json)
