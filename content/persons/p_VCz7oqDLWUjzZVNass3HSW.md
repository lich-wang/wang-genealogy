---
schema: wang-person/v1
id: p_VCz7oqDLWUjzZVNass3HSW
status: active
merged_into: null
display_name: 王長福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UrzyzRLxDfArwBEd4o6nLQ
        subject_person_id: p_VCz7oqDLWUjzZVNass3HSW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CrCfnmLeuNNb8GmNSj91g4
          claim_id: c_UrzyzRLxDfArwBEd4o6nLQ
          source_id: s_xeHfKPzqzgvCieWHUgZjq5
          stance: supports
          locator: CBDB:640739
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640739）
          source: &a1
            id: s_xeHfKPzqzgvCieWHUgZjq5
            source_type: api_record
            title: 中国历代人物传记资料库：王長福（CBDB 640739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640739&o=json
            external_identifier: CBDB:640739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YpPXtaC6i4HtNhjS1LcefP
        subject_person_id: p_VCz7oqDLWUjzZVNass3HSW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王長福，清人物。籍贯福州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640739）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Oe8YfSRFhPB1cW7SkiAkO1
          claim_id: c_YpPXtaC6i4HtNhjS1LcefP
          source_id: s_xeHfKPzqzgvCieWHUgZjq5
          stance: supports
          locator: CBDB:640739
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

# 王長福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王長福 | accepted |
| bio.summary | 王長福，清人物。籍贯福州府，入仕鄉貢舉人，曾任教諭。（中国历代人物传记资料库 CBDB 640739） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王長福（CBDB 640739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640739&o=json)
