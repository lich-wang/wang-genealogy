---
schema: wang-person/v1
id: p_YykcDPhoFo7o8Jvq13sdKA
status: active
merged_into: null
display_name: 王侃
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RTBSnxynb9qJbetesroBWB
        subject_person_id: p_YykcDPhoFo7o8Jvq13sdKA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王侃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_B2kunpeMStXNGy8Aw6psmc
          claim_id: c_RTBSnxynb9qJbetesroBWB
          source_id: s_Uyi5uVZkVLGPB2CUG9ujmb
          stance: supports
          locator: CBDB:10701
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10701）
          source: &a1
            id: s_Uyi5uVZkVLGPB2CUG9ujmb
            source_type: api_record
            title: 中国历代人物传记资料库：王侃（CBDB 10701）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10701&o=json
            external_identifier: CBDB:10701
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.549Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_32u6Dfqvaj7SNHRMNGtvMj
        subject_person_id: p_YykcDPhoFo7o8Jvq13sdKA
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
        - id: cs_DGc7M2ZLrvYRFTchCQ2hbE
          claim_id: c_32u6Dfqvaj7SNHRMNGtvMj
          source_id: s_Uyi5uVZkVLGPB2CUG9ujmb
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
  ancestors:
    - claim:
        id: c_-UetgMb-hdwGEimMMIBb2E
        subject_person_id: p_UvehpGMJTzc9aejBRt9mWN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_YykcDPhoFo7o8Jvq13sdKA
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8VL9rQ1GcpPGXqYUTLgkw_
          claim_id: c_-UetgMb-hdwGEimMMIBb2E
          source_id: s_jH1N5zKcYCmDMDNPzpwQ7F
          stance: supports
          locator: 宋人傳記資料索引(電子版)，720：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jH1N5zKcYCmDMDNPzpwQ7F
            source_type: api_record
            title: 中国历代人物传记资料库：王淮（CBDB 10697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json
            external_identifier: CBDB:10697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.546Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UvehpGMJTzc9aejBRt9mWN
        status: active
        display_name: 王淮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王侃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王侃 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_UvehpGMJTzc9aejBRt9mWN | 王淮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王淮（CBDB 10697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10697&o=json)
- [中国历代人物传记资料库：王侃（CBDB 10701）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10701&o=json)
