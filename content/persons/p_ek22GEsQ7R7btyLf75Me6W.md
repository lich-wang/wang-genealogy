---
schema: wang-person/v1
id: p_ek22GEsQ7R7btyLf75Me6W
status: active
merged_into: null
display_name: 王墂
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WVGqeGShxEZQGYUn3epASN
        subject_person_id: p_ek22GEsQ7R7btyLf75Me6W
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LKeh2dsWqYbMKA2PDjCJAH
          claim_id: c_WVGqeGShxEZQGYUn3epASN
          source_id: s_T7k4hpgR1bG4cPboq7NKNh
          stance: supports
          locator: CBDB:636761
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636761）
          source: &a1
            id: s_T7k4hpgR1bG4cPboq7NKNh
            source_type: api_record
            title: 中国历代人物传记资料库：王墂（CBDB 636761）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636761&o=json
            external_identifier: CBDB:636761
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.098Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_z3RGVZEgsMH1oLjTGiKs97
        subject_person_id: p_ek22GEsQ7R7btyLf75Me6W
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王墂，清人物。籍贯膠州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636761）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Px6ofzByi7BDeNinIMHUE6
          claim_id: c_z3RGVZEgsMH1oLjTGiKs97
          source_id: s_T7k4hpgR1bG4cPboq7NKNh
          stance: supports
          locator: CBDB:636761
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

# 王墂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王墂 | accepted |
| bio.summary | 王墂，清人物。籍贯膠州，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 636761） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王墂（CBDB 636761）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636761&o=json)
