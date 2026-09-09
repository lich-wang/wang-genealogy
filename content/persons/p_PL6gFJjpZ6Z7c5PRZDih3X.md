---
schema: wang-person/v1
id: p_PL6gFJjpZ6Z7c5PRZDih3X
status: active
merged_into: null
display_name: 王照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_C7hJSUDPtSSCHkP9VVPacd
        subject_person_id: p_PL6gFJjpZ6Z7c5PRZDih3X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NHs57hAfJgemz93EhhfNmn
          claim_id: c_C7hJSUDPtSSCHkP9VVPacd
          source_id: s_yj1est2Mdu19idydSW2RcR
          stance: supports
          locator: CBDB:191688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191688）
          source: &a1
            id: s_yj1est2Mdu19idydSW2RcR
            source_type: api_record
            title: 中国历代人物传记资料库：王照（CBDB 191688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191688&o=json
            external_identifier: CBDB:191688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.372Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7M9E7s3MvGGg7YSsfgtbUc
        subject_person_id: p_PL6gFJjpZ6Z7c5PRZDih3X
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 711年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fRDqKDTbfk27Nt1RgFLgtA
          claim_id: c_7M9E7s3MvGGg7YSsfgtbUc
          source_id: s_yj1est2Mdu19idydSW2RcR
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
        id: c_VUWToBM8KkXY5E3Qcege25
        subject_person_id: p_PL6gFJjpZ6Z7c5PRZDih3X
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
        - id: cs_xq66wPaREgxaZW6HgEdo5A
          claim_id: c_VUWToBM8KkXY5E3Qcege25
          source_id: s_yj1est2Mdu19idydSW2RcR
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

# 王照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王照 | accepted |
| death.date | 711年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王照（CBDB 191688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191688&o=json)
