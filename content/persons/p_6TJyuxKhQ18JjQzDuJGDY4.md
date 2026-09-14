---
schema: wang-person/v1
id: p_6TJyuxKhQ18JjQzDuJGDY4
status: active
merged_into: null
display_name: 王器
cbdb_id: 267138
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7QVUWbR4C579VJG9yb3qbg
        subject_person_id: p_6TJyuxKhQ18JjQzDuJGDY4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王器，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267138）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Eq13wpu7RqUEaBCcRQIKqb
          claim_id: c_7QVUWbR4C579VJG9yb3qbg
          source_id: s_Qd7HacmqFLxkWcEmLp16tA
          stance: supports
          locator: CBDB:267138
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Qd7HacmqFLxkWcEmLp16tA
            source_type: api_record
            title: 中国历代人物传记资料库：王器（CBDB 267138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json
            external_identifier: CBDB:267138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_R2Q5U4FHpKDAe9kbgdASx4
        subject_person_id: p_6TJyuxKhQ18JjQzDuJGDY4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王器
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_hhpPd4eNB7UP37JCkmQZWD
          claim_id: c_R2Q5U4FHpKDAe9kbgdASx4
          source_id: s_Qd7HacmqFLxkWcEmLp16tA
          stance: supports
          locator: CBDB:267138
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3101-3200）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sLa1ybxoHw_l-OfuOW2jkP
        subject_person_id: p_CKPv9UAc3q29PWyukafcq8
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6TJyuxKhQ18JjQzDuJGDY4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__FovYeKTxzYlp8PzcTSrmO
          claim_id: c_sLa1ybxoHw_l-OfuOW2jkP
          source_id: s_l7WMjAe31oVQxKX7OK_8tE
          stance: supports
          locator: CBDB：兄弟 王魯（198398）之父／母 王文奎
          quotation: null
          interpretation_note: 由兄弟关系推断：王器 与 王魯 为同胞（CBDB 记「兄」），王魯 之父／母即 王器 之父／母。
          source:
            id: s_l7WMjAe31oVQxKX7OK_8tE
            source_type: api_record
            title: 中国历代人物传记资料库：王器（CBDB 267138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json
            external_identifier: CBDB:267138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CKPv9UAc3q29PWyukafcq8
        status: active
        display_name: 王文奎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bgpaOQLro4MvV9XHVyym2I
        subject_person_id: p_6TJyuxKhQ18JjQzDuJGDY4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_q8jv2duMSqfqCbpkkK9Wow
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YrgmAaex2XXqUMc7_PW5Bc
          claim_id: c_bgpaOQLro4MvV9XHVyym2I
          source_id: s_l7WMjAe31oVQxKX7OK_8tE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198398 王魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_l7WMjAe31oVQxKX7OK_8tE
            source_type: api_record
            title: 中国历代人物传记资料库：王器（CBDB 267138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json
            external_identifier: CBDB:267138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_q8jv2duMSqfqCbpkkK9Wow
        status: active
        display_name: 王魯
        merged_into_person_id: null
---

# 王器

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王器，明人物。景泰五年進士，籍贯溧水。（中国历代人物传记资料库 CBDB 267138） | accepted |
| name.primary | 王器 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CKPv9UAc3q29PWyukafcq8 | 王文奎 | accepted |
| other | p_q8jv2duMSqfqCbpkkK9Wow | 王魯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王器（CBDB 267138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=267138&o=json)
