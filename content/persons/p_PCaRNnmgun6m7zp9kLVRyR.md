---
schema: wang-person/v1
id: p_PCaRNnmgun6m7zp9kLVRyR
status: active
merged_into: null
display_name: 王志修
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NnFxZ84sdyV4ocZDhx8yJn
        subject_person_id: p_PCaRNnmgun6m7zp9kLVRyR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志修
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_721Emb2vpvy3KYErpmqtMe
          claim_id: c_NnFxZ84sdyV4ocZDhx8yJn
          source_id: s_uYom5nzx2usgmBR1ZFPNQi
          stance: supports
          locator: CBDB:526967
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（526967）
          source: &a1
            id: s_uYom5nzx2usgmBR1ZFPNQi
            source_type: api_record
            title: 中国历代人物传记资料库：王志修（CBDB 526967）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526967&o=json
            external_identifier: CBDB:526967
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.321Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h5yqNvYNec1Dnyv3oPzpfY
        subject_person_id: p_PCaRNnmgun6m7zp9kLVRyR
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
        - id: cs_geX8PCMgAWhXsKskYg4B6P
          claim_id: c_h5yqNvYNec1Dnyv3oPzpfY
          source_id: s_uYom5nzx2usgmBR1ZFPNQi
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
        id: c_HP-UcIBspXAy3l6e2_Eifr
        subject_person_id: p_p5Bgq9U7wnsJs77muEqiGg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PCaRNnmgun6m7zp9kLVRyR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S3GmD06Qyjd9d47o9zrXIi
          claim_id: c_HP-UcIBspXAy3l6e2_Eifr
          source_id: s_XP6yeB5bki4Uje1WNxPTGj
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13153：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XP6yeB5bki4Uje1WNxPTGj
            source_type: api_record
            title: 中国历代人物传记资料库：王履亨（CBDB 69443）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69443&o=json
            external_identifier: CBDB:69443
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.272Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_p5Bgq9U7wnsJs77muEqiGg
        status: active
        display_name: 王履亨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志修

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志修 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_p5Bgq9U7wnsJs77muEqiGg | 王履亨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王履亨（CBDB 69443）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69443&o=json)
- [中国历代人物传记资料库：王志修（CBDB 526967）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=526967&o=json)
