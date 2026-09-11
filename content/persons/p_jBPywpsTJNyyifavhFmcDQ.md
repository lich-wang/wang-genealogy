---
schema: wang-person/v1
id: p_jBPywpsTJNyyifavhFmcDQ
status: active
merged_into: null
display_name: 王子俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vHaoBC23CwHFHquXFeSwZE
        subject_person_id: p_jBPywpsTJNyyifavhFmcDQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NUApjC53ydz8t8f7M86c5K
          claim_id: c_vHaoBC23CwHFHquXFeSwZE
          source_id: s_8romwcWh6mJb2S7QejzM4C
          stance: supports
          locator: CBDB:35268
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（35268）
          source: &a1
            id: s_8romwcWh6mJb2S7QejzM4C
            source_type: api_record
            title: 中国历代人物传记资料库：王子俊（CBDB 35268）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35268&o=json
            external_identifier: CBDB:35268
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.117Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8QHsChSsj9XF4WNDrVB2pj
        subject_person_id: p_jBPywpsTJNyyifavhFmcDQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BYV6iKwDcUvdHiP6x3sdU7
          claim_id: c_8QHsChSsj9XF4WNDrVB2pj
          source_id: s_8romwcWh6mJb2S7QejzM4C
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
        id: c_eSCA9MzxmeAhAjKCbsLDJr
        subject_person_id: p_1QMJApNnBCwd6AmuthVh9t
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jBPywpsTJNyyifavhFmcDQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CSe9oo2ZZiv9oaZLiao4Bk
          claim_id: c_eSCA9MzxmeAhAjKCbsLDJr
          source_id: s_WJeWLEa1EZKaqA1RjeHZsZ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1361：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WJeWLEa1EZKaqA1RjeHZsZ
            source_type: api_record
            title: 中国历代人物传记资料库：王大臨（CBDB 27281）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27281&o=json
            external_identifier: CBDB:27281
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.953Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1QMJApNnBCwd6AmuthVh9t
        status: active
        display_name: 王大臨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王子俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子俊 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1QMJApNnBCwd6AmuthVh9t | 王大臨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大臨（CBDB 27281）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=27281&o=json)
- [中国历代人物传记资料库：王子俊（CBDB 35268）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=35268&o=json)
