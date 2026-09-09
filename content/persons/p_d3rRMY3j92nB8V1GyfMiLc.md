---
schema: wang-person/v1
id: p_d3rRMY3j92nB8V1GyfMiLc
status: active
merged_into: null
display_name: 王同人
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_krZDeXWBrZcLZCgDXyVmjV
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同人
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_98FYPrGVYco2Y76VJbzrxz
          claim_id: c_krZDeXWBrZcLZCgDXyVmjV
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
          stance: supports
          locator: CBDB:175747
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175747）
          source: &a1
            id: s_Lz1aJbKkYc62PVeN7aXUjx
            source_type: api_record
            title: 中国历代人物传记资料库：王同人（CBDB 175747）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json
            external_identifier: CBDB:175747
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.096Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sMXT75tLUk3Gd9yNsayyhM
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 669年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M6CHawBcuJXQhiDzbDnApq
          claim_id: c_sMXT75tLUk3Gd9yNsayyhM
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
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
        id: c_n6UKPFFQnKM9PWGGvU3DLH
        subject_person_id: p_d3rRMY3j92nB8V1GyfMiLc
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
        - id: cs_RS1Fhen6PPNrpQgYnCKxQt
          claim_id: c_n6UKPFFQnKM9PWGGvU3DLH
          source_id: s_Lz1aJbKkYc62PVeN7aXUjx
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

# 王同人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同人 | accepted |
| death.date | 669年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王同人（CBDB 175747）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175747&o=json)
