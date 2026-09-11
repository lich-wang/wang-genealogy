---
schema: wang-person/v1
id: p_zgCLZQVjSkLuQQqYEkm7ze
status: active
merged_into: null
display_name: 王質
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zXh135RU2LAakF61mh9aYJ
        subject_person_id: p_zgCLZQVjSkLuQQqYEkm7ze
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_URHFL716B8v7EWLLGzDFmx
          claim_id: c_zXh135RU2LAakF61mh9aYJ
          source_id: s_DhDLPqwJDh1gerD4dGYiZH
          stance: supports
          locator: CBDB:214399
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（214399）
          source: &a1
            id: s_DhDLPqwJDh1gerD4dGYiZH
            source_type: api_record
            title: 中国历代人物传记资料库：王質（CBDB 214399）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214399&o=json
            external_identifier: CBDB:214399
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.158Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZKwDk3MACD1RB1L18VDLCX
        subject_person_id: p_zgCLZQVjSkLuQQqYEkm7ze
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王質，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214399）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XRygFeqBerN0pFURaW8GCn
          claim_id: c_ZKwDk3MACD1RB1L18VDLCX
          source_id: s_DhDLPqwJDh1gerD4dGYiZH
          stance: supports
          locator: CBDB:214399
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
  descendants:
    - claim:
        id: c_DGgoB1ksBAeniSP6mlIvgy
        subject_person_id: p_zgCLZQVjSkLuQQqYEkm7ze
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D1pWDsHWNd5wRUwygKh8wV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__EwSA8MylU7YeWVHC5b9uN
          claim_id: c_DGgoB1ksBAeniSP6mlIvgy
          source_id: s_DhDLPqwJDh1gerD4dGYiZH
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第一百二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D1pWDsHWNd5wRUwygKh8wV
        status: active
        display_name: 王三餘
        merged_into_person_id: null
  other: []
---

# 王質

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王質 | accepted |
| bio.summary | 王質，明人物。萬曆二年進士。（中国历代人物传记资料库 CBDB 214399） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_D1pWDsHWNd5wRUwygKh8wV | 王三餘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王質（CBDB 214399）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=214399&o=json)
