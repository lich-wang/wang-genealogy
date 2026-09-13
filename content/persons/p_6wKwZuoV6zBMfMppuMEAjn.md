---
schema: wang-person/v1
id: p_6wKwZuoV6zBMfMppuMEAjn
status: active
merged_into: null
display_name: 王公及
cbdb_id: 38286
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_qZzF3nu97vmeK7Y2Ae7YZf
        subject_person_id: p_6wKwZuoV6zBMfMppuMEAjn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公及（生于1222年），宋人物。寶祐進士，籍贯河南，入仕進士。（中国历代人物传记资料库 CBDB 38286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_O5xN0absAmD7MqcqxZk7iI
          claim_id: c_qZzF3nu97vmeK7Y2Ae7YZf
          source_id: s_wPe9GhVSrPgPuaHa6fVbGM
          stance: supports
          locator: CBDB:38286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_wPe9GhVSrPgPuaHa6fVbGM
            source_type: api_record
            title: 中国历代人物传记资料库：王公及（CBDB 38286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38286&o=json
            external_identifier: CBDB:38286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_i9amPKnxkR79mXqPQqLCqo
        subject_person_id: p_6wKwZuoV6zBMfMppuMEAjn
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1222年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1222-01-01
            latest: 1222-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Mv9t2bAiK2X75BV8GuZ2Kq
          claim_id: c_i9amPKnxkR79mXqPQqLCqo
          source_id: s_wPe9GhVSrPgPuaHa6fVbGM
          stance: supports
          locator: CBDB:38286
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1222
          source:
            id: s_wPe9GhVSrPgPuaHa6fVbGM
            source_type: api_record
            title: 中国历代人物传记资料库：王公及（CBDB 38286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38286&o=json
            external_identifier: CBDB:38286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:41.297Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_2BdRenSWhMh2pao9HofVGN
        subject_person_id: p_6wKwZuoV6zBMfMppuMEAjn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王公及
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vi1aemw6gqUNr3cSV2Qb1K
          claim_id: c_2BdRenSWhMh2pao9HofVGN
          source_id: s_wPe9GhVSrPgPuaHa6fVbGM
          stance: supports
          locator: CBDB:38286
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（601-700）｜历史性依据：CBDB 生年 = 1222
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_HXSdBBii1DUIypS45ZAYjS
        subject_person_id: p_eV5c7tC3nbgohQT5xf6PWJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6wKwZuoV6zBMfMppuMEAjn
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4lVq9_YDJHuReWZP-rbRao
          claim_id: c_HXSdBBii1DUIypS45ZAYjS
          source_id: s_NNHUWydD1VEuUatqYXhomq
          stance: supports
          locator: 寶祐登科錄：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NNHUWydD1VEuUatqYXhomq
            source_type: api_record
            title: 中国历代人物传记资料库：王仲元（CBDB 137881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137881&o=json
            external_identifier: CBDB:137881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_eV5c7tC3nbgohQT5xf6PWJ
        status: active
        display_name: 王仲元
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王公及

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王公及（生于1222年），宋人物。寶祐進士，籍贯河南，入仕進士。（中国历代人物传记资料库 CBDB 38286） | accepted |
| birth.date | 1222年 | accepted |
| name.primary | 王公及 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_eV5c7tC3nbgohQT5xf6PWJ | 王仲元 | accepted |

## 外部来源

- [中国历代人物传记资料库：王公及（CBDB 38286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=38286&o=json)
- [中国历代人物传记资料库：王仲元（CBDB 137881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=137881&o=json)
