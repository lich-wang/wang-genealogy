---
schema: wang-person/v1
id: p_R9kjQ9HPwC4FNLbAVVyQaS
status: active
merged_into: null
display_name: 王金鑑
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iDBNu9KXegojcBFuqLPU8U
        subject_person_id: p_R9kjQ9HPwC4FNLbAVVyQaS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王金鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_niNV5tKkmJ46aYYx5HANUR
          claim_id: c_iDBNu9KXegojcBFuqLPU8U
          source_id: s_HT8JzuHjRUt5419GnHxWL6
          stance: supports
          locator: CBDB:640540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640540）
          source: &a1
            id: s_HT8JzuHjRUt5419GnHxWL6
            source_type: api_record
            title: 中国历代人物传记资料库：王金鑑（CBDB 640540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640540&o=json
            external_identifier: CBDB:640540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.131Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gtYF6ny7DfKWaS7sY8nX7Q
        subject_person_id: p_R9kjQ9HPwC4FNLbAVVyQaS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王金鑑，清人物。籍贯潁州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640540）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NoF3SICCV5SVXTF1uodHpq
          claim_id: c_gtYF6ny7DfKWaS7sY8nX7Q
          source_id: s_HT8JzuHjRUt5419GnHxWL6
          stance: supports
          locator: CBDB:640540
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

# 王金鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王金鑑 | accepted |
| bio.summary | 王金鑑，清人物。籍贯潁州府，入仕貢生: 拔貢，曾任復設教諭。（中国历代人物传记资料库 CBDB 640540） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王金鑑（CBDB 640540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640540&o=json)
