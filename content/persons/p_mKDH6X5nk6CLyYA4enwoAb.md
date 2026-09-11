---
schema: wang-person/v1
id: p_mKDH6X5nk6CLyYA4enwoAb
status: active
merged_into: null
display_name: 王作棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6tLZ69wdSq2oyaGJdLtR3p
        subject_person_id: p_mKDH6X5nk6CLyYA4enwoAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8ckqJbsXLaNnGsLaBBGsRg
          claim_id: c_6tLZ69wdSq2oyaGJdLtR3p
          source_id: s_GCaVwjyQhqKj89WxB9Y58y
          stance: supports
          locator: CBDB:636000
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636000）
          source: &a1
            id: s_GCaVwjyQhqKj89WxB9Y58y
            source_type: api_record
            title: 中国历代人物传记资料库：王作棟（CBDB 636000）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636000&o=json
            external_identifier: CBDB:636000
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.857Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mB9cS25bbZNtXxrPEYtxoV
        subject_person_id: p_mKDH6X5nk6CLyYA4enwoAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王作棟，清人物。籍贯武進，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636000）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Lb79fADHO7YzJ4NxaFr3Qj
          claim_id: c_mB9cS25bbZNtXxrPEYtxoV
          source_id: s_GCaVwjyQhqKj89WxB9Y58y
          stance: supports
          locator: CBDB:636000
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

# 王作棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王作棟 | accepted |
| bio.summary | 王作棟，清人物。籍贯武進，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636000） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王作棟（CBDB 636000）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636000&o=json)
