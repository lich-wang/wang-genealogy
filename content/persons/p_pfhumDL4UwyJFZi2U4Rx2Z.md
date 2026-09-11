---
schema: wang-person/v1
id: p_pfhumDL4UwyJFZi2U4Rx2Z
status: active
merged_into: null
display_name: 王所照
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_59ypnAPMqK9SdGvk7PYXzQ
        subject_person_id: p_pfhumDL4UwyJFZi2U4Rx2Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所照
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A6T4ZZr6Fm7XuMNsLesBnk
          claim_id: c_59ypnAPMqK9SdGvk7PYXzQ
          source_id: s_DG2cc6q7nyrtaxBJmTesNm
          stance: supports
          locator: CBDB:638059
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638059）
          source: &a1
            id: s_DG2cc6q7nyrtaxBJmTesNm
            source_type: api_record
            title: 中国历代人物传记资料库：王所照（CBDB 638059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638059&o=json
            external_identifier: CBDB:638059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.504Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dh8K68kv2TKx9FqqJiwyFe
        subject_person_id: p_pfhumDL4UwyJFZi2U4Rx2Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所照，清人物。籍贯三原，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9l0HJZAoqSNr5wUZ27i60L
          claim_id: c_dh8K68kv2TKx9FqqJiwyFe
          source_id: s_DG2cc6q7nyrtaxBJmTesNm
          stance: supports
          locator: CBDB:638059
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

# 王所照

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王所照 | accepted |
| bio.summary | 王所照，清人物。籍贯三原，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638059） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王所照（CBDB 638059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638059&o=json)
