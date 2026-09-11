---
schema: wang-person/v1
id: p_5CkP8h7oDa8g5oBR3xR6WC
status: active
merged_into: null
display_name: 王子順
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8S7yxBikaFAqQpCSL3Qhfh
        subject_person_id: p_5CkP8h7oDa8g5oBR3xR6WC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子順
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_J2B323tbTFskit3MWKCtBG
          claim_id: c_8S7yxBikaFAqQpCSL3Qhfh
          source_id: s_cUTF7uw3teiPFg4rNuVXBp
          stance: supports
          locator: CBDB:636997
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636997）
          source: &a1
            id: s_cUTF7uw3teiPFg4rNuVXBp
            source_type: api_record
            title: 中国历代人物传记资料库：王子順（CBDB 636997）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636997&o=json
            external_identifier: CBDB:636997
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.178Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_zUDeePtQriC1AMDPNdKom6
        subject_person_id: p_5CkP8h7oDa8g5oBR3xR6WC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王子順，清人物。籍贯文水，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 636997）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_j2Y__np7efIdSkjn7wg2iO
          claim_id: c_zUDeePtQriC1AMDPNdKom6
          source_id: s_cUTF7uw3teiPFg4rNuVXBp
          stance: supports
          locator: CBDB:636997
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

# 王子順

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王子順 | accepted |
| bio.summary | 王子順，清人物。籍贯文水，曾任藍翎侍衛。（中国历代人物传记资料库 CBDB 636997） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王子順（CBDB 636997）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636997&o=json)
