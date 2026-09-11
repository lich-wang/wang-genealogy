---
schema: wang-person/v1
id: p_gGVLHKVfXYq9ADSAbi6VxC
status: active
merged_into: null
display_name: 王字
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_c5ihJwasDaxXUaB5bD5sLB
        subject_person_id: p_gGVLHKVfXYq9ADSAbi6VxC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王字
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zwpZuHSQLzTXZ26cB5ncL6
          claim_id: c_c5ihJwasDaxXUaB5bD5sLB
          source_id: s_seBhQfbvF2icLcS1HUTnTN
          stance: supports
          locator: CBDB:414248
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414248）
          source: &a1
            id: s_seBhQfbvF2icLcS1HUTnTN
            source_type: api_record
            title: 中国历代人物传记资料库：王字（CBDB 414248）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414248&o=json
            external_identifier: CBDB:414248
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.941Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3snrfGQDdQ6N2Ve79X84La
        subject_person_id: p_gGVLHKVfXYq9ADSAbi6VxC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王字，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414248）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__4ywJkqAPIJFauFDddbSZq
          claim_id: c_3snrfGQDdQ6N2Ve79X84La
          source_id: s_seBhQfbvF2icLcS1HUTnTN
          stance: supports
          locator: CBDB:414248
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

# 王字

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王字 | accepted |
| bio.summary | 王字，明人物。曾任典史。（中国历代人物传记资料库 CBDB 414248） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王字（CBDB 414248）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414248&o=json)
