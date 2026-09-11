---
schema: wang-person/v1
id: p_CaMKm98yoKXSCjXtfqEjvN
status: active
merged_into: null
display_name: 王行儉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AT5FyzF3oiRWqpkcA3qdvF
        subject_person_id: p_CaMKm98yoKXSCjXtfqEjvN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行儉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fcGqWcutcXokqKKVAo54Dr
          claim_id: c_AT5FyzF3oiRWqpkcA3qdvF
          source_id: s_79PVtNAVC4g5jXeBcBBapB
          stance: supports
          locator: CBDB:69171
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69171）
          source: &a1
            id: s_79PVtNAVC4g5jXeBcBBapB
            source_type: api_record
            title: 中国历代人物传记资料库：王行儉（CBDB 69171）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69171&o=json
            external_identifier: CBDB:69171
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.137Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ABBQCGGJqAz4NYxSihtb6n
        subject_person_id: p_CaMKm98yoKXSCjXtfqEjvN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1797年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WFp4UkJJiPcVKJ5Z4CPg4X
          claim_id: c_ABBQCGGJqAz4NYxSihtb6n
          source_id: s_79PVtNAVC4g5jXeBcBBapB
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PRVPpAQmUGZ4r8T7dixxAE
        subject_person_id: p_CaMKm98yoKXSCjXtfqEjvN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行儉（卒于1797年），清人物。籍贯溧陽，入仕鄉貢舉人，曾任縣知縣、知州。（中国历代人物传记资料库 CBDB 69171）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OeOz2zoJSBuQ5ECWAphQV5
          claim_id: c_PRVPpAQmUGZ4r8T7dixxAE
          source_id: s_79PVtNAVC4g5jXeBcBBapB
          stance: supports
          locator: CBDB:69171
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

# 王行儉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行儉 | accepted |
| death.date | 1797年 | accepted |
| bio.summary | 王行儉（卒于1797年），清人物。籍贯溧陽，入仕鄉貢舉人，曾任縣知縣、知州。（中国历代人物传记资料库 CBDB 69171） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王行儉（CBDB 69171）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69171&o=json)
