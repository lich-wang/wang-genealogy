---
schema: wang-person/v1
id: p_jjcGJkv2ABHQmgrtteSHmA
status: active
merged_into: null
display_name: 王宸
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9HPNnbPxhBvkTkC77NoaMQ
        subject_person_id: p_jjcGJkv2ABHQmgrtteSHmA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QfB5vZ8QTzHXa89PWha24f
          claim_id: c_9HPNnbPxhBvkTkC77NoaMQ
          source_id: s_TaMrdR26PMp3cEfRPfNAJ9
          stance: supports
          locator: CBDB:255127
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（255127）
          source: &a1
            id: s_TaMrdR26PMp3cEfRPfNAJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 255127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255127&o=json
            external_identifier: CBDB:255127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.332Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RoUdiZtmcm4JPFoWM9xDfs
        subject_person_id: p_jjcGJkv2ABHQmgrtteSHmA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宸，明人物。成化十七年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 255127）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_L1eZ6uVCotw1IzGldL1uja
          claim_id: c_RoUdiZtmcm4JPFoWM9xDfs
          source_id: s_TaMrdR26PMp3cEfRPfNAJ9
          stance: supports
          locator: CBDB:255127
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7xDJ6sZCDBIWFX4GAgIoND
        subject_person_id: p_Y1LJt1fbRrve98s4v1UUF2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jjcGJkv2ABHQmgrtteSHmA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9PgsAqYdfyxU0BANdlSI6K
          claim_id: c_7xDJ6sZCDBIWFX4GAgIoND
          source_id: s_Fv_tcbCl7EK-Ssq95OnwM-
          stance: supports
          locator: CBDB：兄弟 王宥（200225）之父／母 王志積
          quotation: null
          interpretation_note: 由兄弟关系推断：王宸 与 王宥 为同胞（CBDB 记「兄」），王宥 之父／母即 王宸 之父／母。
          source:
            id: s_Fv_tcbCl7EK-Ssq95OnwM-
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 255127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255127&o=json
            external_identifier: CBDB:255127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Y1LJt1fbRrve98s4v1UUF2
        status: active
        display_name: 王志積
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_lLwu-4RcFzgI85dJmt_bcv
        subject_person_id: p_15Nh8Xnsw6Q2WxxXdtixbY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jjcGJkv2ABHQmgrtteSHmA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xa1jBwEZx2CBfNcVIfUZJj
          claim_id: c_lLwu-4RcFzgI85dJmt_bcv
          source_id: s_Fv_tcbCl7EK-Ssq95OnwM-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200225 王宥）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Fv_tcbCl7EK-Ssq95OnwM-
            source_type: api_record
            title: 中国历代人物传记资料库：王宸（CBDB 255127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255127&o=json
            external_identifier: CBDB:255127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_15Nh8Xnsw6Q2WxxXdtixbY
        status: active
        display_name: 王宥
        merged_into_person_id: null
---

# 王宸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宸 | accepted |
| bio.summary | 王宸，明人物。成化十七年進士，籍贯淳安。（中国历代人物传记资料库 CBDB 255127） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Y1LJt1fbRrve98s4v1UUF2 | 王志積 | accepted |
| other | p_15Nh8Xnsw6Q2WxxXdtixbY | 王宥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宸（CBDB 255127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255127&o=json)
