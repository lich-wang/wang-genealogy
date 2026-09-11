---
schema: wang-person/v1
id: p_8Ron7BDzFq6b4FwKnZ8W1Z
status: active
merged_into: null
display_name: 王誼
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D16VQKL9Nxo5fnpnGhG24p
        subject_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王誼
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mNijJmiC165LqzvQgLqEHS
          claim_id: c_D16VQKL9Nxo5fnpnGhG24p
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
          stance: supports
          locator: CBDB:198040
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（198040）
          source: &a1
            id: s_5uu71pxW5w8mKk3gRJU4Cp
            source_type: api_record
            title: 中国历代人物传记资料库：王誼（CBDB 198040）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198040&o=json
            external_identifier: CBDB:198040
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.468Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_L8Fs15VW5WSYFoGQwFimcS
        subject_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1326年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F3fNfzvJErFL96mwJL9tUi
          claim_id: c_L8Fs15VW5WSYFoGQwFimcS
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9DjdLxKuYdLqgGyrC9YtK9
        subject_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C5CHeNaE6DPUH6mY3Vvq88
          claim_id: c_9DjdLxKuYdLqgGyrC9YtK9
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
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
        id: c_m-zCnav98NFdenD7EqgfRw
        subject_person_id: p_QLLV1TJdVbUvB6k8ixrrBp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rErhcWeWVpgg2_FGcmZbUk
          claim_id: c_m-zCnav98NFdenD7EqgfRw
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十六名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QLLV1TJdVbUvB6k8ixrrBp
        status: active
        display_name: 王延聚
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_hw7actrnjsulDTKWcUnEZt
        subject_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fCZuX8X6nUuMiUgz6dpbqH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30pR9GaqReq7oMFRJ-_yjP
          claim_id: c_hw7actrnjsulDTKWcUnEZt
          source_id: s_3gL3Pt9T2eA4YTPT1wItQt
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十六名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3gL3Pt9T2eA4YTPT1wItQt
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王誼妻)（CBDB 335887）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335887&o=json
            external_identifier: CBDB:335887
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fCZuX8X6nUuMiUgz6dpbqH
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_6xMMMFzgTX7LAO8z3MJbBK
        subject_person_id: p_HGdJ2Vtiu1sWrLsmE3Fwym
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2IulGpMKmnn9ie1edfXABe
          claim_id: c_6xMMMFzgTX7LAO8z3MJbBK
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十六名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_HGdJ2Vtiu1sWrLsmE3Fwym
        status: active
        display_name: 王德昭
        merged_into_person_id: null
    - claim:
        id: c_udLsqC5x5C2mzMKtM6KD_7
        subject_person_id: p_zRuB7uZRN1VCZeg1MVsEbz
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8Ron7BDzFq6b4FwKnZ8W1Z
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Xb8N_E4SzmhaPGtYzCqaIL
          claim_id: c_udLsqC5x5C2mzMKtM6KD_7
          source_id: s_5uu71pxW5w8mKk3gRJU4Cp
          stance: supports
          locator: 洪武四年進士登科錄:一卷，第二甲第十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zRuB7uZRN1VCZeg1MVsEbz
        status: active
        display_name: 王思誠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王誼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王誼 | accepted |
| birth.date | 1326年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QLLV1TJdVbUvB6k8ixrrBp | 王延聚 | accepted |
| spouses | p_fCZuX8X6nUuMiUgz6dpbqH | 張氏 | accepted |
| ancestors | p_HGdJ2Vtiu1sWrLsmE3Fwym | 王德昭 | accepted |
| ancestors | p_zRuB7uZRN1VCZeg1MVsEbz | 王思誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王誼（CBDB 198040）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=198040&o=json)
- [中国历代人物传记资料库：張氏(王誼妻)（CBDB 335887）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335887&o=json)
