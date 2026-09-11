---
schema: wang-person/v1
id: p_7eBR1tN4LK5XzL4AvC2uzX
status: active
merged_into: null
display_name: 王廣煒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DK7CyVANaNDJEQX6UXo63V
        subject_person_id: p_7eBR1tN4LK5XzL4AvC2uzX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣煒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gMMWXqBQGZPNs7JkH6Ph2D
          claim_id: c_DK7CyVANaNDJEQX6UXo63V
          source_id: s_ocAdDP58ZptVMJvudEKnjd
          stance: supports
          locator: CBDB:637455
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637455）
          source: &a1
            id: s_ocAdDP58ZptVMJvudEKnjd
            source_type: api_record
            title: 中国历代人物传记资料库：王廣煒（CBDB 637455）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637455&o=json
            external_identifier: CBDB:637455
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.326Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6vhZLJVgeRTxEhJJG28wHV
        subject_person_id: p_7eBR1tN4LK5XzL4AvC2uzX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廣煒，清人物。籍贯銅仁，曾任知縣。（中国历代人物传记资料库 CBDB 637455）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KXsN3Ar5_anMzT1ZJY4byW
          claim_id: c_6vhZLJVgeRTxEhJJG28wHV
          source_id: s_ocAdDP58ZptVMJvudEKnjd
          stance: supports
          locator: CBDB:637455
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

# 王廣煒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廣煒 | accepted |
| bio.summary | 王廣煒，清人物。籍贯銅仁，曾任知縣。（中国历代人物传记资料库 CBDB 637455） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廣煒（CBDB 637455）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637455&o=json)
