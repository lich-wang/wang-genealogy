---
schema: wang-person/v1
id: p_xsKb7AHTpR5yx7vAZtCiMJ
status: active
merged_into: null
display_name: 王康
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VagNdDfzrCy9btUexDBAXe
        subject_person_id: p_xsKb7AHTpR5yx7vAZtCiMJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王康
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Cczn3J73XRT9MahmXp3RhU
          claim_id: c_VagNdDfzrCy9btUexDBAXe
          source_id: s_5Fousqcteov8bsjsrq34F1
          stance: supports
          locator: CBDB:437797
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（437797）
          source: &a1
            id: s_5Fousqcteov8bsjsrq34F1
            source_type: api_record
            title: 中国历代人物传记资料库：王康（CBDB 437797）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437797&o=json
            external_identifier: CBDB:437797
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.065Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b8dp85Z3acxt28vfPRvswS
        subject_person_id: p_xsKb7AHTpR5yx7vAZtCiMJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_igy8YtL88LGJWK3PBPBsRn
          claim_id: c_b8dp85Z3acxt28vfPRvswS
          source_id: s_5Fousqcteov8bsjsrq34F1
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
        id: c_MBtJck1CA5VjnpIdoKgZe4
        subject_person_id: p_xsKb7AHTpR5yx7vAZtCiMJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_99FDwsMAjHRcyydVaxS1Hr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wpiZEpPxtJog3K07UvQzJ0
          claim_id: c_MBtJck1CA5VjnpIdoKgZe4
          source_id: s_AN_m82SHYTtlSzU1Rb9wdY
          stance: supports
          locator: CBDB 双向互证（丈夫 宋守有）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AN_m82SHYTtlSzU1Rb9wdY
            source_type: api_record
            title: 中国历代人物传记资料库：宋守有（CBDB 437796）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437796&o=json
            external_identifier: CBDB:437796
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_99FDwsMAjHRcyydVaxS1Hr
        status: active
        display_name: 宋守有
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王康

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王康 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_99FDwsMAjHRcyydVaxS1Hr | 宋守有 | accepted |

## 外部来源

- [中国历代人物传记资料库：宋守有（CBDB 437796）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437796&o=json)
- [中国历代人物传记资料库：王康（CBDB 437797）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=437797&o=json)
