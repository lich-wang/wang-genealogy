---
schema: wang-person/v1
id: p_HyThVFPnD3JuvujCW8NwVM
status: active
merged_into: null
display_name: 王顯緒
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_erPmygmUKfZS5pFy93Bt2k
        subject_person_id: p_HyThVFPnD3JuvujCW8NwVM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯緒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uTd1EX9FAPLyN5mvD2pSLi
          claim_id: c_erPmygmUKfZS5pFy93Bt2k
          source_id: s_nXxeMnR8nhktJt69BgtBxF
          stance: supports
          locator: CBDB:71868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71868）
          source: &a1
            id: s_nXxeMnR8nhktJt69BgtBxF
            source_type: api_record
            title: 中国历代人物传记资料库：王顯緒（CBDB 71868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71868&o=json
            external_identifier: CBDB:71868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.903Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dovyuBfzNiKiTM6GJFBPTE
        subject_person_id: p_HyThVFPnD3JuvujCW8NwVM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1717年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRb7xPNZn5qRZWDVhENE1n
          claim_id: c_dovyuBfzNiKiTM6GJFBPTE
          source_id: s_nXxeMnR8nhktJt69BgtBxF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Pv6RmKZLdQpT71XYXTqL1L
        subject_person_id: p_HyThVFPnD3JuvujCW8NwVM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1785年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A3Dx2f4bM3nUQG2zVK69uo
          claim_id: c_Pv6RmKZLdQpT71XYXTqL1L
          source_id: s_nXxeMnR8nhktJt69BgtBxF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fcJvdRNQZgDep2VXEAMLzA
        subject_person_id: p_HyThVFPnD3JuvujCW8NwVM
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
        - id: cs_BREV63dhy3dkr5NoQYEWEZ
          claim_id: c_fcJvdRNQZgDep2VXEAMLzA
          source_id: s_nXxeMnR8nhktJt69BgtBxF
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

# 王顯緒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯緒 | accepted |
| birth.date | 1717年 | accepted |
| death.date | 1785年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯緒（CBDB 71868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71868&o=json)
