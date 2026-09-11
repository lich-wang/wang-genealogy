---
schema: wang-person/v1
id: p_9858MdTk69RQfatcM7cJUJ
status: active
merged_into: null
display_name: 王茂生
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5rwwZSLDxyjmVypUuzdCUK
        subject_person_id: p_9858MdTk69RQfatcM7cJUJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王茂生
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WnKcnQjqsqyQQBNL9KLEte
          claim_id: c_5rwwZSLDxyjmVypUuzdCUK
          source_id: s_tPzJysmijUm6Xg69gaRTQR
          stance: supports
          locator: CBDB:563703
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（563703）
          source: &a1
            id: s_tPzJysmijUm6Xg69gaRTQR
            source_type: api_record
            title: 中国历代人物传记资料库：王茂生（CBDB 563703）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563703&o=json
            external_identifier: CBDB:563703
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.570Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PhFAvm8YX5KScxxZdArN9X
        subject_person_id: p_9858MdTk69RQfatcM7cJUJ
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
        - id: cs_axjquUpdfvuT1eE6rwBH6N
          claim_id: c_PhFAvm8YX5KScxxZdArN9X
          source_id: s_tPzJysmijUm6Xg69gaRTQR
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_By5TnulfTOgJOdpjRuQzH8
        subject_person_id: p_9858MdTk69RQfatcM7cJUJ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4eGPXknpnQXAJmnciGeLz4
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bomJB1z_0EyUl5Y-0rfT07
          claim_id: c_By5TnulfTOgJOdpjRuQzH8
          source_id: s_OAZjENW-0dQW92k1yagJV2
          stance: supports
          locator: 紹興府志:八十卷，lgid=316753：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_OAZjENW-0dQW92k1yagJV2
            source_type: api_record
            title: 中国历代人物传记资料库：張氏(王茂生妻)（CBDB 563702）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563702&o=json
            external_identifier: CBDB:563702
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4eGPXknpnQXAJmnciGeLz4
        status: active
        display_name: 張氏
        merged_into_person_id: null
  ancestors: []
  descendants:
    - claim:
        id: c_9O6YtuqHFqR8MhApoxmJAy
        subject_person_id: p_9858MdTk69RQfatcM7cJUJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6Kq56sFVM5R2PZ8pcX8L3M
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Yw_J_G936JoDWAg_nZ7UPI
          claim_id: c_9O6YtuqHFqR8MhApoxmJAy
          source_id: s_tPzJysmijUm6Xg69gaRTQR
          stance: supports
          locator: 紹興府志:八十卷，lgid=316753：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_6Kq56sFVM5R2PZ8pcX8L3M
        status: active
        display_name: 王洪琛
        merged_into_person_id: null
  other: []
---

# 王茂生

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王茂生 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_4eGPXknpnQXAJmnciGeLz4 | 張氏 | accepted |
| descendants | p_6Kq56sFVM5R2PZ8pcX8L3M | 王洪琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王茂生（CBDB 563703）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563703&o=json)
- [中国历代人物传记资料库：張氏(王茂生妻)（CBDB 563702）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=563702&o=json)
