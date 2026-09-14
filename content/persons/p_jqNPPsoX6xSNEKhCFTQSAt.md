---
schema: wang-person/v1
id: p_jqNPPsoX6xSNEKhCFTQSAt
status: active
merged_into: null
display_name: 王乂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FvJ4jE9p6AdGMGmDkifvES
        subject_person_id: p_jqNPPsoX6xSNEKhCFTQSAt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZB7eHFrdid986BN1d85JhL
          claim_id: c_FvJ4jE9p6AdGMGmDkifvES
          source_id: s_pRynT5fgy6rym3jU3DhLuQ
          stance: supports
          locator: CBDB:151022
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（151022）
          source: &a1
            id: s_pRynT5fgy6rym3jU3DhLuQ
            source_type: api_record
            title: 中国历代人物传记资料库：王乂（CBDB 151022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151022&o=json
            external_identifier: CBDB:151022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.833Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NM5ubdN8cyeCgABhczJUsD
        subject_person_id: p_jqNPPsoX6xSNEKhCFTQSAt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王乂，史料所见人物。本项目依据《中国历代人物传记资料库：王乂（CBDB 151022）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_So9sXyLtKkkjZBOU64N5xI
          claim_id: c_NM5ubdN8cyeCgABhczJUsD
          source_id: s_pRynT5fgy6rym3jU3DhLuQ
          stance: supports
          locator: CBDB:151022
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zSLoxod3FKk5VfbMX9JXS8
        subject_person_id: p_NSq22v18MetWG3Z7WXW4xn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jqNPPsoX6xSNEKhCFTQSAt
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sxZLL91PHrsmME931-yCDp
          claim_id: c_zSLoxod3FKk5VfbMX9JXS8
          source_id: s_qZ6oCGYeG7_703PVqkSuVO
          stance: supports
          locator: CBDB：兄弟 王傑（139946）之父／母 王山輝
          quotation: null
          interpretation_note: 由兄弟关系推断：王乂 与 王傑 为同胞（CBDB 记「弟」），王傑 之父／母即 王乂 之父／母。
          source:
            id: s_qZ6oCGYeG7_703PVqkSuVO
            source_type: api_record
            title: 中国历代人物传记资料库：王乂（CBDB 151022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151022&o=json
            external_identifier: CBDB:151022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NSq22v18MetWG3Z7WXW4xn
        status: active
        display_name: 王山輝
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8lQeOzgjNkYqIz9XCXJqqL
        subject_person_id: p_Q8F1bACUG5zjQFJrLyFbx6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jqNPPsoX6xSNEKhCFTQSAt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-6Pq9kqH2H-RFe7vk-703a
          claim_id: c_8lQeOzgjNkYqIz9XCXJqqL
          source_id: s_qZ6oCGYeG7_703PVqkSuVO
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 139946 王傑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qZ6oCGYeG7_703PVqkSuVO
            source_type: api_record
            title: 中国历代人物传记资料库：王乂（CBDB 151022）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151022&o=json
            external_identifier: CBDB:151022
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q8F1bACUG5zjQFJrLyFbx6
        status: active
        display_name: 王傑
        merged_into_person_id: null
---

# 王乂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王乂 | accepted |
| bio.summary | 王乂，史料所见人物。本项目依据《中国历代人物传记资料库：王乂（CBDB 151022）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NSq22v18MetWG3Z7WXW4xn | 王山輝 | accepted |
| other | p_Q8F1bACUG5zjQFJrLyFbx6 | 王傑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王乂（CBDB 151022）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151022&o=json)
