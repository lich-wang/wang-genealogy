---
schema: wang-person/v1
id: p_6es6XQ9pfmNf8BVum2oix6
status: active
merged_into: null
display_name: 王堯咨
cbdb_id: 273834
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4zQMtfeoBqWjrhwXsDT4pn
        subject_person_id: p_6es6XQ9pfmNf8BVum2oix6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯咨，明人物。弘治十八年進士，籍贯定興。（中国历代人物传记资料库 CBDB 273834）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_JSpQBQeM3-gcizSSBs9teN
          claim_id: c_4zQMtfeoBqWjrhwXsDT4pn
          source_id: s_vembvoieT6qLaqy3pMb3Np
          stance: supports
          locator: CBDB:273834
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vembvoieT6qLaqy3pMb3Np
            source_type: api_record
            title: 中国历代人物传记资料库：王堯咨（CBDB 273834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273834&o=json
            external_identifier: CBDB:273834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CQtL8tu7jLQACz1k4VC3hT
        subject_person_id: p_6es6XQ9pfmNf8BVum2oix6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯咨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FimABBXPnLLm4JeVwmUGK2
          claim_id: c_CQtL8tu7jLQACz1k4VC3hT
          source_id: s_vembvoieT6qLaqy3pMb3Np
          stance: supports
          locator: CBDB:273834
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zyuHTdkpKnCAJiCkh4aUu6
        subject_person_id: p_iqf8z5vVDeG4f4cJMH52mk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6es6XQ9pfmNf8BVum2oix6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_COUFRQXKC9SNSk1HE4yXsZ
          claim_id: c_zyuHTdkpKnCAJiCkh4aUu6
          source_id: s_6zbUhNwFxz53AvyB0Xv3MS
          stance: supports
          locator: CBDB：兄弟 王堯封（126716）之父／母 王諒
          quotation: null
          interpretation_note: 由兄弟关系推断：王堯咨 与 王堯封 为同胞（CBDB 记「兄」），王堯封 之父／母即 王堯咨 之父／母。
          source:
            id: s_6zbUhNwFxz53AvyB0Xv3MS
            source_type: api_record
            title: 中国历代人物传记资料库：王堯咨（CBDB 273834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273834&o=json
            external_identifier: CBDB:273834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iqf8z5vVDeG4f4cJMH52mk
        status: active
        display_name: 王諒
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_JxYP_x5BhUuRFFgmzWWnn4
        subject_person_id: p_6es6XQ9pfmNf8BVum2oix6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_WQELCyNtxHbkJD3Uq4LakB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekDXLXpXJbvbnKFOVmQA5b
          claim_id: c_JxYP_x5BhUuRFFgmzWWnn4
          source_id: s_6zbUhNwFxz53AvyB0Xv3MS
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126716 王堯封）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6zbUhNwFxz53AvyB0Xv3MS
            source_type: api_record
            title: 中国历代人物传记资料库：王堯咨（CBDB 273834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273834&o=json
            external_identifier: CBDB:273834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_WQELCyNtxHbkJD3Uq4LakB
        status: active
        display_name: 王堯封
        merged_into_person_id: null
---

# 王堯咨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王堯咨，明人物。弘治十八年進士，籍贯定興。（中国历代人物传记资料库 CBDB 273834） | accepted |
| name.primary | 王堯咨 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iqf8z5vVDeG4f4cJMH52mk | 王諒 | accepted |
| other | p_WQELCyNtxHbkJD3Uq4LakB | 王堯封 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堯咨（CBDB 273834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273834&o=json)
