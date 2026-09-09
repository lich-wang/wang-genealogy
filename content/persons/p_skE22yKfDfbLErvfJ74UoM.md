---
schema: wang-person/v1
id: p_skE22yKfDfbLErvfJ74UoM
status: active
merged_into: null
display_name: 王珣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Azv3yR1JX7HefmaVckiuBX
        subject_person_id: p_skE22yKfDfbLErvfJ74UoM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_YM5afoafYE5h8NC6at4yyL
          claim_id: c_Azv3yR1JX7HefmaVckiuBX
          source_id: s_u58QRMGxqL4CFi6VQF9GvF
          stance: supports
          locator: CBDB:126640
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126640）
          source: &a1
            id: s_u58QRMGxqL4CFi6VQF9GvF
            source_type: api_record
            title: 中国历代人物传记资料库：王珣（CBDB 126640）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126640&o=json
            external_identifier: CBDB:126640
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.089Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_at3FHqbzXSMz3z3WFQmQ67
        subject_person_id: p_skE22yKfDfbLErvfJ74UoM
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
        - id: cs_napk6HFtUS51K6m5e6u7YM
          claim_id: c_at3FHqbzXSMz3z3WFQmQ67
          source_id: s_u58QRMGxqL4CFi6VQF9GvF
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

# 王珣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珣 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王珣（CBDB 126640）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126640&o=json)
