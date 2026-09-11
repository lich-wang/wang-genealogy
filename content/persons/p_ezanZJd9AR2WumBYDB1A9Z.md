---
schema: wang-person/v1
id: p_ezanZJd9AR2WumBYDB1A9Z
status: active
merged_into: null
display_name: 王家榮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_636JtUXHoK6N43KiYhCKW6
        subject_person_id: p_ezanZJd9AR2WumBYDB1A9Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_emj8Z7Sm5c1RZLkkGcGmoN
          claim_id: c_636JtUXHoK6N43KiYhCKW6
          source_id: s_sUwCEJQGRWXRJ7L7HiE9Gq
          stance: supports
          locator: CBDB:637192
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637192）
          source: &a1
            id: s_sUwCEJQGRWXRJ7L7HiE9Gq
            source_type: api_record
            title: 中国历代人物传记资料库：王家榮（CBDB 637192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637192&o=json
            external_identifier: CBDB:637192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.361Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HMqrqW3bqsQmU4482wSDiK
        subject_person_id: p_ezanZJd9AR2WumBYDB1A9Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家榮，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637192）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_47pSo7MbbLo90jB_rxa-sQ
          claim_id: c_HMqrqW3bqsQmU4482wSDiK
          source_id: s_sUwCEJQGRWXRJ7L7HiE9Gq
          stance: supports
          locator: CBDB:637192
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

# 王家榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家榮 | accepted |
| bio.summary | 王家榮，清人物。籍贯大興，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 637192） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家榮（CBDB 637192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637192&o=json)
