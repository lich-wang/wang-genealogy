---
schema: wang-person/v1
id: p_bvLNHSs8bpKzSCyhyoXRyK
status: active
merged_into: null
display_name: 王彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BvxXhDKb7jhNu9UFtp2yGz
        subject_person_id: p_bvLNHSs8bpKzSCyhyoXRyK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1b4fK5G3vNJBGWtMUULKEN
          claim_id: c_BvxXhDKb7jhNu9UFtp2yGz
          source_id: s_12CPz7riS2M9nD9fvXTcb9
          stance: supports
          locator: CBDB:100796
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100796）
          source: &a1
            id: s_12CPz7riS2M9nD9fvXTcb9
            source_type: api_record
            title: 中国历代人物传记资料库：王彬（CBDB 100796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100796&o=json
            external_identifier: CBDB:100796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Rwtr5Z4nRnCT5v2DpD5ZHZ
        subject_person_id: p_bvLNHSs8bpKzSCyhyoXRyK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1282年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bwM7Ct9rrKK2SqeKBnE7Yw
          claim_id: c_Rwtr5Z4nRnCT5v2DpD5ZHZ
          source_id: s_12CPz7riS2M9nD9fvXTcb9
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
        id: c_X2y7uNQQtpKRnGqWAaMWDf
        subject_person_id: p_bvLNHSs8bpKzSCyhyoXRyK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1353年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yvSYMaUwqpGqTgYNEtMiDW
          claim_id: c_X2y7uNQQtpKRnGqWAaMWDf
          source_id: s_12CPz7riS2M9nD9fvXTcb9
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
        id: c_UTFDqmJeYg2qB7WWvd7F3C
        subject_person_id: p_bvLNHSs8bpKzSCyhyoXRyK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彬（1282年—1353年），元人物。籍贯武進。（中国历代人物传记资料库 CBDB 100796）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_YTANUH5OX023zgz55BJF7M
          claim_id: c_UTFDqmJeYg2qB7WWvd7F3C
          source_id: s_12CPz7riS2M9nD9fvXTcb9
          stance: supports
          locator: CBDB:100796
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
  descendants: []
  other: []
---

# 王彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彬 | accepted |
| birth.date | 1282年 | accepted |
| death.date | 1353年 | accepted |
| bio.summary | 王彬（1282年—1353年），元人物。籍贯武進。（中国历代人物传记资料库 CBDB 100796） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彬（CBDB 100796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100796&o=json)
