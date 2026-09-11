---
schema: wang-person/v1
id: p_k9Gu9v7ftd38iRdFoGuPzp
status: active
merged_into: null
display_name: 王希孟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H282nTTHrLjCa6dCZUeMNW
        subject_person_id: p_k9Gu9v7ftd38iRdFoGuPzp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7kyG8Ed6EFLYMW3Vkt68tZ
          claim_id: c_H282nTTHrLjCa6dCZUeMNW
          source_id: s_wysM5mXYUVo2Jv6J5Yyjr8
          stance: supports
          locator: CBDB:637387
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637387）
          source: &a1
            id: s_wysM5mXYUVo2Jv6J5Yyjr8
            source_type: api_record
            title: 中国历代人物传记资料库：王希孟（CBDB 637387）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637387&o=json
            external_identifier: CBDB:637387
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.397Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kRvERo7ER93HN2NeeRnn3m
        subject_person_id: p_k9Gu9v7ftd38iRdFoGuPzp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希孟，清人物。籍贯濮州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637387）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dgAESvxkLTLSCwAwA66kBt
          claim_id: c_kRvERo7ER93HN2NeeRnn3m
          source_id: s_wysM5mXYUVo2Jv6J5Yyjr8
          stance: supports
          locator: CBDB:637387
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

# 王希孟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希孟 | accepted |
| bio.summary | 王希孟，清人物。籍贯濮州，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 637387） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王希孟（CBDB 637387）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637387&o=json)
