---
schema: wang-person/v1
id: p_p7d5EvVgep828F8PH2FbtN
status: active
merged_into: null
display_name: 王長蔭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yr28aaXm6T4jZzuVuwzH3P
        subject_person_id: p_p7d5EvVgep828F8PH2FbtN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長蔭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_3AfDEM1UPruoxfSSibfFca
          claim_id: c_yr28aaXm6T4jZzuVuwzH3P
          source_id: s_xqYHvU1MyQRZXv4jF6294K
          stance: supports
          locator: CBDB:640741
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640741）
          source: &a1
            id: s_xqYHvU1MyQRZXv4jF6294K
            source_type: api_record
            title: 中国历代人物传记资料库：王長蔭（CBDB 640741）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640741&o=json
            external_identifier: CBDB:640741
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L59FRzGgXhEfMPrJ8daJvd
        subject_person_id: p_p7d5EvVgep828F8PH2FbtN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長蔭，清人物。籍贯武昌，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640741）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P5_vtbYdVz2u8Era73ZEPF
          claim_id: c_L59FRzGgXhEfMPrJ8daJvd
          source_id: s_xqYHvU1MyQRZXv4jF6294K
          stance: supports
          locator: CBDB:640741
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

# 王長蔭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長蔭 | accepted |
| bio.summary | 王長蔭，清人物。籍贯武昌，入仕廩貢生，曾任復設訓導。（中国历代人物传记资料库 CBDB 640741） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長蔭（CBDB 640741）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640741&o=json)
