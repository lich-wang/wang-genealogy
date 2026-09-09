---
schema: wang-person/v1
id: p_2BHkEYekoT1S8S2R49LZgW
status: active
merged_into: null
display_name: 王晤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ukAWRm7v59XxNQ5qHJRU1o
        subject_person_id: p_2BHkEYekoT1S8S2R49LZgW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kbHofH15qg3eTUhdBh2FWW
          claim_id: c_ukAWRm7v59XxNQ5qHJRU1o
          source_id: s_4DY5qh6wfzSJyo6PBzSVxU
          stance: supports
          locator: CBDB:175822
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175822）
          source: &a1
            id: s_4DY5qh6wfzSJyo6PBzSVxU
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 175822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json
            external_identifier: CBDB:175822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_PVY1jcpWQnScfYsx6R1WnP
        subject_person_id: p_2BHkEYekoT1S8S2R49LZgW
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 821年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_td84KR8iDf7vJhTXraHmZ2
          claim_id: c_PVY1jcpWQnScfYsx6R1WnP
          source_id: s_4DY5qh6wfzSJyo6PBzSVxU
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
        id: c_UX9mUgSPPMjq5McrN9R9bC
        subject_person_id: p_2BHkEYekoT1S8S2R49LZgW
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
        - id: cs_9wYG1rzfjsayUwCLwxyHC1
          claim_id: c_UX9mUgSPPMjq5McrN9R9bC
          source_id: s_4DY5qh6wfzSJyo6PBzSVxU
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

# 王晤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晤 | accepted |
| death.date | 821年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晤（CBDB 175822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json)
