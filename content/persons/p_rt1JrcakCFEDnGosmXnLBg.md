---
schema: wang-person/v1
id: p_rt1JrcakCFEDnGosmXnLBg
status: active
merged_into: null
display_name: 王通
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_frRzS2PTn2E3nBUxD25K3T
        subject_person_id: p_rt1JrcakCFEDnGosmXnLBg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_43E7mUpZdvGftgwcYuzN7G
          claim_id: c_frRzS2PTn2E3nBUxD25K3T
          source_id: s_9udFmVgjToQETV4kaE57DD
          stance: supports
          locator: CBDB:145138
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145138）
          source: &a1
            id: s_9udFmVgjToQETV4kaE57DD
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 145138）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145138&o=json
            external_identifier: CBDB:145138
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.655Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_s2P9MzNA89Uz8r3ePu1ZAT
        subject_person_id: p_rt1JrcakCFEDnGosmXnLBg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 812年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FE4WG7B5Jp8km6BBth7k6T
          claim_id: c_s2P9MzNA89Uz8r3ePu1ZAT
          source_id: s_9udFmVgjToQETV4kaE57DD
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
        id: c_F7bM6G7CZpkUu5TDn5NvHJ
        subject_person_id: p_rt1JrcakCFEDnGosmXnLBg
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
        - id: cs_3jsLPb2MAhxBXL24WxMbGS
          claim_id: c_F7bM6G7CZpkUu5TDn5NvHJ
          source_id: s_9udFmVgjToQETV4kaE57DD
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

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| death.date | 812年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王通（CBDB 145138）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145138&o=json)
