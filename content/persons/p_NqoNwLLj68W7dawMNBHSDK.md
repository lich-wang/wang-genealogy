---
schema: wang-person/v1
id: p_NqoNwLLj68W7dawMNBHSDK
status: active
merged_into: null
display_name: 王素
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6Sr3j3rFaQxLUFkBM7Fy8n
        subject_person_id: p_NqoNwLLj68W7dawMNBHSDK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AacQhUMBmAEAiCtDQJCHZA
          claim_id: c_6Sr3j3rFaQxLUFkBM7Fy8n
          source_id: s_F1vDHqBw4wgiCkqJJhd3kV
          stance: supports
          locator: CBDB:306916
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（306916）
          source: &a1
            id: s_F1vDHqBw4wgiCkqJJhd3kV
            source_type: api_record
            title: 中国历代人物传记资料库：王素（CBDB 306916）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306916&o=json
            external_identifier: CBDB:306916
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G9Lzsw9LAdd3t3V5wBLk6z
        subject_person_id: p_NqoNwLLj68W7dawMNBHSDK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王素，明人物。嘉靖二十三年進士，曾任主簿。（中国历代人物传记资料库 CBDB 306916）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D2vOGqKcCs0cofaU9BTnnI
          claim_id: c_G9Lzsw9LAdd3t3V5wBLk6z
          source_id: s_F1vDHqBw4wgiCkqJJhd3kV
          stance: supports
          locator: CBDB:306916
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_jNrE0Aov0aUd1zDdd_881H
        subject_person_id: p_NqoNwLLj68W7dawMNBHSDK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_mj43p62dQVDfJdFrwRMJq5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_elxXs1zVYno6NGcCiMzANf
          claim_id: c_jNrE0Aov0aUd1zDdd_881H
          source_id: s_Z58o2X71P1Yga6T4xe26Xv
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第六十九名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z58o2X71P1Yga6T4xe26Xv
            source_type: api_record
            title: 中国历代人物传记资料库：王學（CBDB 203587）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203587&o=json
            external_identifier: CBDB:203587
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.794Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mj43p62dQVDfJdFrwRMJq5
        status: active
        display_name: 王學
        merged_into_person_id: null
  other: []
---

# 王素

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王素 | accepted |
| bio.summary | 王素，明人物。嘉靖二十三年進士，曾任主簿。（中国历代人物传记资料库 CBDB 306916） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_mj43p62dQVDfJdFrwRMJq5 | 王學 | accepted |

## 外部来源

- [中国历代人物传记资料库：王素（CBDB 306916）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306916&o=json)
- [中国历代人物传记资料库：王學（CBDB 203587）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203587&o=json)
