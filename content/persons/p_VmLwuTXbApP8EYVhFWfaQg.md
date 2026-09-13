---
schema: wang-person/v1
id: p_VmLwuTXbApP8EYVhFWfaQg
status: active
merged_into: null
display_name: 王鏴
cbdb_id: 291879
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5wmk7pgkiEPvPY8sAsAFn9
        subject_person_id: p_VmLwuTXbApP8EYVhFWfaQg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏴，史料所见人物。本项目依据《中国历代人物传记资料库：王鏴（CBDB 291879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_GEqsTPqHMpZDx8i_nYTOBB
          claim_id: c_5wmk7pgkiEPvPY8sAsAFn9
          source_id: s_EPA8QkJ16acAThhwgCwudz
          stance: supports
          locator: CBDB:291879
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_EPA8QkJ16acAThhwgCwudz
            source_type: api_record
            title: 中国历代人物传记资料库：王鏴（CBDB 291879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291879&o=json
            external_identifier: CBDB:291879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_cWgq8q2zCwTpLoDrE17AhV
        subject_person_id: p_VmLwuTXbApP8EYVhFWfaQg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鏴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kRass9bSp56agzXSmRFFg4
          claim_id: c_cWgq8q2zCwTpLoDrE17AhV
          source_id: s_EPA8QkJ16acAThhwgCwudz
          stance: supports
          locator: CBDB:291879
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3401-3500）｜历史性依据：CBDB 朝代 = 明
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
        id: c_t5KZYWsYhuZB_YA69Ukdx9
        subject_person_id: p_VmLwuTXbApP8EYVhFWfaQg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oDCtFv3cf2CiUbXVcBy9FF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__n3H87Xr5lEw5rddM2A2gs
          claim_id: c_t5KZYWsYhuZB_YA69Ukdx9
          source_id: s_EPA8QkJ16acAThhwgCwudz
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第三甲第六名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_EPA8QkJ16acAThhwgCwudz
            source_type: api_record
            title: 中国历代人物传记资料库：王鏴（CBDB 291879）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291879&o=json
            external_identifier: CBDB:291879
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:03.722Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_oDCtFv3cf2CiUbXVcBy9FF
        status: active
        display_name: 王廷榦
        merged_into_person_id: null
  other: []
---

# 王鏴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王鏴，史料所见人物。本项目依据《中国历代人物传记资料库：王鏴（CBDB 291879）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王鏴 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_oDCtFv3cf2CiUbXVcBy9FF | 王廷榦 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鏴（CBDB 291879）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291879&o=json)
