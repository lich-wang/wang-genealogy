---
schema: wang-person/v1
id: p_BfyTDxNbzTkaM8X3mMrP5p
status: active
merged_into: null
display_name: 王文毓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5iZRD4w28NQ31nmHJ4Am8S
        subject_person_id: p_BfyTDxNbzTkaM8X3mMrP5p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文毓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GhYRX54m2BW3pG5c6d4Wwx
          claim_id: c_5iZRD4w28NQ31nmHJ4Am8S
          source_id: s_Q6Hs5Fh9qGqj8Vc5tH9Hxt
          stance: supports
          locator: CBDB:71431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71431）
          source: &a1
            id: s_Q6Hs5Fh9qGqj8Vc5tH9Hxt
            source_type: api_record
            title: 中国历代人物传记资料库：王文毓（CBDB 71431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71431&o=json
            external_identifier: CBDB:71431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.663Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HwqTMH3RWUnzQUjGVuki8L
        subject_person_id: p_BfyTDxNbzTkaM8X3mMrP5p
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1847年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VYBjAJCAJeNqDpmUDFAYZU
          claim_id: c_HwqTMH3RWUnzQUjGVuki8L
          source_id: s_Q6Hs5Fh9qGqj8Vc5tH9Hxt
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
        id: c_LBQYvtZiCsLo7qYiFomKVC
        subject_person_id: p_BfyTDxNbzTkaM8X3mMrP5p
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
        - id: cs_Br3tDPN3qzPAq3SUgfKhTY
          claim_id: c_LBQYvtZiCsLo7qYiFomKVC
          source_id: s_Q6Hs5Fh9qGqj8Vc5tH9Hxt
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

# 王文毓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文毓 | accepted |
| birth.date | 1847年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文毓（CBDB 71431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71431&o=json)
