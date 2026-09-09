---
schema: wang-person/v1
id: p_PsS8vHuoeu22AGCbYDc9CA
status: active
merged_into: null
display_name: 王莓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bdvp4NBFvWDHtXB44Ri1Dd
        subject_person_id: p_PsS8vHuoeu22AGCbYDc9CA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王莓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2JeShBvhxpL5J4xZfpLThW
          claim_id: c_bdvp4NBFvWDHtXB44Ri1Dd
          source_id: s_788hp4EMH9pQUBXLSpSbEJ
          stance: supports
          locator: CBDB:191908
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（191908）
          source: &a1
            id: s_788hp4EMH9pQUBXLSpSbEJ
            source_type: api_record
            title: 中国历代人物传记资料库：王莓（CBDB 191908）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191908&o=json
            external_identifier: CBDB:191908
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5EocY1z5e5ip8v7M5EooRK
        subject_person_id: p_PsS8vHuoeu22AGCbYDc9CA
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 832年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTU8PnvmFgrgyJff5YC1U3
          claim_id: c_5EocY1z5e5ip8v7M5EooRK
          source_id: s_788hp4EMH9pQUBXLSpSbEJ
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
        id: c_N1WeGN7KS3yGuNU9cDgzNw
        subject_person_id: p_PsS8vHuoeu22AGCbYDc9CA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BjfKS4gzE8sx37iBnmyAKh
          claim_id: c_N1WeGN7KS3yGuNU9cDgzNw
          source_id: s_788hp4EMH9pQUBXLSpSbEJ
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

# 王莓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王莓 | accepted |
| death.date | 832年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王莓（CBDB 191908）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191908&o=json)
