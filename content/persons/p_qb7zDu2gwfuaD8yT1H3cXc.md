---
schema: wang-person/v1
id: p_qb7zDu2gwfuaD8yT1H3cXc
status: active
merged_into: null
display_name: 王元春
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8x8SDhBvqLYVP5bhbcJ86X
        subject_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元春
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jEGJJonwUmAF4xFBK4WJc2
          claim_id: c_8x8SDhBvqLYVP5bhbcJ86X
          source_id: s_BGWqg49L7abQJe26vdBCDQ
          stance: supports
          locator: CBDB:126470
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126470）
          source: &a1
            id: s_BGWqg49L7abQJe26vdBCDQ
            source_type: api_record
            title: 中国历代人物传记资料库：王元春（CBDB 126470）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126470&o=json
            external_identifier: CBDB:126470
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.976Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5KrwRJ5nosm8npdHs92Jy2
        subject_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
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
        - id: cs_w8qz7ofioHagowdGeLTKZB
          claim_id: c_5KrwRJ5nosm8npdHs92Jy2
          source_id: s_BGWqg49L7abQJe26vdBCDQ
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
        id: c_WOo4p1svt18FCbkaksVV1c
        subject_person_id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y-Zi5qz9ds0w_mT_rbZPvf
          claim_id: c_WOo4p1svt18FCbkaksVV1c
          source_id: s_s3xmpoTHPot9mSnQLLtQS4
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百六十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_s3xmpoTHPot9mSnQLLtQS4
            source_type: api_record
            title: 中国历代人物传记资料库：王滋（CBDB 314299）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314299&o=json
            external_identifier: CBDB:314299
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.926Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zRQ8vX2mq2ef6gtHZ8hFkm
        status: active
        display_name: 王滋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HRvGvlDPZPcm2X2AYJARgm
        subject_person_id: p_inf8KK3zWGNtjq3Vp6iZGY
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pwxm3cyzJ6J9P5dzrKP_SL
          claim_id: c_HRvGvlDPZPcm2X2AYJARgm
          source_id: s_MXog5EtB28LwySGb7BCbUo
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百六十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MXog5EtB28LwySGb7BCbUo
            source_type: api_record
            title: 中国历代人物传记资料库：王珉（CBDB 314297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314297&o=json
            external_identifier: CBDB:314297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_inf8KK3zWGNtjq3Vp6iZGY
        status: active
        display_name: 王珉
        merged_into_person_id: null
    - claim:
        id: c_TfCRvxdtFNOVkHyonoYaed
        subject_person_id: p_UW29arWdE4TLLL28oGpy1K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qb7zDu2gwfuaD8yT1H3cXc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HS35OMYFb_9WT9HfM4N74C
          claim_id: c_TfCRvxdtFNOVkHyonoYaed
          source_id: s_cuCBPoEw9JgSEV8qBNVgRV
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第一百六十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_cuCBPoEw9JgSEV8qBNVgRV
            source_type: api_record
            title: 中国历代人物传记资料库：王哲（CBDB 314298）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314298&o=json
            external_identifier: CBDB:314298
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.923Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_UW29arWdE4TLLL28oGpy1K
        status: active
        display_name: 王哲
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王元春

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元春 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zRQ8vX2mq2ef6gtHZ8hFkm | 王滋 | accepted |
| ancestors | p_inf8KK3zWGNtjq3Vp6iZGY | 王珉 | accepted |
| ancestors | p_UW29arWdE4TLLL28oGpy1K | 王哲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珉（CBDB 314297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314297&o=json)
- [中国历代人物传记资料库：王元春（CBDB 126470）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126470&o=json)
- [中国历代人物传记资料库：王哲（CBDB 314298）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314298&o=json)
- [中国历代人物传记资料库：王滋（CBDB 314299）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314299&o=json)
