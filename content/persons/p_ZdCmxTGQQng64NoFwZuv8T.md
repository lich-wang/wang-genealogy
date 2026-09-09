---
schema: wang-person/v1
id: p_ZdCmxTGQQng64NoFwZuv8T
status: active
merged_into: null
display_name: 王住
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nrEjmz2dnst1x26Q6tZFMS
        subject_person_id: p_ZdCmxTGQQng64NoFwZuv8T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王住
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ec19sx1Twa326CoEGq3Cuh
          claim_id: c_nrEjmz2dnst1x26Q6tZFMS
          source_id: s_bSWA3DEAaBUXWK8DD3kx8z
          stance: supports
          locator: CBDB:549254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（549254）
          source: &a1
            id: s_bSWA3DEAaBUXWK8DD3kx8z
            source_type: api_record
            title: 中国历代人物传记资料库：王住（CBDB 549254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549254&o=json
            external_identifier: CBDB:549254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DvoaQAayNx89YJAC6C3nYN
        subject_person_id: p_ZdCmxTGQQng64NoFwZuv8T
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
        - id: cs_uP6h3M67cQ32R2EBAJVfj8
          claim_id: c_DvoaQAayNx89YJAC6C3nYN
          source_id: s_bSWA3DEAaBUXWK8DD3kx8z
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

# 王住

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王住 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王住（CBDB 549254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=549254&o=json)
