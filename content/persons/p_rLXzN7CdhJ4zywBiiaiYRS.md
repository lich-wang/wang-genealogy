---
schema: wang-person/v1
id: p_rLXzN7CdhJ4zywBiiaiYRS
status: active
merged_into: null
display_name: 王懋績
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_n5wy4S7vMhLXUFKCESTGCH
        subject_person_id: p_rLXzN7CdhJ4zywBiiaiYRS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋績
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G2K4LFsQ59WN3C3N5JYjdj
          claim_id: c_n5wy4S7vMhLXUFKCESTGCH
          source_id: s_orv1ThMw5yDMevDxVe95EA
          stance: supports
          locator: CBDB:638018
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638018）
          source: &a1
            id: s_orv1ThMw5yDMevDxVe95EA
            source_type: api_record
            title: 中国历代人物传记资料库：王懋績（CBDB 638018）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638018&o=json
            external_identifier: CBDB:638018
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLADeaDw1SkhjLPp6m5Q2Q
        subject_person_id: p_rLXzN7CdhJ4zywBiiaiYRS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋績，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 638018）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_shZaghmspm0DQ5Nb80Z82M
          claim_id: c_HLADeaDw1SkhjLPp6m5Q2Q
          source_id: s_orv1ThMw5yDMevDxVe95EA
          stance: supports
          locator: CBDB:638018
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

# 王懋績

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋績 | accepted |
| bio.summary | 王懋績，清人物。籍贯西安，曾任訓導。（中国历代人物传记资料库 CBDB 638018） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王懋績（CBDB 638018）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638018&o=json)
