---
schema: wang-person/v1
id: p_M6gXNVCFD4A1KmYsy35Xre
status: active
merged_into: null
display_name: 王坦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VkjwEJw8eeyEVZboBGu7wK
        subject_person_id: p_M6gXNVCFD4A1KmYsy35Xre
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王坦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5NKABdRpsLA3Mk4iVaHNuA
          claim_id: c_VkjwEJw8eeyEVZboBGu7wK
          source_id: s_hFksobc7oGiGMHYirujNKk
          stance: supports
          locator: CBDB:100684
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100684）
          source: &a1
            id: s_hFksobc7oGiGMHYirujNKk
            source_type: api_record
            title: 中国历代人物传记资料库：王坦（CBDB 100684）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100684&o=json
            external_identifier: CBDB:100684
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_cPocx7fGkaePmHg4ppD1rd
        subject_person_id: p_M6gXNVCFD4A1KmYsy35Xre
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1297年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_okrFAJuwa4gtxaKjXMxJCR
          claim_id: c_cPocx7fGkaePmHg4ppD1rd
          source_id: s_hFksobc7oGiGMHYirujNKk
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
        id: c_bJufGB5u43ZGH3t7j596dA
        subject_person_id: p_M6gXNVCFD4A1KmYsy35Xre
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1355年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YzKHBVjmMLFpeBmPoVT6HP
          claim_id: c_bJufGB5u43ZGH3t7j596dA
          source_id: s_hFksobc7oGiGMHYirujNKk
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
        id: c_eM3jz144cAWmBQdA4aGVk2
        subject_person_id: p_M6gXNVCFD4A1KmYsy35Xre
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LFF5Pv29FsoPSk3RQpJ7hh
          claim_id: c_eM3jz144cAWmBQdA4aGVk2
          source_id: s_hFksobc7oGiGMHYirujNKk
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

# 王坦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王坦 | accepted |
| birth.date | 1297年 | accepted |
| death.date | 1355年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王坦（CBDB 100684）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100684&o=json)
