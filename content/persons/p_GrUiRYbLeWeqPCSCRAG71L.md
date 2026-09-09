---
schema: wang-person/v1
id: p_GrUiRYbLeWeqPCSCRAG71L
status: active
merged_into: null
display_name: 王綦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_b8wrdkMi1xj2njAJuyg8pX
        subject_person_id: p_GrUiRYbLeWeqPCSCRAG71L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_L6PdocgAjvJPw8mCwheioN
          claim_id: c_b8wrdkMi1xj2njAJuyg8pX
          source_id: s_S5HHYH3EY4Lcee8DrKRhK5
          stance: supports
          locator: CBDB:560990
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（560990）
          source: &a1
            id: s_S5HHYH3EY4Lcee8DrKRhK5
            source_type: api_record
            title: 中国历代人物传记资料库：王綦（CBDB 560990）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560990&o=json
            external_identifier: CBDB:560990
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NvNX8sxp1yREGFVWvNCE5A
        subject_person_id: p_GrUiRYbLeWeqPCSCRAG71L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vTD79VrsMogD28NrGgnR2A
          claim_id: c_NvNX8sxp1yREGFVWvNCE5A
          source_id: s_S5HHYH3EY4Lcee8DrKRhK5
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

# 王綦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綦 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王綦（CBDB 560990）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=560990&o=json)
