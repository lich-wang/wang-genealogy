---
schema: wang-person/v1
id: p_79njPn8L6Bk1iDV4NLAs9F
status: active
merged_into: null
display_name: 王兆清
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RiYoavpwDMixXGT3MzHJRJ
        subject_person_id: p_79njPn8L6Bk1iDV4NLAs9F
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆清
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sxK9DE81CDtJknySSfERis
          claim_id: c_RiYoavpwDMixXGT3MzHJRJ
          source_id: s_JSU3mF7oxUJecUnQaxCybB
          stance: supports
          locator: CBDB:636209
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636209）
          source: &a1
            id: s_JSU3mF7oxUJecUnQaxCybB
            source_type: api_record
            title: 中国历代人物传记资料库：王兆清（CBDB 636209）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636209&o=json
            external_identifier: CBDB:636209
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.123Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_596U5jTg8FwK2R8tRLMSCw
        subject_person_id: p_79njPn8L6Bk1iDV4NLAs9F
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王兆清，清人物。籍贯博羅，曾任二等侍衛、三等侍衛、遊擊。（中国历代人物传记资料库 CBDB 636209）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6mYzISYUC2SsiUgtifxCQ1
          claim_id: c_596U5jTg8FwK2R8tRLMSCw
          source_id: s_JSU3mF7oxUJecUnQaxCybB
          stance: supports
          locator: CBDB:636209
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

# 王兆清

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王兆清 | accepted |
| bio.summary | 王兆清，清人物。籍贯博羅，曾任二等侍衛、三等侍衛、遊擊。（中国历代人物传记资料库 CBDB 636209） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王兆清（CBDB 636209）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636209&o=json)
