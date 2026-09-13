---
schema: wang-person/v1
id: p_jvyneAmQwsyuMFavFeHLZy
status: active
merged_into: null
display_name: 王遵魯
cbdb_id: 224061
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xTV5LhtNqj4ufki3QFJgXz
        subject_person_id: p_jvyneAmQwsyuMFavFeHLZy
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵魯，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224061）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_zw2G_wkjczouL2Q5jS9dug
          claim_id: c_xTV5LhtNqj4ufki3QFJgXz
          source_id: s_bFzgMnNoFZCHkHE4TvLXX7
          stance: supports
          locator: CBDB:224061
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_bFzgMnNoFZCHkHE4TvLXX7
            source_type: api_record
            title: 中国历代人物传记资料库：王遵魯（CBDB 224061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224061&o=json
            external_identifier: CBDB:224061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9mWLVHZJeC8QXHPvqhkzhu
        subject_person_id: p_jvyneAmQwsyuMFavFeHLZy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵魯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_szfcPghD56ubt7n2GyamHJ
          claim_id: c_9mWLVHZJeC8QXHPvqhkzhu
          source_id: s_bFzgMnNoFZCHkHE4TvLXX7
          stance: supports
          locator: CBDB:224061
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
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

# 王遵魯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王遵魯，明人物。萬曆十一年進士，籍贯杞縣。（中国历代人物传记资料库 CBDB 224061） | accepted |
| name.primary | 王遵魯 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王遵魯（CBDB 224061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=224061&o=json)
