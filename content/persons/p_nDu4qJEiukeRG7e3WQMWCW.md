---
schema: wang-person/v1
id: p_nDu4qJEiukeRG7e3WQMWCW
status: active
merged_into: null
display_name: 王感
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSahVhb7rPZq82GX2EbHgS
        subject_person_id: p_nDu4qJEiukeRG7e3WQMWCW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王感
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yKuBMkhkfGVkXSPGrv9qUq
          claim_id: c_BSahVhb7rPZq82GX2EbHgS
          source_id: s_cTLz7KW3XKKs5XdbHWg21v
          stance: supports
          locator: CBDB:140253
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140253）
          source: &a1
            id: s_cTLz7KW3XKKs5XdbHWg21v
            source_type: api_record
            title: 中国历代人物传记资料库：王感（CBDB 140253）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140253&o=json
            external_identifier: CBDB:140253
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.484Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_6Te6RLBZ7iDtAS8jHAXH7Q
        subject_person_id: p_nDu4qJEiukeRG7e3WQMWCW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Hzi5MkVZDJBSp86bx2jnEg
          claim_id: c_6Te6RLBZ7iDtAS8jHAXH7Q
          source_id: s_cTLz7KW3XKKs5XdbHWg21v
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
        id: c_Z2F15hX1d9A6pHEAPjc8FM
        subject_person_id: p_nDu4qJEiukeRG7e3WQMWCW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 705年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7wH2hJJnE1C28bUHDVzQJ
          claim_id: c_Z2F15hX1d9A6pHEAPjc8FM
          source_id: s_cTLz7KW3XKKs5XdbHWg21v
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
        id: c_KPq8wL8okdVVWpGQzpiY43
        subject_person_id: p_nDu4qJEiukeRG7e3WQMWCW
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
        - id: cs_aee6KZs3TJWr1nSR6XG94w
          claim_id: c_KPq8wL8okdVVWpGQzpiY43
          source_id: s_cTLz7KW3XKKs5XdbHWg21v
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

# 王感

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王感 | accepted |
| birth.date | 648年 | accepted |
| death.date | 705年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王感（CBDB 140253）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140253&o=json)
