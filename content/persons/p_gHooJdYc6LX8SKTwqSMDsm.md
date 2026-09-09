---
schema: wang-person/v1
id: p_gHooJdYc6LX8SKTwqSMDsm
status: active
merged_into: null
display_name: 王自勉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_txHBv6ueBNPEDPuw12Tnc6
        subject_person_id: p_gHooJdYc6LX8SKTwqSMDsm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王自勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7S87PtQEdPhGm9zSHhz3tY
          claim_id: c_txHBv6ueBNPEDPuw12Tnc6
          source_id: s_svLPwhJT6Ah6gETj5Fy5Cg
          stance: supports
          locator: CBDB:175752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175752）
          source: &a1
            id: s_svLPwhJT6Ah6gETj5Fy5Cg
            source_type: api_record
            title: 中国历代人物传记资料库：王自勉（CBDB 175752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175752&o=json
            external_identifier: CBDB:175752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zrfRu7b5zLE6vHnNTijZjp
        subject_person_id: p_gHooJdYc6LX8SKTwqSMDsm
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 780年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8JiGnr1TLmZnLoRX8DMW4N
          claim_id: c_zrfRu7b5zLE6vHnNTijZjp
          source_id: s_svLPwhJT6Ah6gETj5Fy5Cg
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
        id: c_Tdy5FJC65T1fLByvSxJWo1
        subject_person_id: p_gHooJdYc6LX8SKTwqSMDsm
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
        - id: cs_q2VVY8NBffXef8Cju7i15y
          claim_id: c_Tdy5FJC65T1fLByvSxJWo1
          source_id: s_svLPwhJT6Ah6gETj5Fy5Cg
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

# 王自勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王自勉 | accepted |
| death.date | 780年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王自勉（CBDB 175752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175752&o=json)
