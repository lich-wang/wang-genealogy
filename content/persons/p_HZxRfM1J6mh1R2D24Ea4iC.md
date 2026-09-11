---
schema: wang-person/v1
id: p_HZxRfM1J6mh1R2D24Ea4iC
status: active
merged_into: null
display_name: 王琮
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ouMCN3SpPKJuhrh64HXbCX
        subject_person_id: p_HZxRfM1J6mh1R2D24Ea4iC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王琮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NoPC4PXFetXSb3ZDFaXtQn
          claim_id: c_ouMCN3SpPKJuhrh64HXbCX
          source_id: s_AFFoGAUo1i9TGmBJLQDmVL
          stance: supports
          locator: CBDB:199205
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199205）
          source: &a1
            id: s_AFFoGAUo1i9TGmBJLQDmVL
            source_type: api_record
            title: 中国历代人物传记资料库：王琮（CBDB 199205）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199205&o=json
            external_identifier: CBDB:199205
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.531Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DSxHuQFCE3YLLKsyzDzXBQ
        subject_person_id: p_HZxRfM1J6mh1R2D24Ea4iC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1436年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G7ed7hcCAxBGW5UXDcXpcb
          claim_id: c_DSxHuQFCE3YLLKsyzDzXBQ
          source_id: s_AFFoGAUo1i9TGmBJLQDmVL
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
        id: c_cYyjCFL7mfBrbxwBAdTnKi
        subject_person_id: p_HZxRfM1J6mh1R2D24Ea4iC
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
        - id: cs_VuN57CSEEFoJe7TyJQDpYQ
          claim_id: c_cYyjCFL7mfBrbxwBAdTnKi
          source_id: s_AFFoGAUo1i9TGmBJLQDmVL
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
        id: c_Hqsk1T1wD0M4BStwEejcNf
        subject_person_id: p_iKzgB5Ti6UfA6c2nKJ4Rzy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HZxRfM1J6mh1R2D24Ea4iC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hKuE2wHyZzIbLpiqwNCtGO
          claim_id: c_Hqsk1T1wD0M4BStwEejcNf
          source_id: s_fFGGXEi3rzjSSWCC92FsNd
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百五十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fFGGXEi3rzjSSWCC92FsNd
            source_type: api_record
            title: 中国历代人物传记资料库：王彰（CBDB 241708）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241708&o=json
            external_identifier: CBDB:241708
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.956Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iKzgB5Ti6UfA6c2nKJ4Rzy
        status: active
        display_name: 王彰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Utl08lng1GJ_AUyDm22W2V
        subject_person_id: p_bxXJ3NmDGVGD2GvoRFzPVm
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HZxRfM1J6mh1R2D24Ea4iC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wLr4MUK-VewCTr65dvlbHT
          claim_id: c_Utl08lng1GJ_AUyDm22W2V
          source_id: s_94GJJdSg6wAtgxbXASQSf6
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百五十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_94GJJdSg6wAtgxbXASQSf6
            source_type: api_record
            title: 中国历代人物传记资料库：王恕（CBDB 241706）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241706&o=json
            external_identifier: CBDB:241706
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bxXJ3NmDGVGD2GvoRFzPVm
        status: active
        display_name: 王恕
        merged_into_person_id: null
    - claim:
        id: c_XnqsT2z_JKcnKdVBqP1Wkx
        subject_person_id: p_stYhxuLLiMzJm8BF514o5c
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_HZxRfM1J6mh1R2D24Ea4iC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9p1WQYSaE4oleX6CngY7B8
          claim_id: c_XnqsT2z_JKcnKdVBqP1Wkx
          source_id: s_VY4JrMa5xgbVBwNHBaKKBG
          stance: supports
          locator: 成化二年進士登科錄:一卷，第三甲第一百五十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VY4JrMa5xgbVBwNHBaKKBG
            source_type: api_record
            title: 中国历代人物传记资料库：王進（CBDB 241705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241705&o=json
            external_identifier: CBDB:241705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.955Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_stYhxuLLiMzJm8BF514o5c
        status: active
        display_name: 王進
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王琮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王琮 | accepted |
| birth.date | 1436年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iKzgB5Ti6UfA6c2nKJ4Rzy | 王彰 | accepted |
| ancestors | p_bxXJ3NmDGVGD2GvoRFzPVm | 王恕 | accepted |
| ancestors | p_stYhxuLLiMzJm8BF514o5c | 王進 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琮（CBDB 199205）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199205&o=json)
- [中国历代人物传记资料库：王進（CBDB 241705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241705&o=json)
- [中国历代人物传记资料库：王恕（CBDB 241706）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241706&o=json)
- [中国历代人物传记资料库：王彰（CBDB 241708）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=241708&o=json)
