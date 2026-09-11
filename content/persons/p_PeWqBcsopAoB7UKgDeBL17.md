---
schema: wang-person/v1
id: p_PeWqBcsopAoB7UKgDeBL17
status: active
merged_into: null
display_name: 王用涉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JQRuARVkHsu3QuJ8YteLh5
        subject_person_id: p_PeWqBcsopAoB7UKgDeBL17
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用涉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_S9anRdVazc9dyBzHUzZz6D
          claim_id: c_JQRuARVkHsu3QuJ8YteLh5
          source_id: s_Cf1sja8v5j77BERQHEqQhD
          stance: supports
          locator: CBDB:639471
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639471）
          source: &a1
            id: s_Cf1sja8v5j77BERQHEqQhD
            source_type: api_record
            title: 中国历代人物传记资料库：王用涉（CBDB 639471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639471&o=json
            external_identifier: CBDB:639471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.944Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8WnQBCxRwuBRyQr6A98pGY
        subject_person_id: p_PeWqBcsopAoB7UKgDeBL17
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用涉，清人物。籍贯同州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639471）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OQs1GxYi9yHx10B2zSd7nD
          claim_id: c_8WnQBCxRwuBRyQr6A98pGY
          source_id: s_Cf1sja8v5j77BERQHEqQhD
          stance: supports
          locator: CBDB:639471
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

# 王用涉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用涉 | accepted |
| bio.summary | 王用涉，清人物。籍贯同州府，入仕鄉貢舉人，曾任學正。（中国历代人物传记资料库 CBDB 639471） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王用涉（CBDB 639471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639471&o=json)
