---
schema: wang-person/v1
id: p_hdPWP7fnopy43UmsBK6VDT
status: active
merged_into: null
display_name: 王祁祥
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Kcrhpq66ghnwE1u9Ntuy8U
        subject_person_id: p_hdPWP7fnopy43UmsBK6VDT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁祥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_x7t74rBiojNhGERnBhPyLk
          claim_id: c_Kcrhpq66ghnwE1u9Ntuy8U
          source_id: s_fN7tnkbA7mv7NNB748NxBg
          stance: supports
          locator: CBDB:639565
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639565）
          source: &a1
            id: s_fN7tnkbA7mv7NNB748NxBg
            source_type: api_record
            title: 中国历代人物传记资料库：王祁祥（CBDB 639565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639565&o=json
            external_identifier: CBDB:639565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.973Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zwCkaDu1Rd21haNgwEdnDG
        subject_person_id: p_hdPWP7fnopy43UmsBK6VDT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王祁祥，清人物。籍贯沂州，曾任訓導。（中国历代人物传记资料库 CBDB 639565）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RzsONV-R8V-h9ck1HFlwRH
          claim_id: c_zwCkaDu1Rd21haNgwEdnDG
          source_id: s_fN7tnkbA7mv7NNB748NxBg
          stance: supports
          locator: CBDB:639565
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

# 王祁祥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王祁祥 | accepted |
| bio.summary | 王祁祥，清人物。籍贯沂州，曾任訓導。（中国历代人物传记资料库 CBDB 639565） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王祁祥（CBDB 639565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639565&o=json)
