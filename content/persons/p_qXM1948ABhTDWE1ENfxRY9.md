---
schema: wang-person/v1
id: p_qXM1948ABhTDWE1ENfxRY9
status: active
merged_into: null
display_name: 王瑤
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EjqM59z9sNNXBZbVAEBQwz
        subject_person_id: p_qXM1948ABhTDWE1ENfxRY9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_svHupXFVT6DYSAXpxxLb3B
          claim_id: c_EjqM59z9sNNXBZbVAEBQwz
          source_id: s_yQ3Qp1o29aX1syfZL34dx8
          stance: supports
          locator: CBDB:175679
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175679）
          source: &a1
            id: s_yQ3Qp1o29aX1syfZL34dx8
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 175679）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175679&o=json
            external_identifier: CBDB:175679
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.053Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_iAjLkJzLGzQK8MXU6aa9vt
        subject_person_id: p_qXM1948ABhTDWE1ENfxRY9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 663年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8UERb2rCDmB4ToD6Bg254v
          claim_id: c_iAjLkJzLGzQK8MXU6aa9vt
          source_id: s_yQ3Qp1o29aX1syfZL34dx8
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
        id: c_JbEY7QvYn6h7tifKB5ynyX
        subject_person_id: p_qXM1948ABhTDWE1ENfxRY9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wurVVF6Xxa3cFE54gz5E2C
          claim_id: c_JbEY7QvYn6h7tifKB5ynyX
          source_id: s_yQ3Qp1o29aX1syfZL34dx8
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| death.date | 663年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王瑤（CBDB 175679）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175679&o=json)
