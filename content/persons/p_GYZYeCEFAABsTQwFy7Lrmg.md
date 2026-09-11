---
schema: wang-person/v1
id: p_GYZYeCEFAABsTQwFy7Lrmg
status: active
merged_into: null
display_name: 王希遷
cbdb_id: 191564
revision: 5
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dHQpFQPdvJCAxYNiG87tTq
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希遷（卒于804年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 191564 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 5
      sources:
        - id: cs_6H2wZmkXoXj2SSfB9xc6PI
          claim_id: c_dHQpFQPdvJCAxYNiG87tTq
          source_id: s_L7hxWzD2ZTXTWP1mKacM3G
          stance: supports
          locator: CBDB:191564
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source:
            id: s_L7hxWzD2ZTXTWP1mKacM3G
            source_type: api_record
            title: 中国历代人物传记资料库：王希遷（CBDB 191564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191564&o=json
            external_identifier: CBDB:191564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_jUg8VF8bGsQxnzyxkzjLC6
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 804年
            calendar_note: CBDB 卒年字段，精度：年
            earliest: 0804-01-01
            latest: 0804-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_8pGfBExSNeGxFGhhfdjqJG
          claim_id: c_jUg8VF8bGsQxnzyxkzjLC6
          source_id: s_L7hxWzD2ZTXTWP1mKacM3G
          stance: supports
          locator: CBDB:191564
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 804
          source:
            id: s_L7hxWzD2ZTXTWP1mKacM3G
            source_type: api_record
            title: 中国历代人物传记资料库：王希遷（CBDB 191564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191564&o=json
            external_identifier: CBDB:191564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_o7czy5nsLttgrGAKetJGVt
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希遷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_c2hXcSnrCkfYymSCRQ4o6h
          claim_id: c_o7czy5nsLttgrGAKetJGVt
          source_id: s_L7hxWzD2ZTXTWP1mKacM3G
          stance: supports
          locator: CBDB:191564
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（501-600）｜历史性依据：CBDB 卒年 = 804
          source:
            id: s_L7hxWzD2ZTXTWP1mKacM3G
            source_type: api_record
            title: 中国历代人物传记资料库：王希遷（CBDB 191564）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191564&o=json
            external_identifier: CBDB:191564
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_wowoFD7zmYgOJfB80onSGT
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9K68Hg6LWRw6qDHq2f6Rbj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wPEQXPU5gfib12y_H-RAUT
          claim_id: c_wowoFD7zmYgOJfB80onSGT
          source_id: s_nJZMFqrH3vsvSzRihD9vmB
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nJZMFqrH3vsvSzRihD9vmB
            source_type: api_record
            title: 中国历代人物传记资料库：王國良（CBDB 191565）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191565&o=json
            external_identifier: CBDB:191565
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9K68Hg6LWRw6qDHq2f6Rbj
        status: active
        display_name: 王國良
        merged_into_person_id: null
    - claim:
        id: c_LB527fAqnFoQd0js54uiMN
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e5MQ5CBhn9uF5QffiX1yWB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lfvc1xAxuOq0ZbzBTOuo0I
          claim_id: c_LB527fAqnFoQd0js54uiMN
          source_id: s_6NypAPbj8TwVLk9dvDM3UK
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6NypAPbj8TwVLk9dvDM3UK
            source_type: api_record
            title: 中国历代人物传记资料库：王國寶（CBDB 191568）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191568&o=json
            external_identifier: CBDB:191568
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.366Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_e5MQ5CBhn9uF5QffiX1yWB
        status: active
        display_name: 王國寶
        merged_into_person_id: null
    - claim:
        id: c_NWnFSEGxA_fIAXMuaoHgNF
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AXamSgwf97zhzK183EkDQr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jrzD5VbLbZ-rat-DuESACr
          claim_id: c_NWnFSEGxA_fIAXMuaoHgNF
          source_id: s_VC3qjP64CSPChsLoTgKJau
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VC3qjP64CSPChsLoTgKJau
            source_type: api_record
            title: 中国历代人物传记资料库：王國文（CBDB 191567）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191567&o=json
            external_identifier: CBDB:191567
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_AXamSgwf97zhzK183EkDQr
        status: active
        display_name: 王國文
        merged_into_person_id: null
    - claim:
        id: c_1nsOQb8dmcsu1sEBFzeNAQ
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_C3p1cFLrDARjSJNznWKi2x
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9OYH6kpsAqMetH-MRPpAsW
          claim_id: c_1nsOQb8dmcsu1sEBFzeNAQ
          source_id: s_yyaWbjtw8cTpe9QtgpsDjf
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yyaWbjtw8cTpe9QtgpsDjf
            source_type: api_record
            title: 中国历代人物传记资料库：王國實（CBDB 191566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191566&o=json
            external_identifier: CBDB:191566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_C3p1cFLrDARjSJNznWKi2x
        status: active
        display_name: 王國實
        merged_into_person_id: null
    - claim:
        id: c_G1n5GlDxaWcsIhnqqsW0d_
        subject_person_id: p_GYZYeCEFAABsTQwFy7Lrmg
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FkS64zHfN6yiBBDLXmCedC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RWRRZALRnf_cJ7zK_BCizn
          claim_id: c_G1n5GlDxaWcsIhnqqsW0d_
          source_id: s_9YykM815eSY6jyiMLGCq2r
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_9YykM815eSY6jyiMLGCq2r
            source_type: api_record
            title: 中国历代人物传记资料库：王國宥（CBDB 191569）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191569&o=json
            external_identifier: CBDB:191569
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:40.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_FkS64zHfN6yiBBDLXmCedC
        status: active
        display_name: 王國宥
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王希遷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希遷（卒于804年），唐人物。中国历代人物传记资料库（CBDB）以人物编号 191564 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| death.date | 804年 | accepted |
| name.primary | 王希遷 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9K68Hg6LWRw6qDHq2f6Rbj | 王國良 | accepted |
| children | p_e5MQ5CBhn9uF5QffiX1yWB | 王國寶 | accepted |
| children | p_AXamSgwf97zhzK183EkDQr | 王國文 | accepted |
| children | p_C3p1cFLrDARjSJNznWKi2x | 王國實 | accepted |
| children | p_FkS64zHfN6yiBBDLXmCedC | 王國宥 | accepted |

## 外部来源

- [中国历代人物传记资料库：王國寶（CBDB 191568）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191568&o=json)
- [中国历代人物传记资料库：王國良（CBDB 191565）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191565&o=json)
- [中国历代人物传记资料库：王國實（CBDB 191566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191566&o=json)
- [中国历代人物传记资料库：王國文（CBDB 191567）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191567&o=json)
- [中国历代人物传记资料库：王國宥（CBDB 191569）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191569&o=json)
- [中国历代人物传记资料库：王希遷（CBDB 191564）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=191564&o=json)
