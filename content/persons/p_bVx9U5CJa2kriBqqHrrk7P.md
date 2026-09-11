---
schema: wang-person/v1
id: p_bVx9U5CJa2kriBqqHrrk7P
status: active
merged_into: null
display_name: 王執中
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jMToxaU6K6p6RNzd4b7HZe
        subject_person_id: p_bVx9U5CJa2kriBqqHrrk7P
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_i4oQ5UmB6syB1hyuj5i8rB
          claim_id: c_jMToxaU6K6p6RNzd4b7HZe
          source_id: s_9MRcdCGnHDNiXeSifYN2Ti
          stance: supports
          locator: CBDB:687951
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687951）
          source: &a1
            id: s_9MRcdCGnHDNiXeSifYN2Ti
            source_type: api_record
            title: 中国历代人物传记资料库：王執中（CBDB 687951）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687951&o=json
            external_identifier: CBDB:687951
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HCTxw6M7iaYP3MWVsDQDg6
        subject_person_id: p_bVx9U5CJa2kriBqqHrrk7P
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王執中，宋人物。籍贯蓬州，入仕進士。（中国历代人物传记资料库 CBDB 687951）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UBMI3YNa5SMl7kHDymjMBo
          claim_id: c_HCTxw6M7iaYP3MWVsDQDg6
          source_id: s_9MRcdCGnHDNiXeSifYN2Ti
          stance: supports
          locator: CBDB:687951
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

# 王執中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王執中 | accepted |
| bio.summary | 王執中，宋人物。籍贯蓬州，入仕進士。（中国历代人物传记资料库 CBDB 687951） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王執中（CBDB 687951）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687951&o=json)
