---
schema: wang-person/v1
id: p_2y83LLpj561D38z5x4kLAc
status: active
merged_into: null
display_name: 王泗
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gU4mwQQZVw5pTLf1PMYEqZ
        subject_person_id: p_2y83LLpj561D38z5x4kLAc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王泗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uqcEMRyStuv4FAEND22KEJ
          claim_id: c_gU4mwQQZVw5pTLf1PMYEqZ
          source_id: s_7tPPtDJkjyz6oMCgL6kPMc
          stance: supports
          locator: CBDB:69259
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69259）
          source: &a1
            id: s_7tPPtDJkjyz6oMCgL6kPMc
            source_type: api_record
            title: 中国历代人物传记资料库：王泗（CBDB 69259）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69259&o=json
            external_identifier: CBDB:69259
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.181Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_o1osLwQtUxHdGT93M81q1r
        subject_person_id: p_2y83LLpj561D38z5x4kLAc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1853年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_x4DVBaLTo2vetFFKrD8nms
          claim_id: c_o1osLwQtUxHdGT93M81q1r
          source_id: s_7tPPtDJkjyz6oMCgL6kPMc
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
        id: c_xehDL2nvh9ddNrKFoDXJcx
        subject_person_id: p_2y83LLpj561D38z5x4kLAc
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
        - id: cs_APmP6eCsod529r28M9UaDu
          claim_id: c_xehDL2nvh9ddNrKFoDXJcx
          source_id: s_7tPPtDJkjyz6oMCgL6kPMc
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

# 王泗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王泗 | accepted |
| death.date | 1853年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王泗（CBDB 69259）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69259&o=json)
