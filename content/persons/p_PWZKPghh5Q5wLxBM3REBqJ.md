---
schema: wang-person/v1
id: p_PWZKPghh5Q5wLxBM3REBqJ
status: active
merged_into: null
display_name: 王芾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cXyoFZR8FXMjR5iJ9S45U8
        subject_person_id: p_PWZKPghh5Q5wLxBM3REBqJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王芾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A9mn7PgEcNZcAFk7BT9CtP
          claim_id: c_cXyoFZR8FXMjR5iJ9S45U8
          source_id: s_EtCDXf3KG58LtBZVDP5PXD
          stance: supports
          locator: CBDB:23166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23166）
          source: &a1
            id: s_EtCDXf3KG58LtBZVDP5PXD
            source_type: api_record
            title: 中国历代人物传记资料库：王芾（CBDB 23166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23166&o=json
            external_identifier: CBDB:23166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.868Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_44khTDA4rYEuTudfc4oPPt
        subject_person_id: p_PWZKPghh5Q5wLxBM3REBqJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1108年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tpTy59beABs4dKRPQCza8H
          claim_id: c_44khTDA4rYEuTudfc4oPPt
          source_id: s_EtCDXf3KG58LtBZVDP5PXD
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z1Yk4g66B1cvGVZgjfwgEz
        subject_person_id: p_PWZKPghh5Q5wLxBM3REBqJ
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
        - id: cs_72tvFE4LqsHLsj5G1hW6Wg
          claim_id: c_z1Yk4g66B1cvGVZgjfwgEz
          source_id: s_EtCDXf3KG58LtBZVDP5PXD
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

# 王芾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王芾 | accepted |
| birth.date | 1108年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王芾（CBDB 23166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23166&o=json)
