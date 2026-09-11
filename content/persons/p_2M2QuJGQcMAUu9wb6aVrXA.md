---
schema: wang-person/v1
id: p_2M2QuJGQcMAUu9wb6aVrXA
status: active
merged_into: null
display_name: 王含真
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_en6vwf4bA2mFVbXTxrZwE6
        subject_person_id: p_2M2QuJGQcMAUu9wb6aVrXA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王含真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Fmx6Jvk9vXZ2nBzLJ4R4ES
          claim_id: c_en6vwf4bA2mFVbXTxrZwE6
          source_id: s_kh8QBBgA9veL7MTmyJ3P8b
          stance: supports
          locator: CBDB:71688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71688）
          source: &a1
            id: s_kh8QBBgA9veL7MTmyJ3P8b
            source_type: api_record
            title: 中国历代人物传记资料库：王含真（CBDB 71688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71688&o=json
            external_identifier: CBDB:71688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.830Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_i2D4jNBcF14SHU5WqFAE4q
        subject_person_id: p_2M2QuJGQcMAUu9wb6aVrXA
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1640年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_y84kiY8P7fjKiGUr1ZEUFp
          claim_id: c_i2D4jNBcF14SHU5WqFAE4q
          source_id: s_kh8QBBgA9veL7MTmyJ3P8b
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
        id: c_REFCbJH87YT6KZ1qydSshx
        subject_person_id: p_2M2QuJGQcMAUu9wb6aVrXA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王含真（生于1640年），清人物。籍贯猗氏。（中国历代人物传记资料库 CBDB 71688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Em7o17Z44dLFX9GPjPkTYs
          claim_id: c_REFCbJH87YT6KZ1qydSshx
          source_id: s_kh8QBBgA9veL7MTmyJ3P8b
          stance: supports
          locator: CBDB:71688
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

# 王含真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王含真 | accepted |
| birth.date | 1640年 | accepted |
| bio.summary | 王含真（生于1640年），清人物。籍贯猗氏。（中国历代人物传记资料库 CBDB 71688） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王含真（CBDB 71688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71688&o=json)
