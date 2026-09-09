---
schema: wang-person/v1
id: p_KG7mVDPeZZcdL4DFDatE2L
status: active
merged_into: null
display_name: 王承煦
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RXzHAwAaMEU5NoMJA5oStK
        subject_person_id: p_KG7mVDPeZZcdL4DFDatE2L
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王承煦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VfxKshv6Gxqz3Sp8hthNqn
          claim_id: c_RXzHAwAaMEU5NoMJA5oStK
          source_id: s_CpKsHKfL66JZbJP89e5pFA
          stance: supports
          locator: CBDB:71832
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71832）
          source: &a1
            id: s_CpKsHKfL66JZbJP89e5pFA
            source_type: api_record
            title: 中国历代人物传记资料库：王承煦（CBDB 71832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71832&o=json
            external_identifier: CBDB:71832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.891Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_uCED8KaM5ME2Yb4GBE5tLa
        subject_person_id: p_KG7mVDPeZZcdL4DFDatE2L
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1839年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NV2hBAGUFYgf9TR8pEcPzh
          claim_id: c_uCED8KaM5ME2Yb4GBE5tLa
          source_id: s_CpKsHKfL66JZbJP89e5pFA
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
        id: c_gB4YHJUxtLMGktWVxQoiGj
        subject_person_id: p_KG7mVDPeZZcdL4DFDatE2L
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cKf6FS6A69Eo4EjmGFd9KL
          claim_id: c_gB4YHJUxtLMGktWVxQoiGj
          source_id: s_CpKsHKfL66JZbJP89e5pFA
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

# 王承煦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王承煦 | accepted |
| birth.date | 1839年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王承煦（CBDB 71832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71832&o=json)
