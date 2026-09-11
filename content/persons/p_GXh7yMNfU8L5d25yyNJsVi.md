---
schema: wang-person/v1
id: p_GXh7yMNfU8L5d25yyNJsVi
status: active
merged_into: null
display_name: 王濟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_siA585naj2S6HL1qhTGFsu
        subject_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_JQRgLPAiTwPXfPTEopG6yA
          claim_id: c_siA585naj2S6HL1qhTGFsu
          source_id: s_DLSCDCfRKy6NX44hY2nBMq
          stance: supports
          locator: CBDB:200530
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200530）
          source: &a1
            id: s_DLSCDCfRKy6NX44hY2nBMq
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 200530）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200530&o=json
            external_identifier: CBDB:200530
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.617Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HK7PnMoXh8MGQdrcBgSC8S
        subject_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1460年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HyjM79p8suqLbbXTGYB7HM
          claim_id: c_HK7PnMoXh8MGQdrcBgSC8S
          source_id: s_DLSCDCfRKy6NX44hY2nBMq
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
        id: c_BD7vr3cCeQYyP9b7bv2kwR
        subject_person_id: p_GXh7yMNfU8L5d25yyNJsVi
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
        - id: cs_ZcNWvh8x4R2LA7QoPn6o2m
          claim_id: c_BD7vr3cCeQYyP9b7bv2kwR
          source_id: s_DLSCDCfRKy6NX44hY2nBMq
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
        id: c_JVhPsTRWi5NKAgraWsXgug
        subject_person_id: p_Yjvr1HxMf73RSYqrbeaxV5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jZy_8-6PTLLcoaKoAo1g4J
          claim_id: c_JVhPsTRWi5NKAgraWsXgug
          source_id: s_DLSCDCfRKy6NX44hY2nBMq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Yjvr1HxMf73RSYqrbeaxV5
        status: active
        display_name: 王能
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_KQdgrCNIngNdj3P-NEu1Gu
        subject_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_ZeetPTLusJfHw751DDAAaW
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cpOyMyzcbn4-jFr7zFLayP
          claim_id: c_KQdgrCNIngNdj3P-NEu1Gu
          source_id: s_2BbzFTAal2pyxRfsh6lto9
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2BbzFTAal2pyxRfsh6lto9
            source_type: api_record
            title: 中国历代人物传记资料库：李氏(王濟妻)（CBDB 259343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259343&o=json
            external_identifier: CBDB:259343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ZeetPTLusJfHw751DDAAaW
        status: active
        display_name: 李氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_p8fER1LBeVFoUiqtvOcu52
        subject_person_id: p_N4oCbP2dDsJQJUqXk7Hx9D
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u2PRROKaeakOoTKE1vJesu
          claim_id: c_p8fER1LBeVFoUiqtvOcu52
          source_id: s_DLSCDCfRKy6NX44hY2nBMq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十七名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_N4oCbP2dDsJQJUqXk7Hx9D
        status: active
        display_name: 王大
        merged_into_person_id: null
    - claim:
        id: c_pQxLyjhjNT2yJI8bvwq7l3
        subject_person_id: p_LhcwXYvKdq6fztHdxjji7e
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GXh7yMNfU8L5d25yyNJsVi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z6RJ8b7rXerwMT4LyObBUI
          claim_id: c_pQxLyjhjNT2yJI8bvwq7l3
          source_id: s_DLSCDCfRKy6NX44hY2nBMq
          stance: supports
          locator: 成化二十三年進士登科錄:一卷，第三甲第七十七名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LhcwXYvKdq6fztHdxjji7e
        status: active
        display_name: 王顯
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| birth.date | 1460年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Yjvr1HxMf73RSYqrbeaxV5 | 王能 | accepted |
| spouses | p_ZeetPTLusJfHw751DDAAaW | 李氏 | accepted |
| ancestors | p_N4oCbP2dDsJQJUqXk7Hx9D | 王大 | accepted |
| ancestors | p_LhcwXYvKdq6fztHdxjji7e | 王顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：李氏(王濟妻)（CBDB 259343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=259343&o=json)
- [中国历代人物传记资料库：王濟（CBDB 200530）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200530&o=json)
