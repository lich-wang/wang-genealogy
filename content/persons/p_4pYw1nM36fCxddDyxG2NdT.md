---
schema: wang-person/v1
id: p_4pYw1nM36fCxddDyxG2NdT
status: active
merged_into: null
display_name: 王九官
cbdb_id: 217986
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w63NFCzPFXCWunobwyHdiS
        subject_person_id: p_4pYw1nM36fCxddDyxG2NdT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九官，明人物。萬曆五年進士，籍贯長安，曾任訓導。（中国历代人物传记资料库 CBDB 217986）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_iBb3k52xTqtqGxlftwW_vm
          claim_id: c_w63NFCzPFXCWunobwyHdiS
          source_id: s_R9pRzBY6PFfvpRdt3R95De
          stance: supports
          locator: CBDB:217986
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_R9pRzBY6PFfvpRdt3R95De
            source_type: api_record
            title: 中国历代人物传记资料库：王九官（CBDB 217986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217986&o=json
            external_identifier: CBDB:217986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:56.502Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oYgTPAPFveW2ZYgwMErmFu
        subject_person_id: p_4pYw1nM36fCxddDyxG2NdT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九官
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_CEjpLDgYt6PUa2Hy5nV7dE
          claim_id: c_oYgTPAPFveW2ZYgwMErmFu
          source_id: s_R9pRzBY6PFfvpRdt3R95De
          stance: supports
          locator: CBDB:217986
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2501-2600）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_1tb56yWyz5JaMujTUTs_dT
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4pYw1nM36fCxddDyxG2NdT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9gKQ1gyBqZPzdJN38fFaQ
          claim_id: c_1tb56yWyz5JaMujTUTs_dT
          source_id: s_zDjVLyYezj_9OBBjZEYnb3
          stance: supports
          locator: CBDB：兄弟 王九儀（206435）之父／母 王鵾
          quotation: null
          interpretation_note: 由兄弟关系推断：王九官 与 王九儀 为同胞（CBDB 记「弟」），王九儀 之父／母即 王九官 之父／母。
          source:
            id: s_zDjVLyYezj_9OBBjZEYnb3
            source_type: api_record
            title: 中国历代人物传记资料库：王九官（CBDB 217986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217986&o=json
            external_identifier: CBDB:217986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gtgcsF161bSGyqs9GdxEZB
        status: active
        display_name: 王鵾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_hj-0PRrRnC_kNusCgCI12U
        subject_person_id: p_4pYw1nM36fCxddDyxG2NdT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RHoKTlS0P7pN1bAFEyriUG
          claim_id: c_hj-0PRrRnC_kNusCgCI12U
          source_id: s_zDjVLyYezj_9OBBjZEYnb3
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206435 王九儀）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_zDjVLyYezj_9OBBjZEYnb3
            source_type: api_record
            title: 中国历代人物传记资料库：王九官（CBDB 217986）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217986&o=json
            external_identifier: CBDB:217986
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_MoTp1H1qMsn6hE765X8qFG
        status: active
        display_name: 王九儀
        merged_into_person_id: null
---

# 王九官

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王九官，明人物。萬曆五年進士，籍贯長安，曾任訓導。（中国历代人物传记资料库 CBDB 217986） | accepted |
| name.primary | 王九官 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gtgcsF161bSGyqs9GdxEZB | 王鵾 | accepted |
| other | p_MoTp1H1qMsn6hE765X8qFG | 王九儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王九官（CBDB 217986）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217986&o=json)
