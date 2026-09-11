---
schema: wang-person/v1
id: p_xsB7dQbxgv1VM3fErdpLd2
status: active
merged_into: null
display_name: 王秉忠
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pVh2M1LZXzZnxVLxdmx1GW
        subject_person_id: p_xsB7dQbxgv1VM3fErdpLd2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉忠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_RkJDhzMQJtafLGAnRvZtWN
          claim_id: c_pVh2M1LZXzZnxVLxdmx1GW
          source_id: s_zUcTHWJjqJSKESpZuPQkCR
          stance: supports
          locator: CBDB:335213
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335213）
          source: &a1
            id: s_zUcTHWJjqJSKESpZuPQkCR
            source_type: api_record
            title: 中国历代人物传记资料库：王秉忠（CBDB 335213）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335213&o=json
            external_identifier: CBDB:335213
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.453Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6mxPML8YaJFFaQkHF1NNEc
        subject_person_id: p_xsB7dQbxgv1VM3fErdpLd2
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
        - id: cs_VHPBT1RFpk2FSZmyxACepC
          claim_id: c_6mxPML8YaJFFaQkHF1NNEc
          source_id: s_zUcTHWJjqJSKESpZuPQkCR
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
        id: c_dxUrn47s_j1nFvoSMDxHla
        subject_person_id: p_xsB7dQbxgv1VM3fErdpLd2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iKF3URQYd2AiG1hYtKBDpV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0vYL0qEqNGO8q2CYVlpk4y
          claim_id: c_dxUrn47s_j1nFvoSMDxHla
          source_id: s_zUcTHWJjqJSKESpZuPQkCR
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第七十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iKF3URQYd2AiG1hYtKBDpV
        status: active
        display_name: 王京
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王秉忠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉忠 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_iKF3URQYd2AiG1hYtKBDpV | 王京 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秉忠（CBDB 335213）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335213&o=json)
