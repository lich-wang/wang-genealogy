---
schema: wang-person/v1
id: p_yc34y3kXALFSfZAXkEjq32
status: active
merged_into: null
display_name: 王舒萼
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WRQi3NcaXtvpAZLWuMeSLn
        subject_person_id: p_yc34y3kXALFSfZAXkEjq32
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒萼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gjJRPvUFA6FH85iKoBFEew
          claim_id: c_WRQi3NcaXtvpAZLWuMeSLn
          source_id: s_Sz5oYiZF2o8131ChTJFy2M
          stance: supports
          locator: CBDB:72081
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（72081）
          source: &a1
            id: s_Sz5oYiZF2o8131ChTJFy2M
            source_type: api_record
            title: 中国历代人物传记资料库：王舒萼（CBDB 72081）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72081&o=json
            external_identifier: CBDB:72081
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_E3MyTF1Ny7xygE5y8DyjZz
        subject_person_id: p_yc34y3kXALFSfZAXkEjq32
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1842年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uBGwTF8i4DTVYA77eKucJr
          claim_id: c_E3MyTF1Ny7xygE5y8DyjZz
          source_id: s_Sz5oYiZF2o8131ChTJFy2M
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
        id: c_6hptX616oaJA8pisYKddoV
        subject_person_id: p_yc34y3kXALFSfZAXkEjq32
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舒萼（生于1842年），清人物。籍贯靈石。（中国历代人物传记资料库 CBDB 72081）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e57KT5eNZ-W6eoUNHkWq0F
          claim_id: c_6hptX616oaJA8pisYKddoV
          source_id: s_Sz5oYiZF2o8131ChTJFy2M
          stance: supports
          locator: CBDB:72081
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

# 王舒萼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舒萼 | accepted |
| birth.date | 1842年 | accepted |
| bio.summary | 王舒萼（生于1842年），清人物。籍贯靈石。（中国历代人物传记资料库 CBDB 72081） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王舒萼（CBDB 72081）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=72081&o=json)
