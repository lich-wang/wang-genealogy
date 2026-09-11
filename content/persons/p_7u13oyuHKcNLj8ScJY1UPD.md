---
schema: wang-person/v1
id: p_7u13oyuHKcNLj8ScJY1UPD
status: active
merged_into: null
display_name: 王釗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gkajGM39pL4Sn8rYKMKB9m
        subject_person_id: p_7u13oyuHKcNLj8ScJY1UPD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_78hoKU6wNHxdNDFzt771h1
          claim_id: c_gkajGM39pL4Sn8rYKMKB9m
          source_id: s_z88kz2rHzMYjwJ5zKGo6ZF
          stance: supports
          locator: CBDB:156620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156620）
          source: &a1
            id: s_z88kz2rHzMYjwJ5zKGo6ZF
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 156620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156620&o=json
            external_identifier: CBDB:156620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.896Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YdGEEYMN2wkza2PsBkGsX1
        subject_person_id: p_7u13oyuHKcNLj8ScJY1UPD
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
        - id: cs_irjeqrndKmBLPYcGpnMTSc
          claim_id: c_YdGEEYMN2wkza2PsBkGsX1
          source_id: s_z88kz2rHzMYjwJ5zKGo6ZF
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_EDgn4uNQegKYnzE1oCw3GH
        subject_person_id: p_RYAhUs1ATN2FqSqLmBj15y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7u13oyuHKcNLj8ScJY1UPD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2cMm9yI1EqLJpaJ7FjtPHZ
          claim_id: c_EDgn4uNQegKYnzE1oCw3GH
          source_id: s_z88kz2rHzMYjwJ5zKGo6ZF
          stance: supports
          locator: 唐代墓誌匯編:二卷，Yuanhe 60：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RYAhUs1ATN2FqSqLmBj15y
        status: active
        display_name: 王叔原
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_RYAhUs1ATN2FqSqLmBj15y | 王叔原 | accepted |

## 外部来源

- [中国历代人物传记资料库：王釗（CBDB 156620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156620&o=json)
