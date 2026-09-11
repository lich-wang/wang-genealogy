---
schema: wang-person/v1
id: p_vM6985QJehceoGJD1bbJKF
status: active
merged_into: null
display_name: 王澄
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_KPNHP29fPiu93Xi3nW7QUT
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_puumpcjRCAGTADHdjyP54m
          claim_id: c_KPNHP29fPiu93Xi3nW7QUT
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
          stance: supports
          locator: CBDB:100938
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（100938）
          source: &a1
            id: s_L25tMjRPyRu4qPsx4K9Mwg
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 100938）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json
            external_identifier: CBDB:100938
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.583Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BYuLCp3PZZn46NLUweGYt4
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1269年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qK2bzzY5CpTL7CWvGDEwGG
          claim_id: c_BYuLCp3PZZn46NLUweGYt4
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
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
        id: c_Hr4W8pEL6jo2jDNMxpzHJi
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1341年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GqCRcsD5TKGCzzDKXfkx9Z
          claim_id: c_Hr4W8pEL6jo2jDNMxpzHJi
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
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
        id: c_PvWBwFXMMehm8fyH661SjP
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为元人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jHkcLEywomB81ieqQD6Lb6
          claim_id: c_PvWBwFXMMehm8fyH661SjP
          source_id: s_L25tMjRPyRu4qPsx4K9Mwg
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
  ancestors: []
  descendants:
    - claim:
        id: c_JMLvR74ocA20jQ6DbKnsw1
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2b14Pj9cMfbGVVm23QMpPW
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lCHfJuDjEHq4wy4aTqvuu5
          claim_id: c_JMLvR74ocA20jQ6DbKnsw1
          source_id: s_zThzCvSwgPynFsUpZnkaoP
          stance: supports
          locator: 宋濂全集，1606：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zThzCvSwgPynFsUpZnkaoP
            source_type: api_record
            title: 中国历代人物传记资料库：王應（CBDB 134166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134166&o=json
            external_identifier: CBDB:134166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2b14Pj9cMfbGVVm23QMpPW
        status: active
        display_name: 王應
        merged_into_person_id: null
    - claim:
        id: c_yFOiZA1GHQaFJ6HR4JvXG2
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2M3Bp18QYjru654oK8qp9J
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SIrVaehwA8dj2UOd_eC61L
          claim_id: c_yFOiZA1GHQaFJ6HR4JvXG2
          source_id: s_K7a1s1KSf4be6uY4QxijWU
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_K7a1s1KSf4be6uY4QxijWU
            source_type: api_record
            title: 中国历代人物传记资料库：王瀹（CBDB 134187）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134187&o=json
            external_identifier: CBDB:134187
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.314Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2M3Bp18QYjru654oK8qp9J
        status: active
        display_name: 王瀹
        merged_into_person_id: null
    - claim:
        id: c_M1DDG8IpG1P4f0nSyOluJI
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_A41SYFNqMRpiFQWr968GE9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BCSx6vU66qaq9WiD_oyb39
          claim_id: c_M1DDG8IpG1P4f0nSyOluJI
          source_id: s_CMwGWyKHgyvt9D7oaqeNwz
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CMwGWyKHgyvt9D7oaqeNwz
            source_type: api_record
            title: 中国历代人物传记资料库：王淇（CBDB 134181）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134181&o=json
            external_identifier: CBDB:134181
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.312Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A41SYFNqMRpiFQWr968GE9
        status: active
        display_name: 王淇
        merged_into_person_id: null
    - claim:
        id: c_tizg2GmjB9_oNMu2qWYdmS
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_D9eJdq8ySQayL4dxPcs9FD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gocb80w6TboHJcr9dlM0cy
          claim_id: c_tizg2GmjB9_oNMu2qWYdmS
          source_id: s_eUQZoPWBy2LRB2T4DFtHA7
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_eUQZoPWBy2LRB2T4DFtHA7
            source_type: api_record
            title: 中国历代人物传记资料库：王沇（CBDB 134190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134190&o=json
            external_identifier: CBDB:134190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_D9eJdq8ySQayL4dxPcs9FD
        status: active
        display_name: 王沇
        merged_into_person_id: null
    - claim:
        id: c_LulSddOgyc98TD_4k1Fi7g
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_f3Kpde459iSuKNBG46WSjP
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UA-uWwMMTuT5NpVTwtMzWV
          claim_id: c_LulSddOgyc98TD_4k1Fi7g
          source_id: s_Z6jJVVLFzByBtRiuWnDt8D
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z6jJVVLFzByBtRiuWnDt8D
            source_type: api_record
            title: 中国历代人物传记资料库：王溥（CBDB 134188）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134188&o=json
            external_identifier: CBDB:134188
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.315Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_f3Kpde459iSuKNBG46WSjP
        status: active
        display_name: 王溥
        merged_into_person_id: null
    - claim:
        id: c_VkjZVXAlCkqTFSqwvsPuKv
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FCSQdth7sQc3XHSLXg595T
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RbYpz6F4sE7XZdECEAGB4p
          claim_id: c_VkjZVXAlCkqTFSqwvsPuKv
          source_id: s_v8x9WjbthYqCdP6RDL9TXS
          stance: supports
          locator: 宋濂全集，1606：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_v8x9WjbthYqCdP6RDL9TXS
            source_type: api_record
            title: 中国历代人物传记资料库：王恩（CBDB 134173）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134173&o=json
            external_identifier: CBDB:134173
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FCSQdth7sQc3XHSLXg595T
        status: active
        display_name: 王恩
        merged_into_person_id: null
    - claim:
        id: c_-j5ZVjFfjtjfXxwDgTSAv3
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hUNqjruZ372JDRxBbR4n3D
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AUWrx_yzzadRRHaLzArpqj
          claim_id: c_-j5ZVjFfjtjfXxwDgTSAv3
          source_id: s_X4vjiaAjxqJW9z1MAivxEX
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_X4vjiaAjxqJW9z1MAivxEX
            source_type: api_record
            title: 中国历代人物传记资料库：王涯（CBDB 134192）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134192&o=json
            external_identifier: CBDB:134192
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.319Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hUNqjruZ372JDRxBbR4n3D
        status: active
        display_name: 王涯
        merged_into_person_id: null
    - claim:
        id: c_AQyysKJNy3r7vg29Mg9SiK
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ibLtNY57TKY2kousyXGR55
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sHcUxMe1Fq8Z_W1HeKazoA
          claim_id: c_AQyysKJNy3r7vg29Mg9SiK
          source_id: s_FACr6CgMXX6SVsV4jjiZ8h
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_FACr6CgMXX6SVsV4jjiZ8h
            source_type: api_record
            title: 中国历代人物传记资料库：王澤（CBDB 134176）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134176&o=json
            external_identifier: CBDB:134176
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.308Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_ibLtNY57TKY2kousyXGR55
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_JzEIhuGMpWuDgu4pjZBD7k
        subject_person_id: p_vM6985QJehceoGJD1bbJKF
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MEo2EuAoRqj8z9NEXK68tk
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_B30mM_A8wC99FEEERAcJOo
          claim_id: c_JzEIhuGMpWuDgu4pjZBD7k
          source_id: s_zERaAAnS1hfxRe8iXQfmSY
          stance: supports
          locator: 宋濂全集，1606：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zERaAAnS1hfxRe8iXQfmSY
            source_type: api_record
            title: 中国历代人物传记资料库：王濠（CBDB 134194）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134194&o=json
            external_identifier: CBDB:134194
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.320Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_MEo2EuAoRqj8z9NEXK68tk
        status: active
        display_name: 王濠
        merged_into_person_id: null
  other: []
---

# 王澄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澄 | accepted |
| birth.date | 1269年 | accepted |
| death.date | 1341年 | accepted |
| bio.summary | CBDB 记载为元人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_2b14Pj9cMfbGVVm23QMpPW | 王應 | accepted |
| descendants | p_2M3Bp18QYjru654oK8qp9J | 王瀹 | accepted |
| descendants | p_A41SYFNqMRpiFQWr968GE9 | 王淇 | accepted |
| descendants | p_D9eJdq8ySQayL4dxPcs9FD | 王沇 | accepted |
| descendants | p_f3Kpde459iSuKNBG46WSjP | 王溥 | accepted |
| descendants | p_FCSQdth7sQc3XHSLXg595T | 王恩 | accepted |
| descendants | p_hUNqjruZ372JDRxBbR4n3D | 王涯 | accepted |
| descendants | p_ibLtNY57TKY2kousyXGR55 | 王澤 | accepted |
| descendants | p_MEo2EuAoRqj8z9NEXK68tk | 王濠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 100938）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=100938&o=json)
- [中国历代人物传记资料库：王恩（CBDB 134173）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134173&o=json)
- [中国历代人物传记资料库：王濠（CBDB 134194）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134194&o=json)
- [中国历代人物传记资料库：王溥（CBDB 134188）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134188&o=json)
- [中国历代人物传记资料库：王淇（CBDB 134181）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134181&o=json)
- [中国历代人物传记资料库：王涯（CBDB 134192）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134192&o=json)
- [中国历代人物传记资料库：王沇（CBDB 134190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134190&o=json)
- [中国历代人物传记资料库：王應（CBDB 134166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134166&o=json)
- [中国历代人物传记资料库：王瀹（CBDB 134187）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134187&o=json)
- [中国历代人物传记资料库：王澤（CBDB 134176）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134176&o=json)
