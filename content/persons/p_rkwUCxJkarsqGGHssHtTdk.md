---
schema: wang-person/v1
id: p_rkwUCxJkarsqGGHssHtTdk
status: active
merged_into: null
display_name: 王用賢
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_eNZQpiFREGB5mMGtCr1549
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v4GUhJxrSXqEFvJUsHi8FC
          claim_id: c_eNZQpiFREGB5mMGtCr1549
          source_id: s_LHQNpdzeLEHSEZ8uKLNEL5
          stance: supports
          locator: CBDB:204011
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204011）
          source: &a1
            id: s_LHQNpdzeLEHSEZ8uKLNEL5
            source_type: api_record
            title: 中国历代人物传记资料库：王用賢（CBDB 204011）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204011&o=json
            external_identifier: CBDB:204011
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_5m7hhcBpLJiP156gGg1rZ7
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1515年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BWpkSh75sUAd6h7rgFXnf5
          claim_id: c_5m7hhcBpLJiP156gGg1rZ7
          source_id: s_LHQNpdzeLEHSEZ8uKLNEL5
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
        id: c_fNanPCFe2FUHwHwwrVMmoT
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用賢（生于1515年），明人物。明清進士進士，籍贯祁州，入仕進士。（中国历代人物传记资料库 CBDB 204011）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2KsmXCb64FExCrXwQLfRt0
          claim_id: c_fNanPCFe2FUHwHwwrVMmoT
          source_id: s_LHQNpdzeLEHSEZ8uKLNEL5
          stance: supports
          locator: CBDB:204011
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tlOf6Sw81sRWcnOg5FBPRO
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NPlS3L5pYTDbUutCkorxD7
          claim_id: c_tlOf6Sw81sRWcnOg5FBPRO
          source_id: s_YfQ3rK1dPb5GKm5FoFzp8U
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第五十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YfQ3rK1dPb5GKm5FoFzp8U
            source_type: api_record
            title: 中国历代人物传记资料库：王瑤（CBDB 313196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313196&o=json
            external_identifier: CBDB:313196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DFCRUSa4hCVBMPph3xEiW2
        status: active
        display_name: 王瑤
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_T8wmbOUKN8ZtFZR2JJkEfk
        subject_person_id: p_YJmBrFyhvA7UtWupQ2PBwG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1QUpLtejYOoF76bhOs-mUi
          claim_id: c_T8wmbOUKN8ZtFZR2JJkEfk
          source_id: s_orYDrZc1EsGnFMPba6NSWA
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第五十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_orYDrZc1EsGnFMPba6NSWA
            source_type: api_record
            title: 中国历代人物传记资料库：王偉（CBDB 313193）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313193&o=json
            external_identifier: CBDB:313193
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.901Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YJmBrFyhvA7UtWupQ2PBwG
        status: active
        display_name: 王偉
        merged_into_person_id: null
    - claim:
        id: c_D165zUClYAZoA77Xv3dU6K
        subject_person_id: p_JMsBmZTJdbYG4P477H3fmS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lFQ8IOo4_FoK2Anr81Gk_u
          claim_id: c_D165zUClYAZoA77Xv3dU6K
          source_id: s_JU8zbD2CR5zjTK8rkxHaXQ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第五十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JU8zbD2CR5zjTK8rkxHaXQ
            source_type: api_record
            title: 中国历代人物传记资料库：王子魯（CBDB 313194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313194&o=json
            external_identifier: CBDB:313194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JMsBmZTJdbYG4P477H3fmS
        status: active
        display_name: 王子魯
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_QZBsdtPqnkk-6HszuzQBC_
        subject_person_id: p_AXh6MDbVAFrDaiZNkktLDm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5CFQP3aPq9mwZW-zNeM20F
          claim_id: c_QZBsdtPqnkk-6HszuzQBC_
          source_id: s_o0XpbxevemEQfJE-bUvfeE
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204011 王用賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_o0XpbxevemEQfJE-bUvfeE
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賢（CBDB 313200）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313200&o=json
            external_identifier: CBDB:313200
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_AXh6MDbVAFrDaiZNkktLDm
        status: active
        display_name: 王尚賢
        merged_into_person_id: null
    - claim:
        id: c_Or3K7SXIche4zW2iR5iYT9
        subject_person_id: p_hgAHAP1Kqo5uZsNryC1Jj2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_rkwUCxJkarsqGGHssHtTdk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WVt2neex_x_A92byTdQ-9h
          claim_id: c_Or3K7SXIche4zW2iR5iYT9
          source_id: s_z8ePkpAHqmxwLjIrIyaI98
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204011 王用賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_z8ePkpAHqmxwLjIrIyaI98
            source_type: api_record
            title: 中国历代人物传记资料库：王進賢（CBDB 313201）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313201&o=json
            external_identifier: CBDB:313201
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hgAHAP1Kqo5uZsNryC1Jj2
        status: active
        display_name: 王進賢
        merged_into_person_id: null
    - claim:
        id: c_l_r-Qs6fJuOH9TeS3liTez
        subject_person_id: p_rkwUCxJkarsqGGHssHtTdk
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_u6xgK6aoanJfvpoEj1fuaY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RDp2TV0cPnT7RY8HJs_rtK
          claim_id: c_l_r-Qs6fJuOH9TeS3liTez
          source_id: s_NTTAK9unuM-rKyjYapDvA4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204011 王用賢）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NTTAK9unuM-rKyjYapDvA4
            source_type: api_record
            title: 中国历代人物传记资料库：王夢賢（CBDB 313202）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313202&o=json
            external_identifier: CBDB:313202
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_u6xgK6aoanJfvpoEj1fuaY
        status: active
        display_name: 王夢賢
        merged_into_person_id: null
---

# 王用賢

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王用賢 | accepted |
| birth.date | 1515年 | accepted |
| bio.summary | 王用賢（生于1515年），明人物。明清進士進士，籍贯祁州，入仕進士。（中国历代人物传记资料库 CBDB 204011） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DFCRUSa4hCVBMPph3xEiW2 | 王瑤 | accepted |
| ancestors | p_YJmBrFyhvA7UtWupQ2PBwG | 王偉 | accepted |
| ancestors | p_JMsBmZTJdbYG4P477H3fmS | 王子魯 | accepted |
| other | p_AXh6MDbVAFrDaiZNkktLDm | 王尚賢 | accepted |
| other | p_hgAHAP1Kqo5uZsNryC1Jj2 | 王進賢 | accepted |
| other | p_u6xgK6aoanJfvpoEj1fuaY | 王夢賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進賢（CBDB 313201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313201&o=json)
- [中国历代人物传记资料库：王夢賢（CBDB 313202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313202&o=json)
- [中国历代人物传记资料库：王尚賢（CBDB 313200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313200&o=json)
- [中国历代人物传记资料库：王偉（CBDB 313193）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313193&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 313196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313196&o=json)
- [中国历代人物传记资料库：王用賢（CBDB 204011）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204011&o=json)
- [中国历代人物传记资料库：王子魯（CBDB 313194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313194&o=json)
