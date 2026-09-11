---
schema: wang-person/v1
id: p_gAE7Y6mD8FN6PQfoSCLqU6
status: active
merged_into: null
display_name: 段氏
revision: 1
cbdb_id: 327947
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_La64yZVSlup4wCkYOydgyv
        subject_person_id: p_gAE7Y6mD8FN6PQfoSCLqU6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 段氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327947）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EN8XS9-3TBWdy7BNvyN9hR
          claim_id: c_La64yZVSlup4wCkYOydgyv
          source_id: s_E4hPiD9AzsAhuci4rgn_ao
          stance: supports
          locator: CBDB:327947
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_E4hPiD9AzsAhuci4rgn_ao
            source_type: api_record
            title: 中国历代人物传记资料库：段氏(王以纁妻)（CBDB 327947）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327947&o=json
            external_identifier: CBDB:327947
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_PdIMUglcpgx8gWdD6zDpHL
        subject_person_id: p_gAE7Y6mD8FN6PQfoSCLqU6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 段氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NmZm3qQ3pgGuZvItcnkawt
          claim_id: c_PdIMUglcpgx8gWdD6zDpHL
          source_id: s_E4hPiD9AzsAhuci4rgn_ao
          stance: supports
          locator: CBDB:327947
          quotation: null
          interpretation_note: CBDB 明确记录的王以纁配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tqjCV0HrsWpwB1Njzs4gM_
        subject_person_id: p_DYviEpoQ7QNEe7UQdPVSd4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_gAE7Y6mD8FN6PQfoSCLqU6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wHtj4nZc3o1ilXiEaK65xA
          claim_id: c_tqjCV0HrsWpwB1Njzs4gM_
          source_id: s_E4hPiD9AzsAhuci4rgn_ao
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第七十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DYviEpoQ7QNEe7UQdPVSd4
        status: active
        display_name: 王以纁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 段氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 段氏，明人物。嘉靖四十一年進士。（中国历代人物传记资料库 CBDB 327947） | accepted |
| name.primary | 段氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_DYviEpoQ7QNEe7UQdPVSd4 | 王以纁 | accepted |

## 外部来源

- [中国历代人物传记资料库：段氏(王以纁妻)（CBDB 327947）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327947&o=json)
