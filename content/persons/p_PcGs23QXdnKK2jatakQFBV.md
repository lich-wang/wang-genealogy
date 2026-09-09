---
schema: wang-person/v1
id: p_PcGs23QXdnKK2jatakQFBV
status: active
merged_into: null
display_name: 王勉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Hh8T5h1DdftLGxsdnE1Nn
        subject_person_id: p_PcGs23QXdnKK2jatakQFBV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cdA1FukfbrrxdmCer3Shas
          claim_id: c_8Hh8T5h1DdftLGxsdnE1Nn
          source_id: s_zCkW62b7agourLqkQRLcGX
          stance: supports
          locator: CBDB:71136
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71136）
          source: &a1
            id: s_zCkW62b7agourLqkQRLcGX
            source_type: api_record
            title: 中国历代人物传记资料库：王勉（CBDB 71136）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71136&o=json
            external_identifier: CBDB:71136
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.411Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pxPN4HfCtuGZZcopq68UmX
        subject_person_id: p_PcGs23QXdnKK2jatakQFBV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1674年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2gLqVd2Q43w2PxAxABaq3p
          claim_id: c_pxPN4HfCtuGZZcopq68UmX
          source_id: s_zCkW62b7agourLqkQRLcGX
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
        id: c_f23mkegZhWoPgKdRn9wU8Q
        subject_person_id: p_PcGs23QXdnKK2jatakQFBV
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
        - id: cs_vvV1jUaPKfBEhcwqeFhkAA
          claim_id: c_f23mkegZhWoPgKdRn9wU8Q
          source_id: s_zCkW62b7agourLqkQRLcGX
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

# 王勉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勉 | accepted |
| birth.date | 1674年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王勉（CBDB 71136）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71136&o=json)
