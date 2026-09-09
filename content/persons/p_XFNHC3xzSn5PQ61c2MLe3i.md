---
schema: wang-person/v1
id: p_XFNHC3xzSn5PQ61c2MLe3i
status: active
merged_into: null
display_name: 王偉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ka2a1mY1NgMCRj6Ycmzenn
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BMZrK2kxggRJAo7ifmzeZf
          claim_id: c_ka2a1mY1NgMCRj6Ycmzenn
          source_id: s_rtahuuM6oUzKq85Pc5Bait
          stance: supports
          locator: CBDB:67431
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67431）
          source: &a1
            id: s_rtahuuM6oUzKq85Pc5Bait
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 67431）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67431&o=json
            external_identifier: CBDB:67431
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.993Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qcKBfyaA1xXpusJMKck8r5
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1442年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KZmysTjbWF9ZAVJevLyHCG
          claim_id: c_qcKBfyaA1xXpusJMKck8r5
          source_id: s_rtahuuM6oUzKq85Pc5Bait
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
        id: c_rfm8R46Xp9mGZChQ519BPs
        subject_person_id: p_XFNHC3xzSn5PQ61c2MLe3i
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
        - id: cs_JCkk9kg4zXnmrjLLTNta38
          claim_id: c_rfm8R46Xp9mGZChQ519BPs
          source_id: s_rtahuuM6oUzKq85Pc5Bait
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

# 王偉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偉 | accepted |
| birth.date | 1442年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王偉（CBDB 67431）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67431&o=json)
