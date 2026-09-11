---
schema: wang-person/v1
id: p_jgind6LWu7AGQf2WTE9JAF
status: active
merged_into: null
display_name: 王同晊
cbdb_id: 146196
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CiA7GwmLuYGnWX5TVkKDQZ
        subject_person_id: p_jgind6LWu7AGQf2WTE9JAF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同晊（卒于728年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 146196 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_wZ-5C0BKAC9wee3P3uCXLl
          claim_id: c_CiA7GwmLuYGnWX5TVkKDQZ
          source_id: s_X4AaYa5HEDVVdMFraEw5Cq
          stance: supports
          locator: CBDB:146196
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_X4AaYa5HEDVVdMFraEw5Cq
            source_type: api_record
            title: 中国历代人物传记资料库：王同晊（CBDB 146196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146196&o=json
            external_identifier: CBDB:146196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_CCfP2c2634WQ4DTASUkiKv
        subject_person_id: p_jgind6LWu7AGQf2WTE9JAF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 728年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0728-01-01
            latest: 0728-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Cn7T1PetL7A9aREiRYFog4
          claim_id: c_CCfP2c2634WQ4DTASUkiKv
          source_id: s_X4AaYa5HEDVVdMFraEw5Cq
          stance: supports
          locator: CBDB:146196
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 728
          source:
            id: s_X4AaYa5HEDVVdMFraEw5Cq
            source_type: api_record
            title: 中国历代人物传记资料库：王同晊（CBDB 146196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146196&o=json
            external_identifier: CBDB:146196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2WcVhRNJwUFatK8MyqX8zJ
        subject_person_id: p_jgind6LWu7AGQf2WTE9JAF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同晊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_rq3oCjvRVTRBvJJqrAdeun
          claim_id: c_2WcVhRNJwUFatK8MyqX8zJ
          source_id: s_X4AaYa5HEDVVdMFraEw5Cq
          stance: supports
          locator: CBDB:146196
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（401-500）｜历史性依据：CBDB 卒年 = 728
          source:
            id: s_X4AaYa5HEDVVdMFraEw5Cq
            source_type: api_record
            title: 中国历代人物传记资料库：王同晊（CBDB 146196）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146196&o=json
            external_identifier: CBDB:146196
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_7M6r3RH8t__Haxha0ZuFtl
        subject_person_id: p_3Fn4ByBA6F2pjAp1gsjBZR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jgind6LWu7AGQf2WTE9JAF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tvqF86P9RKFRoOY880E6yE
          claim_id: c_7M6r3RH8t__Haxha0ZuFtl
          source_id: s_Ck3mffSvLZrwY7zV1sBMvU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ck3mffSvLZrwY7zV1sBMvU
            source_type: api_record
            title: 中国历代人物传记资料库：王知（CBDB 195041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195041&o=json
            external_identifier: CBDB:195041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.298Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3Fn4ByBA6F2pjAp1gsjBZR
        status: active
        display_name: 王知
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王同晊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王同晊（卒于728年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 146196 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 728年 | accepted |
| name.primary | 王同晊 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3Fn4ByBA6F2pjAp1gsjBZR | 王知 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同晊（CBDB 146196）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=146196&o=json)
- [中国历代人物传记资料库：王知（CBDB 195041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=195041&o=json)
