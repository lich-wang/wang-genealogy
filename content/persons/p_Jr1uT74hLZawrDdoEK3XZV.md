---
schema: wang-person/v1
id: p_Jr1uT74hLZawrDdoEK3XZV
status: active
merged_into: null
display_name: 王舉
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wd4nEV2uXfzg263fmqNKHN
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Xr8AsNLJhSPqMUtKKbED9x
          claim_id: c_wd4nEV2uXfzg263fmqNKHN
          source_id: s_93CadBC6FxAXmjJx1iJvy8
          stance: supports
          locator: CBDB:313768
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313768）
          source: &a1
            id: s_93CadBC6FxAXmjJx1iJvy8
            source_type: api_record
            title: 中国历代人物传记资料库：王舉（CBDB 313768）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313768&o=json
            external_identifier: CBDB:313768
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.916Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7EgsxhTTCi8Q8SuYpiHrrJ
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王舉，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313768）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oGlQgWaTytvQrunsoW3R3V
          claim_id: c_7EgsxhTTCi8Q8SuYpiHrrJ
          source_id: s_93CadBC6FxAXmjJx1iJvy8
          stance: supports
          locator: CBDB:313768
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_eqKgJ32HumT_DsNLBhPQQ-
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LuGtcLnNAnJs1yiVnMjgcK
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78GMZISwmpjxC39LEL2jWt
          claim_id: c_eqKgJ32HumT_DsNLBhPQQ-
          source_id: s_93CadBC6FxAXmjJx1iJvy8
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_LuGtcLnNAnJs1yiVnMjgcK
        status: active
        display_name: 王汝安
        merged_into_person_id: null
    - claim:
        id: c_kYDcCS_NCQTytQ0xcBH4Kh
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2NX7CUVHsWewwoTd6aNCQ2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KEur4cmi7uy7OrNtcPbE3k
          claim_id: c_kYDcCS_NCQTytQ0xcBH4Kh
          source_id: s_4P8xE4CnZgeLy64wCHw9rY
          stance: supports
          locator: CBDB：兄弟 王汝安（204050）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝寀 与 王汝安 为同胞（CBDB 记「兄」），王汝安 之父／母即 王汝寀 之父／母。
          source:
            id: s_4P8xE4CnZgeLy64wCHw9rY
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寀（CBDB 313776）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313776&o=json
            external_identifier: CBDB:313776
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2NX7CUVHsWewwoTd6aNCQ2
        status: active
        display_name: 王汝寀
        merged_into_person_id: null
    - claim:
        id: c_Wxq1DDYY_RUUmXMRpWcP4f
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_81gSgBQhcTk9cJ8qrkcqmc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cuw7ge1tHbhHA1i0qNYTa_
          claim_id: c_Wxq1DDYY_RUUmXMRpWcP4f
          source_id: s_3ZLCYvgNtbPxE3-j5FLlD7
          stance: supports
          locator: CBDB：兄弟 王汝安（204050）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝寵 与 王汝安 为同胞（CBDB 记「兄」），王汝安 之父／母即 王汝寵 之父／母。
          source:
            id: s_3ZLCYvgNtbPxE3-j5FLlD7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寵（CBDB 313775）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313775&o=json
            external_identifier: CBDB:313775
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_81gSgBQhcTk9cJ8qrkcqmc
        status: active
        display_name: 王汝寵
        merged_into_person_id: null
    - claim:
        id: c_H9mi3oRzAW3cB8N9i4cN_l
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NAdVRpE8XYFtDN9QsAv8aU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dbWQA9ILSE9lp9ZjDMN3_2
          claim_id: c_H9mi3oRzAW3cB8N9i4cN_l
          source_id: s_ZLCSXHarLd-cKhFkICktA7
          stance: supports
          locator: CBDB：兄弟 王汝安（204050）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝宜 与 王汝安 为同胞（CBDB 记「兄」），王汝安 之父／母即 王汝宜 之父／母。
          source:
            id: s_ZLCSXHarLd-cKhFkICktA7
            source_type: api_record
            title: 中国历代人物传记资料库：王汝宜（CBDB 313772）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313772&o=json
            external_identifier: CBDB:313772
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NAdVRpE8XYFtDN9QsAv8aU
        status: active
        display_name: 王汝宜
        merged_into_person_id: null
    - claim:
        id: c_JK-RhQ0SAQ2HixXJfWVAO3
        subject_person_id: p_Jr1uT74hLZawrDdoEK3XZV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VUQ1TS2xbw5LrqDN3rFv1V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G_D72vz1KbE9fs2IBAVJvP
          claim_id: c_JK-RhQ0SAQ2HixXJfWVAO3
          source_id: s_IuSv97lvtG2tBZyBbVTT3x
          stance: supports
          locator: CBDB：兄弟 王汝安（204050）之父／母 王舉
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝寧 与 王汝安 为同胞（CBDB 记「兄」），王汝安 之父／母即 王汝寧 之父／母。
          source:
            id: s_IuSv97lvtG2tBZyBbVTT3x
            source_type: api_record
            title: 中国历代人物传记资料库：王汝寧（CBDB 313771）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json
            external_identifier: CBDB:313771
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_VUQ1TS2xbw5LrqDN3rFv1V
        status: active
        display_name: 王汝寧
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王舉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王舉 | accepted |
| bio.summary | 王舉，明人物。嘉靖二十九年進士，籍贯雄縣。（中国历代人物传记资料库 CBDB 313768） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_LuGtcLnNAnJs1yiVnMjgcK | 王汝安 | accepted |
| children | p_2NX7CUVHsWewwoTd6aNCQ2 | 王汝寀 | accepted |
| children | p_81gSgBQhcTk9cJ8qrkcqmc | 王汝寵 | accepted |
| children | p_NAdVRpE8XYFtDN9QsAv8aU | 王汝宜 | accepted |
| children | p_VUQ1TS2xbw5LrqDN3rFv1V | 王汝寧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王舉（CBDB 313768）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313768&o=json)
- [中国历代人物传记资料库：王汝寀（CBDB 313776）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313776&o=json)
- [中国历代人物传记资料库：王汝寵（CBDB 313775）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313775&o=json)
- [中国历代人物传记资料库：王汝寧（CBDB 313771）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313771&o=json)
- [中国历代人物传记资料库：王汝宜（CBDB 313772）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313772&o=json)
