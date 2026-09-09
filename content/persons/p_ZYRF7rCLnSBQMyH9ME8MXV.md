---
schema: wang-person/v1
id: p_ZYRF7rCLnSBQMyH9ME8MXV
status: active
merged_into: null
display_name: 王寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nkH77atqLFaUqWSexkNF3T
        subject_person_id: p_ZYRF7rCLnSBQMyH9ME8MXV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G21coWt7s68TQqNhdMiJAh
          claim_id: c_nkH77atqLFaUqWSexkNF3T
          source_id: s_zXn2cZ6DQCJhhBnEjBFa6A
          stance: supports
          locator: CBDB:139239
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139239）
          source: &a1
            id: s_zXn2cZ6DQCJhhBnEjBFa6A
            source_type: api_record
            title: 中国历代人物传记资料库：王寬（CBDB 139239）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139239&o=json
            external_identifier: CBDB:139239
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.396Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yRNBY9AtfCJGr88dCmePRF
        subject_person_id: p_ZYRF7rCLnSBQMyH9ME8MXV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 595年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eeu6vp52aFvKPqqZLZEyGU
          claim_id: c_yRNBY9AtfCJGr88dCmePRF
          source_id: s_zXn2cZ6DQCJhhBnEjBFa6A
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
        id: c_7McUX6BFG5Qiwj1Ei3CZGi
        subject_person_id: p_ZYRF7rCLnSBQMyH9ME8MXV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 661年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y4i5UQqL4XZHzCNes8tHwC
          claim_id: c_7McUX6BFG5Qiwj1Ei3CZGi
          source_id: s_zXn2cZ6DQCJhhBnEjBFa6A
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
        id: c_9csXPQECMwJtW4rvCWeN6B
        subject_person_id: p_ZYRF7rCLnSBQMyH9ME8MXV
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
        - id: cs_q8LQJLMe644aZSaxjNmbw9
          claim_id: c_9csXPQECMwJtW4rvCWeN6B
          source_id: s_zXn2cZ6DQCJhhBnEjBFa6A
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

# 王寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寬 | accepted |
| birth.date | 595年 | accepted |
| death.date | 661年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寬（CBDB 139239）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139239&o=json)
