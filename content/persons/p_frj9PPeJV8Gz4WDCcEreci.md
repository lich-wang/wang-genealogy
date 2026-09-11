---
schema: wang-person/v1
id: p_frj9PPeJV8Gz4WDCcEreci
status: active
merged_into: null
display_name: 王節
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pzFA7tp8e2qwogNvSomEC1
        subject_person_id: p_frj9PPeJV8Gz4WDCcEreci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GVcmkyPpZbnMJGP9FwNyD7
          claim_id: c_pzFA7tp8e2qwogNvSomEC1
          source_id: s_J5x3WwH4c59zGAmq5DdaPk
          stance: supports
          locator: CBDB:687413
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（687413）
          source: &a1
            id: s_J5x3WwH4c59zGAmq5DdaPk
            source_type: api_record
            title: 中国历代人物传记资料库：王節（CBDB 687413）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687413&o=json
            external_identifier: CBDB:687413
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.438Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Q5hMPoN8t8YsY5vCMy1jK
        subject_person_id: p_frj9PPeJV8Gz4WDCcEreci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王節，宋人物。籍贯長樂，入仕進士。（中国历代人物传记资料库 CBDB 687413）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Sy3otjRbM9AHlzonpih7QE
          claim_id: c_1Q5hMPoN8t8YsY5vCMy1jK
          source_id: s_J5x3WwH4c59zGAmq5DdaPk
          stance: supports
          locator: CBDB:687413
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

# 王節

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王節 | accepted |
| bio.summary | 王節，宋人物。籍贯長樂，入仕進士。（中国历代人物传记资料库 CBDB 687413） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王節（CBDB 687413）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=687413&o=json)
