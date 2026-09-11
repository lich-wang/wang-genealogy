---
schema: wang-person/v1
id: p_dr712uR5Nrq938yX3m9q4c
status: active
merged_into: null
display_name: 王承寵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5z3PjkvZHD339UDV3QfX1z
        subject_person_id: p_dr712uR5Nrq938yX3m9q4c
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承寵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_P5WPtsSdiAHkJSxjYcG2WV
          claim_id: c_5z3PjkvZHD339UDV3QfX1z
          source_id: s_qHTHUFgGuKjHrEoSB3PrMQ
          stance: supports
          locator: CBDB:702868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（702868）
          source: &a1
            id: s_qHTHUFgGuKjHrEoSB3PrMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王承寵（CBDB 702868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702868&o=json
            external_identifier: CBDB:702868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jxHZHfM4X5zPJRQv7HM527
        subject_person_id: p_dr712uR5Nrq938yX3m9q4c
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承寵，明人物。籍贯元和，入仕考上會試/貢士，曾任知縣。（中国历代人物传记资料库 CBDB 702868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e26OxjSpswYpVyx3rdQbhQ
          claim_id: c_jxHZHfM4X5zPJRQv7HM527
          source_id: s_qHTHUFgGuKjHrEoSB3PrMQ
          stance: supports
          locator: CBDB:702868
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9rkeJ0X4t4AUdTDUdCAd19
        subject_person_id: p_dr712uR5Nrq938yX3m9q4c
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uE9vhWkxQBJksgZpNxnTgv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NbLl1HVnYczvAfe5BVjUmC
          claim_id: c_9rkeJ0X4t4AUdTDUdCAd19
          source_id: s_qHTHUFgGuKjHrEoSB3PrMQ
          stance: supports
          locator: "元和唯亭志: 二十卷，lgid=179031：子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uE9vhWkxQBJksgZpNxnTgv
        status: active
        display_name: 王康中
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王承寵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承寵 | accepted |
| bio.summary | 王承寵，明人物。籍贯元和，入仕考上會試/貢士，曾任知縣。（中国历代人物传记资料库 CBDB 702868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_uE9vhWkxQBJksgZpNxnTgv | 王康中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王承寵（CBDB 702868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=702868&o=json)
