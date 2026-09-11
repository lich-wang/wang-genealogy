---
schema: wang-person/v1
id: p_CCsiPRQT3ZZVknURRDPGFF
status: active
merged_into: null
display_name: 王琛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TQXuUEN8KYpRHxhiB1M3gz
        subject_person_id: p_CCsiPRQT3ZZVknURRDPGFF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6rwQ95aKRe8uoPW5ab7Uny
          claim_id: c_TQXuUEN8KYpRHxhiB1M3gz
          source_id: s_3S4sBaVjGztvNN2a8pBWmr
          stance: supports
          locator: CBDB:559877
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（559877）
          source: &a1
            id: s_3S4sBaVjGztvNN2a8pBWmr
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 559877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559877&o=json
            external_identifier: CBDB:559877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.708Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9BG1fdtGHj9VdS3EJCoAEX
        subject_person_id: p_CCsiPRQT3ZZVknURRDPGFF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琛，明人物。籍贯鄱陽，入仕明經，曾任縣學訓導。（中国历代人物传记资料库 CBDB 559877）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IhrZo6dPnLwJZChOLHYQOf
          claim_id: c_9BG1fdtGHj9VdS3EJCoAEX
          source_id: s_3S4sBaVjGztvNN2a8pBWmr
          stance: supports
          locator: CBDB:559877
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

# 王琛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琛 | accepted |
| bio.summary | 王琛，明人物。籍贯鄱陽，入仕明經，曾任縣學訓導。（中国历代人物传记资料库 CBDB 559877） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 559877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=559877&o=json)
