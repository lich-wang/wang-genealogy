---
schema: wang-person/v1
id: p_5WDpvUFjHZEm9dD1RDTRwH
status: active
merged_into: null
display_name: 王杰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_k78gHz1hPYeWWSDxgCe1zz
        subject_person_id: p_5WDpvUFjHZEm9dD1RDTRwH
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9onzxf876dU5ew8n8rjsVG
          claim_id: c_k78gHz1hPYeWWSDxgCe1zz
          source_id: s_7KEkZQYZvZ5ppP1ATy2oTC
          stance: supports
          locator: CBDB:476874
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（476874）
          source: &a1
            id: s_7KEkZQYZvZ5ppP1ATy2oTC
            source_type: api_record
            title: 中国历代人物传记资料库：王杰（CBDB 476874）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476874&o=json
            external_identifier: CBDB:476874
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.487Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sqt2ZTxCeG8C9r5KttPcXW
        subject_person_id: p_5WDpvUFjHZEm9dD1RDTRwH
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杰，明人物。曾任守備。（中国历代人物传记资料库 CBDB 476874）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_UxoH-dBZtUn9qnLFbV06FA
          claim_id: c_sqt2ZTxCeG8C9r5KttPcXW
          source_id: s_7KEkZQYZvZ5ppP1ATy2oTC
          stance: supports
          locator: CBDB:476874
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

# 王杰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杰 | accepted |
| bio.summary | 王杰，明人物。曾任守備。（中国历代人物传记资料库 CBDB 476874） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王杰（CBDB 476874）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=476874&o=json)
