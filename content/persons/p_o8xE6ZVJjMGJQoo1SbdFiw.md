---
schema: wang-person/v1
id: p_o8xE6ZVJjMGJQoo1SbdFiw
status: active
merged_into: null
display_name: 王魁鑾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dE1Cw93WPrKpz1o46GkDoB
        subject_person_id: p_o8xE6ZVJjMGJQoo1SbdFiw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王魁鑾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ye5AVGe19wQfnWVybyFGAY
          claim_id: c_dE1Cw93WPrKpz1o46GkDoB
          source_id: s_pw6Nrwx8b3jvypeNAeUUKp
          stance: supports
          locator: CBDB:342293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（342293）
          source: &a1
            id: s_pw6Nrwx8b3jvypeNAeUUKp
            source_type: api_record
            title: 中国历代人物传记资料库：王魁鑾（CBDB 342293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342293&o=json
            external_identifier: CBDB:342293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YS8npkMKQQ92dPGzTa4PqF
        subject_person_id: p_o8xE6ZVJjMGJQoo1SbdFiw
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
        - id: cs_oSti253v9g3NTXakL9gEoQ
          claim_id: c_YS8npkMKQQ92dPGzTa4PqF
          source_id: s_pw6Nrwx8b3jvypeNAeUUKp
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

# 王魁鑾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王魁鑾 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王魁鑾（CBDB 342293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=342293&o=json)
