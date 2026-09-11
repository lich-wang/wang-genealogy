---
schema: wang-person/v1
id: p_Kr3eYxqFZ9itTTShnhAGqp
status: active
merged_into: null
display_name: 王思羲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8CSdXYm1ZTfibT2eEhQ8hW
        subject_person_id: p_Kr3eYxqFZ9itTTShnhAGqp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思羲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K6FE8pHZLMpDwN9PV62y5c
          claim_id: c_8CSdXYm1ZTfibT2eEhQ8hW
          source_id: s_SoQnxTYD8ADJXic7piGoP2
          stance: supports
          locator: CBDB:637809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637809）
          source: &a1
            id: s_SoQnxTYD8ADJXic7piGoP2
            source_type: api_record
            title: 中国历代人物传记资料库：王思羲（CBDB 637809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637809&o=json
            external_identifier: CBDB:637809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.429Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TxUrWCoLAb2SYHtWCwKkny
        subject_person_id: p_Kr3eYxqFZ9itTTShnhAGqp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思羲，清人物。籍贯寶坻，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 637809）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IoCvjrLXNKl4ZHbOpVK030
          claim_id: c_TxUrWCoLAb2SYHtWCwKkny
          source_id: s_SoQnxTYD8ADJXic7piGoP2
          stance: supports
          locator: CBDB:637809
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

# 王思羲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思羲 | accepted |
| bio.summary | 王思羲，清人物。籍贯寶坻，入仕鄉貢舉人，曾任內閣中書。（中国历代人物传记资料库 CBDB 637809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王思羲（CBDB 637809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637809&o=json)
