---
schema: wang-person/v1
id: p_uc19rg3eMcoKTTbJN8yBUz
status: active
merged_into: null
display_name: 王秉均
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ws12Sf7pTtDDj6jT93DA2t
        subject_person_id: p_uc19rg3eMcoKTTbJN8yBUz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉均
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KzJaYWYMSDjx6j1SV8mNLp
          claim_id: c_ws12Sf7pTtDDj6jT93DA2t
          source_id: s_ZX15yv8qFELjkcPvGysbtx
          stance: supports
          locator: CBDB:639642
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639642）
          source: &a1
            id: s_ZX15yv8qFELjkcPvGysbtx
            source_type: api_record
            title: 中国历代人物传记资料库：王秉均（CBDB 639642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639642&o=json
            external_identifier: CBDB:639642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.002Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_V5cQD9KwKKMAoyNGEqWBCM
        subject_person_id: p_uc19rg3eMcoKTTbJN8yBUz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秉均，清人物。籍贯長葛，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 639642）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vVFto4usdAiPZgbL_XMpM_
          claim_id: c_V5cQD9KwKKMAoyNGEqWBCM
          source_id: s_ZX15yv8qFELjkcPvGysbtx
          stance: supports
          locator: CBDB:639642
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

# 王秉均

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秉均 | accepted |
| bio.summary | 王秉均，清人物。籍贯長葛，入仕鄉貢舉人，曾任主事。（中国历代人物传记资料库 CBDB 639642） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王秉均（CBDB 639642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639642&o=json)
