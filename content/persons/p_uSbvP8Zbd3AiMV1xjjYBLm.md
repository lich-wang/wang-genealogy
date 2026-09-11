---
schema: wang-person/v1
id: p_uSbvP8Zbd3AiMV1xjjYBLm
status: active
merged_into: null
display_name: 王仙客
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jjuvixkpCrfGEDVBh7AGBa
        subject_person_id: p_uSbvP8Zbd3AiMV1xjjYBLm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙客
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ujQJhysSWBgzQAw2yjYCju
          claim_id: c_jjuvixkpCrfGEDVBh7AGBa
          source_id: s_kUcQPpxfQ2gCu1uXmYutKA
          stance: supports
          locator: CBDB:91986
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（91986）
          source: &a1
            id: s_kUcQPpxfQ2gCu1uXmYutKA
            source_type: api_record
            title: 中国历代人物传记资料库：王仙客（CBDB 91986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91986&o=json
            external_identifier: CBDB:91986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.066Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1tPhrgSmuvV5r6yE64VrJ8
        subject_person_id: p_uSbvP8Zbd3AiMV1xjjYBLm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仙客，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 91986）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_lEANkUpwoivBE7xMqj2cFM
          claim_id: c_1tPhrgSmuvV5r6yE64VrJ8
          source_id: s_kUcQPpxfQ2gCu1uXmYutKA
          stance: supports
          locator: CBDB:91986
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

# 王仙客

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仙客 | accepted |
| bio.summary | 王仙客，唐人物。身份为詩人。（中国历代人物传记资料库 CBDB 91986） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仙客（CBDB 91986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=91986&o=json)
