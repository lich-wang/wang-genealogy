---
schema: wang-person/v1
id: p_8ixzNz11z7hHgCLNaEVY5A
status: active
merged_into: null
display_name: 王世英
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K1rcAqBtPuxU6nH7SLDT5F
        subject_person_id: p_8ixzNz11z7hHgCLNaEVY5A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世英
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iXaKDmB6WCd8xhPmMBSgcj
          claim_id: c_K1rcAqBtPuxU6nH7SLDT5F
          source_id: s_A4tH56pAhPBUh8FSFRFtCC
          stance: supports
          locator: CBDB:239496
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239496）
          source: &a1
            id: s_A4tH56pAhPBUh8FSFRFtCC
            source_type: api_record
            title: 中国历代人物传记资料库：王世英（CBDB 239496）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239496&o=json
            external_identifier: CBDB:239496
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.897Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_U6eMsbyN7NHQnGkTcR1Cg3
        subject_person_id: p_8ixzNz11z7hHgCLNaEVY5A
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
        - id: cs_Z9HNt5XsjnR5Ba6uQx4kQ3
          claim_id: c_U6eMsbyN7NHQnGkTcR1Cg3
          source_id: s_A4tH56pAhPBUh8FSFRFtCC
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
  ancestors: []
  descendants:
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
          source:
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
      object_person:
        id: p_7kt2c6LEEJXJ45MmJkyvhy
        status: active
        display_name: 王允
        merged_into_person_id: null
  other: []
---

# 王世英

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王世英 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7kt2c6LEEJXJ45MmJkyvhy | 王允 | accepted |

## 外部来源

- [中国历代人物传记资料库：王世英（CBDB 239496）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239496&o=json)
- [中国历代人物传记资料库：王允（CBDB 208031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208031&o=json)
