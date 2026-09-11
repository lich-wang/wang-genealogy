---
schema: wang-person/v1
id: p_PvyCBtvgFt1A6tKBuzUbEc
status: active
merged_into: null
display_name: 王文正
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MtsskPhJY2kohjKKq7nZyp
        subject_person_id: p_PvyCBtvgFt1A6tKBuzUbEc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JBQ7KAfBNK7PNsYoRH1TkX
          claim_id: c_MtsskPhJY2kohjKKq7nZyp
          source_id: s_sG5Ltd7tZS8dvjK5HF191z
          stance: supports
          locator: CBDB:208599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208599）
          source: &a1
            id: s_sG5Ltd7tZS8dvjK5HF191z
            source_type: api_record
            title: 中国历代人物传记资料库：王文正（CBDB 208599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208599&o=json
            external_identifier: CBDB:208599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kJqaSgv9DpMMDuT27DcuNH
        subject_person_id: p_PvyCBtvgFt1A6tKBuzUbEc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ebL3BbU5m2zWs1dmnWePdr
          claim_id: c_kJqaSgv9DpMMDuT27DcuNH
          source_id: s_sG5Ltd7tZS8dvjK5HF191z
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
  descendants:
    - claim:
        id: c_qBPeLjx8Ya5DiihwakBXlE
        subject_person_id: p_PvyCBtvgFt1A6tKBuzUbEc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OT-Zqz1ldlq17NEQRXMuo5
          claim_id: c_qBPeLjx8Ya5DiihwakBXlE
          source_id: s_sG5Ltd7tZS8dvjK5HF191z
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_CgzpCKBF2Cnch1g1qwE9Ao
        status: active
        display_name: 王世能
        merged_into_person_id: null
  other: []
---

# 王文正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文正 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_CgzpCKBF2Cnch1g1qwE9Ao | 王世能 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文正（CBDB 208599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208599&o=json)
