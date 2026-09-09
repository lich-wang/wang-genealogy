---
schema: wang-person/v1
id: p_4xFqGrGDPNQJXx5GAK6Z9E
status: active
merged_into: null
display_name: 王聲之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PQWXhyxscubhxED2mf16vb
        subject_person_id: p_4xFqGrGDPNQJXx5GAK6Z9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王聲之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XyKm9L67nHW3Hvcv7uXTNq
          claim_id: c_PQWXhyxscubhxED2mf16vb
          source_id: s_Dzxeeuif7TCvynMde6v5H9
          stance: supports
          locator: CBDB:545808
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（545808）
          source: &a1
            id: s_Dzxeeuif7TCvynMde6v5H9
            source_type: api_record
            title: 中国历代人物传记资料库：王聲之（CBDB 545808）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545808&o=json
            external_identifier: CBDB:545808
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.474Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dP4VtVfBFhMAg3xTxKGnVS
        subject_person_id: p_4xFqGrGDPNQJXx5GAK6Z9E
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
        - id: cs_jC4PnSAU9UC41uKM2sgCuA
          claim_id: c_dP4VtVfBFhMAg3xTxKGnVS
          source_id: s_Dzxeeuif7TCvynMde6v5H9
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

# 王聲之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王聲之 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王聲之（CBDB 545808）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=545808&o=json)
