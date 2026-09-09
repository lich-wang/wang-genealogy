---
schema: wang-person/v1
id: p_d9H6Bj2BpxB74PwED6LAp4
status: active
merged_into: null
display_name: 王林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HTJh7JGakeQMTXr2HJWncH
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LBo1WyydpMdDJpMtu9B28R
          claim_id: c_HTJh7JGakeQMTXr2HJWncH
          source_id: s_msnAKNajR6V131y4mMX2jA
          stance: supports
          locator: CBDB:142732
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142732）
          source: &a1
            id: s_msnAKNajR6V131y4mMX2jA
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 142732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142732&o=json
            external_identifier: CBDB:142732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.592Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_r2vfYqVSDtBi3YBK6qD3x4
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 594年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dXqyMAeCmUa8amnhFCoF42
          claim_id: c_r2vfYqVSDtBi3YBK6qD3x4
          source_id: s_msnAKNajR6V131y4mMX2jA
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
        id: c_yHFEgp9BavaDWG9ZAcnbPR
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 657年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ydETVBBin1dEtcME9KJXaB
          claim_id: c_yHFEgp9BavaDWG9ZAcnbPR
          source_id: s_msnAKNajR6V131y4mMX2jA
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
        id: c_HQmAy7Nz2ggspJwSUyP5mw
        subject_person_id: p_d9H6Bj2BpxB74PwED6LAp4
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
        - id: cs_goDWrgoe8beuqkGHLxaUkE
          claim_id: c_HQmAy7Nz2ggspJwSUyP5mw
          source_id: s_msnAKNajR6V131y4mMX2jA
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

# 王林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王林 | accepted |
| birth.date | 594年 | accepted |
| death.date | 657年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王林（CBDB 142732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142732&o=json)
