---
schema: wang-person/v1
id: p_D61QaWELdXQc8HhQkNVKtJ
status: active
merged_into: null
display_name: 王廷蘭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wbh45mmFxeFLF12zuM8Azk
        subject_person_id: p_D61QaWELdXQc8HhQkNVKtJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷蘭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AbG5vNDHD87ncjLBTuP365
          claim_id: c_wbh45mmFxeFLF12zuM8Azk
          source_id: s_ai8CeAs1WQLDppev4z5y6e
          stance: supports
          locator: CBDB:637557
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637557）
          source: &a1
            id: s_ai8CeAs1WQLDppev4z5y6e
            source_type: api_record
            title: 中国历代人物传记资料库：王廷蘭（CBDB 637557）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637557&o=json
            external_identifier: CBDB:637557
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9MvGqAZgSvy3HxEasS2mP8
        subject_person_id: p_D61QaWELdXQc8HhQkNVKtJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷蘭，清人物。籍贯青浦，曾任知縣。（中国历代人物传记资料库 CBDB 637557）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oObM2YYtT1tjJVpJ2CspOT
          claim_id: c_9MvGqAZgSvy3HxEasS2mP8
          source_id: s_ai8CeAs1WQLDppev4z5y6e
          stance: supports
          locator: CBDB:637557
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

# 王廷蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷蘭 | accepted |
| bio.summary | 王廷蘭，清人物。籍贯青浦，曾任知縣。（中国历代人物传记资料库 CBDB 637557） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷蘭（CBDB 637557）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637557&o=json)
