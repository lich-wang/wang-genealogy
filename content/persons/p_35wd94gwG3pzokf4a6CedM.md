---
schema: wang-person/v1
id: p_35wd94gwG3pzokf4a6CedM
status: active
merged_into: null
display_name: 王登
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7udT1561tYURWW2rd9c1BJ
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nbqmroEPadtPY3fWtrPPJx
          claim_id: c_7udT1561tYURWW2rd9c1BJ
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB:10686
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（10686）
          source: &a1
            id: s_jnU1wrcswMwACQgeP5fatf
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pFogdX3TgAGFoBAJGVJNSc
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1066年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DSugPJPya4G4EXmGi3ZppN
          claim_id: c_pFogdX3TgAGFoBAJGVJNSc
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_oCHkVKDLPF4Q5guqftThWt
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1126年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGNXzJwPxDQfMZrGmcbdyd
          claim_id: c_oCHkVKDLPF4Q5guqftThWt
          source_id: s_jnU1wrcswMwACQgeP5fatf
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
        id: c_qUQ6SPXrLDR53bNAs2rpkA
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王登（1066年—1126年），宋人物。籍贯金華，身份为良吏;循吏，入仕進士，曾任迪功郎、奉議郎、承議郎。（中国历代人物传记资料库 CBDB 10686）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZdK8rufU4J9PzG2_krNrGN
          claim_id: c_qUQ6SPXrLDR53bNAs2rpkA
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB:10686
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_edfkhp9ZoLEYzuJPmDBOa1
        subject_person_id: p_zdqhgBQcRuZFJjJq4vVV5M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_35wd94gwG3pzokf4a6CedM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLqQnzVKVMuT1_wnkpM2D-
          claim_id: c_edfkhp9ZoLEYzuJPmDBOa1
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（父 王本 ⇄ 子 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_zdqhgBQcRuZFJjJq4vVV5M
        status: active
        display_name: 王本
        merged_into_person_id: null
  children:
    - claim:
        id: c_jCXPisN44saIypWYncWipB
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_bkMbqmq6U23rFXaG17Pxzk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rh4bQNDzIHzHfoafmANNw0
          claim_id: c_jCXPisN44saIypWYncWipB
          source_id: s_bDr42YdofJ3M2VBGUPzaxN
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1845;1846：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bDr42YdofJ3M2VBGUPzaxN
            source_type: api_record
            title: 中国历代人物传记资料库：王師心（CBDB 1872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json
            external_identifier: CBDB:1872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bkMbqmq6U23rFXaG17Pxzk
        status: active
        display_name: 王師心
        merged_into_person_id: null
    - claim:
        id: c_1XX_OF2Y6RuoIMLJF8FKjv
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T2MYUrXuE1JG7HYKSj9LyT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zkY8jsZOu49mcMLu8-swLz
          claim_id: c_1XX_OF2Y6RuoIMLJF8FKjv
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（子 王師醇 ⇄ 父 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_T2MYUrXuE1JG7HYKSj9LyT
        status: active
        display_name: 王師醇
        merged_into_person_id: null
    - claim:
        id: c_3pkHMC4WryHmkBFrAR1PWp
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VYtFzPbziddvD9zkw88Psz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0qbqgoTGXXmUHmyt2N3QNg
          claim_id: c_3pkHMC4WryHmkBFrAR1PWp
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（子 王師德 ⇄ 父 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_VYtFzPbziddvD9zkw88Psz
        status: active
        display_name: 王師德
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_Aehh6xCtWnFnF4v6JZuErN
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_AWHrZaKAHaZx3V7FVZzpXg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FgOaqW_IY7ybSe1A7mXk9K
          claim_id: c_Aehh6xCtWnFnF4v6JZuErN
          source_id: s_Iz0WYyrN04YzJVnnqNQ-9x
          stance: supports
          locator: 全宋文，卷 5677：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Iz0WYyrN04YzJVnnqNQ-9x
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(陳珫女)（CBDB 385798）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385798&o=json
            external_identifier: CBDB:385798
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_AWHrZaKAHaZx3V7FVZzpXg
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_Km3nzbGjOihJYtQghi6KDg
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ABtiiFw9LGXZnTbrZS68pV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HtTgCLVWuEBR8HYxOIu6W
          claim_id: c_Km3nzbGjOihJYtQghi6KDg
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: 全宋文，卷 5677：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ABtiiFw9LGXZnTbrZS68pV
        status: active
        display_name: 王澐
        merged_into_person_id: null
    - claim:
        id: c_XoAN5C9UkyQQPtrzS6La8c
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Ccs9NajCd62mVKopumCjG5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2OKQFqu5BgHEqa8V9AGgs4
          claim_id: c_XoAN5C9UkyQQPtrzS6La8c
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: 全宋文，卷 5677：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Ccs9NajCd62mVKopumCjG5
        status: active
        display_name: 王演
        merged_into_person_id: null
    - claim:
        id: c_4KIiJeJ8Vh8Pj5aKAkKQVs
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_WU918HK6TTpAXfqW367rRb
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3PqKaaHDUKXHAh1UvTodUt
          claim_id: c_4KIiJeJ8Vh8Pj5aKAkKQVs
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王侊 ⇄ 高祖;四世祖 王登）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_WU918HK6TTpAXfqW367rRb
        status: active
        display_name: 王侊
        merged_into_person_id: null
  other: []
---

# 王登

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王登 | accepted |
| birth.date | 1066年 | accepted |
| death.date | 1126年 | accepted |
| bio.summary | 王登（1066年—1126年），宋人物。籍贯金華，身份为良吏;循吏，入仕進士，曾任迪功郎、奉議郎、承議郎。（中国历代人物传记资料库 CBDB 10686） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zdqhgBQcRuZFJjJq4vVV5M | 王本 | accepted |
| children | p_bkMbqmq6U23rFXaG17Pxzk | 王師心 | accepted |
| children | p_T2MYUrXuE1JG7HYKSj9LyT | 王師醇 | accepted |
| children | p_VYtFzPbziddvD9zkw88Psz | 王師德 | accepted |
| spouses | p_AWHrZaKAHaZx3V7FVZzpXg | 陳氏 | accepted |
| descendants | p_ABtiiFw9LGXZnTbrZS68pV | 王澐 | accepted |
| descendants | p_Ccs9NajCd62mVKopumCjG5 | 王演 | accepted |
| descendants | p_WU918HK6TTpAXfqW367rRb | 王侊 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(陳珫女)（CBDB 385798）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385798&o=json)
- [中国历代人物传记资料库：王登（CBDB 10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
- [中国历代人物传记资料库：王師心（CBDB 1872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1872&o=json)
