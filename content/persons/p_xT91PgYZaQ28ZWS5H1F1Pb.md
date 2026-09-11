---
schema: wang-person/v1
id: p_xT91PgYZaQ28ZWS5H1F1Pb
status: active
merged_into: null
display_name: 王文幹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_hWGnAw7RSpWECdM52tAkzm
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文幹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_gyaYvY3p6EoZzqGgQ3kAAG
          claim_id: c_hWGnAw7RSpWECdM52tAkzm
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: CBDB:141823
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（141823）
          source: &a1
            id: s_1SQTm9bfti1Cf4E7AWrBph
            source_type: api_record
            title: 中国历代人物传记资料库：王文幹（CBDB 141823）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json
            external_identifier: CBDB:141823
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.569Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_C4uNnQeXRNN7wNxRActgwo
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 792年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2cRYWbZGxGgfso6FDfH6h
          claim_id: c_C4uNnQeXRNN7wNxRActgwo
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
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
        id: c_ueH7jsyKvaRSmoiC4NNL4b
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 844年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZbMyfjZPFgyHwMMWfvqc9
          claim_id: c_ueH7jsyKvaRSmoiC4NNL4b
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
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
        id: c_T6wmP2WGZoMKNBMUTLCUPf
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文幹（792年—844年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 141823）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_1fBr0hXhFfumfXwufuNvur
          claim_id: c_T6wmP2WGZoMKNBMUTLCUPf
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: CBDB:141823
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ir-oL7xtpfxED2_WxYhG5u
        subject_person_id: p_iCYMvWqdPTMReNWcJw9Xs2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rkD97HRVO-sf3ZTh_PHAuJ
          claim_id: c_ir-oL7xtpfxED2_WxYhG5u
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iCYMvWqdPTMReNWcJw9Xs2
        status: active
        display_name: 王臣端
        merged_into_person_id: null
  children:
    - claim:
        id: c_8UlfM8qardKKR3lpwH3mwf
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dACwgZwbNR1ZJ5Htbc7g4U
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zVs55QLiUgJI4dcOUMxmts
          claim_id: c_8UlfM8qardKKR3lpwH3mwf
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_dACwgZwbNR1ZJ5Htbc7g4U
        status: active
        display_name: 王義仙
        merged_into_person_id: null
    - claim:
        id: c_ijmvB9zbVZfDOGpDoh4RKa
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FtuUTb6ACwBxcj5M1tKQTh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qEnTV0r3VdDeleBZ6FkslQ
          claim_id: c_ijmvB9zbVZfDOGpDoh4RKa
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_FtuUTb6ACwBxcj5M1tKQTh
        status: active
        display_name: 王義立
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_igO9gxT5_fGDFZyuaYUKRG
        subject_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_1Sr2MeB1CXNNgUHXiuspj3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d7fQo_WLl6TetCKpGBM74V
          claim_id: c_igO9gxT5_fGDFZyuaYUKRG
          source_id: s_ZzQV6T3ECP8qXsgp5zd4qq
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ZzQV6T3ECP8qXsgp5zd4qq
            source_type: api_record
            title: 中国历代人物传记资料库：鄭氏(王文幹妻)（CBDB 158746）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158746&o=json
            external_identifier: CBDB:158746
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1Sr2MeB1CXNNgUHXiuspj3
        status: active
        display_name: 鄭氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_4PqXQF4-uVoMIWO6uNiQpB
        subject_person_id: p_A1tXxgh42mmsn6d6eNs4nD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WHlCDaTV-yakvThoX9_bWG
          claim_id: c_4PqXQF4-uVoMIWO6uNiQpB
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_A1tXxgh42mmsn6d6eNs4nD
        status: active
        display_name: 王奉忠
        merged_into_person_id: null
    - claim:
        id: c_YgH8N5PWU9xEWMkiPTZvm1
        subject_person_id: p_eqTLPp4L1yE8imCTDAgei5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xT91PgYZaQ28ZWS5H1F1Pb
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_thzzfrkb6kuhlTQcbYMY6X
          claim_id: c_YgH8N5PWU9xEWMkiPTZvm1
          source_id: s_1SQTm9bfti1Cf4E7AWrBph
          stance: supports
          locator: 唐代墓誌匯編:二卷，Huichang 37：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_eqTLPp4L1yE8imCTDAgei5
        status: active
        display_name: 王英進
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王文幹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文幹 | accepted |
| birth.date | 792年 | accepted |
| death.date | 844年 | accepted |
| bio.summary | 王文幹（792年—844年），唐人物。籍贯萬年。（中国历代人物传记资料库 CBDB 141823） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iCYMvWqdPTMReNWcJw9Xs2 | 王臣端 | accepted |
| children | p_dACwgZwbNR1ZJ5Htbc7g4U | 王義仙 | accepted |
| children | p_FtuUTb6ACwBxcj5M1tKQTh | 王義立 | accepted |
| spouses | p_1Sr2MeB1CXNNgUHXiuspj3 | 鄭氏 | accepted |
| ancestors | p_A1tXxgh42mmsn6d6eNs4nD | 王奉忠 | accepted |
| ancestors | p_eqTLPp4L1yE8imCTDAgei5 | 王英進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文幹（CBDB 141823）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=141823&o=json)
- [中国历代人物传记资料库：鄭氏(王文幹妻)（CBDB 158746）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=158746&o=json)
