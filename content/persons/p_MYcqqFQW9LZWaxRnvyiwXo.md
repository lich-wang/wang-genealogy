---
schema: wang-person/v1
id: p_MYcqqFQW9LZWaxRnvyiwXo
status: active
merged_into: null
display_name: 王言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YxRyc7Dozh9sxvQaaLPwFT
        subject_person_id: p_MYcqqFQW9LZWaxRnvyiwXo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ehvdfH4NuJduKaQfRbyxA7
          claim_id: c_YxRyc7Dozh9sxvQaaLPwFT
          source_id: s_dtBm7Jp9MDv1vQ7Dsw5Fox
          stance: supports
          locator: CBDB:71084
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71084）
          source: &a1
            id: s_dtBm7Jp9MDv1vQ7Dsw5Fox
            source_type: api_record
            title: 中国历代人物传记资料库：王言（CBDB 71084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71084&o=json
            external_identifier: CBDB:71084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mLKN3JuH7D1DGPSJKiNc5o
        subject_person_id: p_MYcqqFQW9LZWaxRnvyiwXo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1648年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2z5qqKB89pfPGm3zyAaAD
          claim_id: c_mLKN3JuH7D1DGPSJKiNc5o
          source_id: s_dtBm7Jp9MDv1vQ7Dsw5Fox
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
        id: c_HU68uCi3xaqKz3324RZPih
        subject_person_id: p_MYcqqFQW9LZWaxRnvyiwXo
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
        - id: cs_FU5WALJ93N76G3Gbx5tGqn
          claim_id: c_HU68uCi3xaqKz3324RZPih
          source_id: s_dtBm7Jp9MDv1vQ7Dsw5Fox
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

# 王言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王言 | accepted |
| birth.date | 1648年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王言（CBDB 71084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71084&o=json)
