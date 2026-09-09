---
schema: wang-person/v1
id: p_WfKGNEwFj8S9f7DUKj8X6D
status: active
merged_into: null
display_name: 王正己
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fq2Wio98kxy727pkg3qJM2
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王正己
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QPcyvVJhcXfM2aSmKiRktv
          claim_id: c_fq2Wio98kxy727pkg3qJM2
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
          stance: supports
          locator: CBDB:3948
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（3948）
          source: &a1
            id: s_PDGaLN51VCohN5Cwc5EZEn
            source_type: api_record
            title: 中国历代人物传记资料库：王正己（CBDB 3948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3948&o=json
            external_identifier: CBDB:3948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_kqTZsGzVD8PD7R3TZhUkQD
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1119年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zKMW25N2Z5Y8QAMPiHsgB6
          claim_id: c_kqTZsGzVD8PD7R3TZhUkQD
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
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
        id: c_jeBZDaUK8QxBCsFP6MCnFX
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1196年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRsngn4nfxABYvy88gB5h3
          claim_id: c_jeBZDaUK8QxBCsFP6MCnFX
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
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
        id: c_8ciCKLakcFLSKokW6QWR9Y
        subject_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
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
        - id: cs_SFLq4DPJytdvJZgGQV4q3k
          claim_id: c_8ciCKLakcFLSKokW6QWR9Y
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
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

# 王正己

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王正己 | accepted |
| birth.date | 1119年 | accepted |
| death.date | 1196年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王正己（CBDB 3948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3948&o=json)
