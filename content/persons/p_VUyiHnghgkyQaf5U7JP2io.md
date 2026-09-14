---
schema: wang-person/v1
id: p_VUyiHnghgkyQaf5U7JP2io
status: active
merged_into: null
display_name: 王文烱
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f6VpkRBj3FLNoSey45AtpD
        subject_person_id: p_VUyiHnghgkyQaf5U7JP2io
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文烱
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8n4AysCdDjzRT4FKV6nLJV
          claim_id: c_f6VpkRBj3FLNoSey45AtpD
          source_id: s_AUQVXuEXB5Af6GsrL9K7Gd
          stance: supports
          locator: CBDB:327293
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327293）
          source: &a1
            id: s_AUQVXuEXB5Af6GsrL9K7Gd
            source_type: api_record
            title: 中国历代人物传记资料库：王文烱（CBDB 327293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327293&o=json
            external_identifier: CBDB:327293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.245Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vWgNtt9Qzg925etB7C55Jz
        subject_person_id: p_VUyiHnghgkyQaf5U7JP2io
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王文烱，明人物。嘉靖四十一年進士，籍贯東平州，入仕貢生: 選貢(優貢 after 1628)，曾任知縣、序班。（中国历代人物传记资料库 CBDB 327293）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2r7x-_6lb3zIXCYVk7rLSr
          claim_id: c_vWgNtt9Qzg925etB7C55Jz
          source_id: s_AUQVXuEXB5Af6GsrL9K7Gd
          stance: supports
          locator: CBDB:327293
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fkWPB0nRW6ocDZWb5LygpT
        subject_person_id: p_CiJPDmrHnjH3i1SjFztPki
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VUyiHnghgkyQaf5U7JP2io
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jEGcgwXP9pn_9Nnxku_05Z
          claim_id: c_fkWPB0nRW6ocDZWb5LygpT
          source_id: s_7fBwakIrm16TKrEpEvLhi1
          stance: supports
          locator: CBDB：兄弟 王謨（126858）之父／母 王邦益
          quotation: null
          interpretation_note: 由兄弟关系推断：王文烱 与 王謨 为同胞（CBDB 记「兄」），王謨 之父／母即 王文烱 之父／母。
          source:
            id: s_7fBwakIrm16TKrEpEvLhi1
            source_type: api_record
            title: 中国历代人物传记资料库：王文烱（CBDB 327293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327293&o=json
            external_identifier: CBDB:327293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CiJPDmrHnjH3i1SjFztPki
        status: active
        display_name: 王邦益
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_zABCG7xgnGB0MTJfbr0BSf
        subject_person_id: p_VUyiHnghgkyQaf5U7JP2io
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Wi1semPtGkaEHz1tXWTdxD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YI1cyWjm2TCWZarTZRLCKL
          claim_id: c_zABCG7xgnGB0MTJfbr0BSf
          source_id: s_7fBwakIrm16TKrEpEvLhi1
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126858 王謨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7fBwakIrm16TKrEpEvLhi1
            source_type: api_record
            title: 中国历代人物传记资料库：王文烱（CBDB 327293）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327293&o=json
            external_identifier: CBDB:327293
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Wi1semPtGkaEHz1tXWTdxD
        status: active
        display_name: 王謨
        merged_into_person_id: null
---

# 王文烱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文烱 | accepted |
| bio.summary | 王文烱，明人物。嘉靖四十一年進士，籍贯東平州，入仕貢生: 選貢(優貢 after 1628)，曾任知縣、序班。（中国历代人物传记资料库 CBDB 327293） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CiJPDmrHnjH3i1SjFztPki | 王邦益 | accepted |
| other | p_Wi1semPtGkaEHz1tXWTdxD | 王謨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王文烱（CBDB 327293）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327293&o=json)
