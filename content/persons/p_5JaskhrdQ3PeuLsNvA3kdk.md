---
schema: wang-person/v1
id: p_5JaskhrdQ3PeuLsNvA3kdk
status: active
merged_into: null
display_name: 王所安
cbdb_id: 280830
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_eWrquVrFFSL1s8BoMebB5E
        subject_person_id: p_5JaskhrdQ3PeuLsNvA3kdk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所安，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 280830）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_YDYvePvC8XTPR7dI-zEFKA
          claim_id: c_eWrquVrFFSL1s8BoMebB5E
          source_id: s_BJVtRb6Lxo3nrv8NUhE8vs
          stance: supports
          locator: CBDB:280830
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BJVtRb6Lxo3nrv8NUhE8vs
            source_type: api_record
            title: 中国历代人物传记资料库：王所安（CBDB 280830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280830&o=json
            external_identifier: CBDB:280830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3FdLCTBguxENxceXJ8vfKq
        subject_person_id: p_5JaskhrdQ3PeuLsNvA3kdk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王所安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_NwgoKAYyQ4X4zBJ4kS6wje
          claim_id: c_3FdLCTBguxENxceXJ8vfKq
          source_id: s_BJVtRb6Lxo3nrv8NUhE8vs
          stance: supports
          locator: CBDB:280830
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
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
        id: c__cOmNc6lIxj3LThOyZcdSO
        subject_person_id: p_5JaskhrdQ3PeuLsNvA3kdk
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jVlWCvWMvtjp03noCtuF6v
          claim_id: c__cOmNc6lIxj3LThOyZcdSO
          source_id: s_BJVtRb6Lxo3nrv8NUhE8vs
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BJVtRb6Lxo3nrv8NUhE8vs
            source_type: api_record
            title: 中国历代人物传记资料库：王所安（CBDB 280830）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280830&o=json
            external_identifier: CBDB:280830
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_J9N7hzaFrJkzxknueiQ82Y
        status: active
        display_name: 王度
        merged_into_person_id: null
  other: []
---

# 王所安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王所安，明人物。景泰五年進士。（中国历代人物传记资料库 CBDB 280830） | accepted |
| name.primary | 王所安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_J9N7hzaFrJkzxknueiQ82Y | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王所安（CBDB 280830）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280830&o=json)
