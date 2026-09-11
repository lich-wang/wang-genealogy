---
schema: wang-person/v1
id: p_7kt2c6LEEJXJ45MmJkyvhy
status: active
merged_into: null
display_name: 王允
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Q5LDdQhCxrQXH1w2MEFAhU
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王允
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_b2cG6bx3vseGHLi78MXNu6
          claim_id: c_Q5LDdQhCxrQXH1w2MEFAhU
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: CBDB:208031
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208031）
          source: &a1
            id: s_YMCYHYzEVLvaEnSkkrjDYW
            source_type: api_record
            title: 中国历代人物传记资料库：王允（CBDB 208031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208031&o=json
            external_identifier: CBDB:208031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.939Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8f21JoC4GZz9AyMrtdBcjA
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1407年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_69r5C4Fr7EjcrAQH9aKLKC
          claim_id: c_8f21JoC4GZz9AyMrtdBcjA
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M34x4vQ4Lbn9gQU1qaJEeH
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
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
        - id: cs_UQ8CtEj98JXXhvJUJb1Uou
          claim_id: c_M34x4vQ4Lbn9gQU1qaJEeH
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
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
        id: c_jA-DlxKf-VIVFoPXIBPgsg
        subject_person_id: p_ZEK8W3qTkBoQwnKNUGqfS3
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JTiYNrY6s5lmOQeyMJESbV
          claim_id: c_jA-DlxKf-VIVFoPXIBPgsg
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第二十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ZEK8W3qTkBoQwnKNUGqfS3
        status: active
        display_name: 王雲
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_kCu5NCt4DfPkWy6zR9wfki
        subject_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_WN27M58uY6ww61Pz9TqM6T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F1620HtFRxUzFbM01SoZ3R
          claim_id: c_kCu5NCt4DfPkWy6zR9wfki
          source_id: s_DZrhH4rVAjhKfYHvcM-2AJ
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第二十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DZrhH4rVAjhKfYHvcM-2AJ
            source_type: api_record
            title: 中国历代人物传记资料库：邊氏(王允妻)（CBDB 239500）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239500&o=json
            external_identifier: CBDB:239500
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WN27M58uY6ww61Pz9TqM6T
        status: active
        display_name: 邊氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_fEIx26t-6qSUUz815rKh1E
        subject_person_id: p_QYyri3inTANJdu1XAKFvzs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_l3crXir8y-87TXhw52C8ur
          claim_id: c_fEIx26t-6qSUUz815rKh1E
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第二十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QYyri3inTANJdu1XAKFvzs
        status: active
        display_name: 王士賢
        merged_into_person_id: null
    - claim:
        id: c_FJCX0Kq_FR0ehCaGiJzCnK
        subject_person_id: p_8ixzNz11z7hHgCLNaEVY5A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7kt2c6LEEJXJ45MmJkyvhy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_65z_qAesVUB-jB69pCvBMP
          claim_id: c_FJCX0Kq_FR0ehCaGiJzCnK
          source_id: s_YMCYHYzEVLvaEnSkkrjDYW
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第二十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8ixzNz11z7hHgCLNaEVY5A
        status: active
        display_name: 王世英
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王允

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王允 | accepted |
| birth.date | 1407年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZEK8W3qTkBoQwnKNUGqfS3 | 王雲 | accepted |
| spouses | p_WN27M58uY6ww61Pz9TqM6T | 邊氏 | accepted |
| ancestors | p_QYyri3inTANJdu1XAKFvzs | 王士賢 | accepted |
| ancestors | p_8ixzNz11z7hHgCLNaEVY5A | 王世英 | accepted |

## 外部来源

- [中国历代人物传记资料库：邊氏(王允妻)（CBDB 239500）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239500&o=json)
- [中国历代人物传记资料库：王允（CBDB 208031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208031&o=json)
