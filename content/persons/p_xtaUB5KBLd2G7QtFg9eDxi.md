---
schema: wang-person/v1
id: p_xtaUB5KBLd2G7QtFg9eDxi
status: active
merged_into: null
display_name: 王鉅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_E8sjiQ4AGVw9BQtmF1vxTK
        subject_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wxL7Hkz4XV2yaqqZjrUPrF
          claim_id: c_E8sjiQ4AGVw9BQtmF1vxTK
          source_id: s_ANJ1vH2CHvgNsxiBZ6UZeF
          stance: supports
          locator: CBDB:175714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175714）
          source: &a1
            id: s_ANJ1vH2CHvgNsxiBZ6UZeF
            source_type: api_record
            title: 中国历代人物传记资料库：王鉅（CBDB 175714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175714&o=json
            external_identifier: CBDB:175714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.076Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DJoFz2Je8P8T3KpDF6ULyc
        subject_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 917年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GLrwQ9LQrybNZxgaY1sGfn
          claim_id: c_DJoFz2Je8P8T3KpDF6ULyc
          source_id: s_ANJ1vH2CHvgNsxiBZ6UZeF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_41R3XuqurKpvzLDN5HsiT3
        subject_person_id: p_xtaUB5KBLd2G7QtFg9eDxi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2qFxfqA6LVxkjd8Z5vXaSY
          claim_id: c_41R3XuqurKpvzLDN5HsiT3
          source_id: s_ANJ1vH2CHvgNsxiBZ6UZeF
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
  descendants: []
  other: []
---

# 王鉅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉅 | accepted |
| death.date | 917年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉅（CBDB 175714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175714&o=json)
