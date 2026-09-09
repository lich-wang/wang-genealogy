---
schema: wang-person/v1
id: p_CBzpi1XKiDDjEPejpq4PCj
status: active
merged_into: null
display_name: 王懋賞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gFyNEfWD8aoP8icmCd3iWH
        subject_person_id: p_CBzpi1XKiDDjEPejpq4PCj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋賞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GgNG6nrEGftfYg7xQQMbAc
          claim_id: c_gFyNEfWD8aoP8icmCd3iWH
          source_id: s_MsPyyxoTtaWZ2UyXW3GbkA
          stance: supports
          locator: CBDB:123583
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（123583）
          source: &a1
            id: s_MsPyyxoTtaWZ2UyXW3GbkA
            source_type: api_record
            title: 中国历代人物传记资料库：王懋賞（CBDB 123583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123583&o=json
            external_identifier: CBDB:123583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.935Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_GMhuFERA8Jr5EGaspg7Cr3
        subject_person_id: p_CBzpi1XKiDDjEPejpq4PCj
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1802年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bf9bdx3GGDwRKiTfbakQGA
          claim_id: c_GMhuFERA8Jr5EGaspg7Cr3
          source_id: s_MsPyyxoTtaWZ2UyXW3GbkA
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
        id: c_1BC7NX187ZY2qkoZAG5QFP
        subject_person_id: p_CBzpi1XKiDDjEPejpq4PCj
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
        - id: cs_9jtWQAP6JxkDAEV5d157Kk
          claim_id: c_1BC7NX187ZY2qkoZAG5QFP
          source_id: s_MsPyyxoTtaWZ2UyXW3GbkA
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

# 王懋賞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋賞 | accepted |
| death.date | 1802年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋賞（CBDB 123583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=123583&o=json)
