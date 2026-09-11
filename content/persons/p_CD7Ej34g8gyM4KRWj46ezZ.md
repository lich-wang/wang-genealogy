---
schema: wang-person/v1
id: p_CD7Ej34g8gyM4KRWj46ezZ
status: active
merged_into: null
display_name: 王簡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hJzXe8kF2izPiHNJQ2aisR
        subject_person_id: p_CD7Ej34g8gyM4KRWj46ezZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aBwiv4bn5xrbVQDx65rz4C
          claim_id: c_hJzXe8kF2izPiHNJQ2aisR
          source_id: s_xdUmBxNCRy5x1VrraxcgLC
          stance: supports
          locator: CBDB:328165
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328165）
          source: &a1
            id: s_xdUmBxNCRy5x1VrraxcgLC
            source_type: api_record
            title: 中国历代人物传记资料库：王簡（CBDB 328165）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328165&o=json
            external_identifier: CBDB:328165
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.291Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HD3RTm9Zq9ELu5qBdn9zdy
        subject_person_id: p_CD7Ej34g8gyM4KRWj46ezZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王簡，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328165）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CQCyrW6h_CAE_JFJbpwO_j
          claim_id: c_HD3RTm9Zq9ELu5qBdn9zdy
          source_id: s_xdUmBxNCRy5x1VrraxcgLC
          stance: supports
          locator: CBDB:328165
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

# 王簡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王簡 | accepted |
| bio.summary | 王簡，明人物。嘉靖四十一年進士，籍贯夷陵州。（中国历代人物传记资料库 CBDB 328165） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王簡（CBDB 328165）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328165&o=json)
