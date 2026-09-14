---
schema: wang-person/v1
id: p_xjFrEJTtUqGXh8SmiFrc9m
status: active
merged_into: null
display_name: 王光濟
revision: 7
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NP3893UYLAGW2esoSR2yih
        subject_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rwo5fm3dwhS3ywjfMERCJg
          claim_id: c_NP3893UYLAGW2esoSR2yih
          source_id: s_3AiAh9dMZr8E6K9ysLgji6
          stance: supports
          locator: CBDB:202037
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202037）
          source: &a1
            id: s_3AiAh9dMZr8E6K9ysLgji6
            source_type: api_record
            title: 中国历代人物传记资料库：王光濟（CBDB 202037）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202037&o=json
            external_identifier: CBDB:202037
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.714Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9DPEK23aNurJUQEEDwizMK
        subject_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1491年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4YhAS63LpHn5UL3r862V5d
          claim_id: c_9DPEK23aNurJUQEEDwizMK
          source_id: s_3AiAh9dMZr8E6K9ysLgji6
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
        id: c_UQB7RDj4PcWRZM1MyNjZCi
        subject_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光濟（生于1491年），明人物。明清進士進士，籍贯西安府，入仕進士。（中国历代人物传记资料库 CBDB 202037）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_p4bbnTHKLCL4ujiZWOaZyT
          claim_id: c_UQB7RDj4PcWRZM1MyNjZCi
          source_id: s_3AiAh9dMZr8E6K9ysLgji6
          stance: supports
          locator: CBDB:202037
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_nUIP5ZYoVEDsUFo4Wz3izg
        subject_person_id: p_N8KkzPBYZP1o7g6fiUXXY5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PUN0-onWGYaprk8aNl9FJT
          claim_id: c_nUIP5ZYoVEDsUFo4Wz3izg
          source_id: s_bu3TayYnW4B95gGyu3jBkW
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百六十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bu3TayYnW4B95gGyu3jBkW
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 282378）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282378&o=json
            external_identifier: CBDB:282378
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_N8KkzPBYZP1o7g6fiUXXY5
        status: active
        display_name: 王鎬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-PwpjKmR0BH4s4DYusWNav
        subject_person_id: p_7gQ1A5JJhdgVDMXJML3ofq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_flxv1jfwWMIoghtTf5VsCk
          claim_id: c_-PwpjKmR0BH4s4DYusWNav
          source_id: s_KgeJHe4pb6EtuAckJe9F9J
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百六十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KgeJHe4pb6EtuAckJe9F9J
            source_type: api_record
            title: 中国历代人物传记资料库：王璔（CBDB 282377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282377&o=json
            external_identifier: CBDB:282377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.080Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7gQ1A5JJhdgVDMXJML3ofq
        status: active
        display_name: 王璔
        merged_into_person_id: null
    - claim:
        id: c_C_y9nu8EOgiL_Y6pQoX_kr
        subject_person_id: p_Ggo2BpyyhfrE6os3unF236
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lSkRZGYmQXW6AUmRkjhzh1
          claim_id: c_C_y9nu8EOgiL_Y6pQoX_kr
          source_id: s_DQsKKbbSmmVi22XmPYYUMV
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百六十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DQsKKbbSmmVi22XmPYYUMV
            source_type: api_record
            title: 中国历代人物传记资料库：王勛（CBDB 282376）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282376&o=json
            external_identifier: CBDB:282376
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.079Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Ggo2BpyyhfrE6os3unF236
        status: active
        display_name: 王勛
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_OFpZPQqy8ti81Aj4aMl2nW
        subject_person_id: p_4s3ZpaUEZnwkHi8NgfSik5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eHHRJLGj_e9fKurS3koVAN
          claim_id: c_OFpZPQqy8ti81Aj4aMl2nW
          source_id: s_xXwhnUqmEkIYEh9J652KaX
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202037 王光濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_xXwhnUqmEkIYEh9J652KaX
            source_type: api_record
            title: 中国历代人物传记资料库：王恭濟（CBDB 282382）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282382&o=json
            external_identifier: CBDB:282382
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4s3ZpaUEZnwkHi8NgfSik5
        status: active
        display_name: 王恭濟
        merged_into_person_id: null
    - claim:
        id: c_NOHAglivbG7RriHpWb2NXp
        subject_person_id: p_APBHWXmdcgA8u6TNkgqZ3s
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0k7UVFGKyLWb1XfTLsqd40
          claim_id: c_NOHAglivbG7RriHpWb2NXp
          source_id: s_GH52LIPfgFcqpsA9-YFZXY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202037 王光濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GH52LIPfgFcqpsA9-YFZXY
            source_type: api_record
            title: 中国历代人物传记资料库：王惠濟（CBDB 282381）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282381&o=json
            external_identifier: CBDB:282381
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_APBHWXmdcgA8u6TNkgqZ3s
        status: active
        display_name: 王惠濟
        merged_into_person_id: null
    - claim:
        id: c_oK1oxwp8YoQf9mDPe5U30H
        subject_person_id: p_sM3TGmmZiDwSdJPqv629wp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xjFrEJTtUqGXh8SmiFrc9m
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_euJobNuQtmvx733Pf8WKF3
          claim_id: c_oK1oxwp8YoQf9mDPe5U30H
          source_id: s_M5GenNjgWAEEDLKG58qRbh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202037 王光濟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_M5GenNjgWAEEDLKG58qRbh
            source_type: api_record
            title: 中国历代人物传记资料库：王慶濟（CBDB 282383）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json
            external_identifier: CBDB:282383
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sM3TGmmZiDwSdJPqv629wp
        status: active
        display_name: 王慶濟
        merged_into_person_id: null
---

# 王光濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光濟 | accepted |
| birth.date | 1491年 | accepted |
| bio.summary | 王光濟（生于1491年），明人物。明清進士進士，籍贯西安府，入仕進士。（中国历代人物传记资料库 CBDB 202037） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N8KkzPBYZP1o7g6fiUXXY5 | 王鎬 | accepted |
| ancestors | p_7gQ1A5JJhdgVDMXJML3ofq | 王璔 | accepted |
| ancestors | p_Ggo2BpyyhfrE6os3unF236 | 王勛 | accepted |
| other | p_4s3ZpaUEZnwkHi8NgfSik5 | 王恭濟 | accepted |
| other | p_APBHWXmdcgA8u6TNkgqZ3s | 王惠濟 | accepted |
| other | p_sM3TGmmZiDwSdJPqv629wp | 王慶濟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭濟（CBDB 282382）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282382&o=json)
- [中国历代人物传记资料库：王光濟（CBDB 202037）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202037&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 282378）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282378&o=json)
- [中国历代人物传记资料库：王惠濟（CBDB 282381）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282381&o=json)
- [中国历代人物传记资料库：王慶濟（CBDB 282383）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282383&o=json)
- [中国历代人物传记资料库：王勛（CBDB 282376）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282376&o=json)
- [中国历代人物传记资料库：王璔（CBDB 282377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282377&o=json)
