---
schema: wang-person/v1
id: p_Koi5WJ5jcXbBAKpaCrntSB
status: active
merged_into: null
display_name: 王復
revision: 9
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_JPSiKw2yersJybcv6A67vD
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2NhCFjLrjoT2HEoAgMAELv
          claim_id: c_JPSiKw2yersJybcv6A67vD
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
          stance: supports
          locator: CBDB:67655
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（67655）
          source: &a1
            id: s_YVFGinKiQ5z6EgLt8Aqurs
            source_type: api_record
            title: 中国历代人物传记资料库：王復（CBDB 67655）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67655&o=json
            external_identifier: CBDB:67655
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.001Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8GRCQefywcv4x6NcB24QGF
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1416年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LZAKaju8upWNrZgTnyHn9J
          claim_id: c_8GRCQefywcv4x6NcB24QGF
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
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
        id: c_k5RNTvgseUZw37ahFdBTun
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1485年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfZQnZRcxaDD6LTNAeBQXn
          claim_id: c_k5RNTvgseUZw37ahFdBTun
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
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
        id: c_EQLdobQdQteLtoqMHE5F5p
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王復（1416年—1485年），明人物。明清進士進士，籍贯固安，身份为孝子/孝女，入仕進士。（中国历代人物传记资料库 CBDB 67655）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZAZtaSyTsh_vZnyIMF_pE6
          claim_id: c_EQLdobQdQteLtoqMHE5F5p
          source_id: s_YVFGinKiQ5z6EgLt8Aqurs
          stance: supports
          locator: CBDB:67655
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_s9LlZaOz7nrr5salbyP1YX
        subject_person_id: p_pgR8SLxunnSi6qPKCxtHNt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jwMl5pqj_fSxa8p2k9cVRq
          claim_id: c_s9LlZaOz7nrr5salbyP1YX
          source_id: s_2M935rawCVyB2ECqTfE8nG
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_2M935rawCVyB2ECqTfE8nG
            source_type: api_record
            title: 中国历代人物传记资料库：王騏（CBDB 237575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237575&o=json
            external_identifier: CBDB:237575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.848Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pgR8SLxunnSi6qPKCxtHNt
        status: active
        display_name: 王騏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_1H5iOo4MgPIvmNXq4X_KLw
        subject_person_id: p_EXUMXpFadPPwv3VumQBd89
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_maDJOGugwup7aPxw1EeOsj
          claim_id: c_1H5iOo4MgPIvmNXq4X_KLw
          source_id: s_i8GbRr4cAnXZkhaChHVAmG
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i8GbRr4cAnXZkhaChHVAmG
            source_type: api_record
            title: 中国历代人物传记资料库：王遜（CBDB 237573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237573&o=json
            external_identifier: CBDB:237573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_EXUMXpFadPPwv3VumQBd89
        status: active
        display_name: 王遜
        merged_into_person_id: null
    - claim:
        id: c_fYgBUJAkDrUNa641LSKLes
        subject_person_id: p_5eD81BdjRhAtWthjVpXoK3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7gPqPhLVXbA0GE9MLTVfHi
          claim_id: c_fYgBUJAkDrUNa641LSKLes
          source_id: s_m99e8WHFUpp44h3i2K98WT
          stance: supports
          locator: 正统七年進士登科錄:一卷，第二甲第十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_m99e8WHFUpp44h3i2K98WT
            source_type: api_record
            title: 中国历代人物传记资料库：王得玉（CBDB 237574）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237574&o=json
            external_identifier: CBDB:237574
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_5eD81BdjRhAtWthjVpXoK3
        status: active
        display_name: 王得玉
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_unZfayKFB9LEZBS7t80vJj
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_T2Yve9LjyH8vDVG7pEVZpV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Grgi513s9ENR51uJ6F2Ewx
          claim_id: c_unZfayKFB9LEZBS7t80vJj
          source_id: s_HlvYwmQTaSW6bpWFicX4lp
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67655 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_HlvYwmQTaSW6bpWFicX4lp
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 237580）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237580&o=json
            external_identifier: CBDB:237580
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_T2Yve9LjyH8vDVG7pEVZpV
        status: active
        display_name: 王徽
        merged_into_person_id: null
    - claim:
        id: c_sF9S80tUgPY09n0bKh3pfN
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_c5DSrempswWvVALNnWE2UJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_j89JoWUXq7p2dhh6hattjH
          claim_id: c_sF9S80tUgPY09n0bKh3pfN
          source_id: s_NcffhoveJCiW98Od1kQfwu
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67655 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NcffhoveJCiW98Od1kQfwu
            source_type: api_record
            title: 中国历代人物传记资料库：王德（CBDB 237583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237583&o=json
            external_identifier: CBDB:237583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_c5DSrempswWvVALNnWE2UJ
        status: active
        display_name: 王德
        merged_into_person_id: null
    - claim:
        id: c_yxfvvHYSOWg6adq9rlel1L
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ecePLWAX2MYTBmTm5LMA1A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J4Tnrqan2Fnwq3wl2JdLiA
          claim_id: c_yxfvvHYSOWg6adq9rlel1L
          source_id: s_ZGJbWXgKGa035nn-RXksgc
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 67655 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ZGJbWXgKGa035nn-RXksgc
            source_type: api_record
            title: 中国历代人物传记资料库：王徑（CBDB 237581）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237581&o=json
            external_identifier: CBDB:237581
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ecePLWAX2MYTBmTm5LMA1A
        status: active
        display_name: 王徑
        merged_into_person_id: null
    - claim:
        id: c_pi2F4RC03JEnEg5QO1htzc
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fYPbLSCh3fmsFfwFD1qKB7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lKFYfmX2mKxz2VI--cbYDr
          claim_id: c_pi2F4RC03JEnEg5QO1htzc
          source_id: s_WRhvSoY6fw0u80xeJtuPXp
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67655 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WRhvSoY6fw0u80xeJtuPXp
            source_type: api_record
            title: 中国历代人物传记资料库：王微（CBDB 237585）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237585&o=json
            external_identifier: CBDB:237585
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fYPbLSCh3fmsFfwFD1qKB7
        status: active
        display_name: 王微
        merged_into_person_id: null
    - claim:
        id: c_Ie7JWjBsg80CiwsoSqG5B7
        subject_person_id: p_Koi5WJ5jcXbBAKpaCrntSB
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jbTXpPD77FiYZ2EWKgrPMv
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9n-m6_EytyuHg24j6ccZal
          claim_id: c_Ie7JWjBsg80CiwsoSqG5B7
          source_id: s_4i39QYfPNVLr2f-G6Uoc9b
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67655 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_4i39QYfPNVLr2f-G6Uoc9b
            source_type: api_record
            title: 中国历代人物传记资料库：王徼（CBDB 237584）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237584&o=json
            external_identifier: CBDB:237584
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jbTXpPD77FiYZ2EWKgrPMv
        status: active
        display_name: 王徼
        merged_into_person_id: null
---

# 王復

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王復 | accepted |
| birth.date | 1416年 | accepted |
| death.date | 1485年 | accepted |
| bio.summary | 王復（1416年—1485年），明人物。明清進士進士，籍贯固安，身份为孝子/孝女，入仕進士。（中国历代人物传记资料库 CBDB 67655） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pgR8SLxunnSi6qPKCxtHNt | 王騏 | accepted |
| ancestors | p_EXUMXpFadPPwv3VumQBd89 | 王遜 | accepted |
| ancestors | p_5eD81BdjRhAtWthjVpXoK3 | 王得玉 | accepted |
| other | p_T2Yve9LjyH8vDVG7pEVZpV | 王徽 | accepted |
| other | p_c5DSrempswWvVALNnWE2UJ | 王德 | accepted |
| other | p_ecePLWAX2MYTBmTm5LMA1A | 王徑 | accepted |
| other | p_fYPbLSCh3fmsFfwFD1qKB7 | 王微 | accepted |
| other | p_jbTXpPD77FiYZ2EWKgrPMv | 王徼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王得玉（CBDB 237574）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237574&o=json)
- [中国历代人物传记资料库：王德（CBDB 237583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237583&o=json)
- [中国历代人物传记资料库：王復（CBDB 67655）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67655&o=json)
- [中国历代人物传记资料库：王徽（CBDB 237580）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237580&o=json)
- [中国历代人物传记资料库：王徼（CBDB 237584）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237584&o=json)
- [中国历代人物传记资料库：王徑（CBDB 237581）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237581&o=json)
- [中国历代人物传记资料库：王騏（CBDB 237575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237575&o=json)
- [中国历代人物传记资料库：王微（CBDB 237585）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237585&o=json)
- [中国历代人物传记资料库：王遜（CBDB 237573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237573&o=json)
