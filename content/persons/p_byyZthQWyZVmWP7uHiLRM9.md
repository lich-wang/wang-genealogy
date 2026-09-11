---
schema: wang-person/v1
id: p_byyZthQWyZVmWP7uHiLRM9
status: active
merged_into: null
display_name: 王陛
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tPWNe553LH6cY2ZqsPnKDW
        subject_person_id: p_byyZthQWyZVmWP7uHiLRM9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Q9Jso7CaLZNnY5CifcrxAy
          claim_id: c_tPWNe553LH6cY2ZqsPnKDW
          source_id: s_49Aq2kb7aWZgmk4eRHEcjU
          stance: supports
          locator: CBDB:227300
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（227300）
          source: &a1
            id: s_49Aq2kb7aWZgmk4eRHEcjU
            source_type: api_record
            title: 中国历代人物传记资料库：王陛（CBDB 227300）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json
            external_identifier: CBDB:227300
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.495Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HLLdS5ym281sNVKorBMxPw
        subject_person_id: p_byyZthQWyZVmWP7uHiLRM9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王陛，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227300）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uUrNz7gM8SdW6_41VgBELy
          claim_id: c_HLLdS5ym281sNVKorBMxPw
          source_id: s_49Aq2kb7aWZgmk4eRHEcjU
          stance: supports
          locator: CBDB:227300
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

# 王陛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王陛 | accepted |
| bio.summary | 王陛，明人物。萬曆丙戌科進士進士，籍贯臨清。（中国历代人物传记资料库 CBDB 227300） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王陛（CBDB 227300）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=227300&o=json)
