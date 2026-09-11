---
schema: wang-person/v1
id: p_FoW9RUYdKC4QdnQeNAi28C
status: active
merged_into: null
display_name: 王總
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K2SseK9ThHC1wQB9q2WdBn
        subject_person_id: p_FoW9RUYdKC4QdnQeNAi28C
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王總
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jPctXE9rAYFTiMaZb9PdLX
          claim_id: c_K2SseK9ThHC1wQB9q2WdBn
          source_id: s_WJxAk26Hf3ws9hoeNsG9bk
          stance: supports
          locator: CBDB:454085
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（454085）
          source: &a1
            id: s_WJxAk26Hf3ws9hoeNsG9bk
            source_type: api_record
            title: 中国历代人物传记资料库：王總（CBDB 454085）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454085&o=json
            external_identifier: CBDB:454085
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3sh5Nbj9mBooYq4SuiiQKG
        subject_person_id: p_FoW9RUYdKC4QdnQeNAi28C
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王總，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 454085）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Xoj_4wwj1aPqtLus3Pu9y2
          claim_id: c_3sh5Nbj9mBooYq4SuiiQKG
          source_id: s_WJxAk26Hf3ws9hoeNsG9bk
          stance: supports
          locator: CBDB:454085
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

# 王總

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王總 | accepted |
| bio.summary | 王總，明人物。入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 454085） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王總（CBDB 454085）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=454085&o=json)
