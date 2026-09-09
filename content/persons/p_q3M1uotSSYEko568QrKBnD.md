---
schema: wang-person/v1
id: p_q3M1uotSSYEko568QrKBnD
status: active
merged_into: null
display_name: 王翺
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QHDi2oH3y1waA6b2L1uYaD
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王翺
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EJdgTgKoZBWQ3LHdFT1phb
          claim_id: c_QHDi2oH3y1waA6b2L1uYaD
          source_id: s_gPU147HWPbQxPtoJcF8CBt
          stance: supports
          locator: CBDB:175720
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175720）
          source: &a1
            id: s_gPU147HWPbQxPtoJcF8CBt
            source_type: api_record
            title: 中国历代人物传记资料库：王翺（CBDB 175720）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175720&o=json
            external_identifier: CBDB:175720
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_1m9b1Tyv9nUvLU39kwnTtF
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 769年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MFaXigUsizRsNtvERiEbMP
          claim_id: c_1m9b1Tyv9nUvLU39kwnTtF
          source_id: s_gPU147HWPbQxPtoJcF8CBt
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
        id: c_RtgytmHSBAqosQXJzDxHss
        subject_person_id: p_q3M1uotSSYEko568QrKBnD
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
        - id: cs_bre9u1MzL5pscAJm3c65TU
          claim_id: c_RtgytmHSBAqosQXJzDxHss
          source_id: s_gPU147HWPbQxPtoJcF8CBt
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

# 王翺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王翺 | accepted |
| death.date | 769年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王翺（CBDB 175720）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175720&o=json)
