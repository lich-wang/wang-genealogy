---
schema: wang-person/v1
id: p_D1oRy3FpbJwUenUuqrZ9nE
status: active
merged_into: null
display_name: 王永吉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mNX8Ur2HKPkZKQgsbEL81x
        subject_person_id: p_D1oRy3FpbJwUenUuqrZ9nE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ioF4LBLPJXUWjUYHsQ2SPS
          claim_id: c_mNX8Ur2HKPkZKQgsbEL81x
          source_id: s_DAEG5Mu1SiFG1Dff3F4t6P
          stance: supports
          locator: CBDB:56840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（56840）
          source: &a1
            id: s_DAEG5Mu1SiFG1Dff3F4t6P
            source_type: api_record
            title: 中国历代人物传记资料库：王永吉（CBDB 56840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56840&o=json
            external_identifier: CBDB:56840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.764Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UJYSi9SUNpSVbJ5wEqpPF1
        subject_person_id: p_D1oRy3FpbJwUenUuqrZ9nE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1599年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PoZ9CAzkAr7aak6Viy2MTF
          claim_id: c_UJYSi9SUNpSVbJ5wEqpPF1
          source_id: s_DAEG5Mu1SiFG1Dff3F4t6P
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
        id: c_F5sx8PwWed9e746s84TC61
        subject_person_id: p_D1oRy3FpbJwUenUuqrZ9nE
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1659年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6U6Lxr9qg1i57hXsdtgAfq
          claim_id: c_F5sx8PwWed9e746s84TC61
          source_id: s_DAEG5Mu1SiFG1Dff3F4t6P
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
        id: c_DA8K4K62nQEoiP2GU7V17F
        subject_person_id: p_D1oRy3FpbJwUenUuqrZ9nE
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
        - id: cs_uhEPbd1uTb84s4QXzrX3A8
          claim_id: c_DA8K4K62nQEoiP2GU7V17F
          source_id: s_DAEG5Mu1SiFG1Dff3F4t6P
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

# 王永吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永吉 | accepted |
| birth.date | 1599年 | accepted |
| death.date | 1659年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永吉（CBDB 56840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=56840&o=json)
