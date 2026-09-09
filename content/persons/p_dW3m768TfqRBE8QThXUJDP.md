---
schema: wang-person/v1
id: p_dW3m768TfqRBE8QThXUJDP
status: active
merged_into: null
display_name: 王崇道
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ndyc6LnQ7MA1NYGgk3qFLK
        subject_person_id: p_dW3m768TfqRBE8QThXUJDP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GgEsA31hj3Nnh39SrL8Yog
          claim_id: c_Ndyc6LnQ7MA1NYGgk3qFLK
          source_id: s_8xjMCxdyeP57j5S3bATJPJ
          stance: supports
          locator: CBDB:302975
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302975）
          source: &a1
            id: s_8xjMCxdyeP57j5S3bATJPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王崇道（CBDB 302975）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json
            external_identifier: CBDB:302975
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.672Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_o64EQjtBw2dFv9Yz1Qirxp
        subject_person_id: p_dW3m768TfqRBE8QThXUJDP
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
        - id: cs_w8jD1ndyCNyWQdCNP7KQTn
          claim_id: c_o64EQjtBw2dFv9Yz1Qirxp
          source_id: s_8xjMCxdyeP57j5S3bATJPJ
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

# 王崇道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇道 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崇道（CBDB 302975）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302975&o=json)
