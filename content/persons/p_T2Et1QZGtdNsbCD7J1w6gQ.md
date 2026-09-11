---
schema: wang-person/v1
id: p_T2Et1QZGtdNsbCD7J1w6gQ
status: active
merged_into: null
display_name: 王鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9Hpf5ktNQJy6FtCNDRq4mo
        subject_person_id: p_T2Et1QZGtdNsbCD7J1w6gQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_q8E4aTCKLnGMBs6tRtnyRm
          claim_id: c_9Hpf5ktNQJy6FtCNDRq4mo
          source_id: s_Xt7bwihxydRKWtqYV1C7B3
          stance: supports
          locator: CBDB:248831
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（248831）
          source: &a1
            id: s_Xt7bwihxydRKWtqYV1C7B3
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 248831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248831&o=json
            external_identifier: CBDB:248831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_14v95isLgy4xzinSsFMXZN
        subject_person_id: p_T2Et1QZGtdNsbCD7J1w6gQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248831）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IQ_4q8WeDnf0y9xmQHh8Ct
          claim_id: c_14v95isLgy4xzinSsFMXZN
          source_id: s_Xt7bwihxydRKWtqYV1C7B3
          stance: supports
          locator: CBDB:248831
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

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，明人物。景泰五年進士，籍贯臨安。（中国历代人物传记资料库 CBDB 248831） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鑑（CBDB 248831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=248831&o=json)
