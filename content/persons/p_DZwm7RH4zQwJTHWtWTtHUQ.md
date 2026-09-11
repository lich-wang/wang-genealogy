---
schema: wang-person/v1
id: p_DZwm7RH4zQwJTHWtWTtHUQ
status: active
merged_into: null
display_name: 王之臣
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MKWerP8WMRs2h2MorsD9sx
        subject_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o82YZqmHatEHTUs7zcLXNe
          claim_id: c_MKWerP8WMRs2h2MorsD9sx
          source_id: s_YTj7CdYtdV8DE7sQPp9eo4
          stance: supports
          locator: CBDB:202945
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202945）
          source: &a1
            id: s_YTj7CdYtdV8DE7sQPp9eo4
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 202945）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202945&o=json
            external_identifier: CBDB:202945
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.765Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vEVCu7Mgb1kvXYQpD6FKoS
        subject_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1489年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tV97DQTcvJG99onWeyjE1f
          claim_id: c_vEVCu7Mgb1kvXYQpD6FKoS
          source_id: s_YTj7CdYtdV8DE7sQPp9eo4
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
        id: c_3o3jygnozoL46Dp9DNAzRH
        subject_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
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
        - id: cs_mw6i1FjmfgHDBB3ZyMW1BR
          claim_id: c_3o3jygnozoL46Dp9DNAzRH
          source_id: s_YTj7CdYtdV8DE7sQPp9eo4
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
  spouses: []
  ancestors:
    - claim:
        id: c_h0Eox9ObMgGb0I1_ThCTLi
        subject_person_id: p_1VirfsX5oPoLuBf8HiG9E5
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DZwm7RH4zQwJTHWtWTtHUQ
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qFAYeCQ8grPRlbQHwwpMGY
          claim_id: c_h0Eox9ObMgGb0I1_ThCTLi
          source_id: s_XyPHbFh9tqdmX5gvA1hLyF
          stance: supports
          locator: 嘉靖十四年進士登科錄:一卷，第三甲第一百零五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XyPHbFh9tqdmX5gvA1hLyF
            source_type: api_record
            title: 中国历代人物传记资料库：王祚（CBDB 297181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297181&o=json
            external_identifier: CBDB:297181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.550Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_1VirfsX5oPoLuBf8HiG9E5
        status: active
        display_name: 王祚
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王之臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王之臣 | accepted |
| birth.date | 1489年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_1VirfsX5oPoLuBf8HiG9E5 | 王祚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之臣（CBDB 202945）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202945&o=json)
- [中国历代人物传记资料库：王祚（CBDB 297181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=297181&o=json)
