---
schema: wang-person/v1
id: p_R8GNfiAEFUGPFE7VBAqAUP
status: active
merged_into: null
display_name: 王繹
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_q5XVjM3dRspN9t2WejQtoN
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PdT48No7J2sLT1t3Mnmn89
          claim_id: c_q5XVjM3dRspN9t2WejQtoN
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
          stance: supports
          locator: CBDB:22137
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（22137）
          source: &a1
            id: s_3TbKHAVJA24WVpkZ7M7TAA
            source_type: api_record
            title: 中国历代人物传记资料库：王繹（CBDB 22137）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22137&o=json
            external_identifier: CBDB:22137
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.832Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PTthuZHyARwi6NPGp5euak
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1061年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iHZ5qdCJZMFvR78A85Ph4g
          claim_id: c_PTthuZHyARwi6NPGp5euak
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
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
        id: c_GX8UfxKGZsjCNmsWVrELjs
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1132年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2t1LHChYAmoVFRisCjW2bg
          claim_id: c_GX8UfxKGZsjCNmsWVrELjs
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
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
        id: c_uUEn2jHhTvsHC4h6NKu4DZ
        subject_person_id: p_R8GNfiAEFUGPFE7VBAqAUP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ya6VA1y4dNjizBhk4myFVB
          claim_id: c_uUEn2jHhTvsHC4h6NKu4DZ
          source_id: s_3TbKHAVJA24WVpkZ7M7TAA
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

# 王繹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繹 | accepted |
| birth.date | 1061年 | accepted |
| death.date | 1132年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王繹（CBDB 22137）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=22137&o=json)
