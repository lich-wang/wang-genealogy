---
schema: wang-person/v1
id: p_vGFoCrgZCWTXwTFu86KLDx
status: active
merged_into: null
display_name: 王瑜
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2sG65j5AoZDNY9ERhEAhBe
        subject_person_id: p_vGFoCrgZCWTXwTFu86KLDx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hRthB91Bji29HTQSHaLX5g
          claim_id: c_2sG65j5AoZDNY9ERhEAhBe
          source_id: s_2FxXhHqn874YRiFtDQvLMK
          stance: supports
          locator: CBDB:170219
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（170219）
          source: &a1
            id: s_2FxXhHqn874YRiFtDQvLMK
            source_type: api_record
            title: 中国历代人物传记资料库：王瑜（CBDB 170219）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170219&o=json
            external_identifier: CBDB:170219
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.030Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_MtpYH2k6Dd7LP5R9NC48T9
        subject_person_id: p_vGFoCrgZCWTXwTFu86KLDx
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 690年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PN8TwDgbuKRxxMhdn882M
          claim_id: c_MtpYH2k6Dd7LP5R9NC48T9
          source_id: s_2FxXhHqn874YRiFtDQvLMK
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
        id: c_Fe2gD8KTajbKcwACVd1o94
        subject_person_id: p_vGFoCrgZCWTXwTFu86KLDx
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
        - id: cs_Lf51ATP4gb8KaZkbq9PDrc
          claim_id: c_Fe2gD8KTajbKcwACVd1o94
          source_id: s_2FxXhHqn874YRiFtDQvLMK
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

# 王瑜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑜 | accepted |
| death.date | 690年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑜（CBDB 170219）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=170219&o=json)
