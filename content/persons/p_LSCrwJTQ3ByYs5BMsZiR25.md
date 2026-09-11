---
schema: wang-person/v1
id: p_LSCrwJTQ3ByYs5BMsZiR25
status: active
merged_into: null
display_name: 王應麟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4kh5uASrfsDqoi9rNA12Q
        subject_person_id: p_LSCrwJTQ3ByYs5BMsZiR25
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Mg4ft9P2rxrFFu7uNBaRUo
          claim_id: c_K4kh5uASrfsDqoi9rNA12Q
          source_id: s_ZAR4fhKzJ7fvyFELthDN8T
          stance: supports
          locator: CBDB:506716
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（506716）
          source: &a1
            id: s_ZAR4fhKzJ7fvyFELthDN8T
            source_type: api_record
            title: 中国历代人物传记资料库：王應麟（CBDB 506716）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506716&o=json
            external_identifier: CBDB:506716
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_av2RruhePTxGduEhhHsfAk
        subject_person_id: p_LSCrwJTQ3ByYs5BMsZiR25
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應麟，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 506716）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ftgwnyxgdG-ThV_fsD65Jo
          claim_id: c_av2RruhePTxGduEhhHsfAk
          source_id: s_ZAR4fhKzJ7fvyFELthDN8T
          stance: supports
          locator: CBDB:506716
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

# 王應麟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應麟 | accepted |
| bio.summary | 王應麟，明人物。曾任知縣。（中国历代人物传记资料库 CBDB 506716） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王應麟（CBDB 506716）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=506716&o=json)
