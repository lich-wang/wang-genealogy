---
schema: wang-person/v1
id: p_GaoYSbCZyFzrURv52a2Qf9
status: active
merged_into: null
display_name: 解宜人
revision: 1
cbdb_id: 30039
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eCNXnDP5875FzJqVI5zKSu
        subject_person_id: p_GaoYSbCZyFzrURv52a2Qf9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 解宜人
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sBUwHexkKYGjGhS27L0BVP
          claim_id: c_eCNXnDP5875FzJqVI5zKSu
          source_id: s_c1zxG7Y6WOFDnYIQhhhcMs
          stance: supports
          locator: CBDB:30039
          quotation: null
          interpretation_note: CBDB 明确记录的王枚士配偶
          source: &a1
            id: s_c1zxG7Y6WOFDnYIQhhhcMs
            source_type: api_record
            title: 中国历代人物传记资料库：解宜人（CBDB 30039）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30039&o=json
            external_identifier: CBDB:30039
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
        id: c_XGtES4CpIwS9Fow_6lqjJR
        subject_person_id: p_Tz4YpWKtJXjcMJNGcixnvv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_GaoYSbCZyFzrURv52a2Qf9
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XyvijKZN3bPBY7SmG4wmxJ
          claim_id: c_XGtES4CpIwS9Fow_6lqjJR
          source_id: s_c1zxG7Y6WOFDnYIQhhhcMs
          stance: supports
          locator: CBDB 双向互证（妻子 解宜人）
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Tz4YpWKtJXjcMJNGcixnvv
        status: active
        display_name: 王枚士
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 解宜人

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 解宜人 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Tz4YpWKtJXjcMJNGcixnvv | 王枚士 | accepted |

## 外部来源

- [中国历代人物传记资料库：解宜人（CBDB 30039）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=30039&o=json)
