---
schema: wang-person/v1
id: p_1jLSqc28u3Wp4t8N86f2xD
status: active
merged_into: null
display_name: 王常
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CyCm4EpnQ6FpRuLhrRWKWD
        subject_person_id: p_1jLSqc28u3Wp4t8N86f2xD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王常
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_81qso1RkKNMyYd8qN72FYm
          claim_id: c_CyCm4EpnQ6FpRuLhrRWKWD
          source_id: s_Un3wenH5UjR8sH9k5w1CGX
          stance: supports
          locator: CBDB:688591
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（688591）
          source: &a1
            id: s_Un3wenH5UjR8sH9k5w1CGX
            source_type: api_record
            title: 中国历代人物传记资料库：王常（CBDB 688591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688591&o=json
            external_identifier: CBDB:688591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.526Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1AFS2hTe1Tzvne24BGBibB
        subject_person_id: p_1jLSqc28u3Wp4t8N86f2xD
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
        - id: cs_ZEaymCuRw3CUW4D867RFCe
          claim_id: c_1AFS2hTe1Tzvne24BGBibB
          source_id: s_Un3wenH5UjR8sH9k5w1CGX
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

# 王常

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王常 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王常（CBDB 688591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=688591&o=json)
