---
schema: wang-person/v1
id: p_VBCQA63EAEUoyk8HM5GPTp
status: active
merged_into: null
display_name: 王化寬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_aqKCUpafM7DQpGvCS43rP4
        subject_person_id: p_VBCQA63EAEUoyk8HM5GPTp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ud51fPZKZDzsbJDT7Du83u
          claim_id: c_aqKCUpafM7DQpGvCS43rP4
          source_id: s_Zt1REuxCL8MsMyMN6QWEqf
          stance: supports
          locator: CBDB:636395
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636395）
          source: &a1
            id: s_Zt1REuxCL8MsMyMN6QWEqf
            source_type: api_record
            title: 中国历代人物传记资料库：王化寬（CBDB 636395）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636395&o=json
            external_identifier: CBDB:636395
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.978Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EqPP4su92sG73VeFdFZ1LS
        subject_person_id: p_VBCQA63EAEUoyk8HM5GPTp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化寬，清人物。籍贯保定，曾任訓導。（中国历代人物传记资料库 CBDB 636395）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gn0Arr8lJcN4WlIZHG-s7A
          claim_id: c_EqPP4su92sG73VeFdFZ1LS
          source_id: s_Zt1REuxCL8MsMyMN6QWEqf
          stance: supports
          locator: CBDB:636395
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

# 王化寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化寬 | accepted |
| bio.summary | 王化寬，清人物。籍贯保定，曾任訓導。（中国历代人物传记资料库 CBDB 636395） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化寬（CBDB 636395）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636395&o=json)
