---
schema: wang-person/v1
id: p_4vr7bkbajYb5aZb5N7UFqC
status: active
merged_into: null
display_name: 王槐
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kmQ9jnERYFiy1QexQ1PzAw
        subject_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_K6KizgE9uAgpcGtNcfPts4
          claim_id: c_kmQ9jnERYFiy1QexQ1PzAw
          source_id: s_wH2PnEf2BVk7cvMTt1YLGi
          stance: supports
          locator: CBDB:200324
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200324）
          source: &a1
            id: s_wH2PnEf2BVk7cvMTt1YLGi
            source_type: api_record
            title: 中国历代人物传记资料库：王槐（CBDB 200324）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200324&o=json
            external_identifier: CBDB:200324
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.603Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_9Avn2jjYdgfjZMxPFKf1YH
        subject_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1445年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_N1UE48cBbtTvR1sXh17fn9
          claim_id: c_9Avn2jjYdgfjZMxPFKf1YH
          source_id: s_wH2PnEf2BVk7cvMTt1YLGi
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
        id: c_UnLS1pdND4q86cK5WHdu7R
        subject_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王槐（生于1445年），明人物。明清進士進士，籍贯陽曲，入仕進士。（中国历代人物传记资料库 CBDB 200324）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VtEULHGIwtmKdNq0t8Y0Vl
          claim_id: c_UnLS1pdND4q86cK5WHdu7R
          source_id: s_wH2PnEf2BVk7cvMTt1YLGi
          stance: supports
          locator: CBDB:200324
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DGV8Op-hxo0rVD93NwopR5
        subject_person_id: p_nM4qfbcaYVkmZPA3x1iCHz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umuS1ImsTlQMZk0MmCfc8P
          claim_id: c_DGV8Op-hxo0rVD93NwopR5
          source_id: s_1199fXDUpPEcQ5vutpJ6RW
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第八十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_1199fXDUpPEcQ5vutpJ6RW
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 256339）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256339&o=json
            external_identifier: CBDB:256339
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.385Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_nM4qfbcaYVkmZPA3x1iCHz
        status: active
        display_name: 王英
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_c-xVmybC-lduih_vePnlHN
        subject_person_id: p_3rB1AVmk8HkFeV89CX3373
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CNzIhOtUEIjBR19EFw7Ci9
          claim_id: c_c-xVmybC-lduih_vePnlHN
          source_id: s_QnCxNaYCuCkkMCBQq5rthW
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第八十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QnCxNaYCuCkkMCBQq5rthW
            source_type: api_record
            title: 中国历代人物传记资料库：王伯達（CBDB 256337）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256337&o=json
            external_identifier: CBDB:256337
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.383Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3rB1AVmk8HkFeV89CX3373
        status: active
        display_name: 王伯達
        merged_into_person_id: null
    - claim:
        id: c_JnnLpkCTs8xacPEf-J3jUn
        subject_person_id: p_GxBFo3Tg3mRPwqsk6hEJZf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gaDgZ6OBydBcfNEV63404d
          claim_id: c_JnnLpkCTs8xacPEf-J3jUn
          source_id: s_WgTBR8r3uB4euDukz43ixA
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第三甲第八十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_WgTBR8r3uB4euDukz43ixA
            source_type: api_record
            title: 中国历代人物传记资料库：王益（CBDB 256338）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256338&o=json
            external_identifier: CBDB:256338
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GxBFo3Tg3mRPwqsk6hEJZf
        status: active
        display_name: 王益
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_V-cZrBS7MTvEtz6reIL8Jz
        subject_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_b32W2sLe2MoVvGfKAYhgfT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_H-QWfg00AJNyxWkyfe2Ihn
          claim_id: c_V-cZrBS7MTvEtz6reIL8Jz
          source_id: s_CKZguHscoKVoJqd9hzq-t-
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200324 王槐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_CKZguHscoKVoJqd9hzq-t-
            source_type: api_record
            title: 中国历代人物传记资料库：王懷玉（CBDB 256344）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256344&o=json
            external_identifier: CBDB:256344
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b32W2sLe2MoVvGfKAYhgfT
        status: active
        display_name: 王懷玉
        merged_into_person_id: null
    - claim:
        id: c_RLdn8Gw8rOpieZjyPUxbLV
        subject_person_id: p_4vr7bkbajYb5aZb5N7UFqC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eb1X6Pc72zAV4ipT7go8w4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0a-7E6XZxizIHaKnVxRfI3
          claim_id: c_RLdn8Gw8rOpieZjyPUxbLV
          source_id: s_SXrXspL_42x-Q-YzHYAH7m
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 200324 王槐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SXrXspL_42x-Q-YzHYAH7m
            source_type: api_record
            title: 中国历代人物传记资料库：王懷珍（CBDB 256343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json
            external_identifier: CBDB:256343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eb1X6Pc72zAV4ipT7go8w4
        status: active
        display_name: 王懷珍
        merged_into_person_id: null
---

# 王槐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王槐 | accepted |
| birth.date | 1445年 | accepted |
| bio.summary | 王槐（生于1445年），明人物。明清進士進士，籍贯陽曲，入仕進士。（中国历代人物传记资料库 CBDB 200324） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nM4qfbcaYVkmZPA3x1iCHz | 王英 | accepted |
| ancestors | p_3rB1AVmk8HkFeV89CX3373 | 王伯達 | accepted |
| ancestors | p_GxBFo3Tg3mRPwqsk6hEJZf | 王益 | accepted |
| other | p_b32W2sLe2MoVvGfKAYhgfT | 王懷玉 | accepted |
| other | p_eb1X6Pc72zAV4ipT7go8w4 | 王懷珍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王伯達（CBDB 256337）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256337&o=json)
- [中国历代人物传记资料库：王槐（CBDB 200324）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200324&o=json)
- [中国历代人物传记资料库：王懷玉（CBDB 256344）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256344&o=json)
- [中国历代人物传记资料库：王懷珍（CBDB 256343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256343&o=json)
- [中国历代人物传记资料库：王益（CBDB 256338）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256338&o=json)
- [中国历代人物传记资料库：王英（CBDB 256339）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=256339&o=json)
