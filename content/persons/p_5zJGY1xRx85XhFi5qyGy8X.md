---
schema: wang-person/v1
id: p_5zJGY1xRx85XhFi5qyGy8X
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JKCkQ2A8f5CMRs3LQBBamf
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7H7zo4WMQSGFJ5U83ShZAs
          claim_id: c_JKCkQ2A8f5CMRs3LQBBamf
          source_id: s_nsKoMQeADA93R5yDRUHfkV
          stance: supports
          locator: CBDB:60923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60923）
          source: &a1
            id: s_nsKoMQeADA93R5yDRUHfkV
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 60923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60923&o=json
            external_identifier: CBDB:60923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.880Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vSgVP5DzJtQoiubQKcrGjh
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1601年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SCECuM93nQCiQEGB65GMJv
          claim_id: c_vSgVP5DzJtQoiubQKcrGjh
          source_id: s_nsKoMQeADA93R5yDRUHfkV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_6woiMS4UUDa8xf8iZ9SKRG
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1644年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9L2bVDyFJTnnJufjR3RhkY
          claim_id: c_6woiMS4UUDa8xf8iZ9SKRG
          source_id: s_nsKoMQeADA93R5yDRUHfkV
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
        id: c_RZWaeBVmiRwmJ7fnfSjRdw
        subject_person_id: p_5zJGY1xRx85XhFi5qyGy8X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNYftvCJ2PmFo22NW5Efdy
          claim_id: c_RZWaeBVmiRwmJ7fnfSjRdw
          source_id: s_nsKoMQeADA93R5yDRUHfkV
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| birth.date | 1601年 | accepted |
| death.date | 1644年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 60923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60923&o=json)
