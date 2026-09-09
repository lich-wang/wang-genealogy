---
schema: wang-person/v1
id: p_qCNi2hvkFs1F5m3oK3TZWd
status: active
merged_into: null
display_name: 王介慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sHDYCAsjK8N4c5Bh9k6C3B
        subject_person_id: p_qCNi2hvkFs1F5m3oK3TZWd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王介慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RPs2fMHRWscdR9YcZZKXLJ
          claim_id: c_sHDYCAsjK8N4c5Bh9k6C3B
          source_id: s_u1sNJWMxHGCGsnakXsABBP
          stance: supports
          locator: CBDB:531077
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（531077）
          source: &a1
            id: s_u1sNJWMxHGCGsnakXsABBP
            source_type: api_record
            title: 中国历代人物传记资料库：王介慶（CBDB 531077）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531077&o=json
            external_identifier: CBDB:531077
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.358Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FhojqSdDcSKGGkAk1Ec1R9
        subject_person_id: p_qCNi2hvkFs1F5m3oK3TZWd
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
        - id: cs_AQ5m5BPn7DipAyX15cDHJW
          claim_id: c_FhojqSdDcSKGGkAk1Ec1R9
          source_id: s_u1sNJWMxHGCGsnakXsABBP
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

# 王介慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王介慶 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王介慶（CBDB 531077）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=531077&o=json)
