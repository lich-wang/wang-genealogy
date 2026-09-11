---
schema: wang-person/v1
id: p_9Fipqyztibgk5sdcMozPNH
status: active
merged_into: null
display_name: 王德
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wNWZiZrpfkJBFWhHBY4Tcs
        subject_person_id: p_9Fipqyztibgk5sdcMozPNH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uiQJ9RcQudtJrnXJ7VQU3h
          claim_id: c_wNWZiZrpfkJBFWhHBY4Tcs
          source_id: s_QTcVW6Z3jba8TMJaX8JidD
          stance: supports
          locator: CBDB:68162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68162）
          source: &a1
            id: s_QTcVW6Z3jba8TMJaX8JidD
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 68162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68162&o=json
            external_identifier: CBDB:68162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.058Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_zSuRJmorknYt79Sadgb6PG
        subject_person_id: p_9Fipqyztibgk5sdcMozPNH
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1364年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RFt45FuXQn23PEY7UdFUN1
          claim_id: c_zSuRJmorknYt79Sadgb6PG
          source_id: s_QTcVW6Z3jba8TMJaX8JidD
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
        id: c_v5DHLL4xNr58bSVLjmRBri
        subject_person_id: p_9Fipqyztibgk5sdcMozPNH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德（卒于1364年），元人物。曾任驍騎衛管軍上千戶、管軍正千戶。（中国历代人物传记资料库 CBDB 68162）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mpp4gcUSStjuNX97qSio8r
          claim_id: c_v5DHLL4xNr58bSVLjmRBri
          source_id: s_QTcVW6Z3jba8TMJaX8JidD
          stance: supports
          locator: CBDB:68162
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

# 王德

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德 | accepted |
| death.date | 1364年 | accepted |
| bio.summary | 王德（卒于1364年），元人物。曾任驍騎衛管軍上千戶、管軍正千戶。（中国历代人物传记资料库 CBDB 68162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德（CBDB 68162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68162&o=json)
