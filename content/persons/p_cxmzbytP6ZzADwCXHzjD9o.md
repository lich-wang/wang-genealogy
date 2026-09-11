---
schema: wang-person/v1
id: p_cxmzbytP6ZzADwCXHzjD9o
status: active
merged_into: null
display_name: 王大磐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dz1VRZVq4L5x6WFNrfn6Lj
        subject_person_id: p_cxmzbytP6ZzADwCXHzjD9o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大磐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xSF7QwB37XBMdopEwPHGG8
          claim_id: c_dz1VRZVq4L5x6WFNrfn6Lj
          source_id: s_ZSHKvYdMJg3LWBVq25SWoZ
          stance: supports
          locator: CBDB:636910
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636910）
          source: &a1
            id: s_ZSHKvYdMJg3LWBVq25SWoZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大磐（CBDB 636910）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636910&o=json
            external_identifier: CBDB:636910
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.145Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VFXDpdesUGVHwPAiBuHHrP
        subject_person_id: p_cxmzbytP6ZzADwCXHzjD9o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王大磐，清人物。籍贯趙州，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636910）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_glPKMDeD2QYVBBKC5aU-l-
          claim_id: c_VFXDpdesUGVHwPAiBuHHrP
          source_id: s_ZSHKvYdMJg3LWBVq25SWoZ
          stance: supports
          locator: CBDB:636910
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

# 王大磐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王大磐 | accepted |
| bio.summary | 王大磐，清人物。籍贯趙州，入仕鄉貢舉人，曾任復設訓導。（中国历代人物传记资料库 CBDB 636910） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王大磐（CBDB 636910）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636910&o=json)
