---
schema: wang-person/v1
id: p_nZxuzwuZ74TcymvsCP5xz2
status: active
merged_into: null
display_name: 王鍍
cbdb_id: 212646
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5yPkH9Mrc5eE6ExZfqMWt8
        subject_person_id: p_nZxuzwuZ74TcymvsCP5xz2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍍，明人物。萬曆二年進士，籍贯壽張。（中国历代人物传记资料库 CBDB 212646）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_RWQXpso-636y2DbLLtc25j
          claim_id: c_5yPkH9Mrc5eE6ExZfqMWt8
          source_id: s_JsYGdvPoNEVEdHHNJCCWWH
          stance: supports
          locator: CBDB:212646
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_JsYGdvPoNEVEdHHNJCCWWH
            source_type: api_record
            title: 中国历代人物传记资料库：王鍍（CBDB 212646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json
            external_identifier: CBDB:212646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hDP7ugA9mDKf5wPpdWpboX
        subject_person_id: p_nZxuzwuZ74TcymvsCP5xz2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鍍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_9ijpCBnrHBq9JM83Ni1b6R
          claim_id: c_hDP7ugA9mDKf5wPpdWpboX
          source_id: s_JsYGdvPoNEVEdHHNJCCWWH
          stance: supports
          locator: CBDB:212646
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T6It1a7vWZK7Zc7KkqFh5n
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nZxuzwuZ74TcymvsCP5xz2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHIhu_ncXx3ZZKcx25trGV
          claim_id: c_T6It1a7vWZK7Zc7KkqFh5n
          source_id: s_02IVmi36FyTJ7hN_8kI8HV
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍍 与 王錄 为同胞（CBDB 记「兄」），王錄 之父／母即 王鍍 之父／母。
          source:
            id: s_02IVmi36FyTJ7hN_8kI8HV
            source_type: api_record
            title: 中国历代人物传记资料库：王鍍（CBDB 212646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json
            external_identifier: CBDB:212646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1XSyusiB7GXwQNmzrNDUf4
        status: active
        display_name: 王謙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xCtVW-nYfIj8ygBZO4ZUkY
        subject_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nZxuzwuZ74TcymvsCP5xz2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3pSLZJUqF0l3S_LQ6BSwez
          claim_id: c_xCtVW-nYfIj8ygBZO4ZUkY
          source_id: s_02IVmi36FyTJ7hN_8kI8HV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206049 王錄）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_02IVmi36FyTJ7hN_8kI8HV
            source_type: api_record
            title: 中国历代人物传记资料库：王鍍（CBDB 212646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json
            external_identifier: CBDB:212646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9WD2WpcaAMBVHNJjVMQ2UR
        status: active
        display_name: 王錄
        merged_into_person_id: null
---

# 王鍍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鍍，明人物。萬曆二年進士，籍贯壽張。（中国历代人物传记资料库 CBDB 212646） | accepted |
| name.primary | 王鍍 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1XSyusiB7GXwQNmzrNDUf4 | 王謙 | accepted |
| other | p_9WD2WpcaAMBVHNJjVMQ2UR | 王錄 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍍（CBDB 212646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json)
