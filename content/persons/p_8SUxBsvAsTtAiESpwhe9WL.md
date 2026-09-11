---
schema: wang-person/v1
id: p_8SUxBsvAsTtAiESpwhe9WL
status: active
merged_into: null
display_name: 王永志
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_X3zSsHT3tzXmPREFoqYomL
        subject_person_id: p_8SUxBsvAsTtAiESpwhe9WL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uQR6dsHtAHyaaHQ5SxgqEk
          claim_id: c_X3zSsHT3tzXmPREFoqYomL
          source_id: s_Dq6AgdnuPr288eL7iaB9zk
          stance: supports
          locator: CBDB:638980
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638980）
          source: &a1
            id: s_Dq6AgdnuPr288eL7iaB9zk
            source_type: api_record
            title: 中国历代人物传记资料库：王永志（CBDB 638980）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638980&o=json
            external_identifier: CBDB:638980
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.804Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QGTZgZLmeEf1VYKmSe9ivy
        subject_person_id: p_8SUxBsvAsTtAiESpwhe9WL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永志，清人物。籍贯大興，曾任贊禮郎。（中国历代人物传记资料库 CBDB 638980）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UmgvUl-u6Wr7w8LMPdWYck
          claim_id: c_QGTZgZLmeEf1VYKmSe9ivy
          source_id: s_Dq6AgdnuPr288eL7iaB9zk
          stance: supports
          locator: CBDB:638980
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

# 王永志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王永志 | accepted |
| bio.summary | 王永志，清人物。籍贯大興，曾任贊禮郎。（中国历代人物传记资料库 CBDB 638980） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王永志（CBDB 638980）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638980&o=json)
