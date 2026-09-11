---
schema: wang-person/v1
id: p_LBKKYPuYWyKQ6KwXnwxA8M
status: active
merged_into: null
display_name: 朱某
revision: 1
cbdb_id: 153672
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nWk-IzDbePp9eWIwXIihpL
        subject_person_id: p_LBKKYPuYWyKQ6KwXnwxA8M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 朱某
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yaS7SO_bE_k2g7op8vzVSe
          claim_id: c_nWk-IzDbePp9eWIwXIihpL
          source_id: s_5yCrBCDFmOSkxh_aTCKckU
          stance: supports
          locator: CBDB:153672
          quotation: null
          interpretation_note: CBDB 明确记录的王心自在配偶
          source: &a1
            id: s_5yCrBCDFmOSkxh_aTCKckU
            source_type: api_record
            title: 中国历代人物传记资料库：朱某(王心自在夫)（CBDB 153672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153672&o=json
            external_identifier: CBDB:153672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_oRQ-142a_WYwFfXKUN_Zq5
        subject_person_id: p_8q7EWpu1hSNBYo3c2qZ1Hi
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_LBKKYPuYWyKQ6KwXnwxA8M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jTEpTXQIRJ5d9ysDKBEyGU
          claim_id: c_oRQ-142a_WYwFfXKUN_Zq5
          source_id: s_5yCrBCDFmOSkxh_aTCKckU
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 94：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8q7EWpu1hSNBYo3c2qZ1Hi
        status: active
        display_name: 王心自在
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 朱某

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 朱某 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_8q7EWpu1hSNBYo3c2qZ1Hi | 王心自在 | accepted |

## 外部来源

- [中国历代人物传记资料库：朱某(王心自在夫)（CBDB 153672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153672&o=json)
