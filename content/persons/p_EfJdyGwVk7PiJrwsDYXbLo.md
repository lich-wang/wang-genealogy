---
schema: wang-person/v1
id: p_EfJdyGwVk7PiJrwsDYXbLo
status: active
merged_into: null
display_name: 王豸
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UwfckbXfu9gqE8no63xYjx
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HjRSmLTPe8r7riRJ423cqa
          claim_id: c_UwfckbXfu9gqE8no63xYjx
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: CBDB:308956
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（308956）
          source: &a1
            id: s_xKQ5jL6DiHY4YSqMSAPFzD
            source_type: api_record
            title: 中国历代人物传记资料库：王豸（CBDB 308956）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json
            external_identifier: CBDB:308956
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.802Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_C2kYN3Box5K1uKbmoK7bcH
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王豸，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 308956）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_c-3OkFkKrSp-R5v3sH0kH4
          claim_id: c_C2kYN3Box5K1uKbmoK7bcH
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: CBDB:308956
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_EScBJlf4iptlRWUea6dRRF
        subject_person_id: p_EfJdyGwVk7PiJrwsDYXbLo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DA2QvREynL5ZUoyG8V9cNp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ihJYwIQ4q8inh0LtOaXpNJ
          claim_id: c_EScBJlf4iptlRWUea6dRRF
          source_id: s_xKQ5jL6DiHY4YSqMSAPFzD
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第二甲第三十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DA2QvREynL5ZUoyG8V9cNp
        status: active
        display_name: 王春澤
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王豸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王豸 | accepted |
| bio.summary | 王豸，明人物。嘉靖二十六年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 308956） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DA2QvREynL5ZUoyG8V9cNp | 王春澤 | accepted |

## 外部来源

- [中国历代人物传记资料库：王豸（CBDB 308956）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=308956&o=json)
