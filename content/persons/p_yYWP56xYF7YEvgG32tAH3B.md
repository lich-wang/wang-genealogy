---
schema: wang-person/v1
id: p_yYWP56xYF7YEvgG32tAH3B
status: active
merged_into: null
display_name: 王弘訓
cbdb_id: 152941
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eH61k13pf6fxn56yU4FqqD
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘訓，南北朝人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 152941）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_Qz4fOprIO4yBCcogFQiF3N
          claim_id: c_eH61k13pf6fxn56yU4FqqD
          source_id: s_r7EDbM1bneMsxyVzj8CZd6
          stance: supports
          locator: CBDB:152941
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_r7EDbM1bneMsxyVzj8CZd6
            source_type: api_record
            title: 中国历代人物传记资料库：王弘訓（CBDB 152941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152941&o=json
            external_identifier: CBDB:152941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Z5QaKkzswr4foBp5ZrNFh4
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘訓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FDgVPGE6MqTsRxy44WNHsv
          claim_id: c_Z5QaKkzswr4foBp5ZrNFh4
          source_id: s_r7EDbM1bneMsxyVzj8CZd6
          stance: supports
          locator: CBDB:152941
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2101-2200）｜历史性依据：CBDB 朝代 = 南北朝
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_JwLgh894EHQReTgYV9iSq8
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_4EU5hab5MGo71FXwq1jBL2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j7ZnpUu38q5oaP6ydMCHGy
          claim_id: c_JwLgh894EHQReTgYV9iSq8
          source_id: s_r7EDbM1bneMsxyVzj8CZd6
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：唐五代人物傳記與社會網絡資料庫(1.0版)
          source: &a2
            id: s_r7EDbM1bneMsxyVzj8CZd6
            source_type: api_record
            title: 中国历代人物传记资料库：王弘訓（CBDB 152941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152941&o=json
            external_identifier: CBDB:152941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_4EU5hab5MGo71FXwq1jBL2
        status: active
        display_name: 王方智
        merged_into_person_id: null
    - claim:
        id: c_aHt2vuBu8N-DukH96XF8qU
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_N6zEFEEgStf5fQ4uCRBUU6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yX2tJQRML6Z-u46-mFGUgy
          claim_id: c_aHt2vuBu8N-DukH96XF8qU
          source_id: s_wzH346Fo8wuaWyruQm3NXk
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wzH346Fo8wuaWyruQm3NXk
            source_type: api_record
            title: 中国历代人物传记资料库：王方茂（CBDB 175650）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175650&o=json
            external_identifier: CBDB:175650
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N6zEFEEgStf5fQ4uCRBUU6
        status: active
        display_name: 王方茂
        merged_into_person_id: null
    - claim:
        id: c_uKeXVuF45_UHzIqBObj5sO
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4EU5hab5MGo71FXwq1jBL2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VHdW1qz5lOxw_aWTNAVHl5
          claim_id: c_uKeXVuF45_UHzIqBObj5sO
          source_id: s_r7EDbM1bneMsxyVzj8CZd6
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_4EU5hab5MGo71FXwq1jBL2
        status: active
        display_name: 王方智
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_xZwMUqeBSgarFHu_a5K1Qk
        subject_person_id: p_yYWP56xYF7YEvgG32tAH3B
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_acJL151CL8ZU3mDEqikzmS
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eAaG-hFldefnhHbaSgEVHK
          claim_id: c_xZwMUqeBSgarFHu_a5K1Qk
          source_id: s_D1gG2bqcGeVVKDsDwya71E
          stance: supports
          locator: 唐代墓誌匯編:二卷，Kaiyuan 471：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_D1gG2bqcGeVVKDsDwya71E
            source_type: api_record
            title: 中国历代人物传记资料库：王固己（CBDB 140737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140737&o=json
            external_identifier: CBDB:140737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_acJL151CL8ZU3mDEqikzmS
        status: active
        display_name: 王固己
        merged_into_person_id: null
  other: []
---

# 王弘訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘訓，南北朝人物。籍贯臨沂。（中国历代人物传记资料库 CBDB 152941） | accepted |
| name.primary | 王弘訓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4EU5hab5MGo71FXwq1jBL2 | 王方智 | accepted |
| children | p_N6zEFEEgStf5fQ4uCRBUU6 | 王方茂 | accepted |
| children | p_4EU5hab5MGo71FXwq1jBL2 | 王方智 | accepted |
| descendants | p_acJL151CL8ZU3mDEqikzmS | 王固己 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方茂（CBDB 175650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175650&o=json)
- [中国历代人物传记资料库：王固己（CBDB 140737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140737&o=json)
- [中国历代人物传记资料库：王弘訓（CBDB 152941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152941&o=json)
