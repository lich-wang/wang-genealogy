---
schema: wang-person/v1
id: p_941b793yF1uZG7jyN114nF
status: active
merged_into: null
display_name: 王綱
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NCxKPyZp9mZnttJWPC1J8
        subject_person_id: p_941b793yF1uZG7jyN114nF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_s1caw2DybqMtgPMDEj2NaU
          claim_id: c_3NCxKPyZp9mZnttJWPC1J8
          source_id: s_6yByKGNagFBE5XLfC6kE5C
          stance: supports
          locator: CBDB:307063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（307063）
          source: &a1
            id: s_6yByKGNagFBE5XLfC6kE5C
            source_type: api_record
            title: 中国历代人物传记资料库：王綱（CBDB 307063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307063&o=json
            external_identifier: CBDB:307063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.779Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5EuCCXB8ExQi9MX9aX48Rr
        subject_person_id: p_941b793yF1uZG7jyN114nF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綱，明人物。嘉靖二十三年進士，曾任都察院右都御史、資政大夫。（中国历代人物传记资料库 CBDB 307063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_iHjcQ2qEUkUsfzdiiM2mfc
          claim_id: c_5EuCCXB8ExQi9MX9aX48Rr
          source_id: s_6yByKGNagFBE5XLfC6kE5C
          stance: supports
          locator: CBDB:307063
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
  descendants:
    - claim:
        id: c_-taggiuwzZv4BT5wi2Pkq-
        subject_person_id: p_941b793yF1uZG7jyN114nF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ABHWjEscFjoCVEgF2qr4dX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F247ArAHGTlBTUABW_PCSO
          claim_id: c_-taggiuwzZv4BT5wi2Pkq-
          source_id: s_6yByKGNagFBE5XLfC6kE5C
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ABHWjEscFjoCVEgF2qr4dX
        status: active
        display_name: 王宗性
        merged_into_person_id: null
  other: []
---

# 王綱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綱 | accepted |
| bio.summary | 王綱，明人物。嘉靖二十三年進士，曾任都察院右都御史、資政大夫。（中国历代人物传记资料库 CBDB 307063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_ABHWjEscFjoCVEgF2qr4dX | 王宗性 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綱（CBDB 307063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307063&o=json)
