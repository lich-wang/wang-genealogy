---
schema: wang-person/v1
id: p_ahef3cNKbFKEgGod8F2SEJ
status: active
merged_into: null
display_name: 王宏謨
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yt79UHLfi8T1tYE6ZFh49t
        subject_person_id: p_ahef3cNKbFKEgGod8F2SEJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏謨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ajaJgi9w3tVxJ9j6JpiSxN
          claim_id: c_yt79UHLfi8T1tYE6ZFh49t
          source_id: s_u8MhU4EbJmMWgM1Joj3Z7J
          stance: supports
          locator: CBDB:71710
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（71710）
          source: &a1
            id: s_u8MhU4EbJmMWgM1Joj3Z7J
            source_type: api_record
            title: 中国历代人物传记资料库：王宏謨（CBDB 71710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71710&o=json
            external_identifier: CBDB:71710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.840Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zc8ma99QopAemu8gkYfbCg
        subject_person_id: p_ahef3cNKbFKEgGod8F2SEJ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1815年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3ueo7HyJLyoaZ7A4LYnugm
          claim_id: c_zc8ma99QopAemu8gkYfbCg
          source_id: s_u8MhU4EbJmMWgM1Joj3Z7J
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
        id: c_4FUVReWAA9d9vsttXVQKYo
        subject_person_id: p_ahef3cNKbFKEgGod8F2SEJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宏謨（生于1815年），清人物。籍贯清江。（中国历代人物传记资料库 CBDB 71710）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EKzA_8vQeuRSRj32eCooZc
          claim_id: c_4FUVReWAA9d9vsttXVQKYo
          source_id: s_u8MhU4EbJmMWgM1Joj3Z7J
          stance: supports
          locator: CBDB:71710
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

# 王宏謨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宏謨 | accepted |
| birth.date | 1815年 | accepted |
| bio.summary | 王宏謨（生于1815年），清人物。籍贯清江。（中国历代人物传记资料库 CBDB 71710） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王宏謨（CBDB 71710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=71710&o=json)
