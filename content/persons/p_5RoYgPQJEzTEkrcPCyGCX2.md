---
schema: wang-person/v1
id: p_5RoYgPQJEzTEkrcPCyGCX2
status: active
merged_into: null
display_name: 王殿光
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_N2eK6vXbfTGdPJRGDtTEdP
        subject_person_id: p_5RoYgPQJEzTEkrcPCyGCX2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿光
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g933Ljg1pGhH8CqZ263iMa
          claim_id: c_N2eK6vXbfTGdPJRGDtTEdP
          source_id: s_q3QiqoUQvx2LpaMXSKDbRC
          stance: supports
          locator: CBDB:638929
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638929）
          source: &a1
            id: s_q3QiqoUQvx2LpaMXSKDbRC
            source_type: api_record
            title: 中国历代人物传记资料库：王殿光（CBDB 638929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638929&o=json
            external_identifier: CBDB:638929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bi2eUkJfSr3D6iQrbCYPpu
        subject_person_id: p_5RoYgPQJEzTEkrcPCyGCX2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王殿光，清人物。籍贯睢州，曾任知縣。（中国历代人物传记资料库 CBDB 638929）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_A-6_4dd2P__CbJ9Poroz-2
          claim_id: c_bi2eUkJfSr3D6iQrbCYPpu
          source_id: s_q3QiqoUQvx2LpaMXSKDbRC
          stance: supports
          locator: CBDB:638929
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

# 王殿光

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王殿光 | accepted |
| bio.summary | 王殿光，清人物。籍贯睢州，曾任知縣。（中国历代人物传记资料库 CBDB 638929） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王殿光（CBDB 638929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638929&o=json)
