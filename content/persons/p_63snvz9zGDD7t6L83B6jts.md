---
schema: wang-person/v1
id: p_63snvz9zGDD7t6L83B6jts
status: active
merged_into: null
display_name: 王治
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JCrxRqeepgF2bvsWbLeYnw
        subject_person_id: p_63snvz9zGDD7t6L83B6jts
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o7pY4XyvHM8uyUgrmxPWqz
          claim_id: c_JCrxRqeepgF2bvsWbLeYnw
          source_id: s_cdo2KwLcBLEECDXBmtt1f3
          stance: supports
          locator: CBDB:700241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700241）
          source: &a1
            id: s_cdo2KwLcBLEECDXBmtt1f3
            source_type: api_record
            title: 中国历代人物传记资料库：王治（CBDB 700241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700241&o=json
            external_identifier: CBDB:700241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_KuWVQo2Y3rhMKfYjRz4JnU
        subject_person_id: p_63snvz9zGDD7t6L83B6jts
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
        - id: cs_7LzNj1HuET5mdBZ76w8Z4q
          claim_id: c_KuWVQo2Y3rhMKfYjRz4JnU
          source_id: s_cdo2KwLcBLEECDXBmtt1f3
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
        id: c_XZhaukh_iQ5ypUbvC-m4ST
        subject_person_id: p_o32S14d2HC7tUArdjG9ggX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_63snvz9zGDD7t6L83B6jts
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K8tfhCNf3Y29eOvPMuaZvj
          claim_id: c_XZhaukh_iQ5ypUbvC-m4ST
          source_id: s_cdo2KwLcBLEECDXBmtt1f3
          stance: supports
          locator: "(民國)續修陝西通志稿: 二百二十四卷 卷首一卷，lgid=1018936：父"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_o32S14d2HC7tUArdjG9ggX
        status: active
        display_name: 王朝欽
        merged_into_person_id: null
  children:
    - claim:
        id: c_GSiDlKv29fyOps3as4t1cJ
        subject_person_id: p_63snvz9zGDD7t6L83B6jts
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QYPqTmphVo7sw5eAHZQbmS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8cY0DI4AiuL6IqQwb78CCO
          claim_id: c_GSiDlKv29fyOps3as4t1cJ
          source_id: s_cdo2KwLcBLEECDXBmtt1f3
          stance: supports
          locator: "(民國)續修陝西通志稿: 二百二十四卷 卷首一卷，lgid=1018936：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QYPqTmphVo7sw5eAHZQbmS
        status: active
        display_name: 王進泰
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王治 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_o32S14d2HC7tUArdjG9ggX | 王朝欽 | accepted |
| children | p_QYPqTmphVo7sw5eAHZQbmS | 王進泰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王治（CBDB 700241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700241&o=json)
