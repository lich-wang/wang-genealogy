---
schema: wang-person/v1
id: p_qpYjs58xCf6rGyH3FU2c1P
status: active
merged_into: null
display_name: 王嵩
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eEPLkyvGyeXfitLGHjeoxU
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王嵩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YKJCLxZoXH4PDJ1dnkKcow
          claim_id: c_eEPLkyvGyeXfitLGHjeoxU
          source_id: s_YjxS9HgytL9RpKuh7PACJG
          stance: supports
          locator: CBDB:142903
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142903）
          source: &a1
            id: s_YjxS9HgytL9RpKuh7PACJG
            source_type: api_record
            title: 中国历代人物传记资料库：王嵩（CBDB 142903）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142903&o=json
            external_identifier: CBDB:142903
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.602Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_xekXQf42FPhen8mnRWeVc2
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EATTRKCwp6yhcAosHe8jmp
          claim_id: c_xekXQf42FPhen8mnRWeVc2
          source_id: s_YjxS9HgytL9RpKuh7PACJG
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
        id: c_DMPBPSFTt2BGt8thHurd28
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 726年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_inGAALbnUT8okHMNrko8uU
          claim_id: c_DMPBPSFTt2BGt8thHurd28
          source_id: s_YjxS9HgytL9RpKuh7PACJG
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
        id: c_6RTZzMbbgZDddLbNbtMoF5
        subject_person_id: p_qpYjs58xCf6rGyH3FU2c1P
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
        - id: cs_wKXj3a76vJF5nRSZfypgir
          claim_id: c_6RTZzMbbgZDddLbNbtMoF5
          source_id: s_YjxS9HgytL9RpKuh7PACJG
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

# 王嵩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王嵩 | accepted |
| birth.date | 672年 | accepted |
| death.date | 726年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王嵩（CBDB 142903）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142903&o=json)
