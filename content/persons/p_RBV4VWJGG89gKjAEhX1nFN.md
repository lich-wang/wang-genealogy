---
schema: wang-person/v1
id: p_RBV4VWJGG89gKjAEhX1nFN
status: active
merged_into: null
display_name: 王奕瞻
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9DCU7AUnrM2wDxQW7n9T4k
        subject_person_id: p_RBV4VWJGG89gKjAEhX1nFN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕瞻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xuRHfc2PbsTfGgJ9wXuZDm
          claim_id: c_9DCU7AUnrM2wDxQW7n9T4k
          source_id: s_4rkBhrvxUU58HJV95R8QUM
          stance: supports
          locator: CBDB:636957
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636957）
          source: &a1
            id: s_4rkBhrvxUU58HJV95R8QUM
            source_type: api_record
            title: 中国历代人物传记资料库：王奕瞻（CBDB 636957）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636957&o=json
            external_identifier: CBDB:636957
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.160Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_MjatPE5yXT21SUFF9pZAKE
        subject_person_id: p_RBV4VWJGG89gKjAEhX1nFN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王奕瞻，清人物。籍贯膠州，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636957）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IFxD6verWhcUukWrMROSNZ
          claim_id: c_MjatPE5yXT21SUFF9pZAKE
          source_id: s_4rkBhrvxUU58HJV95R8QUM
          stance: supports
          locator: CBDB:636957
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

# 王奕瞻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王奕瞻 | accepted |
| bio.summary | 王奕瞻，清人物。籍贯膠州，入仕鄉貢舉人，曾任復設教諭。（中国历代人物传记资料库 CBDB 636957） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王奕瞻（CBDB 636957）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636957&o=json)
