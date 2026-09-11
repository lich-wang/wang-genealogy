---
schema: wang-person/v1
id: p_yeZ3ABA2ddXc65DLQ59a3g
status: active
merged_into: null
display_name: 王禄
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YddWvK1nyZrZPEHtX6JeCE
        subject_person_id: p_yeZ3ABA2ddXc65DLQ59a3g
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禄
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zSNRPPuE37HtzqBWfn6Zzm
          claim_id: c_YddWvK1nyZrZPEHtX6JeCE
          source_id: s_3Q2zfGFbPCcPrXFr8eg8DY
          stance: supports
          locator: CBDB:489417
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（489417）
          source: &a1
            id: s_3Q2zfGFbPCcPrXFr8eg8DY
            source_type: api_record
            title: 中国历代人物传记资料库：王禄（CBDB 489417）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489417&o=json
            external_identifier: CBDB:489417
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.047Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RHkrfJvXZFzbmqV2MJGX6w
        subject_person_id: p_yeZ3ABA2ddXc65DLQ59a3g
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禄，史料所见人物。本项目依据《中国历代人物传记资料库：王禄（CBDB 489417）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_V5KUEC-PvZtu0kP0shdEwO
          claim_id: c_RHkrfJvXZFzbmqV2MJGX6w
          source_id: s_3Q2zfGFbPCcPrXFr8eg8DY
          stance: supports
          locator: CBDB:489417
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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

# 王禄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禄 | accepted |
| bio.summary | 王禄，史料所见人物。本项目依据《中国历代人物传记资料库：王禄（CBDB 489417）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禄（CBDB 489417）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=489417&o=json)
