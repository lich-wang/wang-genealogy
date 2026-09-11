---
schema: wang-person/v1
id: p_KhRHb7wnAp4magiYxgDkU1
status: active
merged_into: null
display_name: 王亨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rUeEzxKk7AfKPRYDttW8x7
        subject_person_id: p_KhRHb7wnAp4magiYxgDkU1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6W4YyLYeyb6BiYdk9ADj5Q
          claim_id: c_rUeEzxKk7AfKPRYDttW8x7
          source_id: s_5koF7EsKEjsswbyaAe1xwD
          stance: supports
          locator: CBDB:635854
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（635854）
          source: &a1
            id: s_5koF7EsKEjsswbyaAe1xwD
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 635854）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635854&o=json
            external_identifier: CBDB:635854
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.040Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDAqmH5mAJLfQCG6tZKNfk
        subject_person_id: p_KhRHb7wnAp4magiYxgDkU1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨，清人物。籍贯錦州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635854）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0hlDb6_6pPMJggmFN64Erh
          claim_id: c_GDAqmH5mAJLfQCG6tZKNfk
          source_id: s_5koF7EsKEjsswbyaAe1xwD
          stance: supports
          locator: CBDB:635854
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

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | 王亨，清人物。籍贯錦州府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 635854） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 635854）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=635854&o=json)
