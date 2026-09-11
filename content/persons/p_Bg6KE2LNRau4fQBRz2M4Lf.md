---
schema: wang-person/v1
id: p_Bg6KE2LNRau4fQBRz2M4Lf
status: active
merged_into: null
display_name: 王滌心
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Lbc4bRAZ6NG5E19JNmDgBg
        subject_person_id: p_Bg6KE2LNRau4fQBRz2M4Lf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滌心
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2hN1bLGPJnDhWdZAmJ26AY
          claim_id: c_Lbc4bRAZ6NG5E19JNmDgBg
          source_id: s_xn3AHAKeckDJH8H7X5htEM
          stance: supports
          locator: CBDB:639193
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（639193）
          source: &a1
            id: s_xn3AHAKeckDJH8H7X5htEM
            source_type: api_record
            title: 中国历代人物传记资料库：王滌心（CBDB 639193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639193&o=json
            external_identifier: CBDB:639193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.869Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LabePJv7BwUxxmBL4TDs1z
        subject_person_id: p_Bg6KE2LNRau4fQBRz2M4Lf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王滌心，清人物。籍贯內鄉，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 639193）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_yLs1EGbgqpRB5h-SXyEigS
          claim_id: c_LabePJv7BwUxxmBL4TDs1z
          source_id: s_xn3AHAKeckDJH8H7X5htEM
          stance: supports
          locator: CBDB:639193
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

# 王滌心

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王滌心 | accepted |
| bio.summary | 王滌心，清人物。籍贯內鄉，入仕鄉貢舉人，曾任知州。（中国历代人物传记资料库 CBDB 639193） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王滌心（CBDB 639193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=639193&o=json)
