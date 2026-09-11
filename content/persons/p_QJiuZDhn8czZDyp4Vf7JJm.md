---
schema: wang-person/v1
id: p_QJiuZDhn8czZDyp4Vf7JJm
status: active
merged_into: null
display_name: 王世融
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_81razi5G8iycCPKRM5qeU8
        subject_person_id: p_QJiuZDhn8czZDyp4Vf7JJm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世融
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BZaZL9sDyfMQnqrowSMGhS
          claim_id: c_81razi5G8iycCPKRM5qeU8
          source_id: s_ZLpchdRCM82sRUMCLMNNwc
          stance: supports
          locator: CBDB:45800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（45800）
          source: &a1
            id: s_ZLpchdRCM82sRUMCLMNNwc
            source_type: api_record
            title: 中国历代人物传记资料库：王世融（CBDB 45800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45800&o=json
            external_identifier: CBDB:45800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.662Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_s3rVAzwf4CbnY8CXzr5aao
        subject_person_id: p_QJiuZDhn8czZDyp4Vf7JJm
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
        - id: cs_vwcRUTTLW18Lo25jVRoXgT
          claim_id: c_s3rVAzwf4CbnY8CXzr5aao
          source_id: s_ZLpchdRCM82sRUMCLMNNwc
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
        id: c_812UM5aI3PEHO4ugXVQZSC
        subject_person_id: p_QJiuZDhn8czZDyp4Vf7JJm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_swcbVTDLNjK4ibwNhCz7N9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zXGtaQcII-e7nCphr1jmjZ
          claim_id: c_812UM5aI3PEHO4ugXVQZSC
          source_id: s_ZLpchdRCM82sRUMCLMNNwc
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1137;1138：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_swcbVTDLNjK4ibwNhCz7N9
        status: active
        display_name: 王綯
        merged_into_person_id: null
  other: []
---

# 王世融

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世融 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_swcbVTDLNjK4ibwNhCz7N9 | 王綯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世融（CBDB 45800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=45800&o=json)
