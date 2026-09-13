---
schema: wang-person/v1
id: p_SAQcBE3srJmhKPYrrKJrzA
status: active
merged_into: null
display_name: 王登進
cbdb_id: 60987
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dqpsn7xbUfwVtzYp7tTLyR
        subject_person_id: p_SAQcBE3srJmhKPYrrKJrzA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登進，清人物。曾任驛傳道、知府。（中国历代人物传记资料库 CBDB 60987）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_eQ1tCIv8ZiOoNNOjbF3Yj7
          claim_id: c_dqpsn7xbUfwVtzYp7tTLyR
          source_id: s_eYkobyKuW7y7uE23o2DJCQ
          stance: supports
          locator: CBDB:60987
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_eYkobyKuW7y7uE23o2DJCQ
            source_type: api_record
            title: 中国历代人物传记资料库：王登進（CBDB 60987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60987&o=json
            external_identifier: CBDB:60987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:48.148Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MEk56KZZfZZiGkYu8Jd3t8
        subject_person_id: p_SAQcBE3srJmhKPYrrKJrzA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登進
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GzCSD8mLv2JgM2D53QDQ4M
          claim_id: c_MEk56KZZfZZiGkYu8Jd3t8
          source_id: s_eYkobyKuW7y7uE23o2DJCQ
          stance: supports
          locator: CBDB:60987
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1401-1500）｜历史性依据：CBDB 朝代 = 清
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

# 王登進

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王登進，清人物。曾任驛傳道、知府。（中国历代人物传记资料库 CBDB 60987） | accepted |
| name.primary | 王登進 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王登進（CBDB 60987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60987&o=json)
