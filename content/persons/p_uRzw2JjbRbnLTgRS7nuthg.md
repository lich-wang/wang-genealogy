---
schema: wang-person/v1
id: p_uRzw2JjbRbnLTgRS7nuthg
status: active
merged_into: null
display_name: 王清林
cbdb_id: 500511
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vqd8jcsf93TUNgEaCLuzzN
        subject_person_id: p_uRzw2JjbRbnLTgRS7nuthg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清林，清人物。入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 500511）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_SFaoK9MGMPp7aTBwXsg_l5
          claim_id: c_Vqd8jcsf93TUNgEaCLuzzN
          source_id: s_7mxd5inEPekqi4vJLE8htC
          stance: supports
          locator: CBDB:500511
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7mxd5inEPekqi4vJLE8htC
            source_type: api_record
            title: 中国历代人物传记资料库：王清林（CBDB 500511）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500511&o=json
            external_identifier: CBDB:500511
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:14.754Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_hhS3DNvJWVd4CqW1BMpvQF
        subject_person_id: p_uRzw2JjbRbnLTgRS7nuthg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王清林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x3FhmcBjQ6rhwqxtTt9CP7
          claim_id: c_hhS3DNvJWVd4CqW1BMpvQF
          source_id: s_7mxd5inEPekqi4vJLE8htC
          stance: supports
          locator: CBDB:500511
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（6701-6800）｜历史性依据：CBDB 朝代 = 清
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

# 王清林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王清林，清人物。入仕廩貢生，曾任訓導。（中国历代人物传记资料库 CBDB 500511） | accepted |
| name.primary | 王清林 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王清林（CBDB 500511）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500511&o=json)
