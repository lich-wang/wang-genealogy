---
schema: wang-person/v1
id: p_e9Epe4CDBkbdaTY8PT9SQQ
status: active
merged_into: null
display_name: 王瑞鳳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KniSVKsUzKe9uCNVTWpdEw
        subject_person_id: p_e9Epe4CDBkbdaTY8PT9SQQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑞鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NKvHn74ssvawCgdRjbCn5w
          claim_id: c_KniSVKsUzKe9uCNVTWpdEw
          source_id: s_9NFAJbeZbSPi8ss1Sprzt2
          stance: supports
          locator: CBDB:69438
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69438）
          source: &a1
            id: s_9NFAJbeZbSPi8ss1Sprzt2
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞鳳（CBDB 69438）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69438&o=json
            external_identifier: CBDB:69438
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_DdiSsesaAtjspGA9bY6UQR
        subject_person_id: p_e9Epe4CDBkbdaTY8PT9SQQ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1800年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PyP89PQg2P2pYTDoY1XgaJ
          claim_id: c_DdiSsesaAtjspGA9bY6UQR
          source_id: s_9NFAJbeZbSPi8ss1Sprzt2
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
        id: c_cSHSZBACw9uEjurngpuMS2
        subject_person_id: p_e9Epe4CDBkbdaTY8PT9SQQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t5dHooF7mE22wL4WKMrBEm
          claim_id: c_cSHSZBACw9uEjurngpuMS2
          source_id: s_9NFAJbeZbSPi8ss1Sprzt2
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
  descendants: []
  other: []
---

# 王瑞鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑞鳳 | accepted |
| death.date | 1800年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑞鳳（CBDB 69438）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69438&o=json)
