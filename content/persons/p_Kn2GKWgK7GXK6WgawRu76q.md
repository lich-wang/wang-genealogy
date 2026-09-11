---
schema: wang-person/v1
id: p_Kn2GKWgK7GXK6WgawRu76q
status: active
merged_into: null
display_name: 王宗善
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WJsN5HeZEoBwtoWf4FKmwG
        subject_person_id: p_Kn2GKWgK7GXK6WgawRu76q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗善
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_35kkaBqFxuRH6yvW1ZcxXT
          claim_id: c_WJsN5HeZEoBwtoWf4FKmwG
          source_id: s_DxpvK8UFcK46f6KFd9CZT4
          stance: supports
          locator: CBDB:572161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（572161）
          source: &a1
            id: s_DxpvK8UFcK46f6KFd9CZT4
            source_type: api_record
            title: 中国历代人物传记资料库：王宗善（CBDB 572161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572161&o=json
            external_identifier: CBDB:572161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ac8UN9v2M7hoVeiTV1Gao9
        subject_person_id: p_Kn2GKWgK7GXK6WgawRu76q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗善，明人物。籍贯婺源，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 572161）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TV1TG61ch7NsdbqeEeluoS
          claim_id: c_Ac8UN9v2M7hoVeiTV1Gao9
          source_id: s_DxpvK8UFcK46f6KFd9CZT4
          stance: supports
          locator: CBDB:572161
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

# 王宗善

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗善 | accepted |
| bio.summary | 王宗善，明人物。籍贯婺源，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 572161） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗善（CBDB 572161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=572161&o=json)
