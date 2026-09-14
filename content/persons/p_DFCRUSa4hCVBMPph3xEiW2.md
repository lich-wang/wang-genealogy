---
schema: wang-person/v1
id: p_DFCRUSa4hCVBMPph3xEiW2
status: active
merged_into: null
display_name: 王瑤
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_732BEUuu9fX3r9mFdkPzM2
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6vrWA86Ug1gC1F3K7znbkc
          claim_id: c_732BEUuu9fX3r9mFdkPzM2
          source_id: s_YfQ3rK1dPb5GKm5FoFzp8U
          stance: supports
          locator: CBDB:313196
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313196）
          source: &a1
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
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_H1ts63KWoXdLm1ZScs72Yw
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王瑤，明人物。嘉靖二十九年進士，籍贯祁州。（中国历代人物传记资料库 CBDB 313196）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v_dNYaUPZz8phtbZ4go9U4
          claim_id: c_H1ts63KWoXdLm1ZScs72Yw
          source_id: s_YfQ3rK1dPb5GKm5FoFzp8U
          stance: supports
          locator: CBDB:313196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source: *a1
      object_person:
        id: p_rkwUCxJkarsqGGHssHtTdk
        status: active
        display_name: 王用賢
        merged_into_person_id: null
    - claim:
        id: c_8q-JTUclTHzHGVBJSCkuqI
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AXh6MDbVAFrDaiZNkktLDm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o5jw7SrHk2X7RCdrY-ijPV
          claim_id: c_8q-JTUclTHzHGVBJSCkuqI
          source_id: s_o0XpbxevemEQfJE-bUvfeE
          stance: supports
          locator: CBDB：兄弟 王用賢（204011）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王尚賢 与 王用賢 为同胞（CBDB 记「兄」），王用賢 之父／母即 王尚賢 之父／母。
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
        id: c_Ro6gOcuDBjI6yRJr3pOG3G
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hgAHAP1Kqo5uZsNryC1Jj2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-rU-u5UeJh57QgQ2R4lRaN
          claim_id: c_Ro6gOcuDBjI6yRJr3pOG3G
          source_id: s_z8ePkpAHqmxwLjIrIyaI98
          stance: supports
          locator: CBDB：兄弟 王用賢（204011）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王進賢 与 王用賢 为同胞（CBDB 记「兄」），王用賢 之父／母即 王進賢 之父／母。
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
        id: c_87otU6arXkvduXf5eHPDmc
        subject_person_id: p_DFCRUSa4hCVBMPph3xEiW2
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_u6xgK6aoanJfvpoEj1fuaY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G07xbtJvwsTut2ya422HZV
          claim_id: c_87otU6arXkvduXf5eHPDmc
          source_id: s_NTTAK9unuM-rKyjYapDvA4
          stance: supports
          locator: CBDB：兄弟 王用賢（204011）之父／母 王瑤
          quotation: null
          interpretation_note: 由兄弟关系推断：王夢賢 与 王用賢 为同胞（CBDB 记「兄」），王用賢 之父／母即 王夢賢 之父／母。
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
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王瑤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王瑤 | accepted |
| bio.summary | 王瑤，明人物。嘉靖二十九年進士，籍贯祁州。（中国历代人物传记资料库 CBDB 313196） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rkwUCxJkarsqGGHssHtTdk | 王用賢 | accepted |
| children | p_AXh6MDbVAFrDaiZNkktLDm | 王尚賢 | accepted |
| children | p_hgAHAP1Kqo5uZsNryC1Jj2 | 王進賢 | accepted |
| children | p_u6xgK6aoanJfvpoEj1fuaY | 王夢賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進賢（CBDB 313201）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313201&o=json)
- [中国历代人物传记资料库：王夢賢（CBDB 313202）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313202&o=json)
- [中国历代人物传记资料库：王尚賢（CBDB 313200）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313200&o=json)
- [中国历代人物传记资料库：王瑤（CBDB 313196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313196&o=json)
