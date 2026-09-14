---
schema: wang-person/v1
id: p_33joHpVQH9KnqRAf9nqpnS
status: active
merged_into: null
display_name: 王誥
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6P6BFNuT6eKzKZzCpsm6id
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EE4VcM98b2qDhijjghQans
          claim_id: c_6P6BFNuT6eKzKZzCpsm6id
          source_id: s_ANGS7ChRjNE5dQPvG8Bhnt
          stance: supports
          locator: CBDB:303242
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（303242）
          source: &a1
            id: s_ANGS7ChRjNE5dQPvG8Bhnt
            source_type: api_record
            title: 中国历代人物传记资料库：王誥（CBDB 303242）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303242&o=json
            external_identifier: CBDB:303242
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.681Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_uDoGJnyFPwMkCdsgoUWtAJ
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誥，明人物。嘉靖二十年進士，籍贯保定，曾任奉政大夫、治中。（中国历代人物传记资料库 CBDB 303242）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_uKrP90Z1lG1gWaUkihP8l6
          claim_id: c_uDoGJnyFPwMkCdsgoUWtAJ
          source_id: s_ANGS7ChRjNE5dQPvG8Bhnt
          stance: supports
          locator: CBDB:303242
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_QZSTmA47uZrd2k5sOa9KNH
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_epPvqgMmGoGqHpEYGAeBox
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-017qKr5sWvsrVPl5ix6fC
          claim_id: c_QZSTmA47uZrd2k5sOa9KNH
          source_id: s_ANGS7ChRjNE5dQPvG8Bhnt
          stance: supports
          locator: 嘉靖二十年進士登科錄:一卷，第三甲第二十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_epPvqgMmGoGqHpEYGAeBox
        status: active
        display_name: 王顯忠
        merged_into_person_id: null
    - claim:
        id: c_tD4sDLvPISZnMtzDWR1NTv
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HtAe7VEk8jiMPQDqp4oWbV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PRYkKWAVZ-mP3JqNUinTWA
          claim_id: c_tD4sDLvPISZnMtzDWR1NTv
          source_id: s_3_7ue2qYBxFvDEaK2LgDkQ
          stance: supports
          locator: CBDB：兄弟 王顯忠（126894）之父／母 王誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚賓 与 王顯忠 为同胞（CBDB 记「弟」），王顯忠 之父／母即 王尚賓 之父／母。
          source:
            id: s_3_7ue2qYBxFvDEaK2LgDkQ
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賓（CBDB 303246）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303246&o=json
            external_identifier: CBDB:303246
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HtAe7VEk8jiMPQDqp4oWbV
        status: active
        display_name: 王尚賓
        merged_into_person_id: null
    - claim:
        id: c_mivlhhYGhWSBZAxnmtqQwD
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KcVARrtcou3vDa635u3F6q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvRHByP-IQs2AXGR7ExOqW
          claim_id: c_mivlhhYGhWSBZAxnmtqQwD
          source_id: s_hgmfR_jyYcpAEbzT_zuYzm
          stance: supports
          locator: CBDB：兄弟 王顯忠（126894）之父／母 王誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚賢 与 王顯忠 为同胞（CBDB 记「弟」），王顯忠 之父／母即 王尚賢 之父／母。
          source:
            id: s_hgmfR_jyYcpAEbzT_zuYzm
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 303249）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303249&o=json
            external_identifier: CBDB:303249
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KcVARrtcou3vDa635u3F6q
        status: active
        display_name: 王尚賢
        merged_into_person_id: null
    - claim:
        id: c_rn-jAk-8lepPcH_B68I0D6
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hmzwygRwx6cKqdBechpA6s
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TMLmoh82ua_ugFtmmav4PX
          claim_id: c_rn-jAk-8lepPcH_B68I0D6
          source_id: s_VT1zpdtNNEl1co8huK97dy
          stance: supports
          locator: CBDB：兄弟 王顯忠（126894）之父／母 王誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王軒 与 王顯忠 为同胞（CBDB 记「兄」），王顯忠 之父／母即 王軒 之父／母。
          source:
            id: s_VT1zpdtNNEl1co8huK97dy
            source_type: api_record
            title: 中国历代人物传记资料库：王軒（CBDB 303251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303251&o=json
            external_identifier: CBDB:303251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hmzwygRwx6cKqdBechpA6s
        status: active
        display_name: 王軒
        merged_into_person_id: null
    - claim:
        id: c_Wt9txuckFuD2yrpR5ZU6o5
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kQqGhWNUDSZCHucHiGLm35
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YsmeZ5NJQsiQeaClm5WcGX
          claim_id: c_Wt9txuckFuD2yrpR5ZU6o5
          source_id: s_smyX-aqe0uY91R6j7NJZIE
          stance: supports
          locator: CBDB：兄弟 王顯忠（126894）之父／母 王誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王軻 与 王顯忠 为同胞（CBDB 记「弟」），王顯忠 之父／母即 王軻 之父／母。
          source:
            id: s_smyX-aqe0uY91R6j7NJZIE
            source_type: api_record
            title: 中国历代人物传记资料库：王軻（CBDB 303250）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json
            external_identifier: CBDB:303250
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kQqGhWNUDSZCHucHiGLm35
        status: active
        display_name: 王軻
        merged_into_person_id: null
    - claim:
        id: c_hIH_5Qg-uQc66xxFekB3MG
        subject_person_id: p_33joHpVQH9KnqRAf9nqpnS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tTgJTXZG73ACmY2b2eXiFM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lE82kIOCSpgAEAPXVik_l-
          claim_id: c_hIH_5Qg-uQc66xxFekB3MG
          source_id: s_6VNH5m9fWnSadA_Nrn5N5c
          stance: supports
          locator: CBDB：兄弟 王顯忠（126894）之父／母 王誥
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚忠 与 王顯忠 为同胞（CBDB 记「弟」），王顯忠 之父／母即 王尚忠 之父／母。
          source:
            id: s_6VNH5m9fWnSadA_Nrn5N5c
            source_type: api_record
            title: 中国历代人物传记资料库：王尚忠（CBDB 303247）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303247&o=json
            external_identifier: CBDB:303247
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_tTgJTXZG73ACmY2b2eXiFM
        status: active
        display_name: 王尚忠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誥 | accepted |
| bio.summary | 王誥，明人物。嘉靖二十年進士，籍贯保定，曾任奉政大夫、治中。（中国历代人物传记资料库 CBDB 303242） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_epPvqgMmGoGqHpEYGAeBox | 王顯忠 | accepted |
| children | p_HtAe7VEk8jiMPQDqp4oWbV | 王尚賓 | accepted |
| children | p_KcVARrtcou3vDa635u3F6q | 王尚賢 | accepted |
| children | p_hmzwygRwx6cKqdBechpA6s | 王軒 | accepted |
| children | p_kQqGhWNUDSZCHucHiGLm35 | 王軻 | accepted |
| children | p_tTgJTXZG73ACmY2b2eXiFM | 王尚忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誥（CBDB 303242）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303242&o=json)
- [中国历代人物传记资料库：王軻（CBDB 303250）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303250&o=json)
- [中国历代人物传记资料库：王尚賓（CBDB 303246）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303246&o=json)
- [中国历代人物传记资料库：王尚賢（CBDB 303249）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303249&o=json)
- [中国历代人物传记资料库：王尚忠（CBDB 303247）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303247&o=json)
- [中国历代人物传记资料库：王軒（CBDB 303251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=303251&o=json)
