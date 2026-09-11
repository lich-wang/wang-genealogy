---
schema: wang-person/v1
id: p_kuqFXSG9ESz7eC3h45RJGA
status: active
merged_into: null
display_name: 王宗興
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Pho6jEHLDVDvKF4VFFUGhQ
        subject_person_id: p_kuqFXSG9ESz7eC3h45RJGA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗興
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g8De3q7LFd52SUGDJBd9Tx
          claim_id: c_Pho6jEHLDVDvKF4VFFUGhQ
          source_id: s_rUfWoYkuwSdA5oejQS2PNH
          stance: supports
          locator: CBDB:637120
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637120）
          source: &a1
            id: s_rUfWoYkuwSdA5oejQS2PNH
            source_type: api_record
            title: 中国历代人物传记资料库：王宗興（CBDB 637120）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637120&o=json
            external_identifier: CBDB:637120
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.348Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_25VBWdgQ2cZc1AsC8Kc7Cp
        subject_person_id: p_kuqFXSG9ESz7eC3h45RJGA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗興，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637120）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8ZQxxrjjFnqazX4D0_gvUd
          claim_id: c_25VBWdgQ2cZc1AsC8Kc7Cp
          source_id: s_rUfWoYkuwSdA5oejQS2PNH
          stance: supports
          locator: CBDB:637120
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

# 王宗興

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗興 | accepted |
| bio.summary | 王宗興，清人物。籍贯光州直隸州直轄地方，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 637120） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗興（CBDB 637120）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637120&o=json)
