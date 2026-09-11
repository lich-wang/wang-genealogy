---
schema: wang-person/v1
id: p_5phUFU8EiSTJ3tmGdtM54b
status: active
merged_into: null
display_name: 王光治
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gjxVR83up8Qi8PY619sATn
        subject_person_id: p_5phUFU8EiSTJ3tmGdtM54b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光治
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q2iobkMKTn233sNCc4wctc
          claim_id: c_gjxVR83up8Qi8PY619sATn
          source_id: s_2S6MbWpLKNoyL94awyHHEM
          stance: supports
          locator: CBDB:636257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636257）
          source: &a1
            id: s_2S6MbWpLKNoyL94awyHHEM
            source_type: api_record
            title: 中国历代人物传记资料库：王光治（CBDB 636257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636257&o=json
            external_identifier: CBDB:636257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.934Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_x6FA2pXTVyUc4P1j1j4Riw
        subject_person_id: p_5phUFU8EiSTJ3tmGdtM54b
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光治，清人物。籍贯宛平，曾任知縣。（中国历代人物传记资料库 CBDB 636257）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cwxkPYCb1Ot4J0-09I54Cn
          claim_id: c_x6FA2pXTVyUc4P1j1j4Riw
          source_id: s_2S6MbWpLKNoyL94awyHHEM
          stance: supports
          locator: CBDB:636257
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

# 王光治

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光治 | accepted |
| bio.summary | 王光治，清人物。籍贯宛平，曾任知縣。（中国历代人物传记资料库 CBDB 636257） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光治（CBDB 636257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636257&o=json)
