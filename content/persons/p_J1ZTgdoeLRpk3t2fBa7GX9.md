---
schema: wang-person/v1
id: p_J1ZTgdoeLRpk3t2fBa7GX9
status: active
merged_into: null
display_name: 王仁
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NciMUdH2m9szC4tc42UQ7U
        subject_person_id: p_J1ZTgdoeLRpk3t2fBa7GX9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yGwsBZLdHDkSaEyMWmJ9Gw
          claim_id: c_NciMUdH2m9szC4tc42UQ7U
          source_id: s_fjk2y1bnQdv3CC2asC8x6v
          stance: supports
          locator: CBDB:139294
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（139294）
          source: &a1
            id: s_fjk2y1bnQdv3CC2asC8x6v
            source_type: api_record
            title: 中国历代人物传记资料库：王仁（CBDB 139294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139294&o=json
            external_identifier: CBDB:139294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.405Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_YEiyL1KjtxF1dL6m7Hc9gU
        subject_person_id: p_J1ZTgdoeLRpk3t2fBa7GX9
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 598年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EDFuZ6nFE3UpCbkCSoT4iQ
          claim_id: c_YEiyL1KjtxF1dL6m7Hc9gU
          source_id: s_fjk2y1bnQdv3CC2asC8x6v
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
        id: c_Mc5Pu5MaBMLk1Apid79sA1
        subject_person_id: p_J1ZTgdoeLRpk3t2fBa7GX9
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 662年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JbbCS6Nupd7m6gqPhurPoo
          claim_id: c_Mc5Pu5MaBMLk1Apid79sA1
          source_id: s_fjk2y1bnQdv3CC2asC8x6v
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
        id: c_9EE8ifzyWBygzWxzE1HQYK
        subject_person_id: p_J1ZTgdoeLRpk3t2fBa7GX9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YLMAEM7WTALwZij4gBaLsm
          claim_id: c_9EE8ifzyWBygzWxzE1HQYK
          source_id: s_fjk2y1bnQdv3CC2asC8x6v
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
        id: c_PPdspGrCxAtd6PTVWsycs1
        subject_person_id: p_GhzeFHiLv5P8KZtxMRfXcL
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J1ZTgdoeLRpk3t2fBa7GX9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oYaJGtQffebZNYAb5HDh9E
          claim_id: c_PPdspGrCxAtd6PTVWsycs1
          source_id: s_8NvMfXQ6GZUPjUznNDHUk3
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 57：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8NvMfXQ6GZUPjUznNDHUk3
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 147839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147839&o=json
            external_identifier: CBDB:147839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.746Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GhzeFHiLv5P8KZtxMRfXcL
        status: active
        display_name: 王達
        merged_into_person_id: null
  children:
    - claim:
        id: c_zSa_OpsW1SGHEEMBx5DYZz
        subject_person_id: p_J1ZTgdoeLRpk3t2fBa7GX9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YaxMbMnJ8Da9KdF3UpC5kq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dftj-hJQU3d4veENCrr0un
          claim_id: c_zSa_OpsW1SGHEEMBx5DYZz
          source_id: s_VXeY24Lyf8D9H1DXrVCHdS
          stance: supports
          locator: 唐代墓誌匯編:二卷，Longshuo 57：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VXeY24Lyf8D9H1DXrVCHdS
            source_type: api_record
            title: 中国历代人物传记资料库：王神感（CBDB 147840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147840&o=json
            external_identifier: CBDB:147840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:52.561Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_YaxMbMnJ8Da9KdF3UpC5kq
        status: active
        display_name: 王神感
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| birth.date | 598年 | accepted |
| death.date | 662年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_GhzeFHiLv5P8KZtxMRfXcL | 王達 | accepted |
| children | p_YaxMbMnJ8Da9KdF3UpC5kq | 王神感 | accepted |

## 外部来源

- [中国历代人物传记资料库：王達（CBDB 147839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147839&o=json)
- [中国历代人物传记资料库：王仁（CBDB 139294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=139294&o=json)
- [中国历代人物传记资料库：王神感（CBDB 147840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=147840&o=json)
