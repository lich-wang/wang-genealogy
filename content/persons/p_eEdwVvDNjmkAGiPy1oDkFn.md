---
schema: wang-person/v1
id: p_eEdwVvDNjmkAGiPy1oDkFn
status: active
merged_into: null
display_name: 王懋
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KVnWosDBRCs3LHG1RVesR
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2vxzJ25ziu4iDe3fQ9EjDC
          claim_id: c_8KVnWosDBRCs3LHG1RVesR
          source_id: s_W6USVnyoKDrkxHa4mF2vcZ
          stance: supports
          locator: CBDB:281063
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281063）
          source: &a1
            id: s_W6USVnyoKDrkxHa4mF2vcZ
            source_type: api_record
            title: 中国历代人物传记资料库：王懋（CBDB 281063）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281063&o=json
            external_identifier: CBDB:281063
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.045Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JPLVtBU4J1C1Zd8rSnLEwG
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懋，明人物。景泰五年進士，籍贯渾源州，曾任知縣。（中国历代人物传记资料库 CBDB 281063）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Y12x133O3mAytD-cXV0BS2
          claim_id: c_JPLVtBU4J1C1Zd8rSnLEwG
          source_id: s_W6USVnyoKDrkxHa4mF2vcZ
          stance: supports
          locator: CBDB:281063
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_SprXRKHBxhyWhqr2S6ZSBE
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PNbNcPEUfkwixuHyP9PuYH
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k2UNW09ZxjwYL-wCeVjKAY
          claim_id: c_SprXRKHBxhyWhqr2S6ZSBE
          source_id: s_W6USVnyoKDrkxHa4mF2vcZ
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第二百零九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PNbNcPEUfkwixuHyP9PuYH
        status: active
        display_name: 王上齡
        merged_into_person_id: null
    - claim:
        id: c_QK3uxFAauhIpeLyfzPbdFJ
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZnwMF5A9S76EDgwbFYuUon
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gXILkezOIx9gVw1naFdNed
          claim_id: c_QK3uxFAauhIpeLyfzPbdFJ
          source_id: s_gB5kCgucMGuDBWkSV_h2il
          stance: supports
          locator: CBDB：兄弟 王上齡（198503）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王昌齡 与 王上齡 为同胞（CBDB 记「弟」），王上齡 之父／母即 王昌齡 之父／母。
          source:
            id: s_gB5kCgucMGuDBWkSV_h2il
            source_type: api_record
            title: 中国历代人物传记资料库：王昌齡（CBDB 281097）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json
            external_identifier: CBDB:281097
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZnwMF5A9S76EDgwbFYuUon
        status: active
        display_name: 王昌齡
        merged_into_person_id: null
    - claim:
        id: c_J2yfz8UK-YeQTMDRFFJKpb
        subject_person_id: p_eEdwVvDNjmkAGiPy1oDkFn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_txK4ci9jRUPNJLAJ3Mwy8p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3Hq2H0mQ7LfmkjAt9b-BED
          claim_id: c_J2yfz8UK-YeQTMDRFFJKpb
          source_id: s_8o88il4jBAEgGgMV6JAE5n
          stance: supports
          locator: CBDB：兄弟 王上齡（198503）之父／母 王懋
          quotation: null
          interpretation_note: 由兄弟关系推断：王延齡 与 王上齡 为同胞（CBDB 记「弟」），王上齡 之父／母即 王延齡 之父／母。
          source:
            id: s_8o88il4jBAEgGgMV6JAE5n
            source_type: api_record
            title: 中国历代人物传记资料库：王延齡（CBDB 281086）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281086&o=json
            external_identifier: CBDB:281086
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_txK4ci9jRUPNJLAJ3Mwy8p
        status: active
        display_name: 王延齡
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懋

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懋 | accepted |
| bio.summary | 王懋，明人物。景泰五年進士，籍贯渾源州，曾任知縣。（中国历代人物传记资料库 CBDB 281063） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_PNbNcPEUfkwixuHyP9PuYH | 王上齡 | accepted |
| children | p_ZnwMF5A9S76EDgwbFYuUon | 王昌齡 | accepted |
| children | p_txK4ci9jRUPNJLAJ3Mwy8p | 王延齡 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昌齡（CBDB 281097）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281097&o=json)
- [中国历代人物传记资料库：王懋（CBDB 281063）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281063&o=json)
- [中国历代人物传记资料库：王延齡（CBDB 281086）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281086&o=json)
