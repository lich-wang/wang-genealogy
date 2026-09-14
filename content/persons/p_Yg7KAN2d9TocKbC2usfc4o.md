---
schema: wang-person/v1
id: p_Yg7KAN2d9TocKbC2usfc4o
status: active
merged_into: null
display_name: 王尚賓
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yZk4LDstqj6Xp8uUKp4JXE
        subject_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fBU4mJBrUEaAa2CoWrFvA9
          claim_id: c_yZk4LDstqj6Xp8uUKp4JXE
          source_id: s_HkhggFUNPPPGN5GGNBHF2p
          stance: supports
          locator: CBDB:201251
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201251）
          source: &a1
            id: s_HkhggFUNPPPGN5GGNBHF2p
            source_type: api_record
            title: 中国历代人物传记资料库：王尚賓（CBDB 201251）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201251&o=json
            external_identifier: CBDB:201251
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.666Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_dtwSW8cL2GC3JBFtDws4oh
        subject_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1450年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBu3fKZ5X6QBzuSqNiFD45
          claim_id: c_dtwSW8cL2GC3JBFtDws4oh
          source_id: s_HkhggFUNPPPGN5GGNBHF2p
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
        id: c_moWNB1934eNx15zFMQfHmM
        subject_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王尚賓（生于1450年），明人物。明清進士進士，籍贯陽曲，入仕進士。（中国历代人物传记资料库 CBDB 201251）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RIj1Pyf4fU5YNbRNSdba4s
          claim_id: c_moWNB1934eNx15zFMQfHmM
          source_id: s_HkhggFUNPPPGN5GGNBHF2p
          stance: supports
          locator: CBDB:201251
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9MdIecyFo1ssbNwjaCUS-P
        subject_person_id: p_cp9cyybo898tD93WCpAwvL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nzFXB9xGtrFNrjS_dHjyQ1
          claim_id: c_9MdIecyFo1ssbNwjaCUS-P
          source_id: s_T3oa95DKVx9qY8FtUAqEg6
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_T3oa95DKVx9qY8FtUAqEg6
            source_type: api_record
            title: 中国历代人物传记资料库：王文昌（CBDB 269538）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269538&o=json
            external_identifier: CBDB:269538
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cp9cyybo898tD93WCpAwvL
        status: active
        display_name: 王文昌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_xIB3C8-oyYje_NBNlPHIFX
        subject_person_id: p_SKKWaTeWq4p8iTyWiTdZLD
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aLxuibhvLhW5erl-yFj0mY
          claim_id: c_xIB3C8-oyYje_NBNlPHIFX
          source_id: s_JCgPwBLSBfJtgn9yxNnsTE
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百七十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_JCgPwBLSBfJtgn9yxNnsTE
            source_type: api_record
            title: 中国历代人物传记资料库：王迪（CBDB 269537）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269537&o=json
            external_identifier: CBDB:269537
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.814Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_SKKWaTeWq4p8iTyWiTdZLD
        status: active
        display_name: 王迪
        merged_into_person_id: null
    - claim:
        id: c_pJvRkXtxtm5LwgTCdFBD_T
        subject_person_id: p_xHv79WW3VFLCAQmL56PKCu
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UFgLK9Vfl7P60j071Dx4CI
          claim_id: c_pJvRkXtxtm5LwgTCdFBD_T
          source_id: s_s7vEP7SkN2vHZ7ZrLV7RfR
          stance: supports
          locator: 弘治九年進士登科錄:一卷，第三甲第一百七十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s7vEP7SkN2vHZ7ZrLV7RfR
            source_type: api_record
            title: 中国历代人物传记资料库：王士原（CBDB 269536）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269536&o=json
            external_identifier: CBDB:269536
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_xHv79WW3VFLCAQmL56PKCu
        status: active
        display_name: 王士原
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_64Anxh45jez_uPK3U4GTcp
        subject_person_id: p_Yg7KAN2d9TocKbC2usfc4o
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_YzzMWW58D8YcaThYSmHjMN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FrmXtJSdDofkURl_7ah_OI
          claim_id: c_64Anxh45jez_uPK3U4GTcp
          source_id: s_nJFx9CV2fDhK1OvJTZ0jly
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201251 王尚賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_nJFx9CV2fDhK1OvJTZ0jly
            source_type: api_record
            title: 中国历代人物传记资料库：王子誠（CBDB 269542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269542&o=json
            external_identifier: CBDB:269542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YzzMWW58D8YcaThYSmHjMN
        status: active
        display_name: 王子誠
        merged_into_person_id: null
---

# 王尚賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王尚賓 | accepted |
| birth.date | 1450年 | accepted |
| bio.summary | 王尚賓（生于1450年），明人物。明清進士進士，籍贯陽曲，入仕進士。（中国历代人物传记资料库 CBDB 201251） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cp9cyybo898tD93WCpAwvL | 王文昌 | accepted |
| ancestors | p_SKKWaTeWq4p8iTyWiTdZLD | 王迪 | accepted |
| ancestors | p_xHv79WW3VFLCAQmL56PKCu | 王士原 | accepted |
| other | p_YzzMWW58D8YcaThYSmHjMN | 王子誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王迪（CBDB 269537）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269537&o=json)
- [中国历代人物传记资料库：王尚賓（CBDB 201251）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201251&o=json)
- [中国历代人物传记资料库：王士原（CBDB 269536）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269536&o=json)
- [中国历代人物传记资料库：王文昌（CBDB 269538）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269538&o=json)
- [中国历代人物传记资料库：王子誠（CBDB 269542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=269542&o=json)
