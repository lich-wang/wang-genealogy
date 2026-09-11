---
schema: wang-person/v1
id: p_yBv5FsmN9BCFNm7cQbu6uG
status: active
merged_into: null
display_name: 王問
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AdnqByDERxc4SF55A4RKvr
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王問
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GpEu1MG1oqTP63A8FXphpS
          claim_id: c_AdnqByDERxc4SF55A4RKvr
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
          stance: supports
          locator: CBDB:126680
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126680）
          source: &a1
            id: s_4aTsDo2SV3fPavKDsGeNKr
            source_type: api_record
            title: 中国历代人物传记资料库：王問（CBDB 126680）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126680&o=json
            external_identifier: CBDB:126680
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.116Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_UbekEwic5Gs4Sw3MhHdGUF
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1497年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rjFPL18auFurTyFJi5YH4t
          claim_id: c_UbekEwic5Gs4Sw3MhHdGUF
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
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
        id: c_eTGJmeQXsURbsPGPV19Kyb
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1576年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XjvJr8BhZ49toW2CJBowqf
          claim_id: c_eTGJmeQXsURbsPGPV19Kyb
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
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
        id: c_z6zZZnVw23AuMPohfq3GQ7
        subject_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
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
        - id: cs_gNfG9qdRB9bdVFbwJZWpAR
          claim_id: c_z6zZZnVw23AuMPohfq3GQ7
          source_id: s_4aTsDo2SV3fPavKDsGeNKr
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_yE-U2JHj3LPx8J_GNqiBal
        subject_person_id: p_CLoHFxBigUAoAPHA5drAtB
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_yBv5FsmN9BCFNm7cQbu6uG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2_bnoWI0_p3TDAarB6G_kl
          claim_id: c_yE-U2JHj3LPx8J_GNqiBal
          source_id: s_g37KFiHv2QsMaWusyfDLQY
          stance: supports
          locator: 嘉靖十七年進士登科錄:一卷，第二甲第十八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_g37KFiHv2QsMaWusyfDLQY
            source_type: api_record
            title: 中国历代人物传记资料库：王經（CBDB 298834）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298834&o=json
            external_identifier: CBDB:298834
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.598Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CLoHFxBigUAoAPHA5drAtB
        status: active
        display_name: 王經
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王問

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王問 | accepted |
| birth.date | 1497年 | accepted |
| death.date | 1576年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_CLoHFxBigUAoAPHA5drAtB | 王經 | accepted |

## 外部来源

- [中国历代人物传记资料库：王經（CBDB 298834）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298834&o=json)
- [中国历代人物传记资料库：王問（CBDB 126680）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126680&o=json)
