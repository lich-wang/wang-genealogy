---
schema: wang-person/v1
id: p_ACPtHLvYTdxCgWBGErrRg8
status: active
merged_into: null
display_name: 王若林
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2N3ZATtRWrCrnzHqeG7CSe
        subject_person_id: p_ACPtHLvYTdxCgWBGErrRg8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若林
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LbxrQZvEX7AgTyoUdJN8Me
          claim_id: c_2N3ZATtRWrCrnzHqeG7CSe
          source_id: s_x5TU2NH8qTJePMEge7fyd6
          stance: supports
          locator: CBDB:640069
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640069）
          source: &a1
            id: s_x5TU2NH8qTJePMEge7fyd6
            source_type: api_record
            title: 中国历代人物传记资料库：王若林（CBDB 640069）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640069&o=json
            external_identifier: CBDB:640069
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hQL7aN7oQXP2k41cNjwChx
        subject_person_id: p_ACPtHLvYTdxCgWBGErrRg8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王若林，清人物。籍贯溫州府，曾任訓導。（中国历代人物传记资料库 CBDB 640069）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__HmldJyuZC1CJy7Z-hec_t
          claim_id: c_hQL7aN7oQXP2k41cNjwChx
          source_id: s_x5TU2NH8qTJePMEge7fyd6
          stance: supports
          locator: CBDB:640069
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

# 王若林

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王若林 | accepted |
| bio.summary | 王若林，清人物。籍贯溫州府，曾任訓導。（中国历代人物传记资料库 CBDB 640069） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王若林（CBDB 640069）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640069&o=json)
