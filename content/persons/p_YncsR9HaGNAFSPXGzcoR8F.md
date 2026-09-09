---
schema: wang-person/v1
id: p_YncsR9HaGNAFSPXGzcoR8F
status: active
merged_into: null
display_name: 王詢
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_p4mHkrdcv4RidNFZt23JKN
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王詢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FBBYahM3eU4F8PGgVJkJcy
          claim_id: c_p4mHkrdcv4RidNFZt23JKN
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
          stance: supports
          locator: CBDB:140161
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140161）
          source: &a1
            id: s_jSyyCsHQdGGrTTWwGHzmPh
            source_type: api_record
            title: 中国历代人物传记资料库：王詢（CBDB 140161）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140161&o=json
            external_identifier: CBDB:140161
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.476Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_KFuDcaGdbSTdgWdXZqEg6P
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 605年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DAm9oA9M4gy5NSJLjF5cP6
          claim_id: c_KFuDcaGdbSTdgWdXZqEg6P
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
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
        id: c_nwSkV6MtSXPM7DMrDj5MUK
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 676年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9P5Uyn5JBRUyTCNutiW5J9
          claim_id: c_nwSkV6MtSXPM7DMrDj5MUK
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
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
        id: c_M6m81jK5AkieSFMF6JRtAR
        subject_person_id: p_YncsR9HaGNAFSPXGzcoR8F
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
        - id: cs_n9Db5qAtEY4Q1JQoNeo7SX
          claim_id: c_M6m81jK5AkieSFMF6JRtAR
          source_id: s_jSyyCsHQdGGrTTWwGHzmPh
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

# 王詢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王詢 | accepted |
| birth.date | 605年 | accepted |
| death.date | 676年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王詢（CBDB 140161）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140161&o=json)
