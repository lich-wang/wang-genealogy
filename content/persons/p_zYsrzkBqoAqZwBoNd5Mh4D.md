---
schema: wang-person/v1
id: p_zYsrzkBqoAqZwBoNd5Mh4D
status: active
merged_into: null
display_name: 王文仲
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5RKy1fXZJYpHsHPPE9RuxX
        subject_person_id: p_zYsrzkBqoAqZwBoNd5Mh4D
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文仲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JATdmUQiA1cmjNEcBZdDUd
          claim_id: c_5RKy1fXZJYpHsHPPE9RuxX
          source_id: s_qAzjYVsMC8LvniyDC4jSwQ
          stance: supports
          locator: CBDB:175707
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175707）
          source: &a1
            id: s_qAzjYVsMC8LvniyDC4jSwQ
            source_type: api_record
            title: 中国历代人物传记资料库：王文仲（CBDB 175707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175707&o=json
            external_identifier: CBDB:175707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.250Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_k17qgRZnKLWKJJCQ4NpUDE
        subject_person_id: p_zYsrzkBqoAqZwBoNd5Mh4D
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ekv3UTseE9sd9oSPTTYeEU
          claim_id: c_k17qgRZnKLWKJJCQ4NpUDE
          source_id: s_qAzjYVsMC8LvniyDC4jSwQ
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
        id: c_9MDpaKK25EMioTjVtQkh1n
        subject_person_id: p_zYsrzkBqoAqZwBoNd5Mh4D
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文仲（卒于841年），唐人物。籍贯宣州，曾任令。（中国历代人物传记资料库 CBDB 175707）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_f32waVW-5cQSdHAZGcep0h
          claim_id: c_9MDpaKK25EMioTjVtQkh1n
          source_id: s_qAzjYVsMC8LvniyDC4jSwQ
          stance: supports
          locator: CBDB:175707
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KxthvcUHjs3Z109_6cprt5
        subject_person_id: p_jhGmz5PBmstGBfB54XPkH7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zYsrzkBqoAqZwBoNd5Mh4D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_75UTOJZyQsa5pvM7CtjzDM
          claim_id: c_KxthvcUHjs3Z109_6cprt5
          source_id: s_8KQXdAGUQNLSGE52uUZPXp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8KQXdAGUQNLSGE52uUZPXp
            source_type: api_record
            title: 中国历代人物传记资料库：王重（CBDB 175706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175706&o=json
            external_identifier: CBDB:175706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.067Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_jhGmz5PBmstGBfB54XPkH7
        status: active
        display_name: 王重
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王文仲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文仲 | accepted |
| death.date | 841年 | accepted |
| bio.summary | 王文仲（卒于841年），唐人物。籍贯宣州，曾任令。（中国历代人物传记资料库 CBDB 175707） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jhGmz5PBmstGBfB54XPkH7 | 王重 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文仲（CBDB 175707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175707&o=json)
- [中国历代人物传记资料库：王重（CBDB 175706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175706&o=json)
