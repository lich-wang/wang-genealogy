---
schema: wang-person/v1
id: p_118579QWz8dGbmtPQtEUvj
status: active
merged_into: null
display_name: 王兆雲
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wxEQ1yYDVzNFfuyYNxHiNA
        subject_person_id: p_118579QWz8dGbmtPQtEUvj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8FGaP9WfAis19HstWQEKGu
          claim_id: c_wxEQ1yYDVzNFfuyYNxHiNA
          source_id: s_S1Gh7ohw9tTaQN5xuzyE5t
          stance: supports
          locator: CBDB:636221
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636221）
          source: &a1
            id: s_S1Gh7ohw9tTaQN5xuzyE5t
            source_type: api_record
            title: 中国历代人物传记资料库：王兆雲（CBDB 636221）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636221&o=json
            external_identifier: CBDB:636221
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_tMCBmT9t3sjJHdewCCsC73
        subject_person_id: p_118579QWz8dGbmtPQtEUvj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆雲，清人物。籍贯婁縣，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 636221）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_0k9_bCV7NT9reEWoXRcq-n
          claim_id: c_tMCBmT9t3sjJHdewCCsC73
          source_id: s_S1Gh7ohw9tTaQN5xuzyE5t
          stance: supports
          locator: CBDB:636221
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

# 王兆雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆雲 | accepted |
| bio.summary | 王兆雲，清人物。籍贯婁縣，入仕監生，曾任經歷。（中国历代人物传记资料库 CBDB 636221） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆雲（CBDB 636221）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636221&o=json)
