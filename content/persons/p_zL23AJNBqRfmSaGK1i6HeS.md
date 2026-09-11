---
schema: wang-person/v1
id: p_zL23AJNBqRfmSaGK1i6HeS
status: active
merged_into: null
display_name: 王道純
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_92juYMVmYeqgGgBEMshYkP
        subject_person_id: p_zL23AJNBqRfmSaGK1i6HeS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道純
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D54ci8GWNLpfBYWP4GdR7C
          claim_id: c_92juYMVmYeqgGgBEMshYkP
          source_id: s_HxUG3ao6MYAQD55TtSZRKr
          stance: supports
          locator: CBDB:294122
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（294122）
          source: &a1
            id: s_HxUG3ao6MYAQD55TtSZRKr
            source_type: api_record
            title: 中国历代人物传记资料库：王道純（CBDB 294122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294122&o=json
            external_identifier: CBDB:294122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.433Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_yPDdEFBRLQTbUq3BsfXr5M
        subject_person_id: p_zL23AJNBqRfmSaGK1i6HeS
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
        - id: cs_Pc4Dkw4wZBK4ME2uHmXgVM
          claim_id: c_yPDdEFBRLQTbUq3BsfXr5M
          source_id: s_HxUG3ao6MYAQD55TtSZRKr
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
        id: c_ZVp2yYQ_OMZ8s5RMNuiP2r
        subject_person_id: p_d9sSRa7nAqK1TZDEdrGVU4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zL23AJNBqRfmSaGK1i6HeS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7yDZhC3eDlPgGXdUbyNb8W
          claim_id: c_ZVp2yYQ_OMZ8s5RMNuiP2r
          source_id: s_HxUG3ao6MYAQD55TtSZRKr
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百八十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_d9sSRa7nAqK1TZDEdrGVU4
        status: active
        display_name: 王繼芳
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王道純

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道純 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_d9sSRa7nAqK1TZDEdrGVU4 | 王繼芳 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道純（CBDB 294122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=294122&o=json)
