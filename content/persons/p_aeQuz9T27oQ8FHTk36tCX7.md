---
schema: wang-person/v1
id: p_aeQuz9T27oQ8FHTk36tCX7
status: active
merged_into: null
display_name: 王徹
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_v6UfzXMH5tngFTZuahaYD2
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_k4gDv3jRPB9QbXVBc3ArUB
          claim_id: c_v6UfzXMH5tngFTZuahaYD2
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: CBDB:37837
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（37837）
          source: &a1
            id: s_3bzL7xxo5wfo9JJxb3hVnV
            source_type: api_record
            title: 中国历代人物传记资料库：王徹（CBDB 37837）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json
            external_identifier: CBDB:37837
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.268Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D8dD7bztTouNcHjHaeoUKh
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
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
        - id: cs_azyXggMc1Z35xuAtD2YEKn
          claim_id: c_D8dD7bztTouNcHjHaeoUKh
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Bgpm8J0EZ9nqN9f8MRLPRC
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wEqsogkdLBrdte1KEpUFVQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pH_-4jfRPT5Z7RQHfnd11g
          claim_id: c_Bgpm8J0EZ9nqN9f8MRLPRC
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_wEqsogkdLBrdte1KEpUFVQ
        status: active
        display_name: 王祐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_nusbbMcOR0loO5ywAAehe1
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_JSCcx9nvR4fcq9DRADJkRg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WoB7gCtMgr6lHg4lDZmgNr
          claim_id: c_nusbbMcOR0loO5ywAAehe1
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_JSCcx9nvR4fcq9DRADJkRg
        status: active
        display_name: 王克臣
        merged_into_person_id: null
    - claim:
        id: c_TXrUrgxP7RYlGnyne5ZmmV
        subject_person_id: p_aeQuz9T27oQ8FHTk36tCX7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tyaMeFLDyyzL3DtTVsE3uu
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9wI1KHW4GaSYYjoRI1-VZ6
          claim_id: c_TXrUrgxP7RYlGnyne5ZmmV
          source_id: s_3bzL7xxo5wfo9JJxb3hVnV
          stance: supports
          locator: 宋史：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tyaMeFLDyyzL3DtTVsE3uu
        status: active
        display_name: 王旦
        merged_into_person_id: null
  other: []
---

# 王徹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徹 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_wEqsogkdLBrdte1KEpUFVQ | 王祐 | accepted |
| descendants | p_JSCcx9nvR4fcq9DRADJkRg | 王克臣 | accepted |
| descendants | p_tyaMeFLDyyzL3DtTVsE3uu | 王旦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徹（CBDB 37837）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37837&o=json)
