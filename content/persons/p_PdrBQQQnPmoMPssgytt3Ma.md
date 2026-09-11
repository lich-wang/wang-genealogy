---
schema: wang-person/v1
id: p_PdrBQQQnPmoMPssgytt3Ma
status: active
merged_into: null
display_name: 王國瑞
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tS725iC77dcoJ5FKhxcL7n
        subject_person_id: p_PdrBQQQnPmoMPssgytt3Ma
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vipQfC1KPCsgfE8LAVwgAp
          claim_id: c_tS725iC77dcoJ5FKhxcL7n
          source_id: s_pur8zxmSFmEqAsJd5EUQzP
          stance: supports
          locator: CBDB:229909
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（229909）
          source: &a1
            id: s_pur8zxmSFmEqAsJd5EUQzP
            source_type: api_record
            title: 中国历代人物传记资料库：王國瑞（CBDB 229909）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229909&o=json
            external_identifier: CBDB:229909
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.597Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DS8P9txM9BmN4oVnivtqMy
        subject_person_id: p_PdrBQQQnPmoMPssgytt3Ma
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
        - id: cs_9tU964CDtJMpwMnxnss71F
          claim_id: c_DS8P9txM9BmN4oVnivtqMy
          source_id: s_pur8zxmSFmEqAsJd5EUQzP
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
        id: c_k3BQPq0EoK8OKB-RnemAmX
        subject_person_id: p_DJcqSVwRMjWd5tk8GAdMxa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PdrBQQQnPmoMPssgytt3Ma
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ay81tshaJ1tIpPwULOnWHJ
          claim_id: c_k3BQPq0EoK8OKB-RnemAmX
          source_id: s_pur8zxmSFmEqAsJd5EUQzP
          stance: supports
          locator: 萬曆丙戌科進士同年總錄，第三甲第一百九十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DJcqSVwRMjWd5tk8GAdMxa
        status: active
        display_name: 王佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王國瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國瑞 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DJcqSVwRMjWd5tk8GAdMxa | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國瑞（CBDB 229909）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229909&o=json)
