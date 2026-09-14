---
schema: wang-person/v1
id: p_K74x4UruQpAW2fkYoD9eky
status: active
merged_into: null
display_name: 王清
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dpxZ2Att3fkVBADcDgQvTN
        subject_person_id: p_K74x4UruQpAW2fkYoD9eky
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nJDEcN5VGVgva6Yv9myFaS
          claim_id: c_dpxZ2Att3fkVBADcDgQvTN
          source_id: s_rED45EPTtfxTK9T8zPGN5p
          stance: supports
          locator: CBDB:265528
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（265528）
          source: &a1
            id: s_rED45EPTtfxTK9T8zPGN5p
            source_type: api_record
            title: 中国历代人物传记资料库：王清（CBDB 265528）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265528&o=json
            external_identifier: CBDB:265528
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.689Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yQKD6p4qzDcVUDYJ4EmQGS
        subject_person_id: p_K74x4UruQpAW2fkYoD9eky
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清，明人物。弘治六年進士，籍贯六合。（中国历代人物传记资料库 CBDB 265528）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__4Fy4Y1wEItEsu6JThvwF_
          claim_id: c_yQKD6p4qzDcVUDYJ4EmQGS
          source_id: s_rED45EPTtfxTK9T8zPGN5p
          stance: supports
          locator: CBDB:265528
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ZopYMUwbig6Wy3Nzej5axS
        subject_person_id: p_K74x4UruQpAW2fkYoD9eky
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NMRFUBeVmvdX6z58cRugYK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hti4orTCX76p6iEeh8azaH
          claim_id: c_ZopYMUwbig6Wy3Nzej5axS
          source_id: s_rED45EPTtfxTK9T8zPGN5p
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_NMRFUBeVmvdX6z58cRugYK
        status: active
        display_name: 王弘
        merged_into_person_id: null
    - claim:
        id: c_8NOx-APnbZYG_OlZED1WZd
        subject_person_id: p_K74x4UruQpAW2fkYoD9eky
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1p7u7Zi1tzHJVtkYQBXATD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UyU1nkAAJaAq0KRyNNybSz
          claim_id: c_8NOx-APnbZYG_OlZED1WZd
          source_id: s__KUZCCLAMOVdUaq8rXKDLo
          stance: supports
          locator: CBDB：兄弟 王弘（200979）之父／母 王清
          quotation: null
          interpretation_note: 由兄弟关系推断：王泰 与 王弘 为同胞（CBDB 记「弟」），王弘 之父／母即 王泰 之父／母。
          source:
            id: s__KUZCCLAMOVdUaq8rXKDLo
            source_type: api_record
            title: 中国历代人物传记资料库：王泰（CBDB 265531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265531&o=json
            external_identifier: CBDB:265531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_1p7u7Zi1tzHJVtkYQBXATD
        status: active
        display_name: 王泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王清 | accepted |
| bio.summary | 王清，明人物。弘治六年進士，籍贯六合。（中国历代人物传记资料库 CBDB 265528） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_NMRFUBeVmvdX6z58cRugYK | 王弘 | accepted |
| children | p_1p7u7Zi1tzHJVtkYQBXATD | 王泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王清（CBDB 265528）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265528&o=json)
- [中国历代人物传记资料库：王泰（CBDB 265531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265531&o=json)
