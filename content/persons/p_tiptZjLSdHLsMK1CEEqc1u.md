---
schema: wang-person/v1
id: p_tiptZjLSdHLsMK1CEEqc1u
status: active
merged_into: null
display_name: 王邦瑞
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_sEm9q7Q1Jj38FPyH9mjHKs
        subject_person_id: p_tiptZjLSdHLsMK1CEEqc1u
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王邦瑞
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ts4qim2a1ycxKBa6f1qd9g
          claim_id: c_sEm9q7Q1Jj38FPyH9mjHKs
          source_id: s_J4Jz3KxkBLvf3x6AGAoqZ9
          stance: supports
          locator: CBDB:68262
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68262）
          source: &a1
            id: s_J4Jz3KxkBLvf3x6AGAoqZ9
            source_type: api_record
            title: 中国历代人物传记资料库：王邦瑞（CBDB 68262）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68262&o=json
            external_identifier: CBDB:68262
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.062Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_RiHejs2B842YvCPJNtnjtD
        subject_person_id: p_tiptZjLSdHLsMK1CEEqc1u
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1495年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hKafyxJvcvmeT6uQEoziiP
          claim_id: c_RiHejs2B842YvCPJNtnjtD
          source_id: s_J4Jz3KxkBLvf3x6AGAoqZ9
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
        id: c_7x5RbwBbEhtmdbCCjHQDn9
        subject_person_id: p_tiptZjLSdHLsMK1CEEqc1u
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1561年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_coQDH67AwFJL3DZxnu5EEG
          claim_id: c_7x5RbwBbEhtmdbCCjHQDn9
          source_id: s_J4Jz3KxkBLvf3x6AGAoqZ9
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
        id: c_B2Vo2KmRHaj6raJDtPozMz
        subject_person_id: p_tiptZjLSdHLsMK1CEEqc1u
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
        - id: cs_dGKBD5KJMdnB8wBqVAFVZU
          claim_id: c_B2Vo2KmRHaj6raJDtPozMz
          source_id: s_J4Jz3KxkBLvf3x6AGAoqZ9
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
        id: c_7Iv02TIzzUC1FfTkB0TTnx
        subject_person_id: p_1x4VQAiYkuNn8gpLF4qLiZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tiptZjLSdHLsMK1CEEqc1u
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3faNux_h-Rt7-BfP8j83Px
          claim_id: c_7Iv02TIzzUC1FfTkB0TTnx
          source_id: s_5rJTS5Q3CWPFSymLruJRRY
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百九十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5rJTS5Q3CWPFSymLruJRRY
            source_type: api_record
            title: 中国历代人物传记资料库：王謨（CBDB 282595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282595&o=json
            external_identifier: CBDB:282595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1x4VQAiYkuNn8gpLF4qLiZ
        status: active
        display_name: 王謨
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_ud5eCtihGTq-uEyGOePM4l
        subject_person_id: p_a8J62hxLLTLH3EGQFsXGiw
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_tiptZjLSdHLsMK1CEEqc1u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_11PsieJTO7aqxm4wXdZacD
          claim_id: c_ud5eCtihGTq-uEyGOePM4l
          source_id: s_skCikYpCcMivM5f2JK3EQb
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百九十名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_skCikYpCcMivM5f2JK3EQb
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：冀氏（282597）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282597&o=json
            external_identifier: CBDB:282597
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:36.582Z
            metadata_json: null
      object_person:
        id: p_a8J62hxLLTLH3EGQFsXGiw
        status: active
        display_name: 冀氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_U7jlnMw2h3KpMb7K5TUF01
        subject_person_id: p_maJdePo4uDP9CC2Adrq9Ld
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tiptZjLSdHLsMK1CEEqc1u
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q6PLa4aC1oBpYg1Rmm6AfK
          claim_id: c_U7jlnMw2h3KpMb7K5TUF01
          source_id: s_5KPYFRbULkbSJMvJ2XopFM
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百九十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5KPYFRbULkbSJMvJ2XopFM
            source_type: api_record
            title: 中国历代人物传记资料库：王臣（CBDB 282594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282594&o=json
            external_identifier: CBDB:282594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.099Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_maJdePo4uDP9CC2Adrq9Ld
        status: active
        display_name: 王臣
        merged_into_person_id: null
    - claim:
        id: c_YCNkwDDFsk1KP0tNX8jYEV
        subject_person_id: p_hhC7WcHCPL6E8fvMUH5DQ3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_tiptZjLSdHLsMK1CEEqc1u
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TAyF2D_SFIczsnwtbFUoIm
          claim_id: c_YCNkwDDFsk1KP0tNX8jYEV
          source_id: s_8cX77Uk8hKfz8zUMehuKPY
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第一百九十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8cX77Uk8hKfz8zUMehuKPY
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王璘（282593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282593&o=json
            external_identifier: CBDB:282593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_hhC7WcHCPL6E8fvMUH5DQ3
        status: active
        display_name: 王璘
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王邦瑞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王邦瑞 | accepted |
| birth.date | 1495年 | accepted |
| death.date | 1561年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_1x4VQAiYkuNn8gpLF4qLiZ | 王謨 | accepted |
| spouses | p_a8J62hxLLTLH3EGQFsXGiw | 冀氏 | accepted |
| ancestors | p_maJdePo4uDP9CC2Adrq9Ld | 王臣 | accepted |
| ancestors | p_hhC7WcHCPL6E8fvMUH5DQ3 | 王璘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王邦瑞（CBDB 68262）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68262&o=json)
- [中国历代人物传记资料库：王臣（CBDB 282594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282594&o=json)
- [中国历代人物传记资料库：王謨（CBDB 282595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282595&o=json)
- [CBDB 中国历代人物传记资料库：冀氏（282597）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282597&o=json)
- [CBDB 中国历代人物传记资料库：王璘（282593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282593&o=json)
