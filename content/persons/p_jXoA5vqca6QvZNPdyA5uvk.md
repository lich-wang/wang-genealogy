---
schema: wang-person/v1
id: p_jXoA5vqca6QvZNPdyA5uvk
status: active
merged_into: null
display_name: 王綏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UXv7yZCbbKyfqQ96iHGQMB
        subject_person_id: p_jXoA5vqca6QvZNPdyA5uvk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ab52P6pwARCj4W4NKH2XD
          claim_id: c_UXv7yZCbbKyfqQ96iHGQMB
          source_id: s_Va8GBFQ41bQv9vaphDePri
          stance: supports
          locator: CBDB:318571
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（318571）
          source: &a1
            id: s_Va8GBFQ41bQv9vaphDePri
            source_type: api_record
            title: 中国历代人物传记资料库：王綏（CBDB 318571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318571&o=json
            external_identifier: CBDB:318571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.006Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UgG4DMyobDBonkoqoU5s7N
        subject_person_id: p_jXoA5vqca6QvZNPdyA5uvk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綏，明人物。嘉靖三十二年進士，籍贯保安。（中国历代人物传记资料库 CBDB 318571）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PwwyXg9Hl5vYRSIMEUsz5h
          claim_id: c_UgG4DMyobDBonkoqoU5s7N
          source_id: s_Va8GBFQ41bQv9vaphDePri
          stance: supports
          locator: CBDB:318571
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gdnHODi3T8V44tEsAWRJqe
        subject_person_id: p_3dg1PVXVExHpSS6KGA8n5K
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jXoA5vqca6QvZNPdyA5uvk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SSVznxIVY587Jmz7vn_gja
          claim_id: c_gdnHODi3T8V44tEsAWRJqe
          source_id: s_4kCjmQ7eODc5Qj0xRD7SB5
          stance: supports
          locator: CBDB：兄弟 王大任（204398）之父／母 王熙
          quotation: null
          interpretation_note: 由兄弟关系推断：王綏 与 王大任 为同胞（CBDB 记「弟」），王大任 之父／母即 王綏 之父／母。
          source:
            id: s_4kCjmQ7eODc5Qj0xRD7SB5
            source_type: api_record
            title: 中国历代人物传记资料库：王綏（CBDB 318571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318571&o=json
            external_identifier: CBDB:318571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3dg1PVXVExHpSS6KGA8n5K
        status: active
        display_name: 王熙
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_oN0N1Rx1nUf_ytddqKB9HR
        subject_person_id: p_iJvJfwUqKTgqcKUSXQkKTK
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jXoA5vqca6QvZNPdyA5uvk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cZFPERooxUJorJgE4bU8f2
          claim_id: c_oN0N1Rx1nUf_ytddqKB9HR
          source_id: s_4kCjmQ7eODc5Qj0xRD7SB5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204398 王大任）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4kCjmQ7eODc5Qj0xRD7SB5
            source_type: api_record
            title: 中国历代人物传记资料库：王綏（CBDB 318571）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318571&o=json
            external_identifier: CBDB:318571
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iJvJfwUqKTgqcKUSXQkKTK
        status: active
        display_name: 王大任
        merged_into_person_id: null
---

# 王綏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綏 | accepted |
| bio.summary | 王綏，明人物。嘉靖三十二年進士，籍贯保安。（中国历代人物传记资料库 CBDB 318571） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3dg1PVXVExHpSS6KGA8n5K | 王熙 | accepted |
| other | p_iJvJfwUqKTgqcKUSXQkKTK | 王大任 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綏（CBDB 318571）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=318571&o=json)
