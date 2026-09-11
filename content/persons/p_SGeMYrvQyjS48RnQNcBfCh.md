---
schema: wang-person/v1
id: p_SGeMYrvQyjS48RnQNcBfCh
status: active
merged_into: null
display_name: 王昇
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mjou5p96dyySFJkAP1869K
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_PAaaojgBnH69wGCzJTLNVC
          claim_id: c_mjou5p96dyySFJkAP1869K
          source_id: s_tif7iYmAbV5mFPFGRxQiXs
          stance: supports
          locator: CBDB:175818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175818）
          source: &a1
            id: s_tif7iYmAbV5mFPFGRxQiXs
            source_type: api_record
            title: 中国历代人物传记资料库：王昇（CBDB 175818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175818&o=json
            external_identifier: CBDB:175818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.140Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_RwhrQTZFXLhkeKKMxsikZE
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 744年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dTxoU2Scfup5E1d2hb5AHS
          claim_id: c_RwhrQTZFXLhkeKKMxsikZE
          source_id: s_tif7iYmAbV5mFPFGRxQiXs
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
        id: c_EMw5HAZMovmCt6yjELqs5d
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Jhteb7cjYP4fiJG3TQdWUL
          claim_id: c_EMw5HAZMovmCt6yjELqs5d
          source_id: s_tif7iYmAbV5mFPFGRxQiXs
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yOgAuQqJAX4WByZS4-BVPL
        subject_person_id: p_jMYAaLX224kkaoLQQBC5fY
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BDcsqkVrzIvDa_jlrDHWCD
          claim_id: c_yOgAuQqJAX4WByZS4-BVPL
          source_id: s_tif7iYmAbV5mFPFGRxQiXs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jMYAaLX224kkaoLQQBC5fY
        status: active
        display_name: 王溫之
        merged_into_person_id: null
  children:
    - claim:
        id: c_ofGCgKbw1M9SznON2oDqgs
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2BHkEYekoT1S8S2R49LZgW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_imlBmuggDvcE8fhWQ3x8JC
          claim_id: c_ofGCgKbw1M9SznON2oDqgs
          source_id: s_4DY5qh6wfzSJyo6PBzSVxU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4DY5qh6wfzSJyo6PBzSVxU
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 175822）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json
            external_identifier: CBDB:175822
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2BHkEYekoT1S8S2R49LZgW
        status: active
        display_name: 王晤
        merged_into_person_id: null
    - claim:
        id: c_xXXzUeyrREOms6SjcteqED
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3qW3rPvmvmuHDyzRzY27Dc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qhyd4JxQ3HhBlpOviaTSap
          claim_id: c_xXXzUeyrREOms6SjcteqED
          source_id: s_9MH82C6yzXYvU5ktfBAM6F
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9MH82C6yzXYvU5ktfBAM6F
            source_type: api_record
            title: 中国历代人物传记资料库：王暐（CBDB 175820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175820&o=json
            external_identifier: CBDB:175820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3qW3rPvmvmuHDyzRzY27Dc
        status: active
        display_name: 王暐
        merged_into_person_id: null
    - claim:
        id: c_TFoDXnB_GSQSdSQf2xiY-M
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5PqXjX7kmMKV6J82EJRTRT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qfzmqwpa2Kj1BqBnLCIY0W
          claim_id: c_TFoDXnB_GSQSdSQf2xiY-M
          source_id: s_ET7VriSFJ9yBpgSTmJ68xJ
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ET7VriSFJ9yBpgSTmJ68xJ
            source_type: api_record
            title: 中国历代人物传记资料库：王曙（CBDB 175819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175819&o=json
            external_identifier: CBDB:175819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5PqXjX7kmMKV6J82EJRTRT
        status: active
        display_name: 王曙
        merged_into_person_id: null
    - claim:
        id: c_RjwjbcR-Cc3rpR2ifvhdo0
        subject_person_id: p_SGeMYrvQyjS48RnQNcBfCh
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zyrGRhnHa5tjEywfEHodVY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RMq_IWaHfYiElEQIt3E1ro
          claim_id: c_RjwjbcR-Cc3rpR2ifvhdo0
          source_id: s_tif7iYmAbV5mFPFGRxQiXs
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zyrGRhnHa5tjEywfEHodVY
        status: active
        display_name: 王晛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昇 | accepted |
| death.date | 744年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jMYAaLX224kkaoLQQBC5fY | 王溫之 | accepted |
| children | p_2BHkEYekoT1S8S2R49LZgW | 王晤 | accepted |
| children | p_3qW3rPvmvmuHDyzRzY27Dc | 王暐 | accepted |
| children | p_5PqXjX7kmMKV6J82EJRTRT | 王曙 | accepted |
| children | p_zyrGRhnHa5tjEywfEHodVY | 王晛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昇（CBDB 175818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175818&o=json)
- [中国历代人物传记资料库：王曙（CBDB 175819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175819&o=json)
- [中国历代人物传记资料库：王暐（CBDB 175820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175820&o=json)
- [中国历代人物传记资料库：王晤（CBDB 175822）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175822&o=json)
