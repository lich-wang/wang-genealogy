---
schema: wang-person/v1
id: p_KV1CU1d4HsEHJveh96GF1r
status: active
merged_into: null
display_name: 孫氏
revision: 1
cbdb_id: 249262
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JtkP1zUt5VJkfhn6AqR2Qk
        subject_person_id: p_KV1CU1d4HsEHJveh96GF1r
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 孫氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t8s0a9LKf6468jxl8yTmWU
          claim_id: c_JtkP1zUt5VJkfhn6AqR2Qk
          source_id: s_4ui5eVRirK2kzEb_6fyYbE
          stance: supports
          locator: CBDB:249262
          quotation: null
          interpretation_note: CBDB 明确记录的王瑭配偶
          source: &a1
            id: s_4ui5eVRirK2kzEb_6fyYbE
            source_type: api_record
            title: 中国历代人物传记资料库：孫氏(王瑭妻)（CBDB 249262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249262&o=json
            external_identifier: CBDB:249262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_OMKcDlZbz4ENF9DzsAASJw
        subject_person_id: p_2Gx8pH6sHztKEtkLMN7u1C
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KV1CU1d4HsEHJveh96GF1r
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E4u41iUA3RyCTpiU-oH125
          claim_id: c_OMKcDlZbz4ENF9DzsAASJw
          source_id: s_4ui5eVRirK2kzEb_6fyYbE
          stance: supports
          locator: 成化十一年進士登科錄:一卷，第三甲第五十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2Gx8pH6sHztKEtkLMN7u1C
        status: active
        display_name: 王瑭
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 孫氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 孫氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_2Gx8pH6sHztKEtkLMN7u1C | 王瑭 | accepted |

## 外部来源

- [中国历代人物传记资料库：孫氏(王瑭妻)（CBDB 249262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249262&o=json)
