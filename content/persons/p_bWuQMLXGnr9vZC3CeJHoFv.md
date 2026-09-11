---
schema: wang-person/v1
id: p_bWuQMLXGnr9vZC3CeJHoFv
status: active
merged_into: null
display_name: 王克用
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3JQiADbWWbK363nVr4ASVu
        subject_person_id: p_bWuQMLXGnr9vZC3CeJHoFv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克用
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3C1W7z3XwHgDKDG7yR8qca
          claim_id: c_3JQiADbWWbK363nVr4ASVu
          source_id: s_L8svoaFU4PNc8EFKXNh1Su
          stance: supports
          locator: CBDB:413954
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（413954）
          source: &a1
            id: s_L8svoaFU4PNc8EFKXNh1Su
            source_type: api_record
            title: 中国历代人物传记资料库：王克用（CBDB 413954）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413954&o=json
            external_identifier: CBDB:413954
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.917Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f95AEfJAWSxWjcwLoTDuRC
        subject_person_id: p_bWuQMLXGnr9vZC3CeJHoFv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王克用，明人物。曾任典史。（中国历代人物传记资料库 CBDB 413954）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DmEfTLwekMFu0C94vVhTEF
          claim_id: c_f95AEfJAWSxWjcwLoTDuRC
          source_id: s_L8svoaFU4PNc8EFKXNh1Su
          stance: supports
          locator: CBDB:413954
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

# 王克用

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王克用 | accepted |
| bio.summary | 王克用，明人物。曾任典史。（中国历代人物传记资料库 CBDB 413954） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王克用（CBDB 413954）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=413954&o=json)
