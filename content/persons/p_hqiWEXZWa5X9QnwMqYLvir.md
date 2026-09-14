---
schema: wang-person/v1
id: p_hqiWEXZWa5X9QnwMqYLvir
status: active
merged_into: null
display_name: 王通
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_s3fuvn21SeHzXh8kuxivjY
        subject_person_id: p_hqiWEXZWa5X9QnwMqYLvir
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_4BsBrmRspfZN33wDLwMM22
          claim_id: c_s3fuvn21SeHzXh8kuxivjY
          source_id: s_tBmH9UJgEHrSpuvgmsSASQ
          stance: supports
          locator: CBDB:204696
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204696）
          source: &a1
            id: s_tBmH9UJgEHrSpuvgmsSASQ
            source_type: api_record
            title: 中国历代人物传记资料库：王通（CBDB 204696）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204696&o=json
            external_identifier: CBDB:204696
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.836Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_DVqkUAM79Gw9tY6ReyHeKv
        subject_person_id: p_hqiWEXZWa5X9QnwMqYLvir
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1390年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AhFhhMpgWL8hK3CnXoyFNG
          claim_id: c_DVqkUAM79Gw9tY6ReyHeKv
          source_id: s_tBmH9UJgEHrSpuvgmsSASQ
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
        id: c_9hbT7rHPi48Ve3ww2sTtRe
        subject_person_id: p_hqiWEXZWa5X9QnwMqYLvir
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王通（生于1390年），明人物。明清進士進士，籍贯山陽，入仕進士。（中国历代人物传记资料库 CBDB 204696）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__xPakJPVVMUZypW5y8ZnIe
          claim_id: c_9hbT7rHPi48Ve3ww2sTtRe
          source_id: s_tBmH9UJgEHrSpuvgmsSASQ
          stance: supports
          locator: CBDB:204696
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uANW8rSOF57VtlDnofU5Fd
        subject_person_id: p_mfQXgp9oZ7quC2KtJAEAjv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hqiWEXZWa5X9QnwMqYLvir
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XRn7itp59BCQfgvulZk_Er
          claim_id: c_uANW8rSOF57VtlDnofU5Fd
          source_id: s_8DmgVZBzTPZytigLC2mTcK
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第四十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8DmgVZBzTPZytigLC2mTcK
            source_type: api_record
            title: 中国历代人物传记资料库：王順卿（CBDB 322766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322766&o=json
            external_identifier: CBDB:322766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.922Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_mfQXgp9oZ7quC2KtJAEAjv
        status: active
        display_name: 王順卿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_NJ6Z74kJJo_j-8dDQiitZe
        subject_person_id: p_92dJxsE25TGjV3u455Tj1Y
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hqiWEXZWa5X9QnwMqYLvir
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs__9a5mj214rFgY-0qDX53hc
          claim_id: c_NJ6Z74kJJo_j-8dDQiitZe
          source_id: s_M5QkyHLHqBoYq24hfMjY2E
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第四十名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_M5QkyHLHqBoYq24hfMjY2E
            source_type: api_record
            title: 中国历代人物传记资料库：王志善（CBDB 322765）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322765&o=json
            external_identifier: CBDB:322765
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.129Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_92dJxsE25TGjV3u455Tj1Y
        status: active
        display_name: 王志善
        merged_into_person_id: null
    - claim:
        id: c_s-8nloh4EDmuuHDImqkjQM
        subject_person_id: p_FBovsB9N57hRsRrpxfH5Gt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hqiWEXZWa5X9QnwMqYLvir
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0pg4arIdbcxtNeTr1FG8yh
          claim_id: c_s-8nloh4EDmuuHDImqkjQM
          source_id: s_fqjJLJRUCAVDGGg6XyjEqE
          stance: supports
          locator: 宣德五年進士登科錄:一卷，第三甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_fqjJLJRUCAVDGGg6XyjEqE
            source_type: api_record
            title: 中国历代人物传记资料库：王甫（CBDB 322764）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322764&o=json
            external_identifier: CBDB:322764
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.128Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FBovsB9N57hRsRrpxfH5Gt
        status: active
        display_name: 王甫
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_TZHFOvdSqQPUTCov97mrkX
        subject_person_id: p_hqiWEXZWa5X9QnwMqYLvir
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_z6N7vWd7R775SMLRQS7Wdq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YM41XcN_I7ZbJQTrSuoSN7
          claim_id: c_TZHFOvdSqQPUTCov97mrkX
          source_id: s_sWHGScjkgoWk1sSsmsH3BF
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204696 王通）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sWHGScjkgoWk1sSsmsH3BF
            source_type: api_record
            title: 中国历代人物传记资料库：王文貴（CBDB 322769）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322769&o=json
            external_identifier: CBDB:322769
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_z6N7vWd7R775SMLRQS7Wdq
        status: active
        display_name: 王文貴
        merged_into_person_id: null
---

# 王通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王通 | accepted |
| birth.date | 1390年 | accepted |
| bio.summary | 王通（生于1390年），明人物。明清進士進士，籍贯山陽，入仕進士。（中国历代人物传记资料库 CBDB 204696） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mfQXgp9oZ7quC2KtJAEAjv | 王順卿 | accepted |
| ancestors | p_92dJxsE25TGjV3u455Tj1Y | 王志善 | accepted |
| ancestors | p_FBovsB9N57hRsRrpxfH5Gt | 王甫 | accepted |
| other | p_z6N7vWd7R775SMLRQS7Wdq | 王文貴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王甫（CBDB 322764）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322764&o=json)
- [中国历代人物传记资料库：王順卿（CBDB 322766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322766&o=json)
- [中国历代人物传记资料库：王通（CBDB 204696）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204696&o=json)
- [中国历代人物传记资料库：王文貴（CBDB 322769）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322769&o=json)
- [中国历代人物传记资料库：王志善（CBDB 322765）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=322765&o=json)
