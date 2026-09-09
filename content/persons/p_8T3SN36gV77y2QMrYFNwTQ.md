---
schema: wang-person/v1
id: p_8T3SN36gV77y2QMrYFNwTQ
status: active
merged_into: null
display_name: 王濂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_83RuGB4G5XVG2HMeGzjeZF
        subject_person_id: p_8T3SN36gV77y2QMrYFNwTQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7Cr5iMWYwM66JTuHr8Hana
          claim_id: c_83RuGB4G5XVG2HMeGzjeZF
          source_id: s_kpQEXL1XsmEUB8zXjkPMAN
          stance: supports
          locator: CBDB:477655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（477655）
          source: &a1
            id: s_kpQEXL1XsmEUB8zXjkPMAN
            source_type: api_record
            title: 中国历代人物传记资料库：王濂（CBDB 477655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477655&o=json
            external_identifier: CBDB:477655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r9twzFBBa1QtCgocLjhJof
        subject_person_id: p_8T3SN36gV77y2QMrYFNwTQ
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
        - id: cs_9QTqRHwC81fJXn6LsfXL4H
          claim_id: c_r9twzFBBa1QtCgocLjhJof
          source_id: s_kpQEXL1XsmEUB8zXjkPMAN
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

# 王濂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濂 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王濂（CBDB 477655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=477655&o=json)
