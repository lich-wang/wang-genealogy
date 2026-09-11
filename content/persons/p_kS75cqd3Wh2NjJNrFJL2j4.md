---
schema: wang-person/v1
id: p_kS75cqd3Wh2NjJNrFJL2j4
status: active
merged_into: null
display_name: 王遵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WpboydzWUEFvzqUUTLtw6A
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_p79QHjTADWX7ZHMV2EXqnH
          claim_id: c_WpboydzWUEFvzqUUTLtw6A
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: CBDB:201860
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201860）
          source: &a1
            id: s_LyDXjGHrEMFf51wBwew7nv
            source_type: api_record
            title: 中国历代人物传记资料库：王遵（CBDB 201860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json
            external_identifier: CBDB:201860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.697Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_n4Y5fNXSGC6msoqbNhU5r4
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1475年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aEzkRGrkFkteGVLCfncHx3
          claim_id: c_n4Y5fNXSGC6msoqbNhU5r4
          source_id: s_LyDXjGHrEMFf51wBwew7nv
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
        id: c_XgzEfez9xGRYAxQJFYEn1D
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
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
        - id: cs_6zfYWpbPfLXxXFFMBP8Nfb
          claim_id: c_XgzEfez9xGRYAxQJFYEn1D
          source_id: s_LyDXjGHrEMFf51wBwew7nv
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
        id: c_QrlKP3synvTNX3VAzdpZdx
        subject_person_id: p_QzvV4sG1QiUMXjGNxx2is5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EV_Cfx5-XOF9II7IrXm7zA
          claim_id: c_QrlKP3synvTNX3VAzdpZdx
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QzvV4sG1QiUMXjGNxx2is5
        status: active
        display_name: 王度
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_j1bnQVZNUjqMt_2Co6EzgI
        subject_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4WnMCsmdFpjM4acDmatDdk
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i-KfOSbjRmNpMN5JowGILq
          claim_id: c_j1bnQVZNUjqMt_2Co6EzgI
          source_id: s_v7gQil8zqpRpKEc7DUNYLN
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v7gQil8zqpRpKEc7DUNYLN
            source_type: api_record
            title: 中国历代人物传记资料库：吳氏(王遵妻)（CBDB 279341）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279341&o=json
            external_identifier: CBDB:279341
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4WnMCsmdFpjM4acDmatDdk
        status: active
        display_name: 吳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_C03lInwGysmqXFX9bmow6F
        subject_person_id: p_nkWyHwiFEDv5V7hhY7wDyM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BETSktlDOu46IaD9RrpoPx
          claim_id: c_C03lInwGysmqXFX9bmow6F
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nkWyHwiFEDv5V7hhY7wDyM
        status: active
        display_name: 王允中
        merged_into_person_id: null
    - claim:
        id: c_eZqWbuH3MXm4GetHL-kr-A
        subject_person_id: p_VsNGdGEQR2AMZPB6CKNQST
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kS75cqd3Wh2NjJNrFJL2j4
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OhHnudKHLjpOQ9F1jwSQ6F
          claim_id: c_eZqWbuH3MXm4GetHL-kr-A
          source_id: s_LyDXjGHrEMFf51wBwew7nv
          stance: supports
          locator: 正德六年進士登科錄:一卷，第三甲第二百三十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VsNGdGEQR2AMZPB6CKNQST
        status: active
        display_name: 王昌裔
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王遵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遵 | accepted |
| birth.date | 1475年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QzvV4sG1QiUMXjGNxx2is5 | 王度 | accepted |
| spouses | p_4WnMCsmdFpjM4acDmatDdk | 吳氏 | accepted |
| ancestors | p_nkWyHwiFEDv5V7hhY7wDyM | 王允中 | accepted |
| ancestors | p_VsNGdGEQR2AMZPB6CKNQST | 王昌裔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遵（CBDB 201860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201860&o=json)
- [中国历代人物传记资料库：吳氏(王遵妻)（CBDB 279341）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=279341&o=json)
