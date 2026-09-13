---
schema: wang-person/v1
id: p_JC7xE3RoD3x2pAoc8aYDdU
status: active
merged_into: null
display_name: 王宗汜
cbdb_id: 305714
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_G4UcwL6cEsyiTSXKtHy8U8
        subject_person_id: p_JC7xE3RoD3x2pAoc8aYDdU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗汜，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_tLjpLOwzbQ8izztxBURz9p
          claim_id: c_G4UcwL6cEsyiTSXKtHy8U8
          source_id: s_2E5LASmAE39XtJ6Vhc7iLL
          stance: supports
          locator: CBDB:305714
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_2E5LASmAE39XtJ6Vhc7iLL
            source_type: api_record
            title: 中国历代人物传记资料库：王宗汜（CBDB 305714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305714&o=json
            external_identifier: CBDB:305714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:05.361Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2E9eZXRBZeV58YFB341ran
        subject_person_id: p_JC7xE3RoD3x2pAoc8aYDdU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗汜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FRvAyXVStUY39PrUXz5Yeg
          claim_id: c_2E9eZXRBZeV58YFB341ran
          source_id: s_2E5LASmAE39XtJ6Vhc7iLL
          stance: supports
          locator: CBDB:305714
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3601-3700）｜历史性依据：CBDB 朝代 = 明
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

# 王宗汜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗汜，明人物。嘉靖二十三年進士，籍贯臨海。（中国历代人物传记资料库 CBDB 305714） | accepted |
| name.primary | 王宗汜 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宗汜（CBDB 305714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=305714&o=json)
