---
schema: wang-person/v1
id: p_5MbQaN6sLNicuc7FmMieJd
status: active
merged_into: null
display_name: 王文錦
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_m2DUPe3skFQwiMER6qxCjG
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文錦
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EzR18B626HqtUYve5zJLwE
          claim_id: c_m2DUPe3skFQwiMER6qxCjG
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: CBDB:57810
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（57810）
          source: &a1
            id: s_gcATuP6CQr39pk8hp1ieE8
            source_type: api_record
            title: 中国历代人物传记资料库：王文錦（CBDB 57810）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json
            external_identifier: CBDB:57810
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_PYeU2TXn9XNAgniWHNbExS
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1835年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AQSqb8eL6f5MyVBWocYmW5
          claim_id: c_PYeU2TXn9XNAgniWHNbExS
          source_id: s_gcATuP6CQr39pk8hp1ieE8
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
        id: c_N1HZJmuHMai9a1HdvDogk6
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1896年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZAcwvAvFkWKnNZXCh3S1C7
          claim_id: c_N1HZJmuHMai9a1HdvDogk6
          source_id: s_gcATuP6CQr39pk8hp1ieE8
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
        id: c_nNoZ8kG3793w1nBHzxYau4
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王文錦（1835年—1896年），清人物。明清進士進士，籍贯天津，入仕進士。（中国历代人物传记资料库 CBDB 57810）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tWQjB9jKseyIPaSYFKzrx-
          claim_id: c_nNoZ8kG3793w1nBHzxYau4
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: CBDB:57810
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_KLoI_Xy2bb4ckBK6p17fTi
        subject_person_id: p_3BvBua6ZTDGv4MpNMX8be5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5MbQaN6sLNicuc7FmMieJd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_khd4ORc4d8NWWIF52awoh0
          claim_id: c_KLoI_Xy2bb4ckBK6p17fTi
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3BvBua6ZTDGv4MpNMX8be5
        status: active
        display_name: 王炳榮
        merged_into_person_id: null
  children:
    - claim:
        id: c_dVtIlG8ua1AnuZHvl_lePw
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6TW397KYJb7vx4wkHQCYtc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kFFwYKb79FTA0UE5JnIB85
          claim_id: c_dVtIlG8ua1AnuZHvl_lePw
          source_id: s_xJP5Xkc5WHJw8qTts5xZmc
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_xJP5Xkc5WHJw8qTts5xZmc
            source_type: api_record
            title: 中国历代人物传记资料库：王金適（CBDB 515673）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515673&o=json
            external_identifier: CBDB:515673
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_6TW397KYJb7vx4wkHQCYtc
        status: active
        display_name: 王金適
        merged_into_person_id: null
    - claim:
        id: c_7_l3l8Gcdk4h-udDcBdQW9
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QGnCAWtNEYZLe2KyDMMQFy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Tlg_0go4SC7JeFagIV-fA4
          claim_id: c_7_l3l8Gcdk4h-udDcBdQW9
          source_id: s_z2R8E4kvRpvkWPesjPKQ5B
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_z2R8E4kvRpvkWPesjPKQ5B
            source_type: api_record
            title: 中国历代人物传记资料库：王金達（CBDB 515672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515672&o=json
            external_identifier: CBDB:515672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QGnCAWtNEYZLe2KyDMMQFy
        status: active
        display_name: 王金達
        merged_into_person_id: null
    - claim:
        id: c_4wnJDi7I-HbEfCe0bU-Pet
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TePg5iyzsuvdTvQTET6NCS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RcU1FaYSMFiEjHzMGhuZ9F
          claim_id: c_4wnJDi7I-HbEfCe0bU-Pet
          source_id: s_XvEkFpYpyHLyt3Uebo4UFi
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XvEkFpYpyHLyt3Uebo4UFi
            source_type: api_record
            title: 中国历代人物传记资料库：王金逵（CBDB 515671）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515671&o=json
            external_identifier: CBDB:515671
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:18:16.852Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_TePg5iyzsuvdTvQTET6NCS
        status: active
        display_name: 王金逵
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_Z2VKfE8P0nPVO1DL97nlDt
        subject_person_id: p_tNvdP123bDbFgE6LHR9Qrp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5MbQaN6sLNicuc7FmMieJd
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DmgTw04cvtdB14VxsApzvo
          claim_id: c_Z2VKfE8P0nPVO1DL97nlDt
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tNvdP123bDbFgE6LHR9Qrp
        status: active
        display_name: 王盛言
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_qJ26vzVGhzdy7_kvPFKfH7
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DZWt9AM7bc3P3e9fG5Py1x
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lfHwsD6zVKQjeg-hV2SpHJ
          claim_id: c_qJ26vzVGhzdy7_kvPFKfH7
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DZWt9AM7bc3P3e9fG5Py1x
        status: active
        display_name: 王保琪
        merged_into_person_id: null
    - claim:
        id: c_UQjkKGjzw8q3xY2kZAbFAC
        subject_person_id: p_5MbQaN6sLNicuc7FmMieJd
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2CN1rb9zH543xRBstFNPXh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JWYUiLuFLxMmLzeDhaEtA4
          claim_id: c_UQjkKGjzw8q3xY2kZAbFAC
          source_id: s_gcATuP6CQr39pk8hp1ieE8
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），1042：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_2CN1rb9zH543xRBstFNPXh
        status: active
        display_name: 王保璐
        merged_into_person_id: null
  other: []
---

# 王文錦

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王文錦 | accepted |
| birth.date | 1835年 | accepted |
| death.date | 1896年 | accepted |
| bio.summary | 王文錦（1835年—1896年），清人物。明清進士進士，籍贯天津，入仕進士。（中国历代人物传记资料库 CBDB 57810） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3BvBua6ZTDGv4MpNMX8be5 | 王炳榮 | accepted |
| children | p_6TW397KYJb7vx4wkHQCYtc | 王金適 | accepted |
| children | p_QGnCAWtNEYZLe2KyDMMQFy | 王金達 | accepted |
| children | p_TePg5iyzsuvdTvQTET6NCS | 王金逵 | accepted |
| ancestors | p_tNvdP123bDbFgE6LHR9Qrp | 王盛言 | accepted |
| descendants | p_DZWt9AM7bc3P3e9fG5Py1x | 王保琪 | accepted |
| descendants | p_2CN1rb9zH543xRBstFNPXh | 王保璐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王金達（CBDB 515672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515672&o=json)
- [中国历代人物传记资料库：王金逵（CBDB 515671）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515671&o=json)
- [中国历代人物传记资料库：王金適（CBDB 515673）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=515673&o=json)
- [中国历代人物传记资料库：王文錦（CBDB 57810）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=57810&o=json)
