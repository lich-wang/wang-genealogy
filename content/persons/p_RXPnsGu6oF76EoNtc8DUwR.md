---
schema: wang-person/v1
id: p_RXPnsGu6oF76EoNtc8DUwR
status: active
merged_into: null
display_name: 王福畤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_g1N3ADofDUFn19gCXX1QMk
        subject_person_id: p_RXPnsGu6oF76EoNtc8DUwR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福畤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rYPGwQejdmeC1joE8CA5UM
          claim_id: c_g1N3ADofDUFn19gCXX1QMk
          source_id: s_9GbjRJXUadhMQWypkCxCFq
          stance: supports
          locator: CBDB:379283
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（379283）
          source: &a1
            id: s_9GbjRJXUadhMQWypkCxCFq
            source_type: api_record
            title: 中国历代人物传记资料库：王福畤（CBDB 379283）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379283&o=json
            external_identifier: CBDB:379283
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.679Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pmq7jkrPNgHCXLfnn9B6HB
        subject_person_id: p_RXPnsGu6oF76EoNtc8DUwR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福畤，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379283）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jaHTKbifQAgeiqKmtK5sUe
          claim_id: c_pmq7jkrPNgHCXLfnn9B6HB
          source_id: s_9GbjRJXUadhMQWypkCxCFq
          stance: supports
          locator: CBDB:379283
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

# 王福畤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福畤 | accepted |
| bio.summary | 王福畤，唐人物。曾任州刺史。（中国历代人物传记资料库 CBDB 379283） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福畤（CBDB 379283）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=379283&o=json)
