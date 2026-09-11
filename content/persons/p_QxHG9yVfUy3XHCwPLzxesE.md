---
schema: wang-person/v1
id: p_QxHG9yVfUy3XHCwPLzxesE
status: active
merged_into: null
display_name: 王熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FqbVBQzNkytwy3JZFqxscK
        subject_person_id: p_QxHG9yVfUy3XHCwPLzxesE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uDsL55eeirJ6pYQm7Qy2Vx
          claim_id: c_FqbVBQzNkytwy3JZFqxscK
          source_id: s_AYdSrXhxmRD8nCDJM3xdcR
          stance: supports
          locator: CBDB:508826
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（508826）
          source: &a1
            id: s_AYdSrXhxmRD8nCDJM3xdcR
            source_type: api_record
            title: 中国历代人物传记资料库：王熙（CBDB 508826）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508826&o=json
            external_identifier: CBDB:508826
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.120Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_koog6yCkEsRurwuRMNieM7
        subject_person_id: p_QxHG9yVfUy3XHCwPLzxesE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王熙，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 508826）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X7j0L3PehRlr1W5p2txIvQ
          claim_id: c_koog6yCkEsRurwuRMNieM7
          source_id: s_AYdSrXhxmRD8nCDJM3xdcR
          stance: supports
          locator: CBDB:508826
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

# 王熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王熙 | accepted |
| bio.summary | 王熙，元人物。曾任縣尹。（中国历代人物传记资料库 CBDB 508826） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王熙（CBDB 508826）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=508826&o=json)
