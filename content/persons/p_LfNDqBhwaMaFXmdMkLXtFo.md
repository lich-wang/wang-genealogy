---
schema: wang-person/v1
id: p_LfNDqBhwaMaFXmdMkLXtFo
status: active
merged_into: null
display_name: 王維翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8evbWWo2d2tQZgTE8CQNj1
        subject_person_id: p_LfNDqBhwaMaFXmdMkLXtFo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W1uxM8iiwFjBbiP4DAN9xc
          claim_id: c_8evbWWo2d2tQZgTE8CQNj1
          source_id: s_P9UJRDvs6SEMyFFVYMeNi9
          stance: supports
          locator: CBDB:72034
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72034）
          source: &a1
            id: s_P9UJRDvs6SEMyFFVYMeNi9
            source_type: api_record
            title: 中国历代人物传记资料库：王維翰（CBDB 72034）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72034&o=json
            external_identifier: CBDB:72034
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PfdrBcBiGqPjbLKr5793wA
        subject_person_id: p_LfNDqBhwaMaFXmdMkLXtFo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1843年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UoP3Vao9CrgVasNF6LWHnD
          claim_id: c_PfdrBcBiGqPjbLKr5793wA
          source_id: s_P9UJRDvs6SEMyFFVYMeNi9
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
        id: c_MwRHMmQf87dYNEKNUy3sRv
        subject_person_id: p_LfNDqBhwaMaFXmdMkLXtFo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維翰（生于1843年），清人物。籍贯臨桂。（中国历代人物传记资料库 CBDB 72034）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9feeFdEkiQgkoy0-8Vih7c
          claim_id: c_MwRHMmQf87dYNEKNUy3sRv
          source_id: s_P9UJRDvs6SEMyFFVYMeNi9
          stance: supports
          locator: CBDB:72034
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

# 王維翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維翰 | accepted |
| birth.date | 1843年 | accepted |
| bio.summary | 王維翰（生于1843年），清人物。籍贯臨桂。（中国历代人物传记资料库 CBDB 72034） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維翰（CBDB 72034）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72034&o=json)
