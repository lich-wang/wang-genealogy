---
schema: wang-person/v1
id: p_qqvh3Fi4ZnUdeK3u7ToUkU
status: active
merged_into: null
display_name: 王民
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oD1w26uDTfEgRdRBQM41JC
        subject_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GMRdDMqo9k1Tvsz6u8z7oj
          claim_id: c_oD1w26uDTfEgRdRBQM41JC
          source_id: s_P25JNVAP8b6KzJjMhEAnnC
          stance: supports
          locator: CBDB:203553
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203553）
          source: &a1
            id: s_P25JNVAP8b6KzJjMhEAnnC
            source_type: api_record
            title: 中国历代人物传记资料库：王民（CBDB 203553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203553&o=json
            external_identifier: CBDB:203553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.791Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_XwJfFHw3XhJ2onLAgiSwQJ
        subject_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1511年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RkskKpFiDNELR3xJoUxqwY
          claim_id: c_XwJfFHw3XhJ2onLAgiSwQJ
          source_id: s_P25JNVAP8b6KzJjMhEAnnC
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
        id: c_6GnNWicUZmWobrUMZZ5DU6
        subject_person_id: p_qqvh3Fi4ZnUdeK3u7ToUkU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nj2ecMdFbL8kGWGgymcvD6
          claim_id: c_6GnNWicUZmWobrUMZZ5DU6
          source_id: s_P25JNVAP8b6KzJjMhEAnnC
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

# 王民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王民 | accepted |
| birth.date | 1511年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王民（CBDB 203553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203553&o=json)
