---
schema: wang-person/v1
id: p_2Rh3yGLnnM5LyvxUZe67wC
status: active
merged_into: null
display_name: 王傑
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EHSzZBHEtha1gcykHzuwqY
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ycmuQ1r2Si3oshC7D6hZSi
          claim_id: c_EHSzZBHEtha1gcykHzuwqY
          source_id: s_6YVmpTasfpJXywfV5GiNCD
          stance: supports
          locator: CBDB:321651
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（321651）
          source: &a1
            id: s_6YVmpTasfpJXywfV5GiNCD
            source_type: api_record
            title: 中国历代人物传记资料库：王傑（CBDB 321651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321651&o=json
            external_identifier: CBDB:321651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.100Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1jUk8592nndnry7qxEecHx
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王傑，明人物。天順四年進士，籍贯易州。（中国历代人物传记资料库 CBDB 321651）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cFXKMCcH2gGxuC59RQanlR
          claim_id: c_1jUk8592nndnry7qxEecHx
          source_id: s_6YVmpTasfpJXywfV5GiNCD
          stance: supports
          locator: CBDB:321651
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_risw6_JJ51On36_W6oDGYn
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DJhG2TFTs2BSF3ec5E2mBn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6IcmssjjylmfSfqamxmJNV
          claim_id: c_risw6_JJ51On36_W6oDGYn
          source_id: s_6YVmpTasfpJXywfV5GiNCD
          stance: supports
          locator: 天順四年進士登科錄:一卷，第三甲第七十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DJhG2TFTs2BSF3ec5E2mBn
        status: active
        display_name: 王甫
        merged_into_person_id: null
    - claim:
        id: c_qZtzeENjFX9VyzaRHVK0Pm
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_sKhyxMDBnGYTDz8J6THmsG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_voN1E3Pj-qFEsXjo2EayjT
          claim_id: c_qZtzeENjFX9VyzaRHVK0Pm
          source_id: s_R7NrkwfJ3WNIithnjd8szJ
          stance: supports
          locator: CBDB：兄弟 王甫（198828）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王璲 与 王甫 为同胞（CBDB 记「兄」），王甫 之父／母即 王璲 之父／母。
          source:
            id: s_R7NrkwfJ3WNIithnjd8szJ
            source_type: api_record
            title: 中国历代人物传记资料库：王璲（CBDB 321707）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321707&o=json
            external_identifier: CBDB:321707
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sKhyxMDBnGYTDz8J6THmsG
        status: active
        display_name: 王璲
        merged_into_person_id: null
    - claim:
        id: c_9YUrLChUxliatUGot8ShJP
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wBsn35NJZ9ksA5qLB8RNYN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0IyQG16VTR0PPMQCLScJh1
          claim_id: c_9YUrLChUxliatUGot8ShJP
          source_id: s_XcYyKltVfGojl9RoMWXfK7
          stance: supports
          locator: CBDB：兄弟 王甫（198828）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑾 与 王甫 为同胞（CBDB 记「兄」），王甫 之父／母即 王鑾 之父／母。
          source:
            id: s_XcYyKltVfGojl9RoMWXfK7
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 321685）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321685&o=json
            external_identifier: CBDB:321685
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wBsn35NJZ9ksA5qLB8RNYN
        status: active
        display_name: 王鑾
        merged_into_person_id: null
    - claim:
        id: c_CT_LHJs4LvSvMSx_UWFATd
        subject_person_id: p_2Rh3yGLnnM5LyvxUZe67wC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zdBqTBX2h482tXog9Wui3F
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oe0qZyLysog1W_1EcMZABE
          claim_id: c_CT_LHJs4LvSvMSx_UWFATd
          source_id: s_5qCYDyFUSzaOw5Hk4ccKUu
          stance: supports
          locator: CBDB：兄弟 王甫（198828）之父／母 王傑
          quotation: null
          interpretation_note: 由兄弟关系推断：王琛 与 王甫 为同胞（CBDB 记「兄」），王甫 之父／母即 王琛 之父／母。
          source:
            id: s_5qCYDyFUSzaOw5Hk4ccKUu
            source_type: api_record
            title: 中国历代人物传记资料库：王琛（CBDB 321696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json
            external_identifier: CBDB:321696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_zdBqTBX2h482tXog9Wui3F
        status: active
        display_name: 王琛
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王傑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王傑 | accepted |
| bio.summary | 王傑，明人物。天順四年進士，籍贯易州。（中国历代人物传记资料库 CBDB 321651） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DJhG2TFTs2BSF3ec5E2mBn | 王甫 | accepted |
| children | p_sKhyxMDBnGYTDz8J6THmsG | 王璲 | accepted |
| children | p_wBsn35NJZ9ksA5qLB8RNYN | 王鑾 | accepted |
| children | p_zdBqTBX2h482tXog9Wui3F | 王琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王琛（CBDB 321696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321696&o=json)
- [中国历代人物传记资料库：王傑（CBDB 321651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321651&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 321685）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321685&o=json)
- [中国历代人物传记资料库：王璲（CBDB 321707）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=321707&o=json)
