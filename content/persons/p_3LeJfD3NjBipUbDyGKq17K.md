---
schema: wang-person/v1
id: p_3LeJfD3NjBipUbDyGKq17K
status: active
merged_into: null
display_name: 王有年
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kxTazsKwdvTSzKJadD4Ahd
        subject_person_id: p_3LeJfD3NjBipUbDyGKq17K
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有年
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cey7QGnLv2J1nJShm3kWwf
          claim_id: c_kxTazsKwdvTSzKJadD4Ahd
          source_id: s_2KVjah8yjfQ2DT9g7vwWgP
          stance: supports
          locator: CBDB:71531
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71531）
          source: &a1
            id: s_2KVjah8yjfQ2DT9g7vwWgP
            source_type: api_record
            title: 中国历代人物传记资料库：王有年（CBDB 71531）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71531&o=json
            external_identifier: CBDB:71531
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.737Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_p8Xkg86yk3i17bvFY3dzx3
        subject_person_id: p_3LeJfD3NjBipUbDyGKq17K
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ro9ezSuq9Hidxf8FLTvSYg
          claim_id: c_p8Xkg86yk3i17bvFY3dzx3
          source_id: s_2KVjah8yjfQ2DT9g7vwWgP
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
        id: c_3ZT1q1FFsomoQCbrz5V4ab
        subject_person_id: p_3LeJfD3NjBipUbDyGKq17K
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
        - id: cs_qBsWBdoiqE6RtB61uSnnCh
          claim_id: c_3ZT1q1FFsomoQCbrz5V4ab
          source_id: s_2KVjah8yjfQ2DT9g7vwWgP
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

# 王有年

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有年 | accepted |
| birth.date | 1621年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王有年（CBDB 71531）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71531&o=json)
