---
schema: wang-person/v1
id: p_xZAK7VoNZgtZNH1NJRj19t
status: active
merged_into: null
display_name: 王元梅
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iDwPwV7mM41cfV2kyDANVe
        subject_person_id: p_xZAK7VoNZgtZNH1NJRj19t
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元梅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WbK5hbPRDyrQGGfwq3AKbw
          claim_id: c_iDwPwV7mM41cfV2kyDANVe
          source_id: s_Lsss2M2UQY9pdUZzb1D7j6
          stance: supports
          locator: CBDB:71378
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71378）
          source: &a1
            id: s_Lsss2M2UQY9pdUZzb1D7j6
            source_type: api_record
            title: 中国历代人物传记资料库：王元梅（CBDB 71378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71378&o=json
            external_identifier: CBDB:71378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.627Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_AJ4PzQnbEQrSQfPCcct5Uz
        subject_person_id: p_xZAK7VoNZgtZNH1NJRj19t
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1743年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EMsb6hcub4jMGSUoKTDWtW
          claim_id: c_AJ4PzQnbEQrSQfPCcct5Uz
          source_id: s_Lsss2M2UQY9pdUZzb1D7j6
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
        id: c_wX9FN6x5Gd5w3cRsqhA8ft
        subject_person_id: p_xZAK7VoNZgtZNH1NJRj19t
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元梅（生于1743年），清人物。籍贯貴池。（中国历代人物传记资料库 CBDB 71378）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tum6NhqVUubyeniXELPGEk
          claim_id: c_wX9FN6x5Gd5w3cRsqhA8ft
          source_id: s_Lsss2M2UQY9pdUZzb1D7j6
          stance: supports
          locator: CBDB:71378
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

# 王元梅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元梅 | accepted |
| birth.date | 1743年 | accepted |
| bio.summary | 王元梅（生于1743年），清人物。籍贯貴池。（中国历代人物传记资料库 CBDB 71378） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元梅（CBDB 71378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71378&o=json)
