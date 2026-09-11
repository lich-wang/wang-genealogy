---
schema: wang-person/v1
id: p_WN27M58uY6ww61Pz9TqM6T
status: active
merged_into: null
display_name: 邊氏
revision: 1
cbdb_id: 239500
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6AuQjlsqrx89tdPwJ7qRJY
        subject_person_id: p_WN27M58uY6ww61Pz9TqM6T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 邊氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VKQ5ayApT9zAerKbBF-3uP
          claim_id: c_6AuQjlsqrx89tdPwJ7qRJY
          source_id: s_DZrhH4rVAjhKfYHvcM-2AJ
          stance: supports
          locator: CBDB:239500
          quotation: null
          interpretation_note: CBDB 明确记录的王允配偶
          source: &a1
            id: s_DZrhH4rVAjhKfYHvcM-2AJ
            source_type: api_record
            title: 中国历代人物传记资料库：邊氏(王允妻)（CBDB 239500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239500&o=json
            external_identifier: CBDB:239500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kCu5NCt4DfPkWy6zR9wfki
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WN27M58uY6ww61Pz9TqM6T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1620HtFRxUzFbM01SoZ3R
          claim_id: c_kCu5NCt4DfPkWy6zR9wfki
          source_id: s_DZrhH4rVAjhKfYHvcM-2AJ
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第二十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7kt2c6LEEJXJ45MmJkyvhy
        status: active
        display_name: 王允
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 邊氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 邊氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_7kt2c6LEEJXJ45MmJkyvhy | 王允 | accepted |

## 外部来源

- [中国历代人物传记资料库：邊氏(王允妻)（CBDB 239500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239500&o=json)
