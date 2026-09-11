---
schema: wang-person/v1
id: p_ydgJ4dzTCX4s92aDhwsv4k
status: active
merged_into: null
display_name: 王寵
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GbvY9JiBu3fUmn6KwDE7oK
        subject_person_id: p_ydgJ4dzTCX4s92aDhwsv4k
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2L3r8cocQxhGJC2vcfKs3h
          claim_id: c_GbvY9JiBu3fUmn6KwDE7oK
          source_id: s_osU4j1b4Q98g5XxnCPEZRD
          stance: supports
          locator: CBDB:293682
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（293682）
          source: &a1
            id: s_osU4j1b4Q98g5XxnCPEZRD
            source_type: api_record
            title: 中国历代人物传记资料库：王寵（CBDB 293682）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293682&o=json
            external_identifier: CBDB:293682
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.432Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_X9dtsZkEj48KQTUn2tDcYk
        subject_person_id: p_ydgJ4dzTCX4s92aDhwsv4k
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王寵，明人物。嘉靖十一年進士，籍贯歙縣，曾任州同知。（中国历代人物传记资料库 CBDB 293682）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cQDk-qdT9-C2rKsiEB8PsL
          claim_id: c_X9dtsZkEj48KQTUn2tDcYk
          source_id: s_osU4j1b4Q98g5XxnCPEZRD
          stance: supports
          locator: CBDB:293682
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_W-2rAX8WThEjpVcKgVIGM2
        subject_person_id: p_ydgJ4dzTCX4s92aDhwsv4k
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TBBj4gCo8ENonMptcoHt4r
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q1Mbo8xRGl78iqzNn7eQMr
          claim_id: c_W-2rAX8WThEjpVcKgVIGM2
          source_id: s_osU4j1b4Q98g5XxnCPEZRD
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第一百四十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_TBBj4gCo8ENonMptcoHt4r
        status: active
        display_name: 王獻芝
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王寵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王寵 | accepted |
| bio.summary | 王寵，明人物。嘉靖十一年進士，籍贯歙縣，曾任州同知。（中国历代人物传记资料库 CBDB 293682） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_TBBj4gCo8ENonMptcoHt4r | 王獻芝 | accepted |

## 外部来源

- [中国历代人物传记资料库：王寵（CBDB 293682）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=293682&o=json)
