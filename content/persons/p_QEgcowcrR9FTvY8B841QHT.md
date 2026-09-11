---
schema: wang-person/v1
id: p_QEgcowcrR9FTvY8B841QHT
status: active
merged_into: null
display_name: 王兆麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_umD2b39xHJVhtnM29XKof5
        subject_person_id: p_QEgcowcrR9FTvY8B841QHT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KeFBshr1X1wNF2hMJESGGu
          claim_id: c_umD2b39xHJVhtnM29XKof5
          source_id: s_z1FV5PZiNNEHBVkLVvbDri
          stance: supports
          locator: CBDB:474197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（474197）
          source: &a1
            id: s_z1FV5PZiNNEHBVkLVvbDri
            source_type: api_record
            title: 中国历代人物传记资料库：王兆麟（CBDB 474197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474197&o=json
            external_identifier: CBDB:474197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.356Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bqkrmwWXxy6TbN6XQS3s2q
        subject_person_id: p_QEgcowcrR9FTvY8B841QHT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆麟，清人物。入仕監生，曾任典史、巡檢。（中国历代人物传记资料库 CBDB 474197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LJvYfEpEvI4SwAaZsFPs8n
          claim_id: c_bqkrmwWXxy6TbN6XQS3s2q
          source_id: s_z1FV5PZiNNEHBVkLVvbDri
          stance: supports
          locator: CBDB:474197
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

# 王兆麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆麟 | accepted |
| bio.summary | 王兆麟，清人物。入仕監生，曾任典史、巡檢。（中国历代人物传记资料库 CBDB 474197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆麟（CBDB 474197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=474197&o=json)
