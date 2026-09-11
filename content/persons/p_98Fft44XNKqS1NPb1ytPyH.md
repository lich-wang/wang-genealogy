---
schema: wang-person/v1
id: p_98Fft44XNKqS1NPb1ytPyH
status: active
merged_into: null
display_name: 王晉慶
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KG6EbmKfuHACgGQsfHWYQx
        subject_person_id: p_98Fft44XNKqS1NPb1ytPyH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉慶
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C4FeTtnwwABabn3NNf74Xy
          claim_id: c_KG6EbmKfuHACgGQsfHWYQx
          source_id: s_w7kSCA9x5gdYR3mho4BZDK
          stance: supports
          locator: CBDB:638454
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638454）
          source: &a1
            id: s_w7kSCA9x5gdYR3mho4BZDK
            source_type: api_record
            title: 中国历代人物传记资料库：王晉慶（CBDB 638454）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638454&o=json
            external_identifier: CBDB:638454
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LxqmED3MSrzCi9ZL18TwQm
        subject_person_id: p_98Fft44XNKqS1NPb1ytPyH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晉慶，清人物。籍贯聊城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638454）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SrWSwNOIWXq4PF1q1AsCeL
          claim_id: c_LxqmED3MSrzCi9ZL18TwQm
          source_id: s_w7kSCA9x5gdYR3mho4BZDK
          stance: supports
          locator: CBDB:638454
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

# 王晉慶

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晉慶 | accepted |
| bio.summary | 王晉慶，清人物。籍贯聊城，入仕鄉貢舉人，曾任知縣。（中国历代人物传记资料库 CBDB 638454） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王晉慶（CBDB 638454）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638454&o=json)
