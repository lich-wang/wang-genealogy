---
schema: wang-person/v1
id: p_RJ1Pms13AAo2HDMSeXQd3u
status: active
merged_into: null
display_name: 王桂林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TTMmGWD2uY1UgDCboPeeKt
        subject_person_id: p_RJ1Pms13AAo2HDMSeXQd3u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王桂林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3xcdFyMy2Yya4y1XQtkKq9
          claim_id: c_TTMmGWD2uY1UgDCboPeeKt
          source_id: s_zDA6wYpRqFBFhEGK7J4L5q
          stance: supports
          locator: CBDB:638710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638710）
          source: &a1
            id: s_zDA6wYpRqFBFhEGK7J4L5q
            source_type: api_record
            title: 中国历代人物传记资料库：王桂林（CBDB 638710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638710&o=json
            external_identifier: CBDB:638710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.741Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kcw35kSRPhQvM6KuAFwG5v
        subject_person_id: p_RJ1Pms13AAo2HDMSeXQd3u
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
        - id: cs_uqxEfzNdF8Fx8p5nt6h6De
          claim_id: c_kcw35kSRPhQvM6KuAFwG5v
          source_id: s_zDA6wYpRqFBFhEGK7J4L5q
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

# 王桂林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王桂林 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王桂林（CBDB 638710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638710&o=json)
