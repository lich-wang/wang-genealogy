---
schema: wang-person/v1
id: p_Sxba8X9aEz8yTujitN4ZVE
status: active
merged_into: null
display_name: 王紹廉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RKj3bYKpt2q7Ed4c9hVBJL
        subject_person_id: p_Sxba8X9aEz8yTujitN4ZVE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹廉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KQ74HxLL6dMJHYagujDFHd
          claim_id: c_RKj3bYKpt2q7Ed4c9hVBJL
          source_id: s_D6D4LbVPvuMEtmRawQcRVL
          stance: supports
          locator: CBDB:71840
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71840）
          source: &a1
            id: s_D6D4LbVPvuMEtmRawQcRVL
            source_type: api_record
            title: 中国历代人物传记资料库：王紹廉（CBDB 71840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71840&o=json
            external_identifier: CBDB:71840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.895Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e3EmeFx9B9aTZC1h4prPyv
        subject_person_id: p_Sxba8X9aEz8yTujitN4ZVE
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DSnnmxe5nqy6kdgK1fBHRw
          claim_id: c_e3EmeFx9B9aTZC1h4prPyv
          source_id: s_D6D4LbVPvuMEtmRawQcRVL
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GMmZ17npk4kCHMR9hVNm46
        subject_person_id: p_Sxba8X9aEz8yTujitN4ZVE
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
        - id: cs_Ft3D9GAxgKQKL4NQozjyvd
          claim_id: c_GMmZ17npk4kCHMR9hVNm46
          source_id: s_D6D4LbVPvuMEtmRawQcRVL
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

# 王紹廉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹廉 | accepted |
| birth.date | 1850年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王紹廉（CBDB 71840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71840&o=json)
