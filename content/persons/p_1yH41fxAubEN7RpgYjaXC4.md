---
schema: wang-person/v1
id: p_1yH41fxAubEN7RpgYjaXC4
status: active
merged_into: null
display_name: 王巧姐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MNTc9T49F1rh7bSUv9Tcwb
        subject_person_id: p_1yH41fxAubEN7RpgYjaXC4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王巧姐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4Fnsnexdxvag4DKUXt9LYn
          claim_id: c_MNTc9T49F1rh7bSUv9Tcwb
          source_id: s_XGMbLftjQ8cBLJcFakGfzD
          stance: supports
          locator: CBDB:121090
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121090）
          source: &a1
            id: s_XGMbLftjQ8cBLJcFakGfzD
            source_type: api_record
            title: 中国历代人物传记资料库：王巧姐（CBDB 121090）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121090&o=json
            external_identifier: CBDB:121090
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.909Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QxWjzhkLvwQvtD8YkT6Tnc
        subject_person_id: p_1yH41fxAubEN7RpgYjaXC4
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
        - id: cs_mL7QgHaB8iGaVMWz7PeD5Z
          claim_id: c_QxWjzhkLvwQvtD8YkT6Tnc
          source_id: s_XGMbLftjQ8cBLJcFakGfzD
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
  spouses:
    - claim:
        id: c_XYw1u00mgOneJilO2qpWxc
        subject_person_id: p_1yH41fxAubEN7RpgYjaXC4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1ZGiGrcEmucgnJyVCXzzPw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KNRcOpWFf7uiNfCoK2WZxV
          claim_id: c_XYw1u00mgOneJilO2qpWxc
          source_id: s_PTu6zcWioXfCi2GF1XKpDH
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2316：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PTu6zcWioXfCi2GF1XKpDH
            source_type: api_record
            title: 中国历代人物传记资料库：陳某(王巧姐夫)（CBDB 121095）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121095&o=json
            external_identifier: CBDB:121095
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1ZGiGrcEmucgnJyVCXzzPw
        status: active
        display_name: 陳某
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王巧姐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王巧姐 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_1ZGiGrcEmucgnJyVCXzzPw | 陳某 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳某(王巧姐夫)（CBDB 121095）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121095&o=json)
- [中国历代人物传记资料库：王巧姐（CBDB 121090）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121090&o=json)
