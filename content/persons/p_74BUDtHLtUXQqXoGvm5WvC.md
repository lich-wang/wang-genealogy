---
schema: wang-person/v1
id: p_74BUDtHLtUXQqXoGvm5WvC
status: active
merged_into: null
display_name: 王亮熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sx4a8G58z5hGB83WvTmgrf
        subject_person_id: p_74BUDtHLtUXQqXoGvm5WvC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VFJCBrUS8i3BdDRrPWLq8C
          claim_id: c_Sx4a8G58z5hGB83WvTmgrf
          source_id: s_Ck8pPaRQYAeUumwUtLh36b
          stance: supports
          locator: CBDB:635867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635867）
          source: &a1
            id: s_Ck8pPaRQYAeUumwUtLh36b
            source_type: api_record
            title: 中国历代人物传记资料库：王亮熙（CBDB 635867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635867&o=json
            external_identifier: CBDB:635867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3aEe5umyXDdDXFyLmzPU75
        subject_person_id: p_74BUDtHLtUXQqXoGvm5WvC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亮熙，清人物。籍贯武陟，曾任主事。（中国历代人物传记资料库 CBDB 635867）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jx7oXfl4SPmzzNVcFS9vRH
          claim_id: c_3aEe5umyXDdDXFyLmzPU75
          source_id: s_Ck8pPaRQYAeUumwUtLh36b
          stance: supports
          locator: CBDB:635867
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

# 王亮熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亮熙 | accepted |
| bio.summary | 王亮熙，清人物。籍贯武陟，曾任主事。（中国历代人物传记资料库 CBDB 635867） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亮熙（CBDB 635867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635867&o=json)
