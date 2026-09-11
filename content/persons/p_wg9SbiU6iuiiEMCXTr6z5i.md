---
schema: wang-person/v1
id: p_wg9SbiU6iuiiEMCXTr6z5i
status: active
merged_into: null
display_name: 王野父
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_u4NDuEDyiNw7QNR2Mj4JnH
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王野父
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_t1JKMMY2vHadCRjhbLsmEB
          claim_id: c_u4NDuEDyiNw7QNR2Mj4JnH
          source_id: s_CTNCjcySEhGkAV1E7H6ZGF
          stance: supports
          locator: CBDB:175763
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175763）
          source: &a1
            id: s_CTNCjcySEhGkAV1E7H6ZGF
            source_type: api_record
            title: 中国历代人物传记资料库：王野父（CBDB 175763）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175763&o=json
            external_identifier: CBDB:175763
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_BuKPx6GKChbDK85VM9EZRG
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 569年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mDaC1DHuYrmVKiUVZjwMTM
          claim_id: c_BuKPx6GKChbDK85VM9EZRG
          source_id: s_CTNCjcySEhGkAV1E7H6ZGF
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
        id: c_PNutXgCwgHhDkRK83JrWCK
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为南北朝人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_X5P2P8MoJ7dBdaEBjRo93Q
          claim_id: c_PNutXgCwgHhDkRK83JrWCK
          source_id: s_CTNCjcySEhGkAV1E7H6ZGF
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
        id: c_3DrGtUXyC68HOHc-Okj4JP
        subject_person_id: p_5vNiHu3G4ma4pw4PWMpTnv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oxZMsstj00XGyKZCunPGgC
          claim_id: c_3DrGtUXyC68HOHc-Okj4JP
          source_id: s_jhnAYBd4hBZTSFsJp5j5u9
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jhnAYBd4hBZTSFsJp5j5u9
            source_type: api_record
            title: 中国历代人物传记资料库：王廣業（CBDB 155127）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155127&o=json
            external_identifier: CBDB:155127
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.874Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5vNiHu3G4ma4pw4PWMpTnv
        status: active
        display_name: 王廣業
        merged_into_person_id: null
  children:
    - claim:
        id: c_2DrohR7bRz0WJHV1_IXTCj
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WmFTihaGM8KRJSc8kBpUBP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O10X6ovRfxKUpMm2TeImLe
          claim_id: c_2DrohR7bRz0WJHV1_IXTCj
          source_id: s_dFWAHx9nBjDD4LMZR2DTg2
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dFWAHx9nBjDD4LMZR2DTg2
            source_type: api_record
            title: 中国历代人物传记资料库：王友札（CBDB 175778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175778&o=json
            external_identifier: CBDB:175778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.259Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WmFTihaGM8KRJSc8kBpUBP
        status: active
        display_name: 王友札
        merged_into_person_id: null
    - claim:
        id: c_Yn9R-zduPM77TY_INlm2ls
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EV8fEUrhLwWyvaPQ2UhEec
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cg-AJ33AQ9PRi1mFWNiFo-
          claim_id: c_Yn9R-zduPM77TY_INlm2ls
          source_id: s_5KfF6oEm5XBePQsAH2yKBp
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5KfF6oEm5XBePQsAH2yKBp
            source_type: api_record
            title: 中国历代人物传记资料库：王君儒（CBDB 151070）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151070&o=json
            external_identifier: CBDB:151070
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:53.368Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EV8fEUrhLwWyvaPQ2UhEec
        status: active
        display_name: 王君儒
        merged_into_person_id: null
    - claim:
        id: c_NUcnWoavwQq3ngR1Up7se1
        subject_person_id: p_wg9SbiU6iuiiEMCXTr6z5i
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uj9iEnV6pkqMeV3HS81VMA
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KwVTdzjJ4mXLOvv6J7hPSd
          claim_id: c_NUcnWoavwQq3ngR1Up7se1
          source_id: s_LNyNNomuhHZ8KMK99JdjeG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LNyNNomuhHZ8KMK99JdjeG
            source_type: api_record
            title: 中国历代人物传记资料库：王師丘（CBDB 175801）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175801&o=json
            external_identifier: CBDB:175801
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_uj9iEnV6pkqMeV3HS81VMA
        status: active
        display_name: 王師丘
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王野父

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王野父 | accepted |
| death.date | 569年 | accepted |
| bio.summary | CBDB 记载为南北朝人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5vNiHu3G4ma4pw4PWMpTnv | 王廣業 | accepted |
| children | p_WmFTihaGM8KRJSc8kBpUBP | 王友札 | accepted |
| children | p_EV8fEUrhLwWyvaPQ2UhEec | 王君儒 | accepted |
| children | p_uj9iEnV6pkqMeV3HS81VMA | 王師丘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廣業（CBDB 155127）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=155127&o=json)
- [中国历代人物传记资料库：王君儒（CBDB 151070）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=151070&o=json)
- [中国历代人物传记资料库：王師丘（CBDB 175801）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175801&o=json)
- [中国历代人物传记资料库：王野父（CBDB 175763）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175763&o=json)
- [中国历代人物传记资料库：王友札（CBDB 175778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175778&o=json)
