---
schema: wang-person/v1
id: p_WGkg6mF9TvCBQXyHskUx9E
status: active
merged_into: null
display_name: 王堯佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MWZYtx32oQ3LspVw9KXHfP
        subject_person_id: p_WGkg6mF9TvCBQXyHskUx9E
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gABgE74znghAaoaoY9sWe8
          claim_id: c_MWZYtx32oQ3LspVw9KXHfP
          source_id: s_Pgzu9NmKfppecbxP92d7KF
          stance: supports
          locator: CBDB:636750
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636750）
          source: &a1
            id: s_Pgzu9NmKfppecbxP92d7KF
            source_type: api_record
            title: 中国历代人物传记资料库：王堯佐（CBDB 636750）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636750&o=json
            external_identifier: CBDB:636750
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QMQTZzdY9Cb2WzVqH5cSoh
        subject_person_id: p_WGkg6mF9TvCBQXyHskUx9E
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯佐，清人物。籍贯南宮，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636750）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DfeJX2Q0q8nVYBrsRx556w
          claim_id: c_QMQTZzdY9Cb2WzVqH5cSoh
          source_id: s_Pgzu9NmKfppecbxP92d7KF
          stance: supports
          locator: CBDB:636750
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

# 王堯佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯佐 | accepted |
| bio.summary | 王堯佐，清人物。籍贯南宮，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 636750） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王堯佐（CBDB 636750）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636750&o=json)
