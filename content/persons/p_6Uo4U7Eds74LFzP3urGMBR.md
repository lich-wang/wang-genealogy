---
schema: wang-person/v1
id: p_6Uo4U7Eds74LFzP3urGMBR
status: active
merged_into: null
display_name: 王叔介
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4aLXLXgjgEM6hVMLBaqeT5
        subject_person_id: p_6Uo4U7Eds74LFzP3urGMBR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔介
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hjNC5dK7wJ2kFXtR2pYUrY
          claim_id: c_4aLXLXgjgEM6hVMLBaqeT5
          source_id: s_PSqeEtfJb5qjy6dYWKeK8g
          stance: supports
          locator: CBDB:546331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（546331）
          source: &a1
            id: s_PSqeEtfJb5qjy6dYWKeK8g
            source_type: api_record
            title: 中国历代人物传记资料库：王叔介（CBDB 546331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546331&o=json
            external_identifier: CBDB:546331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.481Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1JqzdwFQbZS83BgTJ7ZBjM
        subject_person_id: p_6Uo4U7Eds74LFzP3urGMBR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔介，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 546331）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f9hnaknjk6FCWJtZyKnMdd
          claim_id: c_1JqzdwFQbZS83BgTJ7ZBjM
          source_id: s_PSqeEtfJb5qjy6dYWKeK8g
          stance: supports
          locator: CBDB:546331
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

# 王叔介

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔介 | accepted |
| bio.summary | 王叔介，宋人物。籍贯長溪，入仕特奏名進士、特奏名諸科 、大挑。（中国历代人物传记资料库 CBDB 546331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王叔介（CBDB 546331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=546331&o=json)
