---
schema: wang-person/v1
id: p_xSWvVzXmHZAcC8GenuAVwz
status: active
merged_into: null
display_name: 王九言
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D5YTbWpL1mWzA2L6AHX5AA
        subject_person_id: p_xSWvVzXmHZAcC8GenuAVwz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九言
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xyk34znu4JKtBkUr5A3QvM
          claim_id: c_D5YTbWpL1mWzA2L6AHX5AA
          source_id: s_iE5nPMGA2Q9oXwNAduSagA
          stance: supports
          locator: CBDB:45862
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45862）
          source: &a1
            id: s_iE5nPMGA2Q9oXwNAduSagA
            source_type: api_record
            title: 中国历代人物传记资料库：王九言（CBDB 45862）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45862&o=json
            external_identifier: CBDB:45862
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.701Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XQFMAFLLCbfqmqwzHLs5ED
        subject_person_id: p_xSWvVzXmHZAcC8GenuAVwz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九言，宋人物。曾任觀察支使。（中国历代人物传记资料库 CBDB 45862）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OU8RqnOOUjyQe_c2UjuFon
          claim_id: c_XQFMAFLLCbfqmqwzHLs5ED
          source_id: s_iE5nPMGA2Q9oXwNAduSagA
          stance: supports
          locator: CBDB:45862
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

# 王九言

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九言 | accepted |
| bio.summary | 王九言，宋人物。曾任觀察支使。（中国历代人物传记资料库 CBDB 45862） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王九言（CBDB 45862）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45862&o=json)
