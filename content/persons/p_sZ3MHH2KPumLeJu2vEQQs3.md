---
schema: wang-person/v1
id: p_sZ3MHH2KPumLeJu2vEQQs3
status: active
merged_into: null
display_name: 王禮圻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1iEpWnNzWtKxCjTJhEkznJ
        subject_person_id: p_sZ3MHH2KPumLeJu2vEQQs3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮圻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xs6hmFnBmM3zk4VKMbxaij
          claim_id: c_1iEpWnNzWtKxCjTJhEkznJ
          source_id: s_JLMLoZ9E6V5iWFqepPDCtD
          stance: supports
          locator: CBDB:639626
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639626）
          source: &a1
            id: s_JLMLoZ9E6V5iWFqepPDCtD
            source_type: api_record
            title: 中国历代人物传记资料库：王禮圻（CBDB 639626）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639626&o=json
            external_identifier: CBDB:639626
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AR1VYd4N2Bqks44vrkStC5
        subject_person_id: p_sZ3MHH2KPumLeJu2vEQQs3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王禮圻，清人物。籍贯長沙，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639626）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iAiwWIhGz5M6q12faTFJHU
          claim_id: c_AR1VYd4N2Bqks44vrkStC5
          source_id: s_JLMLoZ9E6V5iWFqepPDCtD
          stance: supports
          locator: CBDB:639626
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

# 王禮圻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王禮圻 | accepted |
| bio.summary | 王禮圻，清人物。籍贯長沙，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 639626） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王禮圻（CBDB 639626）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639626&o=json)
