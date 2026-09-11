---
schema: wang-person/v1
id: p_51CSTCwB7UhA13cMQEZti5
status: active
merged_into: null
display_name: 王明試
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZfqF5PAmeNNdwPkxQZKtR2
        subject_person_id: p_51CSTCwB7UhA13cMQEZti5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明試
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_5viuvqArWKbpji5Evc9oeN
          claim_id: c_ZfqF5PAmeNNdwPkxQZKtR2
          source_id: s_876RjRBoc4xneUQU34LVMS
          stance: supports
          locator: CBDB:71762
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71762）
          source: &a1
            id: s_876RjRBoc4xneUQU34LVMS
            source_type: api_record
            title: 中国历代人物传记资料库：王明試（CBDB 71762）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71762&o=json
            external_identifier: CBDB:71762
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.859Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vHYkzuKRnPRBNqs5mc7kbQ
        subject_person_id: p_51CSTCwB7UhA13cMQEZti5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1621年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fPjqML4JBntmi4QSDDShNY
          claim_id: c_vHYkzuKRnPRBNqs5mc7kbQ
          source_id: s_876RjRBoc4xneUQU34LVMS
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_wVPBBicD6TsVrAX3ZdV3Cp
        subject_person_id: p_51CSTCwB7UhA13cMQEZti5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明試（生于1621年），清人物。籍贯金壇。（中国历代人物传记资料库 CBDB 71762）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ORFVTRNYaQcTJP1RyEaut-
          claim_id: c_wVPBBicD6TsVrAX3ZdV3Cp
          source_id: s_876RjRBoc4xneUQU34LVMS
          stance: supports
          locator: CBDB:71762
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

# 王明試

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明試 | accepted |
| birth.date | 1621年 | accepted |
| bio.summary | 王明試（生于1621年），清人物。籍贯金壇。（中国历代人物传记资料库 CBDB 71762） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明試（CBDB 71762）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71762&o=json)
