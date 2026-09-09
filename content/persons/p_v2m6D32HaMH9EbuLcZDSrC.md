---
schema: wang-person/v1
id: p_v2m6D32HaMH9EbuLcZDSrC
status: active
merged_into: null
display_name: 王炳
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mep7UySNLi9N4iKDC6fcG5
        subject_person_id: p_v2m6D32HaMH9EbuLcZDSrC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王炳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GLMe8ZQT6A3k4yFmCosFg8
          claim_id: c_mep7UySNLi9N4iKDC6fcG5
          source_id: s_N4Fp9UtcNhQwQ3mqsSwwNo
          stance: supports
          locator: CBDB:500879
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（500879）
          source: &a1
            id: s_N4Fp9UtcNhQwQ3mqsSwwNo
            source_type: api_record
            title: 中国历代人物传记资料库：王炳（CBDB 500879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500879&o=json
            external_identifier: CBDB:500879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DQ4hD8qtDfc7TUDy8otFo6
        subject_person_id: p_v2m6D32HaMH9EbuLcZDSrC
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
        - id: cs_LyfBMgv7CsbGhBos5hgScn
          claim_id: c_DQ4hD8qtDfc7TUDy8otFo6
          source_id: s_N4Fp9UtcNhQwQ3mqsSwwNo
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

# 王炳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王炳 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王炳（CBDB 500879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=500879&o=json)
