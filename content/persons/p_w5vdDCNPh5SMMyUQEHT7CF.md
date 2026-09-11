---
schema: wang-person/v1
id: p_w5vdDCNPh5SMMyUQEHT7CF
status: active
merged_into: null
display_name: 王霖泉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dpzG35ALDLhuXrCcUfHBPe
        subject_person_id: p_w5vdDCNPh5SMMyUQEHT7CF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖泉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M1tZMKeY1n6g1yHSXM7eCT
          claim_id: c_dpzG35ALDLhuXrCcUfHBPe
          source_id: s_e51jQpSQjB6GuJPMNj2tj4
          stance: supports
          locator: CBDB:640835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640835）
          source: &a1
            id: s_e51jQpSQjB6GuJPMNj2tj4
            source_type: api_record
            title: 中国历代人物传记资料库：王霖泉（CBDB 640835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640835&o=json
            external_identifier: CBDB:640835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_57daPPAKvv92oUy4Qefs49
        subject_person_id: p_w5vdDCNPh5SMMyUQEHT7CF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王霖泉，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZF73VvMVepWOx1PmNB40Jw
          claim_id: c_57daPPAKvv92oUy4Qefs49
          source_id: s_e51jQpSQjB6GuJPMNj2tj4
          stance: supports
          locator: CBDB:640835
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

# 王霖泉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王霖泉 | accepted |
| bio.summary | 王霖泉，清人物。籍贯甯都直隸州甯都直隸州前鋪，入仕行伍，曾任把總。（中国历代人物传记资料库 CBDB 640835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王霖泉（CBDB 640835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640835&o=json)
