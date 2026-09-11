---
schema: wang-person/v1
id: p_nVPk8Kg2S6W84D6Dh72Bju
status: active
merged_into: null
display_name: 王宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W3c97BZQBuPCEXdKqwQGRF
        subject_person_id: p_nVPk8Kg2S6W84D6Dh72Bju
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KnhRMT3LgkiHAcgFKdy7Dx
          claim_id: c_W3c97BZQBuPCEXdKqwQGRF
          source_id: s_36VMHU9gk84LP5CYiDa9ZN
          stance: supports
          locator: CBDB:38252
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（38252）
          source: &a1
            id: s_36VMHU9gk84LP5CYiDa9ZN
            source_type: api_record
            title: 中国历代人物传记资料库：王宣（CBDB 38252）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38252&o=json
            external_identifier: CBDB:38252
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.401Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2Sjuwj4mM9ScFLVo4WcwRk
        subject_person_id: p_nVPk8Kg2S6W84D6Dh72Bju
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1236年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7m7K2uPwRGUAhPAeR4gAxT
          claim_id: c_2Sjuwj4mM9ScFLVo4WcwRk
          source_id: s_36VMHU9gk84LP5CYiDa9ZN
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RowLt52fFKqaa7Y126jE4C
        subject_person_id: p_nVPk8Kg2S6W84D6Dh72Bju
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宣（卒于1236年），宋人物。曾任都統制。（中国历代人物传记资料库 CBDB 38252）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3YLB1LRhNRGP1uLSr0Yf1b
          claim_id: c_RowLt52fFKqaa7Y126jE4C
          source_id: s_36VMHU9gk84LP5CYiDa9ZN
          stance: supports
          locator: CBDB:38252
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

# 王宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宣 | accepted |
| death.date | 1236年 | accepted |
| bio.summary | 王宣（卒于1236年），宋人物。曾任都統制。（中国历代人物传记资料库 CBDB 38252） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宣（CBDB 38252）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38252&o=json)
