---
schema: wang-person/v1
id: p_Yi61y1nnkRYNaUyyGyUe3a
status: active
merged_into: null
display_name: 王家湘
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_FEogb5hSU7Kut2TWy1mZw3
        subject_person_id: p_Yi61y1nnkRYNaUyyGyUe3a
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家湘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bQL7VuABXqhYPNPDXGPRaA
          claim_id: c_FEogb5hSU7Kut2TWy1mZw3
          source_id: s_5ErDJpcC4im9fAjj2dDP5W
          stance: supports
          locator: CBDB:637197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637197）
          source: &a1
            id: s_5ErDJpcC4im9fAjj2dDP5W
            source_type: api_record
            title: 中国历代人物传记资料库：王家湘（CBDB 637197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637197&o=json
            external_identifier: CBDB:637197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.231Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLBKKA3gNe8zHPwCMqVbR9
        subject_person_id: p_Yi61y1nnkRYNaUyyGyUe3a
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家湘，清人物。籍贯鄜州直隸州直轄地方，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 637197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bshHF0FCNMqxoA5r-jJapP
          claim_id: c_HLBKKA3gNe8zHPwCMqVbR9
          source_id: s_5ErDJpcC4im9fAjj2dDP5W
          stance: supports
          locator: CBDB:637197
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

# 王家湘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家湘 | accepted |
| bio.summary | 王家湘，清人物。籍贯鄜州直隸州直轄地方，入仕廩貢生，曾任復設教諭。（中国历代人物传记资料库 CBDB 637197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家湘（CBDB 637197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637197&o=json)
