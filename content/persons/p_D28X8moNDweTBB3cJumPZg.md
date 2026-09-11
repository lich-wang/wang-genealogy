---
schema: wang-person/v1
id: p_D28X8moNDweTBB3cJumPZg
status: active
merged_into: null
display_name: 王者棟
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fUvtfLEAzP4b4BK46646sN
        subject_person_id: p_D28X8moNDweTBB3cJumPZg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者棟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_KGMuHLatM9QADwAD2Xn1Y2
          claim_id: c_fUvtfLEAzP4b4BK46646sN
          source_id: s_rJKNnCpdWuaUfSoZV6ujPV
          stance: supports
          locator: CBDB:71728
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71728）
          source: &a1
            id: s_rJKNnCpdWuaUfSoZV6ujPV
            source_type: api_record
            title: 中国历代人物传记资料库：王者棟（CBDB 71728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71728&o=json
            external_identifier: CBDB:71728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vtHEYpN56C7jfYvzEutBjA
        subject_person_id: p_D28X8moNDweTBB3cJumPZg
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1690年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wQVc5tkE8i4f9efDXaYTF8
          claim_id: c_vtHEYpN56C7jfYvzEutBjA
          source_id: s_rJKNnCpdWuaUfSoZV6ujPV
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
        id: c_suQPPkYQuJpNu4C4d9NwrY
        subject_person_id: p_D28X8moNDweTBB3cJumPZg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王者棟（生于1690年），清人物。籍贯太康。（中国历代人物传记资料库 CBDB 71728）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MAhKogL6wnFRst39y8JG3i
          claim_id: c_suQPPkYQuJpNu4C4d9NwrY
          source_id: s_rJKNnCpdWuaUfSoZV6ujPV
          stance: supports
          locator: CBDB:71728
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

# 王者棟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王者棟 | accepted |
| birth.date | 1690年 | accepted |
| bio.summary | 王者棟（生于1690年），清人物。籍贯太康。（中国历代人物传记资料库 CBDB 71728） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王者棟（CBDB 71728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71728&o=json)
