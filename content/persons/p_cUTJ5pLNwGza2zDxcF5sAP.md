---
schema: wang-person/v1
id: p_cUTJ5pLNwGza2zDxcF5sAP
status: active
merged_into: null
display_name: 王鉞
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w82iQKJkotwY6qtLph8JEu
        subject_person_id: p_cUTJ5pLNwGza2zDxcF5sAP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_h3kac95amUXTgFM68e3oC7
          claim_id: c_w82iQKJkotwY6qtLph8JEu
          source_id: s_Jjrg3aWcD11E5R8CcZCAGB
          stance: supports
          locator: CBDB:243562
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（243562）
          source: &a1
            id: s_Jjrg3aWcD11E5R8CcZCAGB
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 243562）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json
            external_identifier: CBDB:243562
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.003Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WVUpKA1BH2YvDSD4pQ5aH2
        subject_person_id: p_cUTJ5pLNwGza2zDxcF5sAP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鉞，明人物。成化五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 243562）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_KPrd0I4ZgcVtalQRdOOdfB
          claim_id: c_WVUpKA1BH2YvDSD4pQ5aH2
          source_id: s_Jjrg3aWcD11E5R8CcZCAGB
          stance: supports
          locator: CBDB:243562
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

# 王鉞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鉞 | accepted |
| bio.summary | 王鉞，明人物。成化五年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 243562） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鉞（CBDB 243562）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=243562&o=json)
