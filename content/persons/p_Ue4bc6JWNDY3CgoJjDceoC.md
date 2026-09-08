---
schema: wang-person/v1
id: p_Ue4bc6JWNDY3CgoJjDceoC
status: active
merged_into: null
display_name: 王丕
cbdb_id: 26228
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i9tesbodRKdZjTEujDH7Cg
        subject_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王丕，宋人物。CBDB 记录其籍贯记录为鉅野，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 26228 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_keQ8BayeD6UFxB5GnP4aRE
          claim_id: c_i9tesbodRKdZjTEujDH7Cg
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_7fjU4ew89CPXuYB51QW2G2
            source_type: api_record
            title: 维基数据：王丕（Q45409552）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409552
            external_identifier: Q45409552
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_bRPskgv0ymScYqeAjAb9P7
          claim_id: c_i9tesbodRKdZjTEujDH7Cg
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: CBDB:26228
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EiMgRxz8FvPwrjw5WC3uNG
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王丕（26228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json
            external_identifier: CBDB:26228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:14.430Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_MEMfJNcxrNgRLpAZSjRsk9
        subject_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王丕
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_AoNYBh5Es3a8hFjABDEGfm
          claim_id: c_MEMfJNcxrNgRLpAZSjRsk9
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: Q45409552
          quotation: null
          interpretation_note: null
          source:
            id: s_7fjU4ew89CPXuYB51QW2G2
            source_type: api_record
            title: 维基数据：王丕（Q45409552）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409552
            external_identifier: Q45409552
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_t1shpDQ8JHd6wVTJk6L59H
          claim_id: c_MEMfJNcxrNgRLpAZSjRsk9
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: Q45409552
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_aMNv6bSFEU7yi5XatZYkWQ
        subject_person_id: p_EHosypq5k9YAB5xCUgjsne
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3Dh1PAJ5koLuDR1FGZ4Zm
          claim_id: c_aMNv6bSFEU7yi5XatZYkWQ
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_YzFWMzb3gc336Lmm24G4rJ
          claim_id: c_aMNv6bSFEU7yi5XatZYkWQ
          source_id: s_mLEJ2xVWyL44UosCGpuK7Y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_mLEJ2xVWyL44UosCGpuK7Y
            source_type: api_record
            title: 维基数据：王志（Q45409550）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409550
            external_identifier: Q45409550
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person:
        id: p_EHosypq5k9YAB5xCUgjsne
        status: active
        display_name: 王志
        merged_into_person_id: null
  children:
    - claim:
        id: c_iKTrC1p7G3iokeRUbRGwvf
        subject_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zAMNQJueCwPPKR5vjoLaAD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eXuJqyeB5ByTPdMuw2FmCH
          claim_id: c_iKTrC1p7G3iokeRUbRGwvf
          source_id: s_XGTV8UkV21vTCML8WGhwr8
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XGTV8UkV21vTCML8WGhwr8
            source_type: api_record
            title: 维基数据：王彦博（Q45409553）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409553
            external_identifier: Q45409553
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:59:00.696Z
            metadata_json: null
        - id: cs_Uu1BeEv2kjfPc5rYrdyXmx
          claim_id: c_iKTrC1p7G3iokeRUbRGwvf
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_hKyBTbAtdwBMN6p85ooEnU
          claim_id: c_iKTrC1p7G3iokeRUbRGwvf
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: 亲属关系：子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_zAMNQJueCwPPKR5vjoLaAD
        status: active
        display_name: 王彦博
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
        subject_person_id: p_tJA4SGo5rnDTPZB6FnPcWP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ytkK5QrgZeGBxgtNu8VQ47
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_wEkVgfUrxKckakiL9hkMpN
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_wEkVgfUrxKckakiL9hkMpN
            source_type: api_record
            title: 维基数据：周氏（Q45432073）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45432073
            external_identifier: Q45432073
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_pUtycMAjmgxmoXHez6KEMc
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_kchwVhEjTZ2jynRxspWXT7
          claim_id: c_tGyE6Vpg4Y6NDkC3L7GpQZ
          source_id: s_EiMgRxz8FvPwrjw5WC3uNG
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_tJA4SGo5rnDTPZB6FnPcWP
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王丕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王丕，宋人物。CBDB 记录其籍贯记录为鉅野，入仕记录为科舉: 進士(籠統)。中国历代人物传记资料库（CBDB）以人物编号 26228 收录其独立传记记录；未列明的生平细节仍待可靠史料补充。 | accepted |
| name.primary | 王丕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EHosypq5k9YAB5xCUgjsne | 王志 | accepted |
| children | p_zAMNQJueCwPPKR5vjoLaAD | 王彦博 | accepted |
| spouses | p_tJA4SGo5rnDTPZB6FnPcWP | 周氏 | accepted |

## 外部来源

- [维基数据：王丕（Q45409552）](https://www.wikidata.org/wiki/Q45409552)
- [维基数据：王彦博（Q45409553）](https://www.wikidata.org/wiki/Q45409553)
- [维基数据：王志（Q45409550）](https://www.wikidata.org/wiki/Q45409550)
- [维基数据：周氏（Q45432073）](https://www.wikidata.org/wiki/Q45432073)
- [CBDB 中国历代人物传记资料库：王丕（26228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26228&o=json)
