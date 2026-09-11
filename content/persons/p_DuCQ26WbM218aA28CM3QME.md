---
schema: wang-person/v1
id: p_DuCQ26WbM218aA28CM3QME
status: active
merged_into: null
display_name: 王寶儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cEK1DDFwWeHgyHG6TBxQ4Y
        subject_person_id: p_DuCQ26WbM218aA28CM3QME
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5X9kSJrqR9YPQbK6A9kKFp
          claim_id: c_cEK1DDFwWeHgyHG6TBxQ4Y
          source_id: s_Q8zga81GXRVNcfQw29B7cF
          stance: supports
          locator: CBDB:637256
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637256）
          source: &a1
            id: s_Q8zga81GXRVNcfQw29B7cF
            source_type: api_record
            title: 中国历代人物传记资料库：王寶儀（CBDB 637256）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637256&o=json
            external_identifier: CBDB:637256
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bu4ikkMizN2uDbszQGK2nj
        subject_person_id: p_DuCQ26WbM218aA28CM3QME
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寶儀，清人物。籍贯寶坻，入仕鄉貢舉人，曾任內閣中書、知州。（中国历代人物传记资料库 CBDB 637256）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U90d_xQzkYVGdhXWQvwsQE
          claim_id: c_bu4ikkMizN2uDbszQGK2nj
          source_id: s_Q8zga81GXRVNcfQw29B7cF
          stance: supports
          locator: CBDB:637256
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

# 王寶儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寶儀 | accepted |
| bio.summary | 王寶儀，清人物。籍贯寶坻，入仕鄉貢舉人，曾任內閣中書、知州。（中国历代人物传记资料库 CBDB 637256） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王寶儀（CBDB 637256）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637256&o=json)
