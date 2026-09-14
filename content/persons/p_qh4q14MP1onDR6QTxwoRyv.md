---
schema: wang-person/v1
id: p_qh4q14MP1onDR6QTxwoRyv
status: active
merged_into: null
display_name: 王希周
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pHuwBt6xLjH5iL8gpScgWv
        subject_person_id: p_qh4q14MP1onDR6QTxwoRyv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希周
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_u9V2G4GMw9ih4uEQvkbiRh
          claim_id: c_pHuwBt6xLjH5iL8gpScgWv
          source_id: s_jJdEhPcC19naeYEQANsLGW
          stance: supports
          locator: CBDB:315372
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（315372）
          source: &a1
            id: s_jJdEhPcC19naeYEQANsLGW
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 315372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315372&o=json
            external_identifier: CBDB:315372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.943Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nd3Y2d43XWtveaGZDzNjpN
        subject_person_id: p_qh4q14MP1onDR6QTxwoRyv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希周，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315372）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Nj-P4RKTNPeVApYzhjLBST
          claim_id: c_nd3Y2d43XWtveaGZDzNjpN
          source_id: s_jJdEhPcC19naeYEQANsLGW
          stance: supports
          locator: CBDB:315372
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_--gYpbvmYo3jPkMqs7NeWV
        subject_person_id: p_uAujjG392SPymDDHoGZN88
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qh4q14MP1onDR6QTxwoRyv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GWRffLCOeYBgYW6l17CMZH
          claim_id: c_--gYpbvmYo3jPkMqs7NeWV
          source_id: s_T2gwdSZacF9VG2J4lgYeTa
          stance: supports
          locator: CBDB：兄弟 王希烈（126546）之父／母 王廷望
          quotation: null
          interpretation_note: 由兄弟关系推断：王希周 与 王希烈 为同胞（CBDB 记「兄」），王希烈 之父／母即 王希周 之父／母。
          source:
            id: s_T2gwdSZacF9VG2J4lgYeTa
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 315372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315372&o=json
            external_identifier: CBDB:315372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_uAujjG392SPymDDHoGZN88
        status: active
        display_name: 王廷望
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_auGM_WBudWy24Ppuim_mRf
        subject_person_id: p_nqXSbp6gt3VE2aHb7rdeET
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qh4q14MP1onDR6QTxwoRyv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hoTKLOqbNwgafQskNzuiGn
          claim_id: c_auGM_WBudWy24Ppuim_mRf
          source_id: s_T2gwdSZacF9VG2J4lgYeTa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126546 王希烈）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_T2gwdSZacF9VG2J4lgYeTa
            source_type: api_record
            title: 中国历代人物传记资料库：王希周（CBDB 315372）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315372&o=json
            external_identifier: CBDB:315372
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nqXSbp6gt3VE2aHb7rdeET
        status: active
        display_name: 王希烈
        merged_into_person_id: null
---

# 王希周

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希周 | accepted |
| bio.summary | 王希周，明人物。嘉靖三十二年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 315372） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_uAujjG392SPymDDHoGZN88 | 王廷望 | accepted |
| other | p_nqXSbp6gt3VE2aHb7rdeET | 王希烈 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希周（CBDB 315372）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=315372&o=json)
