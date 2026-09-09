---
schema: wang-person/v1
id: p_7ZDTot2mHCYEpXe9YLwZZs
status: active
merged_into: null
display_name: 王業
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HDTd6PAtMxh9x99b5CqT7H
        subject_person_id: p_7ZDTot2mHCYEpXe9YLwZZs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王業
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e6U5XpDgDggnHXXnYoL842
          claim_id: c_HDTd6PAtMxh9x99b5CqT7H
          source_id: s_Ku7LWpVqP3Bb5dh1yP9ouV
          stance: supports
          locator: CBDB:204388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204388）
          source: &a1
            id: s_Ku7LWpVqP3Bb5dh1yP9ouV
            source_type: api_record
            title: 中国历代人物传记资料库：王業（CBDB 204388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204388&o=json
            external_identifier: CBDB:204388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.823Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_tvk84A8wA4QMzXjPGqXbMP
        subject_person_id: p_7ZDTot2mHCYEpXe9YLwZZs
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1518年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wACTHChghBNSjMc7K3Kmb4
          claim_id: c_tvk84A8wA4QMzXjPGqXbMP
          source_id: s_Ku7LWpVqP3Bb5dh1yP9ouV
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
        id: c_cpW1uCWMupUznHdcC1rDTE
        subject_person_id: p_7ZDTot2mHCYEpXe9YLwZZs
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
        - id: cs_tAacS9bmBxDT5xde6ZVby8
          claim_id: c_cpW1uCWMupUznHdcC1rDTE
          source_id: s_Ku7LWpVqP3Bb5dh1yP9ouV
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

# 王業

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王業 | accepted |
| birth.date | 1518年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王業（CBDB 204388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204388&o=json)
