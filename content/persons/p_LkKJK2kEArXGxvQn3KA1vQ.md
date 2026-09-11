---
schema: wang-person/v1
id: p_LkKJK2kEArXGxvQn3KA1vQ
status: active
merged_into: null
display_name: 王永寧
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vBE94xenHQhTLA23K3MGPf
        subject_person_id: p_LkKJK2kEArXGxvQn3KA1vQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x399khz672T2PD3KNRCMFk
          claim_id: c_vBE94xenHQhTLA23K3MGPf
          source_id: s_7RUJc6wJgzAYr9tf5bf15J
          stance: supports
          locator: CBDB:228100
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（228100）
          source: &a1
            id: s_7RUJc6wJgzAYr9tf5bf15J
            source_type: api_record
            title: 中国历代人物传记资料库：王永寧（CBDB 228100）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228100&o=json
            external_identifier: CBDB:228100
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gWkCo9VukeXgXFaHBY36FM
        subject_person_id: p_LkKJK2kEArXGxvQn3KA1vQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TqZ4g9cmDVKAf5HctMHAi9
          claim_id: c_gWkCo9VukeXgXFaHBY36FM
          source_id: s_7RUJc6wJgzAYr9tf5bf15J
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_lE5T9H8s2b7gS1_uldAMk0
        subject_person_id: p_LkKJK2kEArXGxvQn3KA1vQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_h3Q7yK4WppDDdJLx2W9dJW
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WMKeikUnmcPvZQZGT_GZI-
          claim_id: c_lE5T9H8s2b7gS1_uldAMk0
          source_id: s_7RUJc6wJgzAYr9tf5bf15J
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第四十六名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_h3Q7yK4WppDDdJLx2W9dJW
        status: active
        display_name: 王圖
        merged_into_person_id: null
    - claim:
        id: c_SwFbY_zv46WOL_yati0WUa
        subject_person_id: p_LkKJK2kEArXGxvQn3KA1vQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_T2aW2r8VNf284ord2Teaqx
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M8Du-kWQX1Jr2-xe9CJqhg
          claim_id: c_SwFbY_zv46WOL_yati0WUa
          source_id: s_7RUJc6wJgzAYr9tf5bf15J
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百一十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_T2aW2r8VNf284ord2Teaqx
        status: active
        display_name: 王國
        merged_into_person_id: null
  other: []
---

# 王永寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永寧 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_h3Q7yK4WppDDdJLx2W9dJW | 王圖 | accepted |
| descendants | p_T2aW2r8VNf284ord2Teaqx | 王國 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永寧（CBDB 228100）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=228100&o=json)
