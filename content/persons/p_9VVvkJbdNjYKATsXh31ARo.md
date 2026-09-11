---
schema: wang-person/v1
id: p_9VVvkJbdNjYKATsXh31ARo
status: active
merged_into: null
display_name: 王楫
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iespw4zPPecwZnsqXDXMFy
        subject_person_id: p_9VVvkJbdNjYKATsXh31ARo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_tQD6DgTnobs2CC3jRQPQrD
          claim_id: c_iespw4zPPecwZnsqXDXMFy
          source_id: s_1ubx8BxHMmTWPbYchM9pWN
          stance: supports
          locator: CBDB:71241
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71241）
          source: &a1
            id: s_1ubx8BxHMmTWPbYchM9pWN
            source_type: api_record
            title: 中国历代人物传记资料库：王楫（CBDB 71241）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71241&o=json
            external_identifier: CBDB:71241
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.518Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_rELZQNxRje5LLLnwHdCEko
        subject_person_id: p_9VVvkJbdNjYKATsXh31ARo
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1678年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fFTEs2r1H11TUst9Vkv5kJ
          claim_id: c_rELZQNxRje5LLLnwHdCEko
          source_id: s_1ubx8BxHMmTWPbYchM9pWN
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
        id: c_338F1QcEFMmkA5orL9MBPK
        subject_person_id: p_9VVvkJbdNjYKATsXh31ARo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王楫（生于1678年），清人物。籍贯成武。（中国历代人物传记资料库 CBDB 71241）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yJnovvbRSeN0as0GC9u1gW
          claim_id: c_338F1QcEFMmkA5orL9MBPK
          source_id: s_1ubx8BxHMmTWPbYchM9pWN
          stance: supports
          locator: CBDB:71241
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
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

# 王楫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王楫 | accepted |
| birth.date | 1678年 | accepted |
| bio.summary | 王楫（生于1678年），清人物。籍贯成武。（中国历代人物传记资料库 CBDB 71241） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王楫（CBDB 71241）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71241&o=json)
