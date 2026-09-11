---
schema: wang-person/v1
id: p_zEuXgNPzNyhH1Dt4YEDNHE
status: active
merged_into: null
display_name: 王符
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V4pfqsbmb9MCTQhJNYLhLw
        subject_person_id: p_zEuXgNPzNyhH1Dt4YEDNHE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wG9uAb46ESxWSuFTdLSKMB
          claim_id: c_V4pfqsbmb9MCTQhJNYLhLw
          source_id: s_mBW9amwq21Bzn24Air8NT8
          stance: supports
          locator: CBDB:328162
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328162）
          source: &a1
            id: s_mBW9amwq21Bzn24Air8NT8
            source_type: api_record
            title: 中国历代人物传记资料库：王符（CBDB 328162）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328162&o=json
            external_identifier: CBDB:328162
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.290Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wx438F9YCeTj381W4Jm7F7
        subject_person_id: p_zEuXgNPzNyhH1Dt4YEDNHE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王符，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328162）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ijs45aWSI8YlfFHhtnN-PO
          claim_id: c_wx438F9YCeTj381W4Jm7F7
          source_id: s_mBW9amwq21Bzn24Air8NT8
          stance: supports
          locator: CBDB:328162
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

# 王符

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王符 | accepted |
| bio.summary | 王符，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328162） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王符（CBDB 328162）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328162&o=json)
