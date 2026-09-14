---
schema: wang-person/v1
id: p_HFy4JDpRRnFeSwdrN6m84Y
status: active
merged_into: null
display_name: 王坦
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iqAi6o56YLCpFcXuq3d1D2
        subject_person_id: p_HFy4JDpRRnFeSwdrN6m84Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4nrPyix3uY1jwFMAUeBksR
          claim_id: c_iqAi6o56YLCpFcXuq3d1D2
          source_id: s_znPA5MPzCub5vYZRm2zaiU
          stance: supports
          locator: CBDB:36861
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（36861）
          source: &a1
            id: s_znPA5MPzCub5vYZRm2zaiU
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 36861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36861&o=json
            external_identifier: CBDB:36861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.179Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6TamwoMFbW2o1iES2c6pVK
        subject_person_id: p_HFy4JDpRRnFeSwdrN6m84Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦，宋人物。籍贯開封，身份为早卒(未成年而卒)、未婚而卒。（中国历代人物传记资料库 CBDB 36861）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZmrxqFbzg25I5CP5PrPq7-
          claim_id: c_6TamwoMFbW2o1iES2c6pVK
          source_id: s_znPA5MPzCub5vYZRm2zaiU
          stance: supports
          locator: CBDB:36861
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u7V2PkVQW3hzW9zdOsmrPI
        subject_person_id: p_7i6jUhtwwYvnVixPJQMhua
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HFy4JDpRRnFeSwdrN6m84Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v8sfZyuC9XIl6WXYW2lE98
          claim_id: c_u7V2PkVQW3hzW9zdOsmrPI
          source_id: s__3uVu6FGemdlCwUYpnuoco
          stance: supports
          locator: CBDB 亲属：父（KinPerson 7385）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s__3uVu6FGemdlCwUYpnuoco
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 36861）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36861&o=json
            external_identifier: CBDB:36861
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7i6jUhtwwYvnVixPJQMhua
        status: active
        display_name: 王元
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦 | accepted |
| bio.summary | 王坦，宋人物。籍贯開封，身份为早卒(未成年而卒)、未婚而卒。（中国历代人物传记资料库 CBDB 36861） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_7i6jUhtwwYvnVixPJQMhua | 王元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王坦（CBDB 36861）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=36861&o=json)
