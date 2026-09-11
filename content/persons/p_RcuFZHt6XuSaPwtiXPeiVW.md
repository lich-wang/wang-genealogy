---
schema: wang-person/v1
id: p_RcuFZHt6XuSaPwtiXPeiVW
status: active
merged_into: null
display_name: 王尤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ynDMsg6JsWw5FHQe3XaxjQ
        subject_person_id: p_RcuFZHt6XuSaPwtiXPeiVW
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GBFpkdsJsPZq6CDqUnwKo9
          claim_id: c_ynDMsg6JsWw5FHQe3XaxjQ
          source_id: s_Hh7YWFfcetPPQC8v461Ps1
          stance: supports
          locator: CBDB:71046
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71046）
          source: &a1
            id: s_Hh7YWFfcetPPQC8v461Ps1
            source_type: api_record
            title: 中国历代人物传记资料库：王尤（CBDB 71046）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71046&o=json
            external_identifier: CBDB:71046
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.313Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_k8QVnuAR1C4dHnqUzutpqf
        subject_person_id: p_RcuFZHt6XuSaPwtiXPeiVW
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1850年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fnZy3N3335LSQWF1pff8dL
          claim_id: c_k8QVnuAR1C4dHnqUzutpqf
          source_id: s_Hh7YWFfcetPPQC8v461Ps1
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
        id: c_akgKiAD1s1iJDBT77x7gVe
        subject_person_id: p_RcuFZHt6XuSaPwtiXPeiVW
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尤（生于1850年），清人物。籍贯通州直隸州。（中国历代人物传记资料库 CBDB 71046）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nu1lEVtC10XhwKLjA6TG5O
          claim_id: c_akgKiAD1s1iJDBT77x7gVe
          source_id: s_Hh7YWFfcetPPQC8v461Ps1
          stance: supports
          locator: CBDB:71046
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

# 王尤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尤 | accepted |
| birth.date | 1850年 | accepted |
| bio.summary | 王尤（生于1850年），清人物。籍贯通州直隸州。（中国历代人物传记资料库 CBDB 71046） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王尤（CBDB 71046）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71046&o=json)
