---
schema: wang-person/v1
id: p_2muzTf8r13AQgYtXhMPiQM
status: active
merged_into: null
display_name: 王樂志
cbdb_id: 238442
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NGCDpdPG62XeTYMMkcMoga
        subject_person_id: p_2muzTf8r13AQgYtXhMPiQM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂志，明人物。成化二年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 238442）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_KnUFOAnaZn_7a005dsu51M
          claim_id: c_NGCDpdPG62XeTYMMkcMoga
          source_id: s_o4d1LDum99oaDURtqVBc8c
          stance: supports
          locator: CBDB:238442
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_o4d1LDum99oaDURtqVBc8c
            source_type: api_record
            title: 中国历代人物传记资料库：王樂志（CBDB 238442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238442&o=json
            external_identifier: CBDB:238442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Prf6VoMbuPEH2xDDqQDFuV
        subject_person_id: p_2muzTf8r13AQgYtXhMPiQM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王樂志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_MLTq6Ht1Zy9WWQ1igrhs4D
          claim_id: c_Prf6VoMbuPEH2xDDqQDFuV
          source_id: s_o4d1LDum99oaDURtqVBc8c
          stance: supports
          locator: CBDB:238442
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_p4VOm4kvfVfoo_A1K0SZsI
        subject_person_id: p_3vRsxiKfaTFa2ztS9aVsqB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2muzTf8r13AQgYtXhMPiQM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N1Kez7U0DdvMJFjL1vyjAQ
          claim_id: c_p4VOm4kvfVfoo_A1K0SZsI
          source_id: s_zCgGofG-HpVY4py0MGU-_L
          stance: supports
          locator: CBDB：兄弟 王相（68074）之父／母 王惟新
          quotation: null
          interpretation_note: 由兄弟关系推断：王樂志 与 王相 为同胞（CBDB 记「弟」），王相 之父／母即 王樂志 之父／母。
          source:
            id: s_zCgGofG-HpVY4py0MGU-_L
            source_type: api_record
            title: 中国历代人物传记资料库：王樂志（CBDB 238442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238442&o=json
            external_identifier: CBDB:238442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3vRsxiKfaTFa2ztS9aVsqB
        status: active
        display_name: 王惟新
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HkB0KD0eIgR7-hJBEq9yYc
        subject_person_id: p_2muzTf8r13AQgYtXhMPiQM
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b2PRCnVEBsHtgqHZaJPLzQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KAxkpUkIyqZD41guFJtpzo
          claim_id: c_HkB0KD0eIgR7-hJBEq9yYc
          source_id: s_zCgGofG-HpVY4py0MGU-_L
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68074 王相）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zCgGofG-HpVY4py0MGU-_L
            source_type: api_record
            title: 中国历代人物传记资料库：王樂志（CBDB 238442）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238442&o=json
            external_identifier: CBDB:238442
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b2PRCnVEBsHtgqHZaJPLzQ
        status: active
        display_name: 王相
        merged_into_person_id: null
---

# 王樂志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王樂志，明人物。成化二年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 238442） | accepted |
| name.primary | 王樂志 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3vRsxiKfaTFa2ztS9aVsqB | 王惟新 | accepted |
| other | p_b2PRCnVEBsHtgqHZaJPLzQ | 王相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王樂志（CBDB 238442）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=238442&o=json)
