---
schema: wang-person/v1
id: p_DVANiQroX1nugKD9s141wF
status: active
merged_into: null
display_name: 王槪
cbdb_id: 124344
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yxS6qiLaVE5jMNd2CSA8qP
        subject_person_id: p_DVANiQroX1nugKD9s141wF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槪，清人物。籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 124344）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_L1538e4gANyB4Uh9IV16fc
          claim_id: c_yxS6qiLaVE5jMNd2CSA8qP
          source_id: s_3w9PDd2XfVfz1ZG3Hwg5r9
          stance: supports
          locator: CBDB:124344
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3w9PDd2XfVfz1ZG3Hwg5r9
            source_type: api_record
            title: 中国历代人物传记资料库：王槪（CBDB 124344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124344&o=json
            external_identifier: CBDB:124344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:51.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2R5rTvTDBLJ24w2e9QUNKu
        subject_person_id: p_DVANiQroX1nugKD9s141wF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oeUrHTrjLtuxeybCmyTNRC
          claim_id: c_2R5rTvTDBLJ24w2e9QUNKu
          source_id: s_3w9PDd2XfVfz1ZG3Hwg5r9
          stance: supports
          locator: CBDB:124344
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1901-2000）｜历史性依据：CBDB 朝代 = 清
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

# 王槪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王槪，清人物。籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 124344） | accepted |
| name.primary | 王槪 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王槪（CBDB 124344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=124344&o=json)
