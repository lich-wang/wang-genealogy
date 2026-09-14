---
schema: wang-person/v1
id: p_SS97xGcPYDqvhXCDmF9tN7
status: active
merged_into: null
display_name: 王表
revision: 6
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9fULVBjyMLcVyqr5V7eJYT
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_8Anfg7LXVb5AV81qDT63eQ
          claim_id: c_9fULVBjyMLcVyqr5V7eJYT
          source_id: s_ozeoJKaXquPH9EAA5aseJy
          stance: supports
          locator: CBDB:221923
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（221923）
          source: &a1
            id: s_ozeoJKaXquPH9EAA5aseJy
            source_type: api_record
            title: 中国历代人物传记资料库：王表（CBDB 221923）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221923&o=json
            external_identifier: CBDB:221923
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.352Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Kt8trq8GHtDSFQZEfr3n3C
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王表，明人物。萬曆八年進士，籍贯蒲城，曾任府同知。（中国历代人物传记资料库 CBDB 221923）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_w4RnN8OkJQeXLrTpphRgrY
          claim_id: c_Kt8trq8GHtDSFQZEfr3n3C
          source_id: s_ozeoJKaXquPH9EAA5aseJy
          stance: supports
          locator: CBDB:221923
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_Hocf_yRmNLhGXn4xrpM4TZ
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3aMVouUh1i5LfdSb79YgNN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_U3UEIzv-H9Fm1LNcAruJWx
          claim_id: c_Hocf_yRmNLhGXn4xrpM4TZ
          source_id: s_ozeoJKaXquPH9EAA5aseJy
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3aMVouUh1i5LfdSb79YgNN
        status: active
        display_name: 王元命
        merged_into_person_id: null
    - claim:
        id: c_0dEW_4WSw-EUzeBpSpAkbV
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_556QY2aLP4bFt9NKECxT7M
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1IepyZQVSFmg9q0s7SuEVR
          claim_id: c_0dEW_4WSw-EUzeBpSpAkbV
          source_id: s_RWxWgi9v1jLViZ2S3HTCq2
          stance: supports
          locator: CBDB：兄弟 王元命（206711）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王元相 与 王元命 为同胞（CBDB 记「弟」），王元命 之父／母即 王元相 之父／母。
          source:
            id: s_RWxWgi9v1jLViZ2S3HTCq2
            source_type: api_record
            title: 中国历代人物传记资料库：王元相（CBDB 221929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221929&o=json
            external_identifier: CBDB:221929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_556QY2aLP4bFt9NKECxT7M
        status: active
        display_name: 王元相
        merged_into_person_id: null
    - claim:
        id: c_msz0e24k0-PoecHKno6tKT
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e6LV8nckSZ8KZCoB9GJGBs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0tVWEmh5m8-TgKlg2m0QKm
          claim_id: c_msz0e24k0-PoecHKno6tKT
          source_id: s_gB7_LZD7wgTCjiclI_rBfN
          stance: supports
          locator: CBDB：兄弟 王元命（206711）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王元卿 与 王元命 为同胞（CBDB 记「弟」），王元命 之父／母即 王元卿 之父／母。
          source:
            id: s_gB7_LZD7wgTCjiclI_rBfN
            source_type: api_record
            title: 中国历代人物传记资料库：王元卿（CBDB 221930）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json
            external_identifier: CBDB:221930
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e6LV8nckSZ8KZCoB9GJGBs
        status: active
        display_name: 王元卿
        merged_into_person_id: null
    - claim:
        id: c_7-28Y2_aPr3drsx4RiAdtj
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fdXx9WXc5iDGBMMcVgHJxM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zX8Ko2OEa4KxTwgHOC2UWi
          claim_id: c_7-28Y2_aPr3drsx4RiAdtj
          source_id: s_0KbSrudnCqpkkanuN2kS9k
          stance: supports
          locator: CBDB：兄弟 王元命（206711）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王元柄 与 王元命 为同胞（CBDB 记「弟」），王元命 之父／母即 王元柄 之父／母。
          source:
            id: s_0KbSrudnCqpkkanuN2kS9k
            source_type: api_record
            title: 中国历代人物传记资料库：王元柄（CBDB 221932）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221932&o=json
            external_identifier: CBDB:221932
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fdXx9WXc5iDGBMMcVgHJxM
        status: active
        display_name: 王元柄
        merged_into_person_id: null
    - claim:
        id: c_wx8Q_f20T_oZWeugtD7eCf
        subject_person_id: p_SS97xGcPYDqvhXCDmF9tN7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fg8LEqA7PGgSwFFEBSeQfN
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YpYA4uf6qyBraYmR88G-qw
          claim_id: c_wx8Q_f20T_oZWeugtD7eCf
          source_id: s_kuMfjuh10PLSJNO0ftl_wQ
          stance: supports
          locator: CBDB：兄弟 王元命（206711）之父／母 王表
          quotation: null
          interpretation_note: 由兄弟关系推断：王元良 与 王元命 为同胞（CBDB 记「弟」），王元命 之父／母即 王元良 之父／母。
          source:
            id: s_kuMfjuh10PLSJNO0ftl_wQ
            source_type: api_record
            title: 中国历代人物传记资料库：王元良（CBDB 221931）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221931&o=json
            external_identifier: CBDB:221931
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fg8LEqA7PGgSwFFEBSeQfN
        status: active
        display_name: 王元良
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王表

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王表 | accepted |
| bio.summary | 王表，明人物。萬曆八年進士，籍贯蒲城，曾任府同知。（中国历代人物传记资料库 CBDB 221923） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_3aMVouUh1i5LfdSb79YgNN | 王元命 | accepted |
| children | p_556QY2aLP4bFt9NKECxT7M | 王元相 | accepted |
| children | p_e6LV8nckSZ8KZCoB9GJGBs | 王元卿 | accepted |
| children | p_fdXx9WXc5iDGBMMcVgHJxM | 王元柄 | accepted |
| children | p_fg8LEqA7PGgSwFFEBSeQfN | 王元良 | accepted |

## 外部来源

- [中国历代人物传记资料库：王表（CBDB 221923）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221923&o=json)
- [中国历代人物传记资料库：王元柄（CBDB 221932）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221932&o=json)
- [中国历代人物传记资料库：王元良（CBDB 221931）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221931&o=json)
- [中国历代人物传记资料库：王元卿（CBDB 221930）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221930&o=json)
- [中国历代人物传记资料库：王元相（CBDB 221929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221929&o=json)
