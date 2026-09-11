---
schema: wang-person/v1
id: p_xXQ4dMwS6WJPhmEwzWJCpw
status: active
merged_into: null
display_name: 王珏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gKTsFdLB5EhdqkqBFffGzM
        subject_person_id: p_xXQ4dMwS6WJPhmEwzWJCpw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1txpkEdyeeNPR1UqpRpPGq
          claim_id: c_gKTsFdLB5EhdqkqBFffGzM
          source_id: s_T4E38LgjacopMg5vjix3GE
          stance: supports
          locator: CBDB:97959
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（97959）
          source: &a1
            id: s_T4E38LgjacopMg5vjix3GE
            source_type: api_record
            title: 中国历代人物传记资料库：王珏（CBDB 97959）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97959&o=json
            external_identifier: CBDB:97959
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.256Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZzcixXLhYa6z4dRGxwv3ZC
        subject_person_id: p_xXQ4dMwS6WJPhmEwzWJCpw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珏，宋人物。曾任右朝議大夫、右中大夫。（中国历代人物传记资料库 CBDB 97959）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_F4weLMM7bBHhgDzeBmgodC
          claim_id: c_ZzcixXLhYa6z4dRGxwv3ZC
          source_id: s_T4E38LgjacopMg5vjix3GE
          stance: supports
          locator: CBDB:97959
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

# 王珏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珏 | accepted |
| bio.summary | 王珏，宋人物。曾任右朝議大夫、右中大夫。（中国历代人物传记资料库 CBDB 97959） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珏（CBDB 97959）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=97959&o=json)
