---
schema: wang-person/v1
id: p_sgvxiNtEF15kwvGBJ1JQTz
status: active
merged_into: null
display_name: 王天敘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f2Dj775S43r1jktHHFgnSi
        subject_person_id: p_sgvxiNtEF15kwvGBJ1JQTz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王天敘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_a3E5i4rMuq6CFNBH59zRGY
          claim_id: c_f2Dj775S43r1jktHHFgnSi
          source_id: s_N7bWCPVmrj5c4MZAU14Qbe
          stance: supports
          locator: CBDB:288231
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（288231）
          source: &a1
            id: s_N7bWCPVmrj5c4MZAU14Qbe
            source_type: api_record
            title: 中国历代人物传记资料库：王天敘（CBDB 288231）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288231&o=json
            external_identifier: CBDB:288231
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.288Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ySFXB1bwNN1RCo4vQeDWon
        subject_person_id: p_sgvxiNtEF15kwvGBJ1JQTz
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
        - id: cs_Z5r9F5twcpgDEW5Lg4oQXi
          claim_id: c_ySFXB1bwNN1RCo4vQeDWon
          source_id: s_N7bWCPVmrj5c4MZAU14Qbe
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
  descendants: []
  other: []
---

# 王天敘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王天敘 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王天敘（CBDB 288231）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=288231&o=json)
