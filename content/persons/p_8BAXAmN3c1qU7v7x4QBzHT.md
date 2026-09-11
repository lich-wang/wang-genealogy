---
schema: wang-person/v1
id: p_8BAXAmN3c1qU7v7x4QBzHT
status: active
merged_into: null
display_name: 王棲榮
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8v9Q6kCxgxBdreFMA2gqQt
        subject_person_id: p_8BAXAmN3c1qU7v7x4QBzHT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棲榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NGDSeSpN4pGFVL3PuQbQEk
          claim_id: c_8v9Q6kCxgxBdreFMA2gqQt
          source_id: s_r75FDHPqKxdm57SekgvidP
          stance: supports
          locator: CBDB:194723
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（194723）
          source: &a1
            id: s_r75FDHPqKxdm57SekgvidP
            source_type: api_record
            title: 中国历代人物传记资料库：王棲榮（CBDB 194723）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194723&o=json
            external_identifier: CBDB:194723
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_duWwPu7rHQ2nazjuNsbKMF
        subject_person_id: p_8BAXAmN3c1qU7v7x4QBzHT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 774年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DeSU1VneqNMqjfzNqgmnrE
          claim_id: c_duWwPu7rHQ2nazjuNsbKMF
          source_id: s_r75FDHPqKxdm57SekgvidP
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
        id: c_eBPT8DhGnaiGmtEcL53Enc
        subject_person_id: p_8BAXAmN3c1qU7v7x4QBzHT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王棲榮（卒于774年），唐人物。籍贯濮陽，曾任左威衛。（中国历代人物传记资料库 CBDB 194723）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_PN1Cl3ujDmI8nrRY1cHXwz
          claim_id: c_eBPT8DhGnaiGmtEcL53Enc
          source_id: s_r75FDHPqKxdm57SekgvidP
          stance: supports
          locator: CBDB:194723
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TOK-Q0GNXA8kVjSoH5zO2b
        subject_person_id: p_en59K3fagj8VJPQw7ris7d
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8BAXAmN3c1qU7v7x4QBzHT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ASAy9GuCVjK05GGKwTohyy
          claim_id: c_TOK-Q0GNXA8kVjSoH5zO2b
          source_id: s_r75FDHPqKxdm57SekgvidP
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_en59K3fagj8VJPQw7ris7d
        status: active
        display_name: 王崇術
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王棲榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王棲榮 | accepted |
| death.date | 774年 | accepted |
| bio.summary | 王棲榮（卒于774年），唐人物。籍贯濮陽，曾任左威衛。（中国历代人物传记资料库 CBDB 194723） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_en59K3fagj8VJPQw7ris7d | 王崇術 | accepted |

## 外部来源

- [中国历代人物传记资料库：王棲榮（CBDB 194723）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=194723&o=json)
