---
schema: wang-person/v1
id: p_VPJ9Rzf9NCJSPLshrQkpCp
status: active
merged_into: null
display_name: 王昇
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hJ1xD8Hi2g4JVBJ1nQCo5D
        subject_person_id: p_VPJ9Rzf9NCJSPLshrQkpCp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zBhFLQ9To8C13gULeKw1ar
          claim_id: c_hJ1xD8Hi2g4JVBJ1nQCo5D
          source_id: s_go8A7CkNrA74Tjb4M4BbwN
          stance: supports
          locator: CBDB:325016
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（325016）
          source: &a1
            id: s_go8A7CkNrA74Tjb4M4BbwN
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 325016）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325016&o=json
            external_identifier: CBDB:325016
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.193Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zhryTKV7B22S9nsPadCmAm
        subject_person_id: p_VPJ9Rzf9NCJSPLshrQkpCp
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
        - id: cs_MYmABwSGUBVx2f53MvFC3C
          claim_id: c_zhryTKV7B22S9nsPadCmAm
          source_id: s_go8A7CkNrA74Tjb4M4BbwN
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
        id: c_PDit8MphO0LaehSfzYPWNB
        subject_person_id: p_VPJ9Rzf9NCJSPLshrQkpCp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_AsKndUgLV5THcrwWuRrJU9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__Z5qn85gpI7LDtWl55JD4g
          claim_id: c_PDit8MphO0LaehSfzYPWNB
          source_id: s_go8A7CkNrA74Tjb4M4BbwN
          stance: supports
          locator: 嘉靖三十八年進士登科錄:一卷，第三甲第一百零七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AsKndUgLV5THcrwWuRrJU9
        status: active
        display_name: 王君賞
        merged_into_person_id: null
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_AsKndUgLV5THcrwWuRrJU9 | 王君賞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 325016）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=325016&o=json)
