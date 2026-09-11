---
schema: wang-person/v1
id: p_56B2TQGGGU8Av9X7AipzXD
status: active
merged_into: null
display_name: 王裕增
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BQWjt6hUz8nwf6SFGVgnvG
        subject_person_id: p_56B2TQGGGU8Av9X7AipzXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕增
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TPdcgUZPXP2ombLqZm8C5D
          claim_id: c_BQWjt6hUz8nwf6SFGVgnvG
          source_id: s_MR32QcaxxrzneiDkPLLPBt
          stance: supports
          locator: CBDB:72094
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72094）
          source: &a1
            id: s_MR32QcaxxrzneiDkPLLPBt
            source_type: api_record
            title: 中国历代人物传记资料库：王裕增（CBDB 72094）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72094&o=json
            external_identifier: CBDB:72094
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.990Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8CDELS67wE2819LV1QfJyw
        subject_person_id: p_56B2TQGGGU8Av9X7AipzXD
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1727年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u9fEBwVXeGnC653f6v56MJ
          claim_id: c_8CDELS67wE2819LV1QfJyw
          source_id: s_MR32QcaxxrzneiDkPLLPBt
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FxX6T11NBV238VDo2ZT5aX
        subject_person_id: p_56B2TQGGGU8Av9X7AipzXD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王裕增（生于1727年），清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 72094）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8fXTPHIqDELcOC3AWFSKJM
          claim_id: c_FxX6T11NBV238VDo2ZT5aX
          source_id: s_MR32QcaxxrzneiDkPLLPBt
          stance: supports
          locator: CBDB:72094
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

# 王裕增

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王裕增 | accepted |
| birth.date | 1727年 | accepted |
| bio.summary | 王裕增（生于1727年），清人物。籍贯仁和。（中国历代人物传记资料库 CBDB 72094） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王裕增（CBDB 72094）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72094&o=json)
