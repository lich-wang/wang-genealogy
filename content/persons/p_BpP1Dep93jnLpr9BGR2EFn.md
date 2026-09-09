---
schema: wang-person/v1
id: p_BpP1Dep93jnLpr9BGR2EFn
status: active
merged_into: null
display_name: 王丕緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bstkFsA1Hyy6Fsd8x9cMuM
        subject_person_id: p_BpP1Dep93jnLpr9BGR2EFn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RD5AJ3fvEQL2sruQBsrW4s
          claim_id: c_bstkFsA1Hyy6Fsd8x9cMuM
          source_id: s_1w2jftiMRqiZ8k5GtBCAvv
          stance: supports
          locator: CBDB:635659
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635659）
          source: &a1
            id: s_1w2jftiMRqiZ8k5GtBCAvv
            source_type: api_record
            title: 中国历代人物传记资料库：王丕緒（CBDB 635659）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635659&o=json
            external_identifier: CBDB:635659
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.751Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Mr5L1hjD3kD8DGhmV3D4Sg
        subject_person_id: p_BpP1Dep93jnLpr9BGR2EFn
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
        - id: cs_eJ89LTz5S2fLnkBtNRN3VX
          claim_id: c_Mr5L1hjD3kD8DGhmV3D4Sg
          source_id: s_1w2jftiMRqiZ8k5GtBCAvv
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

# 王丕緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王丕緒 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王丕緒（CBDB 635659）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635659&o=json)
