---
schema: wang-person/v1
id: p_kuXYsZCKcBJ2Mn2217GNhJ
status: active
merged_into: null
display_name: 王兆曾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hiiz6z9aa2z3NvFSwwBwab
        subject_person_id: p_kuXYsZCKcBJ2Mn2217GNhJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆曾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DVDXrJL7UA1LqBMHF74K5Q
          claim_id: c_hiiz6z9aa2z3NvFSwwBwab
          source_id: s_rY34xizqjBLaqhHPQzJ37x
          stance: supports
          locator: CBDB:71599
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71599）
          source: &a1
            id: s_rY34xizqjBLaqhHPQzJ37x
            source_type: api_record
            title: 中国历代人物传记资料库：王兆曾（CBDB 71599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71599&o=json
            external_identifier: CBDB:71599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.777Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_yS3yBsQDD2hZi5uj2169a4
        subject_person_id: p_kuXYsZCKcBJ2Mn2217GNhJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1694年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aBB7Auj5A4DDKg4zowNMtD
          claim_id: c_yS3yBsQDD2hZi5uj2169a4
          source_id: s_rY34xizqjBLaqhHPQzJ37x
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
        id: c_4iVpMkXpSmatCYt2GosfCb
        subject_person_id: p_kuXYsZCKcBJ2Mn2217GNhJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆曾（生于1694年），清人物。籍贯石屏州。（中国历代人物传记资料库 CBDB 71599）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_mBRttLJONz0ciXv3485Ysv
          claim_id: c_4iVpMkXpSmatCYt2GosfCb
          source_id: s_rY34xizqjBLaqhHPQzJ37x
          stance: supports
          locator: CBDB:71599
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

# 王兆曾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆曾 | accepted |
| birth.date | 1694年 | accepted |
| bio.summary | 王兆曾（生于1694年），清人物。籍贯石屏州。（中国历代人物传记资料库 CBDB 71599） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆曾（CBDB 71599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71599&o=json)
