---
schema: wang-person/v1
id: p_ZCFBggnkNHAtiFjGNwBVSK
status: active
merged_into: null
display_name: 王珪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9oi4WMfAUfFhoSv8SYAHW1
        subject_person_id: p_ZCFBggnkNHAtiFjGNwBVSK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_kSF92pRsTAxvX27UEJr6W5
          claim_id: c_9oi4WMfAUfFhoSv8SYAHW1
          source_id: s_DBFxKnaMSNtcFThC9xvRDa
          stance: supports
          locator: CBDB:1846
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1846）
          source: &a1
            id: s_DBFxKnaMSNtcFThC9xvRDa
            source_type: api_record
            title: 中国历代人物传记资料库：王珪（CBDB 1846）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1846&o=json
            external_identifier: CBDB:1846
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_QcDg2i3og5MeyHfFuk2bNh
        subject_person_id: p_ZCFBggnkNHAtiFjGNwBVSK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1156年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FPozqLayLHFgAhCz99Uipf
          claim_id: c_QcDg2i3og5MeyHfFuk2bNh
          source_id: s_DBFxKnaMSNtcFThC9xvRDa
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
        id: c_6mx1dmm1dKph5UHwV2Sene
        subject_person_id: p_ZCFBggnkNHAtiFjGNwBVSK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珪（卒于1156年），宋人物。籍贯臨川，入仕進士，曾任太常寺少卿、直敷文閣、尚書省工部工部司郎中。（中国历代人物传记资料库 CBDB 1846）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JcJK4B_SZTEwHhoClfqfAX
          claim_id: c_6mx1dmm1dKph5UHwV2Sene
          source_id: s_DBFxKnaMSNtcFThC9xvRDa
          stance: supports
          locator: CBDB:1846
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_3nZvh_jBrJ3CSL3x9pNhZm
        subject_person_id: p_94q1e1836gtMmWzZkszZK7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ZCFBggnkNHAtiFjGNwBVSK
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XsyliLph6UJuiohapH5ZgJ
          claim_id: c_3nZvh_jBrJ3CSL3x9pNhZm
          source_id: s_DBFxKnaMSNtcFThC9xvRDa
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王益 ⇄ 玄孫;四世孫 王珪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_94q1e1836gtMmWzZkszZK7
        status: active
        display_name: 王益
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_lrBJLmscVL3xwK9ukP3aNK
        subject_person_id: p_ZCFBggnkNHAtiFjGNwBVSK
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_1kmCRjxjheRUcKs82v5c1r
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TuzWPmbA3lBNU-TQnDawy4
          claim_id: c_lrBJLmscVL3xwK9ukP3aNK
          source_id: s_DBFxKnaMSNtcFThC9xvRDa
          stance: supports
          locator: CBDB 双向互证（玄孫;四世孫 王庭椿 ⇄ 高祖;四世祖 王珪）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_1kmCRjxjheRUcKs82v5c1r
        status: active
        display_name: 王庭椿
        merged_into_person_id: null
  other: []
---

# 王珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珪 | accepted |
| death.date | 1156年 | accepted |
| bio.summary | 王珪（卒于1156年），宋人物。籍贯臨川，入仕進士，曾任太常寺少卿、直敷文閣、尚書省工部工部司郎中。（中国历代人物传记资料库 CBDB 1846） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_94q1e1836gtMmWzZkszZK7 | 王益 | accepted |
| descendants | p_1kmCRjxjheRUcKs82v5c1r | 王庭椿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珪（CBDB 1846）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1846&o=json)
