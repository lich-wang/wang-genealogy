---
schema: wang-person/v1
id: p_kkqXWhAD5CPDPi68kJzCNU
status: active
merged_into: null
display_name: 王德銘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jBXdkTEEs8GtdZvFeFQdBH
        subject_person_id: p_kkqXWhAD5CPDPi68kJzCNU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德銘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sNgqdqW8GrG5uhFzYUPJs6
          claim_id: c_jBXdkTEEs8GtdZvFeFQdBH
          source_id: s_avhR746pPJh77FVfZo8ZKm
          stance: supports
          locator: CBDB:637722
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637722）
          source: &a1
            id: s_avhR746pPJh77FVfZo8ZKm
            source_type: api_record
            title: 中国历代人物传记资料库：王德銘（CBDB 637722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637722&o=json
            external_identifier: CBDB:637722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.510Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Pk88ehjuMpKfogzAyHW6cK
        subject_person_id: p_kkqXWhAD5CPDPi68kJzCNU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德銘，清人物。籍贯城固，入仕廩貢生，曾任縣丞。（中国历代人物传记资料库 CBDB 637722）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4MoWEh4bPJfd8sBCYNPn_y
          claim_id: c_Pk88ehjuMpKfogzAyHW6cK
          source_id: s_avhR746pPJh77FVfZo8ZKm
          stance: supports
          locator: CBDB:637722
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

# 王德銘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德銘 | accepted |
| bio.summary | 王德銘，清人物。籍贯城固，入仕廩貢生，曾任縣丞。（中国历代人物传记资料库 CBDB 637722） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德銘（CBDB 637722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637722&o=json)
