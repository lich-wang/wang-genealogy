---
schema: wang-person/v1
id: p_Ejj2hgcPK3mGAwt4U6pasD
status: active
merged_into: null
display_name: 王本
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BQBez42YDJRJKBEi2aN6WV
        subject_person_id: p_Ejj2hgcPK3mGAwt4U6pasD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_739JnHxpGg9MGRwEz9zDuA
          claim_id: c_BQBez42YDJRJKBEi2aN6WV
          source_id: s_Ji1LeKW3z22PD4jM67iFQd
          stance: supports
          locator: CBDB:213210
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（213210）
          source: &a1
            id: s_Ji1LeKW3z22PD4jM67iFQd
            source_type: api_record
            title: 中国历代人物传记资料库：王本（CBDB 213210）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213210&o=json
            external_identifier: CBDB:213210
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.109Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_D79sKAJA8A4GXmTn89tXG6
        subject_person_id: p_Ejj2hgcPK3mGAwt4U6pasD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王本，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213210）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OZf3w15W974RRYSPkgyRw8
          claim_id: c_D79sKAJA8A4GXmTn89tXG6
          source_id: s_Ji1LeKW3z22PD4jM67iFQd
          stance: supports
          locator: CBDB:213210
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

# 王本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王本 | accepted |
| bio.summary | 王本，明人物。萬曆二年進士，籍贯長洲。（中国历代人物传记资料库 CBDB 213210） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王本（CBDB 213210）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213210&o=json)
