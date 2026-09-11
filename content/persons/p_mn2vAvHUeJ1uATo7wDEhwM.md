---
schema: wang-person/v1
id: p_mn2vAvHUeJ1uATo7wDEhwM
status: active
merged_into: null
display_name: 胡氏
revision: 1
cbdb_id: 554998
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oYxhyGU6vInoPKJANLU3aB
        subject_person_id: p_mn2vAvHUeJ1uATo7wDEhwM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 胡氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNkVO5avpxFTLpPHxRwaa7
          claim_id: c_oYxhyGU6vInoPKJANLU3aB
          source_id: s_orjb1ki3ia2yCJ5oxrcVkD
          stance: supports
          locator: CBDB:554998
          quotation: null
          interpretation_note: CBDB 明确记录的王朋配偶
          source: &a1
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
          source: *a1
      object_person:
        id: p_bwGCVzodyBJBWe2khDkbvR
        status: active
        display_name: 王朋
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 胡氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 胡氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_bwGCVzodyBJBWe2khDkbvR | 王朋 | accepted |

## 外部来源

- [中国历代人物传记资料库：胡氏(王朋妻)（CBDB 554998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=554998&o=json)
