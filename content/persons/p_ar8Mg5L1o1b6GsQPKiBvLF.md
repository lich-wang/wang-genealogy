---
schema: wang-person/v1
id: p_ar8Mg5L1o1b6GsQPKiBvLF
status: active
merged_into: null
display_name: 王璧
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SE3PomYWuoayPW3o8XPeiT
        subject_person_id: p_ar8Mg5L1o1b6GsQPKiBvLF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DAfPzwQ7MDixTRkP1TPg5m
          claim_id: c_SE3PomYWuoayPW3o8XPeiT
          source_id: s_JTAcQvxyJdoVAMxXCzrk3q
          stance: supports
          locator: CBDB:639452
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639452）
          source: &a1
            id: s_JTAcQvxyJdoVAMxXCzrk3q
            source_type: api_record
            title: 中国历代人物传记资料库：王璧（CBDB 639452）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639452&o=json
            external_identifier: CBDB:639452
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Jb812Hz38LmRkfLSB5R6LH
        subject_person_id: p_ar8Mg5L1o1b6GsQPKiBvLF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璧，清人物。籍贯臨清直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639452）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OI_aTiyFpOvvNg_LW2jYPm
          claim_id: c_Jb812Hz38LmRkfLSB5R6LH
          source_id: s_JTAcQvxyJdoVAMxXCzrk3q
          stance: supports
          locator: CBDB:639452
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

# 王璧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璧 | accepted |
| bio.summary | 王璧，清人物。籍贯臨清直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 639452） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王璧（CBDB 639452）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639452&o=json)
