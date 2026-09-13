---
schema: wang-person/v1
id: p_V3qTUFMYcxnYJJ33cVNHT6
status: active
merged_into: null
display_name: 王仲威
cbdb_id: 255803
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_sKnaJJDKMptgiA1PewvJnv
        subject_person_id: p_V3qTUFMYcxnYJJ33cVNHT6
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲威，史料所见人物。本项目依据《中国历代人物传记资料库：王仲威（CBDB 255803）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_MCAlkiSHXlYRUy2ktjaQwT
          claim_id: c_sKnaJJDKMptgiA1PewvJnv
          source_id: s_su6S5A5FD9xrEqvEt7jXvu
          stance: supports
          locator: CBDB:255803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_su6S5A5FD9xrEqvEt7jXvu
            source_type: api_record
            title: 中国历代人物传记资料库：王仲威（CBDB 255803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255803&o=json
            external_identifier: CBDB:255803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3gYt1Jvt4UGJf9q4Sw13Er
        subject_person_id: p_V3qTUFMYcxnYJJ33cVNHT6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仲威
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kMTuDchDeUh26DyMaKYMiA
          claim_id: c_3gYt1Jvt4UGJf9q4Sw13Er
          source_id: s_su6S5A5FD9xrEqvEt7jXvu
          stance: supports
          locator: CBDB:255803
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
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
  descendants:
    - claim:
        id: c_-oLFM9IzSfVz5eZBbZI6H3
        subject_person_id: p_V3qTUFMYcxnYJJ33cVNHT6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_W3GJcYQ68tdjW81oNrSGsA
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wnZG8lK2QmGkY2MsNuW6Jn
          claim_id: c_-oLFM9IzSfVz5eZBbZI6H3
          source_id: s_su6S5A5FD9xrEqvEt7jXvu
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第二十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_su6S5A5FD9xrEqvEt7jXvu
            source_type: api_record
            title: 中国历代人物传记资料库：王仲威（CBDB 255803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255803&o=json
            external_identifier: CBDB:255803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_W3GJcYQ68tdjW81oNrSGsA
        status: active
        display_name: 王恩
        merged_into_person_id: null
  other: []
---

# 王仲威

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王仲威，史料所见人物。本项目依据《中国历代人物传记资料库：王仲威（CBDB 255803）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王仲威 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_W3GJcYQ68tdjW81oNrSGsA | 王恩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王仲威（CBDB 255803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255803&o=json)
