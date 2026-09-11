---
schema: wang-person/v1
id: p_4jPFjD7q7mLn8kbovAo8Co
status: active
merged_into: null
display_name: 王子卿
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JJK7GYSXsfFN3Y8nX18b47
        subject_person_id: p_4jPFjD7q7mLn8kbovAo8Co
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子卿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ypMiMDbPWrb5vLPU9SnVQr
          claim_id: c_JJK7GYSXsfFN3Y8nX18b47
          source_id: s_J1LW8nTARrCNBpUrBJLbT5
          stance: supports
          locator: CBDB:153400
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（153400）
          source: &a1
            id: s_J1LW8nTARrCNBpUrBJLbT5
            source_type: api_record
            title: 中国历代人物传记资料库：王子卿（CBDB 153400）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153400&o=json
            external_identifier: CBDB:153400
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sUxFQYieGnKvDTTtQjSTt4
        subject_person_id: p_4jPFjD7q7mLn8kbovAo8Co
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WyGjV6pmjJYtFic5qgMcwD
          claim_id: c_sUxFQYieGnKvDTTtQjSTt4
          source_id: s_J1LW8nTARrCNBpUrBJLbT5
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XQey28XBREBPN1zq7KEeaq
        subject_person_id: p_D5k2hJYmZ56Jpetaajk95y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4jPFjD7q7mLn8kbovAo8Co
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qaw9O0h4GvVXxdW9oJxVLE
          claim_id: c_XQey28XBREBPN1zq7KEeaq
          source_id: s_J1LW8nTARrCNBpUrBJLbT5
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 38：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D5k2hJYmZ56Jpetaajk95y
        status: active
        display_name: 王公度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子卿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子卿 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D5k2hJYmZ56Jpetaajk95y | 王公度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王子卿（CBDB 153400）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153400&o=json)
