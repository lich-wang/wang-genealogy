---
schema: wang-person/v1
id: p_58pkdhLEFazqttNKhHnwFh
status: active
merged_into: null
display_name: 王浚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SMT62yc2AdfBBJQ5w6m1CT
        subject_person_id: p_58pkdhLEFazqttNKhHnwFh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6mcHg5X1JKDBcTxbrjb91s
          claim_id: c_SMT62yc2AdfBBJQ5w6m1CT
          source_id: s_rFV7F9CNqf7SVUVwGSGx7H
          stance: supports
          locator: CBDB:92069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92069）
          source: &a1
            id: s_rFV7F9CNqf7SVUVwGSGx7H
            source_type: api_record
            title: 中国历代人物传记资料库：王浚（CBDB 92069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92069&o=json
            external_identifier: CBDB:92069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9nNr1CXMLb6MWdKBcVrhUK
        subject_person_id: p_58pkdhLEFazqttNKhHnwFh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王浚，唐人物。身份为詩人，曾任太守。（中国历代人物传记资料库 CBDB 92069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZTRD-1u7WUaitn4CC8rN_E
          claim_id: c_9nNr1CXMLb6MWdKBcVrhUK
          source_id: s_rFV7F9CNqf7SVUVwGSGx7H
          stance: supports
          locator: CBDB:92069
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

# 王浚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王浚 | accepted |
| bio.summary | 王浚，唐人物。身份为詩人，曾任太守。（中国历代人物传记资料库 CBDB 92069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王浚（CBDB 92069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92069&o=json)
