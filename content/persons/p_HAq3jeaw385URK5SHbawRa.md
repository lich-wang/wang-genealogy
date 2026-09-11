---
schema: wang-person/v1
id: p_HAq3jeaw385URK5SHbawRa
status: active
merged_into: null
display_name: 王琳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RKnYk1Chq9S43mFGLsag4o
        subject_person_id: p_HAq3jeaw385URK5SHbawRa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hSr7QxDgWgxTBhydPHb4xj
          claim_id: c_RKnYk1Chq9S43mFGLsag4o
          source_id: s_DTc4bgadmYFCY7LL5BYhGQ
          stance: supports
          locator: CBDB:386290
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386290）
          source: &a1
            id: s_DTc4bgadmYFCY7LL5BYhGQ
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 386290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386290&o=json
            external_identifier: CBDB:386290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EMjQ6mWRopruwNKtLXZJjs
        subject_person_id: p_HAq3jeaw385URK5SHbawRa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琳，宋人物。籍贯東陽。（中国历代人物传记资料库 CBDB 386290）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_N1OLDJ_w7JsFjkKJ1IhNrz
          claim_id: c_EMjQ6mWRopruwNKtLXZJjs
          source_id: s_DTc4bgadmYFCY7LL5BYhGQ
          stance: supports
          locator: CBDB:386290
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

# 王琳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琳 | accepted |
| bio.summary | 王琳，宋人物。籍贯東陽。（中国历代人物传记资料库 CBDB 386290） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琳（CBDB 386290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386290&o=json)
