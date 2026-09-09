---
schema: wang-person/v1
id: p_KA8pZJq3afCN4g5AfhsWLC
status: active
merged_into: null
display_name: 王綽
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FKNvguXeNqVE4NNBMMXSAx
        subject_person_id: p_KA8pZJq3afCN4g5AfhsWLC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BLyuVci1kcCQrA3HLfPdGD
          claim_id: c_FKNvguXeNqVE4NNBMMXSAx
          source_id: s_KdAbe12C8tKzXm3gxWpC8f
          stance: supports
          locator: CBDB:191267
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191267）
          source: &a1
            id: s_KdAbe12C8tKzXm3gxWpC8f
            source_type: api_record
            title: 中国历代人物传记资料库：王綽（CBDB 191267）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191267&o=json
            external_identifier: CBDB:191267
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.355Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Mp9KbVpR9C2D59c4FcCtX3
        subject_person_id: p_KA8pZJq3afCN4g5AfhsWLC
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 796年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g5HPK7sNoRXFUQkBDqsyvp
          claim_id: c_Mp9KbVpR9C2D59c4FcCtX3
          source_id: s_KdAbe12C8tKzXm3gxWpC8f
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
        id: c_rA5uuSTc5kQGmTAkuQCCK8
        subject_person_id: p_KA8pZJq3afCN4g5AfhsWLC
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
        - id: cs_DDVSjU3m7kARcQmMfw358d
          claim_id: c_rA5uuSTc5kQGmTAkuQCCK8
          source_id: s_KdAbe12C8tKzXm3gxWpC8f
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

# 王綽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綽 | accepted |
| death.date | 796年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綽（CBDB 191267）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191267&o=json)
