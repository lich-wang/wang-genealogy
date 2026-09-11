---
schema: wang-person/v1
id: p_NqCzUj27xc4CPMGYFbUzFH
status: active
merged_into: null
display_name: 高氏
revision: 1
cbdb_id: 134740
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ge7b6X8OfVoQ5BKxc4lLHT
        subject_person_id: p_NqCzUj27xc4CPMGYFbUzFH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 高氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TbCICXqE0HfzgztWq39eKz
          claim_id: c_Ge7b6X8OfVoQ5BKxc4lLHT
          source_id: s_liqDa0fj49BztmoE61c8Ys
          stance: supports
          locator: CBDB:134740
          quotation: null
          interpretation_note: CBDB 明确记录的王佐配偶
          source: &a1
            id: s_liqDa0fj49BztmoE61c8Ys
            source_type: api_record
            title: 中国历代人物传记资料库：高氏(王佐妻)（CBDB 134740）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134740&o=json
            external_identifier: CBDB:134740
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
        id: c_6nHAI1TissECsyH5MgxlNF
        subject_person_id: p_AT6TrLXfXNgCqXXBTHbNGY
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NqCzUj27xc4CPMGYFbUzFH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ff7jFXZ23KDa99MFbdFQ1a
          claim_id: c_6nHAI1TissECsyH5MgxlNF
          source_id: s_liqDa0fj49BztmoE61c8Ys
          stance: supports
          locator: 紹興十八年同年小錄，84：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_AT6TrLXfXNgCqXXBTHbNGY
        status: active
        display_name: 王佐
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 高氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 高氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_AT6TrLXfXNgCqXXBTHbNGY | 王佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：高氏(王佐妻)（CBDB 134740）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134740&o=json)
