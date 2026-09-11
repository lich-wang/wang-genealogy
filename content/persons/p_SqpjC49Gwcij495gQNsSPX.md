---
schema: wang-person/v1
id: p_SqpjC49Gwcij495gQNsSPX
status: active
merged_into: null
display_name: 王德寅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_PLavDPEXNhX1tFWBihzsGG
        subject_person_id: p_SqpjC49Gwcij495gQNsSPX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_y8Mq7xy83roedCs5EWMpzG
          claim_id: c_PLavDPEXNhX1tFWBihzsGG
          source_id: s_L9k7vZfv7WGGc6cTikKU4J
          stance: supports
          locator: CBDB:637679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637679）
          source: &a1
            id: s_L9k7vZfv7WGGc6cTikKU4J
            source_type: api_record
            title: 中国历代人物传记资料库：王德寅（CBDB 637679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637679&o=json
            external_identifier: CBDB:637679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.391Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_R5CPTS6UahGit9mqyJTX5B
        subject_person_id: p_SqpjC49Gwcij495gQNsSPX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德寅，清人物。籍贯大同，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 637679）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-jGCn5uxubixH1wLGwUxiv
          claim_id: c_R5CPTS6UahGit9mqyJTX5B
          source_id: s_L9k7vZfv7WGGc6cTikKU4J
          stance: supports
          locator: CBDB:637679
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

# 王德寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德寅 | accepted |
| bio.summary | 王德寅，清人物。籍贯大同，入仕鄉貢舉人，曾任教諭、訓導。（中国历代人物传记资料库 CBDB 637679） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德寅（CBDB 637679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637679&o=json)
