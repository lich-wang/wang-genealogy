---
schema: wang-person/v1
id: p_bwGCVzodyBJBWe2khDkbvR
status: active
merged_into: null
display_name: 王朋
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pbpbehqLasCGarsQd5bVHS
        subject_person_id: p_bwGCVzodyBJBWe2khDkbvR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1x8Y5uh3KiMLT8WZghcWW8
          claim_id: c_pbpbehqLasCGarsQd5bVHS
          source_id: s_mCi4K6SErs49xJJh6EJXKH
          stance: supports
          locator: CBDB:554997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（554997）
          source: &a1
            id: s_mCi4K6SErs49xJJh6EJXKH
            source_type: api_record
            title: 中国历代人物传记资料库：王朋（CBDB 554997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554997&o=json
            external_identifier: CBDB:554997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.622Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ePmHF9wZ9tCpuPfpnXNsBi
        subject_person_id: p_bwGCVzodyBJBWe2khDkbvR
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
        - id: cs_ond84WGwo9dpQCmGsk6DVF
          claim_id: c_ePmHF9wZ9tCpuPfpnXNsBi
          source_id: s_mCi4K6SErs49xJJh6EJXKH
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
        id: c_5a1drjTORpZHJ47A6-7L5V
        subject_person_id: p_bwGCVzodyBJBWe2khDkbvR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_mn2vAvHUeJ1uATo7wDEhwM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_I1bLRb6vFG9SeyNjEjwoJ9
          claim_id: c_5a1drjTORpZHJ47A6-7L5V
          source_id: s_orjb1ki3ia2yCJ5oxrcVkD
          stance: supports
          locator: 南陽府志，lgid=878678：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_orjb1ki3ia2yCJ5oxrcVkD
            source_type: api_record
            title: 中国历代人物传记资料库：胡氏(王朋妻)（CBDB 554998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554998&o=json
            external_identifier: CBDB:554998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_mn2vAvHUeJ1uATo7wDEhwM
        status: active
        display_name: 胡氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王朋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王朋 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_mn2vAvHUeJ1uATo7wDEhwM | 胡氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡氏(王朋妻)（CBDB 554998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554998&o=json)
- [中国历代人物传记资料库：王朋（CBDB 554997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554997&o=json)
