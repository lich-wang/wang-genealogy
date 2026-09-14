---
schema: wang-person/v1
id: p_xVKY7KvYN9zv7pvkuAt8xf
status: active
merged_into: null
display_name: 王勉新
cbdb_id: 217248
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GNbwF6DVxuAavFcZa7tuaL
        subject_person_id: p_xVKY7KvYN9zv7pvkuAt8xf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉新，明人物。天順八年進士，籍贯稷山。（中国历代人物传记资料库 CBDB 217248）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_hrb24hI7yucDzD_1n0QM7G
          claim_id: c_GNbwF6DVxuAavFcZa7tuaL
          source_id: s_DDFHdfUMNdYEE1s9CE5Qe8
          stance: supports
          locator: CBDB:217248
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_DDFHdfUMNdYEE1s9CE5Qe8
            source_type: api_record
            title: 中国历代人物传记资料库：王勉新（CBDB 217248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217248&o=json
            external_identifier: CBDB:217248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_eWRBT8TLQ6GDdHDS7KWEmJ
        subject_person_id: p_xVKY7KvYN9zv7pvkuAt8xf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉新
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NB4W5nt2Mto8WUUEaP4SZg
          claim_id: c_eWRBT8TLQ6GDdHDS7KWEmJ
          source_id: s_DDFHdfUMNdYEE1s9CE5Qe8
          stance: supports
          locator: CBDB:217248
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ac7IgG4_gZB63mD7d_0ZNJ
        subject_person_id: p_12DEVgMDKmXWxrfKEnUPE7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xVKY7KvYN9zv7pvkuAt8xf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w2aPxiEfEcwH3_L4WEE3oq
          claim_id: c_Ac7IgG4_gZB63mD7d_0ZNJ
          source_id: s_6EBqgu-bzHJxxArMEvAX-7
          stance: supports
          locator: CBDB：兄弟 王衡（124006）之父／母 王琅
          quotation: null
          interpretation_note: 由兄弟关系推断：王勉新 与 王衡 为同胞（CBDB 记「弟」），王衡 之父／母即 王勉新 之父／母。
          source:
            id: s_6EBqgu-bzHJxxArMEvAX-7
            source_type: api_record
            title: 中国历代人物传记资料库：王勉新（CBDB 217248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217248&o=json
            external_identifier: CBDB:217248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_12DEVgMDKmXWxrfKEnUPE7
        status: active
        display_name: 王琅
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Q1Oe6jGGSYyDjEFq4lng-B
        subject_person_id: p_JL51TddY85M5VjjQdk9Dbd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xVKY7KvYN9zv7pvkuAt8xf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2wR4fyimI6M3wCcuvGRQQ2
          claim_id: c_Q1Oe6jGGSYyDjEFq4lng-B
          source_id: s_6EBqgu-bzHJxxArMEvAX-7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124006 王衡）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6EBqgu-bzHJxxArMEvAX-7
            source_type: api_record
            title: 中国历代人物传记资料库：王勉新（CBDB 217248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217248&o=json
            external_identifier: CBDB:217248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_JL51TddY85M5VjjQdk9Dbd
        status: active
        display_name: 王衡
        merged_into_person_id: null
---

# 王勉新

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王勉新，明人物。天順八年進士，籍贯稷山。（中国历代人物传记资料库 CBDB 217248） | accepted |
| name.primary | 王勉新 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_12DEVgMDKmXWxrfKEnUPE7 | 王琅 | accepted |
| other | p_JL51TddY85M5VjjQdk9Dbd | 王衡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王勉新（CBDB 217248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217248&o=json)
