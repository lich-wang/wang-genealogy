---
schema: wang-person/v1
id: p_3KP6DKp9A2G4AriStfQeRe
status: active
merged_into: null
display_name: 王修鐸
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1P4af2DpDMbynoCjtid3TX
        subject_person_id: p_3KP6DKp9A2G4AriStfQeRe
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修鐸
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dnUzDQHxH7gBGdMDHtFMKA
          claim_id: c_1P4af2DpDMbynoCjtid3TX
          source_id: s_kSe7THSBowZ9cuFo3mDism
          stance: supports
          locator: CBDB:636078
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636078）
          source: &a1
            id: s_kSe7THSBowZ9cuFo3mDism
            source_type: api_record
            title: 中国历代人物传记资料库：王修鐸（CBDB 636078）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636078&o=json
            external_identifier: CBDB:636078
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.878Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fWjkZvMitqERRJdQLdsWws
        subject_person_id: p_3KP6DKp9A2G4AriStfQeRe
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王修鐸，清人物。籍贯眉州直隸州直轄地方，曾任復設訓導。（中国历代人物传记资料库 CBDB 636078）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MN0eLN4zVMOuAV5-tQ5lVz
          claim_id: c_fWjkZvMitqERRJdQLdsWws
          source_id: s_kSe7THSBowZ9cuFo3mDism
          stance: supports
          locator: CBDB:636078
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

# 王修鐸

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王修鐸 | accepted |
| bio.summary | 王修鐸，清人物。籍贯眉州直隸州直轄地方，曾任復設訓導。（中国历代人物传记资料库 CBDB 636078） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王修鐸（CBDB 636078）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636078&o=json)
