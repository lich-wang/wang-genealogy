---
schema: wang-person/v1
id: p_EkCDqvW1ivBD6Uy7xAPyNA
status: active
merged_into: null
display_name: 王延彬
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_SAQpzdN6sLwrXN91XW2t9Y
        subject_person_id: p_EkCDqvW1ivBD6Uy7xAPyNA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延彬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zYdbVsPYjNgBFfxyn2rgvR
          claim_id: c_SAQpzdN6sLwrXN91XW2t9Y
          source_id: s_Pqi3VJy5Fdcx8baQVkPRhP
          stance: supports
          locator: CBDB:92011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（92011）
          source: &a1
            id: s_Pqi3VJy5Fdcx8baQVkPRhP
            source_type: api_record
            title: 中国历代人物传记资料库：王延彬（CBDB 92011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92011&o=json
            external_identifier: CBDB:92011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.084Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AduFQsD9UGRfnHZVmsMxWC
        subject_person_id: p_EkCDqvW1ivBD6Uy7xAPyNA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王延彬，唐人物。籍贯固始，身份为詩人，曾任節度使、金紫光祿大夫、郡開國男。（中国历代人物传记资料库 CBDB 92011）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_G9lx-fa2GOH9-ziuo-kdSz
          claim_id: c_AduFQsD9UGRfnHZVmsMxWC
          source_id: s_Pqi3VJy5Fdcx8baQVkPRhP
          stance: supports
          locator: CBDB:92011
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

# 王延彬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王延彬 | accepted |
| bio.summary | 王延彬，唐人物。籍贯固始，身份为詩人，曾任節度使、金紫光祿大夫、郡開國男。（中国历代人物传记资料库 CBDB 92011） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王延彬（CBDB 92011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92011&o=json)
