---
schema: wang-person/v1
id: p_CgzpCKBF2Cnch1g1qwE9Ao
status: active
merged_into: null
display_name: 王世能
cbdb_id: 205793
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DSi3GXwXzP2Zzs9Ac3vnem
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世能（生于1536年），史料所见人物。本项目依据《中国历代人物传记资料库：王世能（CBDB 205793）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_eWncWtzIDVk6ONq7u3jgfz
          claim_id: c_DSi3GXwXzP2Zzs9Ac3vnem
          source_id: s_CX9ukcMWhFuD7CCi9yprcK
          stance: supports
          locator: CBDB:205793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_CX9ukcMWhFuD7CCi9yprcK
            source_type: api_record
            title: 中国历代人物传记资料库：王世能（CBDB 205793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205793&o=json
            external_identifier: CBDB:205793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_Fg8SVrgNVdd8GhBtFpbHf9
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1536年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1536-01-01
            latest: 1536-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_vsAmVGs7xrfSGB485KuwE4
          claim_id: c_Fg8SVrgNVdd8GhBtFpbHf9
          source_id: s_CX9ukcMWhFuD7CCi9yprcK
          stance: supports
          locator: CBDB:205793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1536
          source:
            id: s_CX9ukcMWhFuD7CCi9yprcK
            source_type: api_record
            title: 中国历代人物传记资料库：王世能（CBDB 205793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205793&o=json
            external_identifier: CBDB:205793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J2wJTrgZpSSmN2kAjGA2MB
        subject_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王世能
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_y1mHYZ6Hz75a97CfLKipxj
          claim_id: c_J2wJTrgZpSSmN2kAjGA2MB
          source_id: s_CX9ukcMWhFuD7CCi9yprcK
          stance: supports
          locator: CBDB:205793
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1536
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Q-apkLo78dcetCCVUEwUBd
        subject_person_id: p_6YHrJS4jFqeu69kXpdiobj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Glros8Ez95KbtMMEtjAvPZ
          claim_id: c_Q-apkLo78dcetCCVUEwUBd
          source_id: s_hQ3XyMK1g6c1ZyvtkKuZCM
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQ3XyMK1g6c1ZyvtkKuZCM
            source_type: api_record
            title: 中国历代人物传记资料库：王大祥（CBDB 208601）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208601&o=json
            external_identifier: CBDB:208601
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6YHrJS4jFqeu69kXpdiobj
        status: active
        display_name: 王大祥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qBPeLjx8Ya5DiihwakBXlE
        subject_person_id: p_PvyCBtvgFt1A6tKBuzUbEc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OT-Zqz1ldlq17NEQRXMuo5
          claim_id: c_qBPeLjx8Ya5DiihwakBXlE
          source_id: s_sG5Ltd7tZS8dvjK5HF191z
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sG5Ltd7tZS8dvjK5HF191z
            source_type: api_record
            title: 中国历代人物传记资料库：王文正（CBDB 208599）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208599&o=json
            external_identifier: CBDB:208599
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_PvyCBtvgFt1A6tKBuzUbEc
        status: active
        display_name: 王文正
        merged_into_person_id: null
    - claim:
        id: c_PKGHRow_Wi7IhLO57jAM6s
        subject_person_id: p_yQCRVHipLWZ8c2x5fSSsjT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_CgzpCKBF2Cnch1g1qwE9Ao
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WDBIfI21mh542eqqlPcdp-
          claim_id: c_PKGHRow_Wi7IhLO57jAM6s
          source_id: s_hfm9bzWw65dmJMVzUtsjbn
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第二甲第六十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hfm9bzWw65dmJMVzUtsjbn
            source_type: api_record
            title: 中国历代人物传记资料库：王宗興（CBDB 208600）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208600&o=json
            external_identifier: CBDB:208600
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.950Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_yQCRVHipLWZ8c2x5fSSsjT
        status: active
        display_name: 王宗興
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王世能

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王世能（生于1536年），史料所见人物。本项目依据《中国历代人物传记资料库：王世能（CBDB 205793）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1536年 | accepted |
| name.primary | 王世能 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6YHrJS4jFqeu69kXpdiobj | 王大祥 | accepted |
| ancestors | p_PvyCBtvgFt1A6tKBuzUbEc | 王文正 | accepted |
| ancestors | p_yQCRVHipLWZ8c2x5fSSsjT | 王宗興 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大祥（CBDB 208601）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208601&o=json)
- [中国历代人物传记资料库：王世能（CBDB 205793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205793&o=json)
- [中国历代人物传记资料库：王文正（CBDB 208599）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208599&o=json)
- [中国历代人物传记资料库：王宗興（CBDB 208600）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208600&o=json)
