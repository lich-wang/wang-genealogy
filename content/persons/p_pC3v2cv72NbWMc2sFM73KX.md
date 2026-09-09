---
schema: wang-person/v1
id: p_pC3v2cv72NbWMc2sFM73KX
status: active
merged_into: null
display_name: 王輔
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fQcTQE6ZEA6FEoDTCGS3fV
        subject_person_id: p_pC3v2cv72NbWMc2sFM73KX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_oMayXyf9GsUwgScAinLZvN
          claim_id: c_fQcTQE6ZEA6FEoDTCGS3fV
          source_id: s_1JWA1f1ntDVG2JcJA8LVhG
          stance: supports
          locator: CBDB:214952
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214952）
          source: &a1
            id: s_1JWA1f1ntDVG2JcJA8LVhG
            source_type: api_record
            title: 中国历代人物传记资料库：王輔（CBDB 214952）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214952&o=json
            external_identifier: CBDB:214952
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.170Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qhtv8LnSe5g1aNLrumXVtg
        subject_person_id: p_pC3v2cv72NbWMc2sFM73KX
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
        - id: cs_jmSDEmDPXgQKZPPUyjw33i
          claim_id: c_qhtv8LnSe5g1aNLrumXVtg
          source_id: s_1JWA1f1ntDVG2JcJA8LVhG
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

# 王輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王輔 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王輔（CBDB 214952）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214952&o=json)
