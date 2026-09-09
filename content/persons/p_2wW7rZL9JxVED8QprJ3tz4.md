---
schema: wang-person/v1
id: p_2wW7rZL9JxVED8QprJ3tz4
status: active
merged_into: null
display_name: 王埏
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rU3DJoFT8g61JZJsTnBngW
        subject_person_id: p_2wW7rZL9JxVED8QprJ3tz4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王埏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Du2s8br2p4EK2uwuhbnv7Y
          claim_id: c_rU3DJoFT8g61JZJsTnBngW
          source_id: s_uJNM4K5Pvu7hw2cChNDeJE
          stance: supports
          locator: CBDB:100752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100752）
          source: &a1
            id: s_uJNM4K5Pvu7hw2cChNDeJE
            source_type: api_record
            title: 中国历代人物传记资料库：王埏（CBDB 100752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100752&o=json
            external_identifier: CBDB:100752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.418Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_FogmAq5PgNEx7gRzdGBBHD
        subject_person_id: p_2wW7rZL9JxVED8QprJ3tz4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1301年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tX9WR72FQ642RdATkMgQYP
          claim_id: c_FogmAq5PgNEx7gRzdGBBHD
          source_id: s_uJNM4K5Pvu7hw2cChNDeJE
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
        id: c_LQepzaiiCes9FNwcLAgQvi
        subject_person_id: p_2wW7rZL9JxVED8QprJ3tz4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1339年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7V61bwDZoLyQ25z5U8Jp5X
          claim_id: c_LQepzaiiCes9FNwcLAgQvi
          source_id: s_uJNM4K5Pvu7hw2cChNDeJE
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
        id: c_pa81U2aGrVz8itK99uSknC
        subject_person_id: p_2wW7rZL9JxVED8QprJ3tz4
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
        - id: cs_MP3K9xiHKhF1GP9D9UmHuu
          claim_id: c_pa81U2aGrVz8itK99uSknC
          source_id: s_uJNM4K5Pvu7hw2cChNDeJE
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

# 王埏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王埏 | accepted |
| birth.date | 1301年 | accepted |
| death.date | 1339年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王埏（CBDB 100752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100752&o=json)
