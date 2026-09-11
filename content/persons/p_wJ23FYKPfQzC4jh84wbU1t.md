---
schema: wang-person/v1
id: p_wJ23FYKPfQzC4jh84wbU1t
status: active
merged_into: null
display_name: 王寅
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jwyxv8z4HYxf7999DDNwcS
        subject_person_id: p_wJ23FYKPfQzC4jh84wbU1t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_G2m8RekiWbrR99dkovJfFp
          claim_id: c_jwyxv8z4HYxf7999DDNwcS
          source_id: s_Q8LkncHjQUkrtizLf1siNA
          stance: supports
          locator: CBDB:257015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（257015）
          source: &a1
            id: s_Q8LkncHjQUkrtizLf1siNA
            source_type: api_record
            title: 中国历代人物传记资料库：王寅（CBDB 257015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257015&o=json
            external_identifier: CBDB:257015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.395Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4nc8RjEYbA8xE5efd2v3DW
        subject_person_id: p_wJ23FYKPfQzC4jh84wbU1t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寅，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257015）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cFerAFkDTwLIW4vz_O8adV
          claim_id: c_4nc8RjEYbA8xE5efd2v3DW
          source_id: s_Q8LkncHjQUkrtizLf1siNA
          stance: supports
          locator: CBDB:257015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_zcGmdKVAfMMcFQZ1dD0hqs
        subject_person_id: p_wJ23FYKPfQzC4jh84wbU1t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZrffszDUs4AxXq4vwPGj2R
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PHms0bjGcmzVHaSuxFzT-R
          claim_id: c_zcGmdKVAfMMcFQZ1dD0hqs
          source_id: s_Q8LkncHjQUkrtizLf1siNA
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第一百五十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZrffszDUs4AxXq4vwPGj2R
        status: active
        display_name: 王章
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寅 | accepted |
| bio.summary | 王寅，明人物。成化十七年進士，籍贯膚施。（中国历代人物传记资料库 CBDB 257015） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_ZrffszDUs4AxXq4vwPGj2R | 王章 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寅（CBDB 257015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257015&o=json)
