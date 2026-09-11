---
schema: wang-person/v1
id: p_CL14JPDq7MiKnM4LUKo1RE
status: active
merged_into: null
display_name: 王霖
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ird6P6Q7Zf5LaJoQJTBGaY
        subject_person_id: p_CL14JPDq7MiKnM4LUKo1RE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8R4eNuA2HwGoymtEfSzjSE
          claim_id: c_ird6P6Q7Zf5LaJoQJTBGaY
          source_id: s_E6UCFPKHbLeTHBKNQdKAN8
          stance: supports
          locator: CBDB:563452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563452）
          source: &a1
            id: s_E6UCFPKHbLeTHBKNQdKAN8
            source_type: api_record
            title: 中国历代人物传记资料库：王霖（CBDB 563452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563452&o=json
            external_identifier: CBDB:563452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.799Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LyK4fz2czhdRN8PAicDc31
        subject_person_id: p_CL14JPDq7MiKnM4LUKo1RE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖，明人物。籍贯麗水，身份为博學之人，曾任登仕郎。（中国历代人物传记资料库 CBDB 563452）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZvPtekdvWQLuRU_4dQGyM7
          claim_id: c_LyK4fz2czhdRN8PAicDc31
          source_id: s_E6UCFPKHbLeTHBKNQdKAN8
          stance: supports
          locator: CBDB:563452
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

# 王霖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖 | accepted |
| bio.summary | 王霖，明人物。籍贯麗水，身份为博學之人，曾任登仕郎。（中国历代人物传记资料库 CBDB 563452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖（CBDB 563452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563452&o=json)
