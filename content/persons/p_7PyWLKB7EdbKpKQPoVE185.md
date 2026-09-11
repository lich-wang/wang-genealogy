---
schema: wang-person/v1
id: p_7PyWLKB7EdbKpKQPoVE185
status: active
merged_into: null
display_name: 王良
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4SUoRdm8m8UyQzMbajJuEE
        subject_person_id: p_7PyWLKB7EdbKpKQPoVE185
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E8oEP4pCT4iwHwGYKK7DwZ
          claim_id: c_4SUoRdm8m8UyQzMbajJuEE
          source_id: s_31bkAQsCajRa5MTy9AL2rF
          stance: supports
          locator: CBDB:38966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38966）
          source: &a1
            id: s_31bkAQsCajRa5MTy9AL2rF
            source_type: api_record
            title: 中国历代人物传记资料库：王良（CBDB 38966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38966&o=json
            external_identifier: CBDB:38966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.573Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QZr41g641dsetPzcNUadfT
        subject_person_id: p_7PyWLKB7EdbKpKQPoVE185
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王良，宋人物。曾任右騏驥副使。（中国历代人物传记资料库 CBDB 38966）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_K-JYB977RBOi2boTrU20cM
          claim_id: c_QZr41g641dsetPzcNUadfT
          source_id: s_31bkAQsCajRa5MTy9AL2rF
          stance: supports
          locator: CBDB:38966
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

# 王良

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王良 | accepted |
| bio.summary | 王良，宋人物。曾任右騏驥副使。（中国历代人物传记资料库 CBDB 38966） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王良（CBDB 38966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38966&o=json)
