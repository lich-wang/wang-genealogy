---
schema: wang-person/v1
id: p_wxA78azRjFMMVZqz9YUEab
status: active
merged_into: null
display_name: 王元耀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ELHrgMwGyQQY3CTBdqSMmo
        subject_person_id: p_wxA78azRjFMMVZqz9YUEab
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元耀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EaJHJ5xoxAZnL1VNJyAN7E
          claim_id: c_ELHrgMwGyQQY3CTBdqSMmo
          source_id: s_Jhi2wdJnv1Qw8kT4Q8b3Je
          stance: supports
          locator: CBDB:561015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（561015）
          source: &a1
            id: s_Jhi2wdJnv1Qw8kT4Q8b3Je
            source_type: api_record
            title: 中国历代人物传记资料库：王元耀（CBDB 561015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561015&o=json
            external_identifier: CBDB:561015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.553Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9phBwK4DNEXSGsugx896LG
        subject_person_id: p_wxA78azRjFMMVZqz9YUEab
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元耀，明人物。籍贯江寧，身份为畫家。（中国历代人物传记资料库 CBDB 561015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QgjU-MJFJjbWkOAfVfvOGe
          claim_id: c_9phBwK4DNEXSGsugx896LG
          source_id: s_Jhi2wdJnv1Qw8kT4Q8b3Je
          stance: supports
          locator: CBDB:561015
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

# 王元耀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元耀 | accepted |
| bio.summary | 王元耀，明人物。籍贯江寧，身份为畫家。（中国历代人物传记资料库 CBDB 561015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元耀（CBDB 561015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=561015&o=json)
