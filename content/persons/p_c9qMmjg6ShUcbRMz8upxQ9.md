---
schema: wang-person/v1
id: p_c9qMmjg6ShUcbRMz8upxQ9
status: active
merged_into: null
display_name: 王景明
cbdb_id: 255290
revision: 6
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_e62XqEbGgd1xD6ScLAn75i
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景明，明人物。成化十七年進士，籍贯嘉善，曾任賜冠帶。（中国历代人物传记资料库 CBDB 255290）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Z3Ny9gQyv-gLNd6m0VCFQe
          claim_id: c_e62XqEbGgd1xD6ScLAn75i
          source_id: s_hCQUDQqsN9ik9Qf3RsVPNx
          stance: supports
          locator: CBDB:255290
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_hCQUDQqsN9ik9Qf3RsVPNx
            source_type: api_record
            title: 中国历代人物传记资料库：王景明（CBDB 255290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255290&o=json
            external_identifier: CBDB:255290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4DNoUpU1jnLncHPuQb5zM7
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王景明
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FBWJhCRzudgVY2Y1Ao23NC
          claim_id: c_4DNoUpU1jnLncHPuQb5zM7
          source_id: s_hCQUDQqsN9ik9Qf3RsVPNx
          stance: supports
          locator: CBDB:255290
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_XRk4Q5iCT3-lIADkwSOPi9
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_aabBxXPLcM6N6VjGC9FrrY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tcse5frLZiwaidZzCmRSoB
          claim_id: c_XRk4Q5iCT3-lIADkwSOPi9
          source_id: s_DxH93UieDPA9NdBmWVHZkb
          stance: supports
          locator: 成化十七年進士登科錄:一卷，第二甲第六十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DxH93UieDPA9NdBmWVHZkb
            source_type: api_record
            title: 中国历代人物传记资料库：王琳（CBDB 126709）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json
            external_identifier: CBDB:126709
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.144Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aabBxXPLcM6N6VjGC9FrrY
        status: active
        display_name: 王琳
        merged_into_person_id: null
    - claim:
        id: c_0gNGujcj21dLzDD_deRu6x
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A9oLiaD4xcFsHGFj7fqFJN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__oDUW9VtUld2krUZ1JeTxz
          claim_id: c_0gNGujcj21dLzDD_deRu6x
          source_id: s_9KbyqvGXZze4LOaSH9FjDh
          stance: supports
          locator: CBDB：兄弟 王琳（126709）之父／母 王景明
          quotation: null
          interpretation_note: 由兄弟关系推断：王瑨 与 王琳 为同胞（CBDB 记「弟」），王琳 之父／母即 王瑨 之父／母。
          source:
            id: s_9KbyqvGXZze4LOaSH9FjDh
            source_type: api_record
            title: 中国历代人物传记资料库：王瑨（CBDB 255296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255296&o=json
            external_identifier: CBDB:255296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A9oLiaD4xcFsHGFj7fqFJN
        status: active
        display_name: 王瑨
        merged_into_person_id: null
    - claim:
        id: c_CKSrFsPuDuc-A-sylMv6_O
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KN3PPHoaBhM5325Xwy9UqS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYTziZevggremhApW8mb9V
          claim_id: c_CKSrFsPuDuc-A-sylMv6_O
          source_id: s_ZegnjelONE0gqcRsKwRsq7
          stance: supports
          locator: CBDB：兄弟 王琳（126709）之父／母 王景明
          quotation: null
          interpretation_note: 由兄弟关系推断：王璿 与 王琳 为同胞（CBDB 记「弟」），王琳 之父／母即 王璿 之父／母。
          source:
            id: s_ZegnjelONE0gqcRsKwRsq7
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 255297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json
            external_identifier: CBDB:255297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KN3PPHoaBhM5325Xwy9UqS
        status: active
        display_name: 王璿
        merged_into_person_id: null
    - claim:
        id: c_ohaLxMycEnQrpxR-31wGeY
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RUz3UvbxQozjfbEaf8NyYp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0C5D6TpsNREQMaLh3FkUTS
          claim_id: c_ohaLxMycEnQrpxR-31wGeY
          source_id: s_sCnWq5w-ElI3HJBbI1Owu1
          stance: supports
          locator: CBDB：兄弟 王琳（126709）之父／母 王景明
          quotation: null
          interpretation_note: 由兄弟关系推断：王玉 与 王琳 为同胞（CBDB 记「弟」），王琳 之父／母即 王玉 之父／母。
          source:
            id: s_sCnWq5w-ElI3HJBbI1Owu1
            source_type: api_record
            title: 中国历代人物传记资料库：王玉（CBDB 255298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255298&o=json
            external_identifier: CBDB:255298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RUz3UvbxQozjfbEaf8NyYp
        status: active
        display_name: 王玉
        merged_into_person_id: null
    - claim:
        id: c_ASYmc86LyjqXluKyzEeeNZ
        subject_person_id: p_c9qMmjg6ShUcbRMz8upxQ9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pbocdTykK88XksMX8Ffw82
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GeW_2fy3VqU-BQA58NM4po
          claim_id: c_ASYmc86LyjqXluKyzEeeNZ
          source_id: s_2kaL8NXKX0hYQ8IkVj4_Ep
          stance: supports
          locator: CBDB：兄弟 王琳（126709）之父／母 王景明
          quotation: null
          interpretation_note: 由兄弟关系推断：王瓊 与 王琳 为同胞（CBDB 记「弟」），王琳 之父／母即 王瓊 之父／母。
          source:
            id: s_2kaL8NXKX0hYQ8IkVj4_Ep
            source_type: api_record
            title: 中国历代人物传记资料库：王瓊（CBDB 255295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255295&o=json
            external_identifier: CBDB:255295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pbocdTykK88XksMX8Ffw82
        status: active
        display_name: 王瓊
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王景明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王景明，明人物。成化十七年進士，籍贯嘉善，曾任賜冠帶。（中国历代人物传记资料库 CBDB 255290） | accepted |
| name.primary | 王景明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_aabBxXPLcM6N6VjGC9FrrY | 王琳 | accepted |
| children | p_A9oLiaD4xcFsHGFj7fqFJN | 王瑨 | accepted |
| children | p_KN3PPHoaBhM5325Xwy9UqS | 王璿 | accepted |
| children | p_RUz3UvbxQozjfbEaf8NyYp | 王玉 | accepted |
| children | p_pbocdTykK88XksMX8Ffw82 | 王瓊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王瑨（CBDB 255296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255296&o=json)
- [中国历代人物传记资料库：王景明（CBDB 255290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255290&o=json)
- [中国历代人物传记资料库：王琳（CBDB 126709）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126709&o=json)
- [中国历代人物传记资料库：王瓊（CBDB 255295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255295&o=json)
- [中国历代人物传记资料库：王璿（CBDB 255297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255297&o=json)
- [中国历代人物传记资料库：王玉（CBDB 255298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255298&o=json)
