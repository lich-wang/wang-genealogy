---
schema: wang-person/v1
id: p_oXDRfETnLuW3oEE7nvKJYF
status: active
merged_into: null
display_name: 王國賓
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1zJgAYGRmng2MpaKDBGU38
        subject_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MBvQTyuhKmk7kH6JMPGC1Y
          claim_id: c_1zJgAYGRmng2MpaKDBGU38
          source_id: s_8zi5seb7f3H7ouRKuv684n
          stance: supports
          locator: CBDB:206149
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206149）
          source: &a1
            id: s_8zi5seb7f3H7ouRKuv684n
            source_type: api_record
            title: 中国历代人物传记资料库：王國賓（CBDB 206149）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206149&o=json
            external_identifier: CBDB:206149
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.887Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_8cEfFZSFBDizoiAdc2XcwR
        subject_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1539年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uKv3bLAn2k1ZntngmoUpEb
          claim_id: c_8cEfFZSFBDizoiAdc2XcwR
          source_id: s_8zi5seb7f3H7ouRKuv684n
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nwSjqhsDgWEHLGjiJTTZPR
        subject_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王國賓（生于1539年），明人物。明清進士進士，籍贯無錫，入仕進士。（中国历代人物传记资料库 CBDB 206149）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ecsu34Eah3Flky4rXdRpyg
          claim_id: c_nwSjqhsDgWEHLGjiJTTZPR
          source_id: s_8zi5seb7f3H7ouRKuv684n
          stance: supports
          locator: CBDB:206149
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_u16gKSGfx17NTi7z8ZJQff
        subject_person_id: p_HY2YuL547Kh5aqzUsBs5ED
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vRiGw_Oi6q0_P6xy_7_yw4
          claim_id: c_u16gKSGfx17NTi7z8ZJQff
          source_id: s_We8vizuHiJK4rXEBZdUvF1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_We8vizuHiJK4rXEBZdUvF1
            source_type: api_record
            title: 中国历代人物传记资料库：王應奎（CBDB 213996）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213996&o=json
            external_identifier: CBDB:213996
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.142Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HY2YuL547Kh5aqzUsBs5ED
        status: active
        display_name: 王應奎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_qmSAUrVYuRzwYVw4tJRDCy
        subject_person_id: p_GyHrAoxhpZ634C9AC4RXkc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jyUHIZULuEDBXApBDBzNr
          claim_id: c_qmSAUrVYuRzwYVw4tJRDCy
          source_id: s_LTotmTDPQrSLyEZBMD13Um
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十五名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_LTotmTDPQrSLyEZBMD13Um
            source_type: api_record
            title: 中国历代人物传记资料库：王達（CBDB 213994）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213994&o=json
            external_identifier: CBDB:213994
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.139Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GyHrAoxhpZ634C9AC4RXkc
        status: active
        display_name: 王達
        merged_into_person_id: null
    - claim:
        id: c_tfi6EAnor9EbeF1xh3-KP1
        subject_person_id: p_zn4ku41edFQvgK1ZLKrm7S
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BgaUKAn9djBe5VCnvX8AxL
          claim_id: c_tfi6EAnor9EbeF1xh3-KP1
          source_id: s_73jeV43Hx5MAbbvFoPQzpW
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第三甲第八十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_73jeV43Hx5MAbbvFoPQzpW
            source_type: api_record
            title: 中国历代人物传记资料库：王澄（CBDB 213995）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213995&o=json
            external_identifier: CBDB:213995
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_zn4ku41edFQvgK1ZLKrm7S
        status: active
        display_name: 王澄
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_B6ySBXBlAIP4tyrqARU7Xz
        subject_person_id: p_dpJKSddRLC2G5AJsENKCN3
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_oXDRfETnLuW3oEE7nvKJYF
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gM0v4ZHPLA3ZemBXrgsymi
          claim_id: c_B6ySBXBlAIP4tyrqARU7Xz
          source_id: s___qIW_xkOq6Wi_OPpaYYcf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 206149 王國賓）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s___qIW_xkOq6Wi_OPpaYYcf
            source_type: api_record
            title: 中国历代人物传记资料库：王國賢（CBDB 213999）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213999&o=json
            external_identifier: CBDB:213999
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_dpJKSddRLC2G5AJsENKCN3
        status: active
        display_name: 王國賢
        merged_into_person_id: null
---

# 王國賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王國賓 | accepted |
| birth.date | 1539年 | accepted |
| bio.summary | 王國賓（生于1539年），明人物。明清進士進士，籍贯無錫，入仕進士。（中国历代人物传记资料库 CBDB 206149） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HY2YuL547Kh5aqzUsBs5ED | 王應奎 | accepted |
| ancestors | p_GyHrAoxhpZ634C9AC4RXkc | 王達 | accepted |
| ancestors | p_zn4ku41edFQvgK1ZLKrm7S | 王澄 | accepted |
| other | p_dpJKSddRLC2G5AJsENKCN3 | 王國賢 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澄（CBDB 213995）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213995&o=json)
- [中国历代人物传记资料库：王達（CBDB 213994）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213994&o=json)
- [中国历代人物传记资料库：王國賓（CBDB 206149）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206149&o=json)
- [中国历代人物传记资料库：王國賢（CBDB 213999）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213999&o=json)
- [中国历代人物传记资料库：王應奎（CBDB 213996）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=213996&o=json)
