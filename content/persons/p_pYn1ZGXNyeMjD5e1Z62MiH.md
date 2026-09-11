---
schema: wang-person/v1
id: p_pYn1ZGXNyeMjD5e1Z62MiH
status: active
merged_into: null
display_name: 王之銳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ECdNtn2d17NS5b3yH4zi91
        subject_person_id: p_pYn1ZGXNyeMjD5e1Z62MiH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sF1WH8LgtqF4Gm6E4DKsSX
          claim_id: c_ECdNtn2d17NS5b3yH4zi91
          source_id: s_SYRv77smaXwcM5EXxKbkz5
          stance: supports
          locator: CBDB:69063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69063）
          source: &a1
            id: s_SYRv77smaXwcM5EXxKbkz5
            source_type: api_record
            title: 中国历代人物传记资料库：王之銳（CBDB 69063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69063&o=json
            external_identifier: CBDB:69063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.105Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_7qS1AbFtbFkCPEC3GNo1Aw
        subject_person_id: p_pYn1ZGXNyeMjD5e1Z62MiH
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1675年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PeZLU1KN7htcpN4QU2vt2c
          claim_id: c_7qS1AbFtbFkCPEC3GNo1Aw
          source_id: s_SYRv77smaXwcM5EXxKbkz5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_cZyx7Xg7FCiTErvmoenh6B
        subject_person_id: p_pYn1ZGXNyeMjD5e1Z62MiH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1753年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TSA1RvxEDKhwucdCHwfGie
          claim_id: c_cZyx7Xg7FCiTErvmoenh6B
          source_id: s_SYRv77smaXwcM5EXxKbkz5
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
        id: c_f8YQDoXSArmXCbxpjzus5Z
        subject_person_id: p_pYn1ZGXNyeMjD5e1Z62MiH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之銳（1675年—1753年），清人物。籍贯河間，入仕領催。（中国历代人物传记资料库 CBDB 69063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GdW-1BrS-zy6J4JSL6Tgpl
          claim_id: c_f8YQDoXSArmXCbxpjzus5Z
          source_id: s_SYRv77smaXwcM5EXxKbkz5
          stance: supports
          locator: CBDB:69063
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

# 王之銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之銳 | accepted |
| birth.date | 1675年 | accepted |
| death.date | 1753年 | accepted |
| bio.summary | 王之銳（1675年—1753年），清人物。籍贯河間，入仕領催。（中国历代人物传记资料库 CBDB 69063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之銳（CBDB 69063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69063&o=json)
