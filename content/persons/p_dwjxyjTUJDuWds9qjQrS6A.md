---
schema: wang-person/v1
id: p_dwjxyjTUJDuWds9qjQrS6A
status: active
merged_into: null
display_name: 王之柱
cbdb_id: 342560
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_StFALpuen1LpXhAa1zw9fX
        subject_person_id: p_dwjxyjTUJDuWds9qjQrS6A
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之柱，明人物。明清進士進士，籍贯武進，身份为孝子/孝女，入仕進士。（中国历代人物传记资料库 CBDB 342560）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_pT7oHi-gDsvUWkch14-gqE
          claim_id: c_StFALpuen1LpXhAa1zw9fX
          source_id: s_3vvcEV1c8LMvHnsigkPGKE
          stance: supports
          locator: CBDB:342560
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_3vvcEV1c8LMvHnsigkPGKE
            source_type: api_record
            title: 中国历代人物传记资料库：王之柱（CBDB 342560）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342560&o=json
            external_identifier: CBDB:342560
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:12.174Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ASLugrfm3DyhkKd1xry6mn
        subject_person_id: p_dwjxyjTUJDuWds9qjQrS6A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之柱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yywawDumCFKm1EXbJcViXH
          claim_id: c_ASLugrfm3DyhkKd1xry6mn
          source_id: s_3vvcEV1c8LMvHnsigkPGKE
          stance: supports
          locator: CBDB:342560
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4301-4400）｜历史性依据：CBDB 朝代 = 明
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

# 王之柱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之柱，明人物。明清進士進士，籍贯武進，身份为孝子/孝女，入仕進士。（中国历代人物传记资料库 CBDB 342560） | accepted |
| name.primary | 王之柱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之柱（CBDB 342560）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342560&o=json)
