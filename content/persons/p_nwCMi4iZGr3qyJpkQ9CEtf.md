---
schema: wang-person/v1
id: p_nwCMi4iZGr3qyJpkQ9CEtf
status: active
merged_into: null
display_name: 王澍
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_M8RGty43NtGw4yzVBoWU3Q
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澍
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JFFH8TaBNUoLi2YTdgJfVG
          claim_id: c_M8RGty43NtGw4yzVBoWU3Q
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
          stance: supports
          locator: CBDB:69453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69453）
          source: &a1
            id: s_95mKyZoEKdmPcKU7kAfRoT
            source_type: api_record
            title: 中国历代人物传记资料库：王澍（CBDB 69453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69453&o=json
            external_identifier: CBDB:69453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.278Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_jPzB2vGCL14BDL47qfQ51z
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1668年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NNtHaVW1qjdhcLGr9qkbE7
          claim_id: c_jPzB2vGCL14BDL47qfQ51z
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
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
        id: c_TKDD4KyGMN2KBAx6kFmUNM
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1739年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dNSvo6u9naCm1zDGgmY7jq
          claim_id: c_TKDD4KyGMN2KBAx6kFmUNM
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
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
        id: c_jneovcPqqrMXvi3Tu2i5pU
        subject_person_id: p_nwCMi4iZGr3qyJpkQ9CEtf
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
        - id: cs_Uh6pkc2w3aRNpWLDa8W3CF
          claim_id: c_jneovcPqqrMXvi3Tu2i5pU
          source_id: s_95mKyZoEKdmPcKU7kAfRoT
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

# 王澍

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澍 | accepted |
| birth.date | 1668年 | accepted |
| death.date | 1739年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澍（CBDB 69453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69453&o=json)
