---
schema: wang-person/v1
id: p_RAUPTpNtGS5JzW68Z77EaK
status: active
merged_into: null
display_name: 王澂
cbdb_id: 37672
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HM4aKFNPZFFhA4Ej2Tztpj
        subject_person_id: p_RAUPTpNtGS5JzW68Z77EaK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澂，宋人物。籍贯金壇，入仕進士，曾任通判、縣令、縣尉。（中国历代人物传记资料库 CBDB 37672）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5lgEz5tvoR8E4BL2y_6wby
          claim_id: c_HM4aKFNPZFFhA4Ej2Tztpj
          source_id: s_L7WYKbX92sN84utRVVCnEL
          stance: supports
          locator: CBDB:37672
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L7WYKbX92sN84utRVVCnEL
            source_type: api_record
            title: 中国历代人物传记资料库：王澂（CBDB 37672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37672&o=json
            external_identifier: CBDB:37672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.707Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_d4axQR6VcpUMHhJy42KBUe
        subject_person_id: p_RAUPTpNtGS5JzW68Z77EaK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_XHhstbf2KxXWQEt1u8MGbk
          claim_id: c_d4axQR6VcpUMHhJy42KBUe
          source_id: s_L7WYKbX92sN84utRVVCnEL
          stance: supports
          locator: CBDB:37672
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1101-1200）｜历史性依据：CBDB 朝代 = 宋
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

# 王澂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王澂，宋人物。籍贯金壇，入仕進士，曾任通判、縣令、縣尉。（中国历代人物传记资料库 CBDB 37672） | accepted |
| name.primary | 王澂 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王澂（CBDB 37672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37672&o=json)
