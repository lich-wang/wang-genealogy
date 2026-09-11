---
schema: wang-person/v1
id: p_MoTp1H1qMsn6hE765X8qFG
status: active
merged_into: null
display_name: 王九儀
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RghbHE6cY3Um3RwdRGnYsC
        subject_person_id: p_MoTp1H1qMsn6hE765X8qFG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4wM3FR3wCH8GKvmCD55sSQ
          claim_id: c_RghbHE6cY3Um3RwdRGnYsC
          source_id: s_6zAfp4BQWahn7TB6Sv1FJb
          stance: supports
          locator: CBDB:206435
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（206435）
          source: &a1
            id: s_6zAfp4BQWahn7TB6Sv1FJb
            source_type: api_record
            title: 中国历代人物传记资料库：王九儀（CBDB 206435）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206435&o=json
            external_identifier: CBDB:206435
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_gsAHJhN4rhLg7Xde8vkzTY
        subject_person_id: p_MoTp1H1qMsn6hE765X8qFG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1551年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_msVz52CXoSQcj6w4qutNCQ
          claim_id: c_gsAHJhN4rhLg7Xde8vkzTY
          source_id: s_6zAfp4BQWahn7TB6Sv1FJb
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
        id: c_qZ7rvYBx2cq9voWdysuXyy
        subject_person_id: p_MoTp1H1qMsn6hE765X8qFG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王九儀（生于1551年），明人物。明清進士進士，籍贯長安，入仕進士。（中国历代人物传记资料库 CBDB 206435）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9EfhXlhysv4EtnLzTm4SWB
          claim_id: c_qZ7rvYBx2cq9voWdysuXyy
          source_id: s_6zAfp4BQWahn7TB6Sv1FJb
          stance: supports
          locator: CBDB:206435
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_GetaqOxZxDd1Ei5Z_9zthR
        subject_person_id: p_gtgcsF161bSGyqs9GdxEZB
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ys30yOON_tEDJZf-aAb7-U
          claim_id: c_GetaqOxZxDd1Ei5Z_9zthR
          source_id: s_TFgYfx152QQ5u1X47MSA34
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百七十九名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TFgYfx152QQ5u1X47MSA34
            source_type: api_record
            title: 中国历代人物传记资料库：王鵾（CBDB 217983）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217983&o=json
            external_identifier: CBDB:217983
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.262Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_gtgcsF161bSGyqs9GdxEZB
        status: active
        display_name: 王鵾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_hgh8gOTNNDR5qAqiVOQxtB
        subject_person_id: p_bDhTt7eEHZKhPZjTtaVUeV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qgNZmv_byVv8MvmOo9H1eS
          claim_id: c_hgh8gOTNNDR5qAqiVOQxtB
          source_id: s_TV8bYfbEijdGVXnbUfF5hZ
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百七十九名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_TV8bYfbEijdGVXnbUfF5hZ
            source_type: api_record
            title: 中国历代人物传记资料库：王靖（CBDB 217982）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217982&o=json
            external_identifier: CBDB:217982
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bDhTt7eEHZKhPZjTtaVUeV
        status: active
        display_name: 王靖
        merged_into_person_id: null
    - claim:
        id: c_ItjLNGnX8wzs-0Id8_FUT1
        subject_person_id: p_tup6U68suv356aGkCfJ6Bt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_MoTp1H1qMsn6hE765X8qFG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C1XA2urlstrwWSpgZ5USFe
          claim_id: c_ItjLNGnX8wzs-0Id8_FUT1
          source_id: s_BZpSVStxrLaZ7DtoM8rdbu
          stance: supports
          locator: 萬曆五年進士登科錄:一卷，第三甲第一百七十九名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_BZpSVStxrLaZ7DtoM8rdbu
            source_type: api_record
            title: 中国历代人物传记资料库：王林（CBDB 217981）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217981&o=json
            external_identifier: CBDB:217981
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_tup6U68suv356aGkCfJ6Bt
        status: active
        display_name: 王林
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王九儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王九儀 | accepted |
| birth.date | 1551年 | accepted |
| bio.summary | 王九儀（生于1551年），明人物。明清進士進士，籍贯長安，入仕進士。（中国历代人物传记资料库 CBDB 206435） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gtgcsF161bSGyqs9GdxEZB | 王鵾 | accepted |
| ancestors | p_bDhTt7eEHZKhPZjTtaVUeV | 王靖 | accepted |
| ancestors | p_tup6U68suv356aGkCfJ6Bt | 王林 | accepted |

## 外部来源

- [中国历代人物传记资料库：王靖（CBDB 217982）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217982&o=json)
- [中国历代人物传记资料库：王九儀（CBDB 206435）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206435&o=json)
- [中国历代人物传记资料库：王鵾（CBDB 217983）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217983&o=json)
- [中国历代人物传记资料库：王林（CBDB 217981）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=217981&o=json)
