---
schema: wang-person/v1
id: p_EghD2zCL8H7T7TimwdJXXD
status: active
merged_into: null
display_name: 王洞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PJBNzc85NndF9E6E9bcZKV
        subject_person_id: p_EghD2zCL8H7T7TimwdJXXD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5L2naknw1F9Efc31sw17an
          claim_id: c_PJBNzc85NndF9E6E9bcZKV
          source_id: s_AaK2LKNBv6M3JiudBdXqhz
          stance: supports
          locator: CBDB:39631
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（39631）
          source: &a1
            id: s_AaK2LKNBv6M3JiudBdXqhz
            source_type: api_record
            title: 中国历代人物传记资料库：王洞（CBDB 39631）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39631&o=json
            external_identifier: CBDB:39631
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.642Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kUwKG1kEji64gtgmrGKM1L
        subject_person_id: p_EghD2zCL8H7T7TimwdJXXD
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
        - id: cs_gyK93ioKFKqSjyaixV6UM3
          claim_id: c_kUwKG1kEji64gtgmrGKM1L
          source_id: s_AaK2LKNBv6M3JiudBdXqhz
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

# 王洞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王洞 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王洞（CBDB 39631）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=39631&o=json)
