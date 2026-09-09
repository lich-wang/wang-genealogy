---
schema: wang-person/v1
id: p_FujQn99C56rGgzyuHWtSJs
status: active
merged_into: null
display_name: 王發祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZLvhsZDpzApwfWcXmcGABD
        subject_person_id: p_FujQn99C56rGgzyuHWtSJs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王發祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AhgBLX9ws6JvAeotmvLEKM
          claim_id: c_ZLvhsZDpzApwfWcXmcGABD
          source_id: s_4JK15NQPAyeQ7hfkS3zkWt
          stance: supports
          locator: CBDB:54160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（54160）
          source: &a1
            id: s_4JK15NQPAyeQ7hfkS3zkWt
            source_type: api_record
            title: 中国历代人物传记资料库：王發祥（CBDB 54160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54160&o=json
            external_identifier: CBDB:54160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.718Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BGt1tPvKunGBbryX4DEn1G
        subject_person_id: p_FujQn99C56rGgzyuHWtSJs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1617年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pgVoY7DBqMDXZtkjpP9dqa
          claim_id: c_BGt1tPvKunGBbryX4DEn1G
          source_id: s_4JK15NQPAyeQ7hfkS3zkWt
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
        id: c_KoT3RwdVRcr8Nj6CZZBMTu
        subject_person_id: p_FujQn99C56rGgzyuHWtSJs
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
        - id: cs_Y8KAQYUAGDE6WnriVYqoLm
          claim_id: c_KoT3RwdVRcr8Nj6CZZBMTu
          source_id: s_4JK15NQPAyeQ7hfkS3zkWt
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

# 王發祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王發祥 | accepted |
| birth.date | 1617年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王發祥（CBDB 54160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=54160&o=json)
