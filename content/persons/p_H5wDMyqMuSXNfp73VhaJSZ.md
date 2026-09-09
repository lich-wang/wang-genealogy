---
schema: wang-person/v1
id: p_H5wDMyqMuSXNfp73VhaJSZ
status: active
merged_into: null
display_name: 王福綸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tgEXLx1he8EgaH32QvnAYg
        subject_person_id: p_H5wDMyqMuSXNfp73VhaJSZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福綸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c98fR6Y96JRLBgbUHfyt2Q
          claim_id: c_tgEXLx1he8EgaH32QvnAYg
          source_id: s_7puPvSrA59WHzeU8XdeSoU
          stance: supports
          locator: CBDB:639616
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639616）
          source: &a1
            id: s_7puPvSrA59WHzeU8XdeSoU
            source_type: api_record
            title: 中国历代人物传记资料库：王福綸（CBDB 639616）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639616&o=json
            external_identifier: CBDB:639616
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.992Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_owC2dELgNvooFywubHcYTm
        subject_person_id: p_H5wDMyqMuSXNfp73VhaJSZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1JA8NXqEhFGetWVh11GE9k
          claim_id: c_owC2dELgNvooFywubHcYTm
          source_id: s_7puPvSrA59WHzeU8XdeSoU
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

# 王福綸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福綸 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福綸（CBDB 639616）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639616&o=json)
