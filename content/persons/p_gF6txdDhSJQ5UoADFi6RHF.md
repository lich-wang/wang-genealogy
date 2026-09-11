---
schema: wang-person/v1
id: p_gF6txdDhSJQ5UoADFi6RHF
status: active
merged_into: null
display_name: 王文焕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ohjA36dH8kNwMQWF9ASQMf
        subject_person_id: p_gF6txdDhSJQ5UoADFi6RHF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文焕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qi7gTLQP2u1VJ39ww33Kvj
          claim_id: c_ohjA36dH8kNwMQWF9ASQMf
          source_id: s_sWfUDzi3LNaEoCJV5fkoYe
          stance: supports
          locator: CBDB:414740
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（414740）
          source: &a1
            id: s_sWfUDzi3LNaEoCJV5fkoYe
            source_type: api_record
            title: 中国历代人物传记资料库：王文焕（CBDB 414740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414740&o=json
            external_identifier: CBDB:414740
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.972Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5WE1aox6mw1LNshGqoTBcH
        subject_person_id: p_gF6txdDhSJQ5UoADFi6RHF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文焕，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414740）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CyfhLFJ3k9-QrOVAPNZv8l
          claim_id: c_5WE1aox6mw1LNshGqoTBcH
          source_id: s_sWfUDzi3LNaEoCJV5fkoYe
          stance: supports
          locator: CBDB:414740
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

# 王文焕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文焕 | accepted |
| bio.summary | 王文焕，清人物。曾任知縣。（中国历代人物传记资料库 CBDB 414740） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王文焕（CBDB 414740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=414740&o=json)
