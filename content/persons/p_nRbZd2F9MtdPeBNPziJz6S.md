---
schema: wang-person/v1
id: p_nRbZd2F9MtdPeBNPziJz6S
status: active
merged_into: null
display_name: 王瓚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YdC7HVshMEyi8bQUVQAYMs
        subject_person_id: p_nRbZd2F9MtdPeBNPziJz6S
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hyQi33hwoTSHQeRbYC2MWK
          claim_id: c_YdC7HVshMEyi8bQUVQAYMs
          source_id: s_XN4ULE5TRAxMPcwo6CBgya
          stance: supports
          locator: CBDB:472255
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（472255）
          source: &a1
            id: s_XN4ULE5TRAxMPcwo6CBgya
            source_type: api_record
            title: 中国历代人物传记资料库：王瓚（CBDB 472255）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472255&o=json
            external_identifier: CBDB:472255
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_n7M1jVCgowEu8TJsE4Zzqi
        subject_person_id: p_nRbZd2F9MtdPeBNPziJz6S
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瓚，清人物。入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 472255）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yv9FNgpUK-eq_tRRf1jfRa
          claim_id: c_n7M1jVCgowEu8TJsE4Zzqi
          source_id: s_XN4ULE5TRAxMPcwo6CBgya
          stance: supports
          locator: CBDB:472255
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

# 王瓚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瓚 | accepted |
| bio.summary | 王瓚，清人物。入仕監生，曾任知州。（中国历代人物传记资料库 CBDB 472255） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瓚（CBDB 472255）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=472255&o=json)
