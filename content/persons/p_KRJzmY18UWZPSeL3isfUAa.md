---
schema: wang-person/v1
id: p_KRJzmY18UWZPSeL3isfUAa
status: active
merged_into: null
display_name: 王行果
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6PgbRecKR4qjxxN8swoT7i
        subject_person_id: p_KRJzmY18UWZPSeL3isfUAa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行果
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fQ7ZCtn4hHzBF8Tb81nZDu
          claim_id: c_6PgbRecKR4qjxxN8swoT7i
          source_id: s_FMpUG2NpjBSvTGRRMTG6sQ
          stance: supports
          locator: CBDB:140254
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140254）
          source: &a1
            id: s_FMpUG2NpjBSvTGRRMTG6sQ
            source_type: api_record
            title: 中国历代人物传记资料库：王行果（CBDB 140254）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140254&o=json
            external_identifier: CBDB:140254
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.202Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_HK4KZvFmWJAgUUu1c6Z4vU
        subject_person_id: p_KRJzmY18UWZPSeL3isfUAa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 626年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_W2JwWPNZ4JF5LXJEGBQwnk
          claim_id: c_HK4KZvFmWJAgUUu1c6Z4vU
          source_id: s_FMpUG2NpjBSvTGRRMTG6sQ
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
        id: c_jC4mbMX9WRY4PHdewaTtws
        subject_person_id: p_KRJzmY18UWZPSeL3isfUAa
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 672年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ATFC1J3AUA62J921n1JmMe
          claim_id: c_jC4mbMX9WRY4PHdewaTtws
          source_id: s_FMpUG2NpjBSvTGRRMTG6sQ
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
        id: c_9WQoD9KiUdaMukoWWNtkfQ
        subject_person_id: p_KRJzmY18UWZPSeL3isfUAa
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
        - id: cs_zUnAERRYAFay9CenZBZYBt
          claim_id: c_9WQoD9KiUdaMukoWWNtkfQ
          source_id: s_FMpUG2NpjBSvTGRRMTG6sQ
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
        id: c_w7_IWpvtZ8Rrz2gvHZ7Sc7
        subject_person_id: p_DF5f3BpuwMwBFDLpFCT3zQ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KRJzmY18UWZPSeL3isfUAa
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aCGfvD-n5pcer5VrsKR41h
          claim_id: c_w7_IWpvtZ8Rrz2gvHZ7Sc7
          source_id: s_Kwyn6u7TFdyJrjcAhH7MB6
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 27：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Kwyn6u7TFdyJrjcAhH7MB6
            source_type: api_record
            title: 中国历代人物传记资料库：王有方（CBDB 150804）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150804&o=json
            external_identifier: CBDB:150804
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.820Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_DF5f3BpuwMwBFDLpFCT3zQ
        status: active
        display_name: 王有方
        merged_into_person_id: null
  children:
    - claim:
        id: c_4qUp4FkThf61_gCsIUdixF
        subject_person_id: p_KRJzmY18UWZPSeL3isfUAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1LXS4QqvHE6vYKAzkSMeHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3eWV8Z5gON2L6ovJSIfsi0
          claim_id: c_4qUp4FkThf61_gCsIUdixF
          source_id: s_DSUZ1TRdbpVbP3xenMMuYY
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 27 YP NewEpitaphID=1512：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DSUZ1TRdbpVbP3xenMMuYY
            source_type: api_record
            title: 中国历代人物传记资料库：王暟（CBDB 150807）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150807&o=json
            external_identifier: CBDB:150807
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1LXS4QqvHE6vYKAzkSMeHq
        status: active
        display_name: 王暟
        merged_into_person_id: null
    - claim:
        id: c_2u2Omjdp26aB18nATI43yq
        subject_person_id: p_KRJzmY18UWZPSeL3isfUAa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_inW3YFWZZ4cbGzjyNYmXsr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4fcdfEB4pILOOiPK9pIr4
          claim_id: c_2u2Omjdp26aB18nATI43yq
          source_id: s_ffC46GdcTMmZ6ukuZw5Fe9
          stance: supports
          locator: 唐代墓誌匯編:二卷，Jinglong 27：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ffC46GdcTMmZ6ukuZw5Fe9
            source_type: api_record
            title: 中国历代人物传记资料库：王曔（CBDB 150806）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150806&o=json
            external_identifier: CBDB:150806
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.821Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_inW3YFWZZ4cbGzjyNYmXsr
        status: active
        display_name: 王曔
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王行果

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行果 | accepted |
| birth.date | 626年 | accepted |
| death.date | 672年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_DF5f3BpuwMwBFDLpFCT3zQ | 王有方 | accepted |
| children | p_1LXS4QqvHE6vYKAzkSMeHq | 王暟 | accepted |
| children | p_inW3YFWZZ4cbGzjyNYmXsr | 王曔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王曔（CBDB 150806）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150806&o=json)
- [中国历代人物传记资料库：王暟（CBDB 150807）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150807&o=json)
- [中国历代人物传记资料库：王行果（CBDB 140254）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140254&o=json)
- [中国历代人物传记资料库：王有方（CBDB 150804）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150804&o=json)
