---
schema: wang-person/v1
id: p_81kNpbH8teyCnd8W9Fmjkn
status: active
merged_into: null
display_name: 季芝昌
revision: 1
cbdb_id: 60729
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YRhTcV2kHl7XK0LaG0fMH2
        subject_person_id: p_81kNpbH8teyCnd8W9Fmjkn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 季芝昌
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eUb-g3LeyRD0Emn9TQ8os7
          claim_id: c_YRhTcV2kHl7XK0LaG0fMH2
          source_id: s_QS2OOL9WtEmpN5RWqoor5B
          stance: supports
          locator: CBDB:60729
          quotation: null
          interpretation_note: CBDB 明确记录的王甥稙配偶
          source: &a1
            id: s_QS2OOL9WtEmpN5RWqoor5B
            source_type: api_record
            title: 中国历代人物传记资料库：季芝昌（CBDB 60729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60729&o=json
            external_identifier: CBDB:60729
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
        id: c_UKty1glq_edbbRv0tda3mR
        subject_person_id: p_cmSWpmMC4GUZ7P7o2kYzDr
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_81kNpbH8teyCnd8W9Fmjkn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_glrOg9ql370uHJti_dxrwM
          claim_id: c_UKty1glq_edbbRv0tda3mR
          source_id: s_QS2OOL9WtEmpN5RWqoor5B
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #4649：丈夫"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cmSWpmMC4GUZ7P7o2kYzDr
        status: active
        display_name: 王甥稙
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 季芝昌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 季芝昌 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cmSWpmMC4GUZ7P7o2kYzDr | 王甥稙 | accepted |

## 外部来源

- [中国历代人物传记资料库：季芝昌（CBDB 60729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60729&o=json)
