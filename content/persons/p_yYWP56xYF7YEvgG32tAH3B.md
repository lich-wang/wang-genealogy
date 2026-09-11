---
schema: wang-person/v1
id: p_yYWP56xYF7YEvgG32tAH3B
status: active
merged_into: null
display_name: 王弘訓
cbdb_id: 152941
revision: 3
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
          text: 王弘訓，南北朝人物。CBDB 记录其籍贯记录为河南。中国历代人物传记资料库（CBDB）以人物编号 152941 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
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
          source:
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
          source: *a1
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王弘訓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘訓，南北朝人物。CBDB 记录其籍贯记录为河南。中国历代人物传记资料库（CBDB）以人物编号 152941 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王弘訓 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_4EU5hab5MGo71FXwq1jBL2 | 王方智 | accepted |
| children | p_N6zEFEEgStf5fQ4uCRBUU6 | 王方茂 | accepted |

## 外部来源

- [中国历代人物传记资料库：王方茂（CBDB 175650）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175650&o=json)
- [中国历代人物传记资料库：王弘訓（CBDB 152941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152941&o=json)
