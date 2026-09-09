---
schema: wang-person/v1
id: p_xLLqWHSJGajuPfPNtpTvgd
status: active
merged_into: null
display_name: 王崑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5G7jsCbhwzQWSCGHpHJ9A7
        subject_person_id: p_xLLqWHSJGajuPfPNtpTvgd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6RSgLPzVTMenuzBKJ7Qa41
          claim_id: c_5G7jsCbhwzQWSCGHpHJ9A7
          source_id: s_RTR9GZ7DRwMa6M2xjQEjYV
          stance: supports
          locator: CBDB:342219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342219）
          source: &a1
            id: s_RTR9GZ7DRwMa6M2xjQEjYV
            source_type: api_record
            title: 中国历代人物传记资料库：王崑（CBDB 342219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342219&o=json
            external_identifier: CBDB:342219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.870Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m1xgqWzToPHiHfN3QBn13c
        subject_person_id: p_xLLqWHSJGajuPfPNtpTvgd
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
        - id: cs_tH7TdPtVhBYSAJHoNf3EP3
          claim_id: c_m1xgqWzToPHiHfN3QBn13c
          source_id: s_RTR9GZ7DRwMa6M2xjQEjYV
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

# 王崑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崑 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王崑（CBDB 342219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342219&o=json)
