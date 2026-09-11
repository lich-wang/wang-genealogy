---
schema: wang-person/v1
id: p_FyAdh8zyEP545H1rJXSay6
status: active
merged_into: null
display_name: 王之翰
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CMKK72R14yqCM8mzC7rHy8
        subject_person_id: p_FyAdh8zyEP545H1rJXSay6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_HoRFMkmdbPoPdHUEaH17u3
          claim_id: c_CMKK72R14yqCM8mzC7rHy8
          source_id: s_ubjvk9NBXGXqmDE8SQ4Pnx
          stance: supports
          locator: CBDB:71360
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71360）
          source: &a1
            id: s_ubjvk9NBXGXqmDE8SQ4Pnx
            source_type: api_record
            title: 中国历代人物传记资料库：王之翰（CBDB 71360）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71360&o=json
            external_identifier: CBDB:71360
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ct1MLYtQewWmcgyT8PYo2N
        subject_person_id: p_FyAdh8zyEP545H1rJXSay6
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1819年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Sb4z2G18SdMT5bnrKV6juM
          claim_id: c_ct1MLYtQewWmcgyT8PYo2N
          source_id: s_ubjvk9NBXGXqmDE8SQ4Pnx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_7mhjVj8T9aETPKBPvL76uv
        subject_person_id: p_FyAdh8zyEP545H1rJXSay6
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1884年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fteCgWu4a6XXXe7c2y7Rxe
          claim_id: c_7mhjVj8T9aETPKBPvL76uv
          source_id: s_ubjvk9NBXGXqmDE8SQ4Pnx
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WEjV3hBb6CXmnXrMaPtMVt
        subject_person_id: p_FyAdh8zyEP545H1rJXSay6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之翰（1819年—1884年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71360）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8GvEXMdmfM4XJaA-h42KPB
          claim_id: c_WEjV3hBb6CXmnXrMaPtMVt
          source_id: s_ubjvk9NBXGXqmDE8SQ4Pnx
          stance: supports
          locator: CBDB:71360
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

# 王之翰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之翰 | accepted |
| birth.date | 1819年 | accepted |
| death.date | 1884年 | accepted |
| bio.summary | 王之翰（1819年—1884年），清人物。籍贯濰縣。（中国历代人物传记资料库 CBDB 71360） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王之翰（CBDB 71360）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71360&o=json)
