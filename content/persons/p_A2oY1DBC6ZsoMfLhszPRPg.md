---
schema: wang-person/v1
id: p_A2oY1DBC6ZsoMfLhszPRPg
status: active
merged_into: null
display_name: 王璽
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yV3eq9NXn1KaMGyhBVE4Kv
        subject_person_id: p_A2oY1DBC6ZsoMfLhszPRPg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sxqyeEKL99jALzWrCrfrY8
          claim_id: c_yV3eq9NXn1KaMGyhBVE4Kv
          source_id: s_2PV5euf2Ro3NRdY2QtRebF
          stance: supports
          locator: CBDB:126870
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126870）
          source: &a1
            id: s_2PV5euf2Ro3NRdY2QtRebF
            source_type: api_record
            title: 中国历代人物传记资料库：王璽（CBDB 126870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126870&o=json
            external_identifier: CBDB:126870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.273Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YDChgn5rSYK7hca6HcS1pm
        subject_person_id: p_A2oY1DBC6ZsoMfLhszPRPg
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
        - id: cs_Mb4aoCLAYRCGGzGjE68H7L
          claim_id: c_YDChgn5rSYK7hca6HcS1pm
          source_id: s_2PV5euf2Ro3NRdY2QtRebF
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
        id: c_yRFWfYalvpJiy3tmixHSjz
        subject_person_id: p_3zRBK42K5MyFsKs7staexG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A2oY1DBC6ZsoMfLhszPRPg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dOJFeObMthz1iC0i8Y2wr
          claim_id: c_yRFWfYalvpJiy3tmixHSjz
          source_id: s_sGWhhewRRMfW83DS13Kw34
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sGWhhewRRMfW83DS13Kw34
            source_type: api_record
            title: 中国历代人物传记资料库：王淵（CBDB 257477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257477&o=json
            external_identifier: CBDB:257477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.425Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3zRBK42K5MyFsKs7staexG
        status: active
        display_name: 王淵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3LNcJ-G1rDJQnHsxQXKFBH
        subject_person_id: p_iW5TUNg65ewYufTEAY7cwQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A2oY1DBC6ZsoMfLhszPRPg
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XATGf8MuahXfwwvSOv8Als
          claim_id: c_3LNcJ-G1rDJQnHsxQXKFBH
          source_id: s_Hs9Etr9LME5x4mHfN83JuB
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Hs9Etr9LME5x4mHfN83JuB
            source_type: api_record
            title: 中国历代人物传记资料库：王友仁（CBDB 257475）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257475&o=json
            external_identifier: CBDB:257475
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.424Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iW5TUNg65ewYufTEAY7cwQ
        status: active
        display_name: 王友仁
        merged_into_person_id: null
    - claim:
        id: c_--QFLx189axNKdFTuAiu3W
        subject_person_id: p_Q5Mo9DpS6cASvhoyH1cjFn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A2oY1DBC6ZsoMfLhszPRPg
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLFvSRp_JXhXpqm-RAwb9W
          claim_id: c_--QFLx189axNKdFTuAiu3W
          source_id: s_iE1yrkyzB8oJzss8dAurm8
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第二甲第二名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iE1yrkyzB8oJzss8dAurm8
            source_type: api_record
            title: 中国历代人物传记资料库：王朝忠（CBDB 257476）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257476&o=json
            external_identifier: CBDB:257476
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_Q5Mo9DpS6cASvhoyH1cjFn
        status: active
        display_name: 王朝忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王璽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璽 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3zRBK42K5MyFsKs7staexG | 王淵 | accepted |
| ancestors | p_iW5TUNg65ewYufTEAY7cwQ | 王友仁 | accepted |
| ancestors | p_Q5Mo9DpS6cASvhoyH1cjFn | 王朝忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王朝忠（CBDB 257476）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257476&o=json)
- [中国历代人物传记资料库：王璽（CBDB 126870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126870&o=json)
- [中国历代人物传记资料库：王友仁（CBDB 257475）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257475&o=json)
- [中国历代人物传记资料库：王淵（CBDB 257477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=257477&o=json)
