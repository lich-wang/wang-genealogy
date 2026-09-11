---
schema: wang-person/v1
id: p_S9eBFbCatknD22EEQ7H7nZ
status: active
merged_into: null
display_name: 王新祚
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_azQSBK6hoVHw9Z3tU19Hzy
        subject_person_id: p_S9eBFbCatknD22EEQ7H7nZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新祚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ybL9o573CKneoKtjqJecP7
          claim_id: c_azQSBK6hoVHw9Z3tU19Hzy
          source_id: s_bA4LbYZm2CrmF1f372BiF9
          stance: supports
          locator: CBDB:576148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（576148）
          source: &a1
            id: s_bA4LbYZm2CrmF1f372BiF9
            source_type: api_record
            title: 中国历代人物传记资料库：王新祚（CBDB 576148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576148&o=json
            external_identifier: CBDB:576148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.711Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sditf1Yjn4jiwmLTGJQKDs
        subject_person_id: p_S9eBFbCatknD22EEQ7H7nZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王新祚，清人物。籍贯陽曲，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576148）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_irhJFuXaRGm9VUWl289MNq
          claim_id: c_Sditf1Yjn4jiwmLTGJQKDs
          source_id: s_bA4LbYZm2CrmF1f372BiF9
          stance: supports
          locator: CBDB:576148
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

# 王新祚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王新祚 | accepted |
| bio.summary | 王新祚，清人物。籍贯陽曲，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 576148） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王新祚（CBDB 576148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=576148&o=json)
