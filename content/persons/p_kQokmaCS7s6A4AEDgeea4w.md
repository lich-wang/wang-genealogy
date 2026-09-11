---
schema: wang-person/v1
id: p_kQokmaCS7s6A4AEDgeea4w
status: active
merged_into: null
display_name: 王維垣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SMU3kRE83G4oZBgdAUsxWc
        subject_person_id: p_kQokmaCS7s6A4AEDgeea4w
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維垣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vg8VNUbSMddtAtS72LHTz3
          claim_id: c_SMU3kRE83G4oZBgdAUsxWc
          source_id: s_r9Su3zUW4BTKLHfP4iNDTU
          stance: supports
          locator: CBDB:576141
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576141）
          source: &a1
            id: s_r9Su3zUW4BTKLHfP4iNDTU
            source_type: api_record
            title: 中国历代人物传记资料库：王維垣（CBDB 576141）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576141&o=json
            external_identifier: CBDB:576141
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.947Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sG6WxPaqEqyHd1K9xQK5LN
        subject_person_id: p_kQokmaCS7s6A4AEDgeea4w
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王維垣，清人物。籍贯諸城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576141）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NqLzugkGS3-JESh_RZCpys
          claim_id: c_sG6WxPaqEqyHd1K9xQK5LN
          source_id: s_r9Su3zUW4BTKLHfP4iNDTU
          stance: supports
          locator: CBDB:576141
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王維垣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王維垣 | accepted |
| bio.summary | 王維垣，清人物。籍贯諸城，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576141） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王維垣（CBDB 576141）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576141&o=json)
