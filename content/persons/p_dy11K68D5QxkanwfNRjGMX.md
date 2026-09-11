---
schema: wang-person/v1
id: p_dy11K68D5QxkanwfNRjGMX
status: active
merged_into: null
display_name: 王希庭
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nieKpBpBDxG6PqWg93VJRZ
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v6vzWcQBGc5HyV8Vb9yGgy
          claim_id: c_nieKpBpBDxG6PqWg93VJRZ
          source_id: s_epHdK7JgJkGUxQU85p96wv
          stance: supports
          locator: CBDB:145222
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145222）
          source: &a1
            id: s_epHdK7JgJkGUxQU85p96wv
            source_type: api_record
            title: 中国历代人物传记资料库：王希庭（CBDB 145222）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145222&o=json
            external_identifier: CBDB:145222
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.223Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LG6AkgYX6Zq1W5tVNthhfE
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 762年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wzQgndxjMtKKsvB8TnAcgy
          claim_id: c_LG6AkgYX6Zq1W5tVNthhfE
          source_id: s_epHdK7JgJkGUxQU85p96wv
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
        id: c_389VvYKDbyg96qw32tKx3m
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 841年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JvF679GM66EjYbWsWjt7BC
          claim_id: c_389VvYKDbyg96qw32tKx3m
          source_id: s_epHdK7JgJkGUxQU85p96wv
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
        id: c_pu9Ko2NfuPBERq7B93mCB1
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
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
        - id: cs_99bphfEcA1QAp96HYa4Ae4
          claim_id: c_pu9Ko2NfuPBERq7B93mCB1
          source_id: s_epHdK7JgJkGUxQU85p96wv
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
        id: c_V2TR9vOcYVeohZSboRO3lP
        subject_person_id: p_c1NCkwp6d18gbmgfjMtJDP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dy11K68D5QxkanwfNRjGMX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rt6PLPf1JblsM4rENVhe0A
          claim_id: c_V2TR9vOcYVeohZSboRO3lP
          source_id: s_9nX8VSXaabhFAQqS5jTsXh
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9nX8VSXaabhFAQqS5jTsXh
            source_type: api_record
            title: 中国历代人物传记资料库：王邵（CBDB 169168）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169168&o=json
            external_identifier: CBDB:169168
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_c1NCkwp6d18gbmgfjMtJDP
        status: active
        display_name: 王邵
        merged_into_person_id: null
  children:
    - claim:
        id: c_vi_S0TynNxRT8AYj9RMUej
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4LmSpyB7B9ubXZJPrd7ffT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RKj56wER4F5QdsnUVgVZ0o
          claim_id: c_vi_S0TynNxRT8AYj9RMUej
          source_id: s_iXCnNR7M1h8imaHP66MtjY
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_iXCnNR7M1h8imaHP66MtjY
            source_type: api_record
            title: 中国历代人物传记资料库：王寂（CBDB 185294）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185294&o=json
            external_identifier: CBDB:185294
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4LmSpyB7B9ubXZJPrd7ffT
        status: active
        display_name: 王寂
        merged_into_person_id: null
    - claim:
        id: c_D-_DvdxjLg4hko1T3wVGdF
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gXcfSNcP3LgyWs4pB6WRAy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5L9I0G-5-ywn46hifiiIdR
          claim_id: c_D-_DvdxjLg4hko1T3wVGdF
          source_id: s_aRZHFW4i7MZxXUs1LDr6t5
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_aRZHFW4i7MZxXUs1LDr6t5
            source_type: api_record
            title: 中国历代人物传记资料库：王君素（CBDB 185296）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185296&o=json
            external_identifier: CBDB:185296
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.240Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gXcfSNcP3LgyWs4pB6WRAy
        status: active
        display_name: 王君素
        merged_into_person_id: null
    - claim:
        id: c_7e8gkDLg_XXSV5RO9Kly3k
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3HP8CYoXsWtkpjhCNkBGH9
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CbQPkZkxBvlTbAN9xHQrBJ
          claim_id: c_7e8gkDLg_XXSV5RO9Kly3k
          source_id: s_RUDyN54bVNUBSSQJqRqvUt
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_RUDyN54bVNUBSSQJqRqvUt
            source_type: api_record
            title: 中国历代人物传记资料库：王從復（CBDB 185297）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185297&o=json
            external_identifier: CBDB:185297
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_3HP8CYoXsWtkpjhCNkBGH9
        status: active
        display_name: 王從復
        merged_into_person_id: null
    - claim:
        id: c_h4IiHL7ZGgxLwHoQMb-6jZ
        subject_person_id: p_dy11K68D5QxkanwfNRjGMX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kVhUcbKAKsPpj1EHFizJ7Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6Ymq7lzqdY1CK4K3WwaeR0
          claim_id: c_h4IiHL7ZGgxLwHoQMb-6jZ
          source_id: s_GTDsWCP5qVN9vX4bp41HNU
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GTDsWCP5qVN9vX4bp41HNU
            source_type: api_record
            title: 中国历代人物传记资料库：王恆直（CBDB 185295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185295&o=json
            external_identifier: CBDB:185295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_kVhUcbKAKsPpj1EHFizJ7Z
        status: active
        display_name: 王恆直
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希庭 | accepted |
| birth.date | 762年 | accepted |
| death.date | 841年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_c1NCkwp6d18gbmgfjMtJDP | 王邵 | accepted |
| children | p_4LmSpyB7B9ubXZJPrd7ffT | 王寂 | accepted |
| children | p_gXcfSNcP3LgyWs4pB6WRAy | 王君素 | accepted |
| children | p_3HP8CYoXsWtkpjhCNkBGH9 | 王從復 | accepted |
| children | p_kVhUcbKAKsPpj1EHFizJ7Z | 王恆直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王從復（CBDB 185297）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185297&o=json)
- [中国历代人物传记资料库：王恆直（CBDB 185295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185295&o=json)
- [中国历代人物传记资料库：王寂（CBDB 185294）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185294&o=json)
- [中国历代人物传记资料库：王君素（CBDB 185296）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185296&o=json)
- [中国历代人物传记资料库：王邵（CBDB 169168）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169168&o=json)
- [中国历代人物传记资料库：王希庭（CBDB 145222）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145222&o=json)
