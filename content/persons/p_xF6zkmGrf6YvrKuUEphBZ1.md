---
schema: wang-person/v1
id: p_xF6zkmGrf6YvrKuUEphBZ1
status: active
merged_into: null
display_name: 王震
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_17wVNEtmeruSEoLjjrpNGf
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SVciMjbzmXZrGg4r4QvXHp
          claim_id: c_17wVNEtmeruSEoLjjrpNGf
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
          stance: supports
          locator: CBDB:126809
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126809）
          source: &a1
            id: s_yt9dBKAU2mqfUrLf4VqmXu
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 126809）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126809&o=json
            external_identifier: CBDB:126809
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.222Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_aKMMjBcEp4VVnB41UhcNu5
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
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
        - id: cs_pnYhUJdnq34BK7StsWKv91
          claim_id: c_aKMMjBcEp4VVnB41UhcNu5
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
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
        id: c_yeB2cNDwkW3tZEYQoQHo3t
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1541年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_z9KhFYEJe9pTG9vbYL5ywD
          claim_id: c_yeB2cNDwkW3tZEYQoQHo3t
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
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
        id: c_j7pvZdMdbNDWCw6WnnMqrw
        subject_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王震（1460年—1541年），明人物。明清進士進士，籍贯邢臺，入仕進士，曾任參知政事、府尹。（中国历代人物传记资料库 CBDB 126809）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Q5HJLT5Hl_lvFsZZsBVdMZ
          claim_id: c_j7pvZdMdbNDWCw6WnnMqrw
          source_id: s_yt9dBKAU2mqfUrLf4VqmXu
          stance: supports
          locator: CBDB:126809
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_TeRMUtfPwpqfP-P-ERQclt
        subject_person_id: p_fQRM5daE8Wp7q6E4q4CiyU
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WSXXxlRTEVXXf54rUmqiYJ
          claim_id: c_TeRMUtfPwpqfP-P-ERQclt
          source_id: s_YKpBZT3wCJyrDyQ2N39GfG
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_YKpBZT3wCJyrDyQ2N39GfG
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 266730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json
            external_identifier: CBDB:266730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fQRM5daE8Wp7q6E4q4CiyU
        status: active
        display_name: 王整
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Zgkl9IHndeXgm7qVJmRTwo
        subject_person_id: p_Xf7ZVghWVjEAFLApV32xJC
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aQ3h0VP0g5yMkBODuep7pu
          claim_id: c_Zgkl9IHndeXgm7qVJmRTwo
          source_id: s_3xLkzgdTP2z4or1Ux5xPpg
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3xLkzgdTP2z4or1Ux5xPpg
            source_type: api_record
            title: 中国历代人物传记资料库：王景賢（CBDB 266728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266728&o=json
            external_identifier: CBDB:266728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.727Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Xf7ZVghWVjEAFLApV32xJC
        status: active
        display_name: 王景賢
        merged_into_person_id: null
    - claim:
        id: c_XVoF_fzMwsOjyelmxDyRrK
        subject_person_id: p_XS4nwAXFmAH53tQmi43AXd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PZPR9uVttv_WOgKr7Tx0zK
          claim_id: c_XVoF_fzMwsOjyelmxDyRrK
          source_id: s_MDpqgWNHEj6A8FLWAD3zbM
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二百零四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MDpqgWNHEj6A8FLWAD3zbM
            source_type: api_record
            title: 中国历代人物传记资料库：王罍（CBDB 266729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266729&o=json
            external_identifier: CBDB:266729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_XS4nwAXFmAH53tQmi43AXd
        status: active
        display_name: 王罍
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_TCuFPOQHve2G_78SMqGR2w
        subject_person_id: p_7o6MoVWfZSBkk89ag743vC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wy9cqTr9GVUGdO1cNSMT5J
          claim_id: c_TCuFPOQHve2G_78SMqGR2w
          source_id: s_LDhjQpBmIBDM65hNu72He5
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126809 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LDhjQpBmIBDM65hNu72He5
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 266735）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266735&o=json
            external_identifier: CBDB:266735
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7o6MoVWfZSBkk89ag743vC
        status: active
        display_name: 王章
        merged_into_person_id: null
    - claim:
        id: c_2UAdQQUVUqf0a6aDxV9N57
        subject_person_id: p_FwLUw3WrXjg5xLjoaFQBBj
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_468scsMi23PIF4kIkjQ7BX
          claim_id: c_2UAdQQUVUqf0a6aDxV9N57
          source_id: s_6s8tdOKbXvhb9gxUgD8J5I
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126809 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_6s8tdOKbXvhb9gxUgD8J5I
            source_type: api_record
            title: 中国历代人物传记资料库：王文（CBDB 266734）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json
            external_identifier: CBDB:266734
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FwLUw3WrXjg5xLjoaFQBBj
        status: active
        display_name: 王文
        merged_into_person_id: null
    - claim:
        id: c_CueBQKwXvp-a64kshmWdND
        subject_person_id: p_ZsSNiK6UcNHHYbJBdBk4eu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_esi3_uDzqhpgV7nUY6Bd3T
          claim_id: c_CueBQKwXvp-a64kshmWdND
          source_id: s_IWu45BsEXgR6nH6xzdGvTx
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126809 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IWu45BsEXgR6nH6xzdGvTx
            source_type: api_record
            title: 中国历代人物传记资料库：王滿（CBDB 266736）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266736&o=json
            external_identifier: CBDB:266736
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZsSNiK6UcNHHYbJBdBk4eu
        status: active
        display_name: 王滿
        merged_into_person_id: null
    - claim:
        id: c_MjDHWTBpzIh4SQaKmCymNO
        subject_person_id: p_r4Cy1HGiZGHkqrn2f4ov9w
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ayry6Yk6qRvA0mmej_-UX6
          claim_id: c_MjDHWTBpzIh4SQaKmCymNO
          source_id: s_B2vwCBrHX4nnzHXf53QB9r
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126809 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B2vwCBrHX4nnzHXf53QB9r
            source_type: api_record
            title: 中国历代人物传记资料库：王霆（CBDB 266739）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json
            external_identifier: CBDB:266739
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_r4Cy1HGiZGHkqrn2f4ov9w
        status: active
        display_name: 王霆
        merged_into_person_id: null
    - claim:
        id: c_7U32xjDupwGG_x6LUKKrXa
        subject_person_id: p_teLLsXwDtjSE9mGHPHRvQu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_xF6zkmGrf6YvrKuUEphBZ1
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k6X67e2HUQ566OPuDL-Kh9
          claim_id: c_7U32xjDupwGG_x6LUKKrXa
          source_id: s_jW0JjznTQQmaP0dMBZ36cv
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126809 王震）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jW0JjznTQQmaP0dMBZ36cv
            source_type: api_record
            title: 中国历代人物传记资料库：王霓（CBDB 266738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266738&o=json
            external_identifier: CBDB:266738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_teLLsXwDtjSE9mGHPHRvQu
        status: active
        display_name: 王霓
        merged_into_person_id: null
---

# 王震

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王震 | accepted |
| birth.date | 1460年 | accepted |
| death.date | 1541年 | accepted |
| bio.summary | 王震（1460年—1541年），明人物。明清進士進士，籍贯邢臺，入仕進士，曾任參知政事、府尹。（中国历代人物传记资料库 CBDB 126809） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fQRM5daE8Wp7q6E4q4CiyU | 王整 | accepted |
| ancestors | p_Xf7ZVghWVjEAFLApV32xJC | 王景賢 | accepted |
| ancestors | p_XS4nwAXFmAH53tQmi43AXd | 王罍 | accepted |
| other | p_7o6MoVWfZSBkk89ag743vC | 王章 | accepted |
| other | p_FwLUw3WrXjg5xLjoaFQBBj | 王文 | accepted |
| other | p_ZsSNiK6UcNHHYbJBdBk4eu | 王滿 | accepted |
| other | p_r4Cy1HGiZGHkqrn2f4ov9w | 王霆 | accepted |
| other | p_teLLsXwDtjSE9mGHPHRvQu | 王霓 | accepted |

## 外部来源

- [中国历代人物传记资料库：王景賢（CBDB 266728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266728&o=json)
- [中国历代人物传记资料库：王罍（CBDB 266729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266729&o=json)
- [中国历代人物传记资料库：王滿（CBDB 266736）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266736&o=json)
- [中国历代人物传记资料库：王霓（CBDB 266738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266738&o=json)
- [中国历代人物传记资料库：王霆（CBDB 266739）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266739&o=json)
- [中国历代人物传记资料库：王文（CBDB 266734）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266734&o=json)
- [中国历代人物传记资料库：王章（CBDB 266735）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266735&o=json)
- [中国历代人物传记资料库：王震（CBDB 126809）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126809&o=json)
- [中国历代人物传记资料库：王整（CBDB 266730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=266730&o=json)
