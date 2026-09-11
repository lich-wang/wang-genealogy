---
schema: wang-person/v1
id: p_Q5jiewEf7qr9FT4CBgkaYV
status: active
merged_into: null
display_name: 王繼祖
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_GKQY2DF6S3ZENvjJtM3Bxa
        subject_person_id: p_Q5jiewEf7qr9FT4CBgkaYV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼祖
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_TbbF9VWmQ3jJk448jpAok6
          claim_id: c_GKQY2DF6S3ZENvjJtM3Bxa
          source_id: s_nYESAW4DyeYHFNG82PCGD6
          stance: supports
          locator: CBDB:205485
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205485）
          source: &a1
            id: s_nYESAW4DyeYHFNG82PCGD6
            source_type: api_record
            title: 中国历代人物传记资料库：王繼祖（CBDB 205485）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205485&o=json
            external_identifier: CBDB:205485
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.863Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_mCEKWb2GgyDCCLv5VCX79m
        subject_person_id: p_Q5jiewEf7qr9FT4CBgkaYV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1534年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C8CryV4jPv5rcqBLLZaHBc
          claim_id: c_mCEKWb2GgyDCCLv5VCX79m
          source_id: s_nYESAW4DyeYHFNG82PCGD6
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
        id: c_7S4BKGAp7z2rqEhGqfHweD
        subject_person_id: p_Q5jiewEf7qr9FT4CBgkaYV
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
        - id: cs_JV714v4BNi3Sc4DnqSqCux
          claim_id: c_7S4BKGAp7z2rqEhGqfHweD
          source_id: s_nYESAW4DyeYHFNG82PCGD6
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
        id: c_nFdyU1gmUx_R5IEkv2WuY6
        subject_person_id: p_dmQnPb8XGYab6qzZ3xmK4r
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Q5jiewEf7qr9FT4CBgkaYV
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OBKGbVBiUESWcyIWiJ_a3F
          claim_id: c_nFdyU1gmUx_R5IEkv2WuY6
          source_id: s_4d331juLZa1kKxoYqWofHc
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第二甲第四十二名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_4d331juLZa1kKxoYqWofHc
            source_type: api_record
            title: 中国历代人物传记资料库：王寍（CBDB 334031）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334031&o=json
            external_identifier: CBDB:334031
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.428Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dmQnPb8XGYab6qzZ3xmK4r
        status: active
        display_name: 王寍
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王繼祖

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼祖 | accepted |
| birth.date | 1534年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_dmQnPb8XGYab6qzZ3xmK4r | 王寍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼祖（CBDB 205485）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205485&o=json)
- [中国历代人物传记资料库：王寍（CBDB 334031）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334031&o=json)
