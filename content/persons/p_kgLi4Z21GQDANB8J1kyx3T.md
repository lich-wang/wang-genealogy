---
schema: wang-person/v1
id: p_kgLi4Z21GQDANB8J1kyx3T
status: active
merged_into: null
display_name: 王級
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6WanCPoL8N6L9akWnygohQ
        subject_person_id: p_kgLi4Z21GQDANB8J1kyx3T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王級
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2LDKvCUqQmEQwiS6PV32b9
          claim_id: c_6WanCPoL8N6L9akWnygohQ
          source_id: s_FLdV73MaydhgiMw3eXg7rw
          stance: supports
          locator: CBDB:639738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639738）
          source: &a1
            id: s_FLdV73MaydhgiMw3eXg7rw
            source_type: api_record
            title: 中国历代人物传记资料库：王級（CBDB 639738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639738&o=json
            external_identifier: CBDB:639738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.031Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TAGqFCGAUjthT7zQ2E5GAv
        subject_person_id: p_kgLi4Z21GQDANB8J1kyx3T
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王級，清人物。籍贯青州府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 639738）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2Bx-5Ng4_BBLxJfWu3S4TC
          claim_id: c_TAGqFCGAUjthT7zQ2E5GAv
          source_id: s_FLdV73MaydhgiMw3eXg7rw
          stance: supports
          locator: CBDB:639738
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

# 王級

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王級 | accepted |
| bio.summary | 王級，清人物。籍贯青州府，入仕副榜，曾任復設教諭。（中国历代人物传记资料库 CBDB 639738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王級（CBDB 639738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639738&o=json)
