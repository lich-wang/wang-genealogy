---
schema: wang-person/v1
id: p_8K3Q23xWCwLt3BcGZbHd4i
status: active
merged_into: null
display_name: 王鴻之
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_h76745xKTUV16rYR9nUcZs
        subject_person_id: p_8K3Q23xWCwLt3BcGZbHd4i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rqDTbDZE3EiouMG2PQHWKk
          claim_id: c_h76745xKTUV16rYR9nUcZs
          source_id: s_cEFJ1rW1e229HVZLNeBcUw
          stance: supports
          locator: CBDB:532439
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532439）
          source: &a1
            id: s_cEFJ1rW1e229HVZLNeBcUw
            source_type: api_record
            title: 中国历代人物传记资料库：王鴻之（CBDB 532439）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532439&o=json
            external_identifier: CBDB:532439
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.368Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MTADEE5Vm8iR7sQy2tAJzA
        subject_person_id: p_8K3Q23xWCwLt3BcGZbHd4i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鴻之，宋人物。籍贯常州，入仕進士。（中国历代人物传记资料库 CBDB 532439）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vSK6EurHFaDq6oFXczhU-s
          claim_id: c_MTADEE5Vm8iR7sQy2tAJzA
          source_id: s_cEFJ1rW1e229HVZLNeBcUw
          stance: supports
          locator: CBDB:532439
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

# 王鴻之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鴻之 | accepted |
| bio.summary | 王鴻之，宋人物。籍贯常州，入仕進士。（中国历代人物传记资料库 CBDB 532439） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鴻之（CBDB 532439）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532439&o=json)
