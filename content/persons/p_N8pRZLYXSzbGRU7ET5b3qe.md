---
schema: wang-person/v1
id: p_N8pRZLYXSzbGRU7ET5b3qe
status: active
merged_into: null
display_name: 王彤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EnwAvKESoDCN83HUXqvpah
        subject_person_id: p_N8pRZLYXSzbGRU7ET5b3qe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王彤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4bqvbtPswyaHnEpJzPVZA2
          claim_id: c_EnwAvKESoDCN83HUXqvpah
          source_id: s_CDUzRqsAUwkBDhhyc2Hqw8
          stance: supports
          locator: CBDB:637622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637622）
          source: &a1
            id: s_CDUzRqsAUwkBDhhyc2Hqw8
            source_type: api_record
            title: 中国历代人物传记资料库：王彤（CBDB 637622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637622&o=json
            external_identifier: CBDB:637622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9QLxWt8aiLFZ3kU3FJvqdR
        subject_person_id: p_N8pRZLYXSzbGRU7ET5b3qe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王彤，清人物。籍贯福州府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 637622）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dB9R7AaeMeqS0gUrJICNip
          claim_id: c_9QLxWt8aiLFZ3kU3FJvqdR
          source_id: s_CDUzRqsAUwkBDhhyc2Hqw8
          stance: supports
          locator: CBDB:637622
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

# 王彤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王彤 | accepted |
| bio.summary | 王彤，清人物。籍贯福州府，入仕貢生: 拔貢，曾任復設訓導。（中国历代人物传记资料库 CBDB 637622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王彤（CBDB 637622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637622&o=json)
