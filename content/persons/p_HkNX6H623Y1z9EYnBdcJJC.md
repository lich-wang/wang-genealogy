---
schema: wang-person/v1
id: p_HkNX6H623Y1z9EYnBdcJJC
status: active
merged_into: null
display_name: 王三錫
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gpJKf1NTFNcPxz5A1K892q
        subject_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三錫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dfnRPV8sWjbqWUVuHTbPo1
          claim_id: c_gpJKf1NTFNcPxz5A1K892q
          source_id: s_A3XsEyy9CqZnM4RPwKnYPJ
          stance: supports
          locator: CBDB:126453
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126453）
          source: &a1
            id: s_A3XsEyy9CqZnM4RPwKnYPJ
            source_type: api_record
            title: 中国历代人物传记资料库：王三錫（CBDB 126453）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126453&o=json
            external_identifier: CBDB:126453
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.968Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_cYmukuLBGCHFPTYp1nuETH
        subject_person_id: p_HkNX6H623Y1z9EYnBdcJJC
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
        - id: cs_T1oi2BJa9jLNbSknCzmZMp
          claim_id: c_cYmukuLBGCHFPTYp1nuETH
          source_id: s_A3XsEyy9CqZnM4RPwKnYPJ
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
        id: c_k72CkhfDxJJb829bsFCcgj
        subject_person_id: p_NUN9V2WpcJELAKS3hvUbxx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h5QYsIG5JTPSRKby-x7cOb
          claim_id: c_k72CkhfDxJJb829bsFCcgj
          source_id: s_zjyME1KpDFD2t6hpRmnWEe
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zjyME1KpDFD2t6hpRmnWEe
            source_type: api_record
            title: 中国历代人物传记资料库：王瑞（CBDB 279876）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json
            external_identifier: CBDB:279876
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.994Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NUN9V2WpcJELAKS3hvUbxx
        status: active
        display_name: 王瑞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_gR_EAhUgZI5phaNY2u1aqZ
        subject_person_id: p_EDvDzeauMUnPa3xR3DBoEB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HkNX6H623Y1z9EYnBdcJJC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vKA8th7NDbV3xQLYN4o8zf
          claim_id: c_gR_EAhUgZI5phaNY2u1aqZ
          source_id: s_Vqqd3gFRffW4XQFAAzm79r
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第二甲第四十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Vqqd3gFRffW4XQFAAzm79r
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 279874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279874&o=json
            external_identifier: CBDB:279874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EDvDzeauMUnPa3xR3DBoEB
        status: active
        display_name: 王杲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王三錫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三錫 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_NUN9V2WpcJELAKS3hvUbxx | 王瑞 | accepted |
| ancestors | p_EDvDzeauMUnPa3xR3DBoEB | 王杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 279874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279874&o=json)
- [中国历代人物传记资料库：王瑞（CBDB 279876）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279876&o=json)
- [中国历代人物传记资料库：王三錫（CBDB 126453）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126453&o=json)
