---
schema: wang-person/v1
id: p_qMg6Q8CEPodQMPp2EgjAAi
status: active
merged_into: null
display_name: 王以通
cbdb_id: 206705
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RuWbYwdCN8dFSFcbnVTDLZ
        subject_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以通（生于1545年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 206705）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2ZNWQQCyCoT6eEBp-2xM24
          claim_id: c_RuWbYwdCN8dFSFcbnVTDLZ
          source_id: s_Lg9i3Ct5w2xV4reHeXtEhr
          stance: supports
          locator: CBDB:206705
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Lg9i3Ct5w2xV4reHeXtEhr
            source_type: api_record
            title: 中国历代人物传记资料库：王以通（CBDB 206705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206705&o=json
            external_identifier: CBDB:206705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_TQs7Uh82wMyX4573q4949v
        subject_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1545年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1545-01-01
            latest: 1545-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tShE2fvLTYduEDkYGCjCb3
          claim_id: c_TQs7Uh82wMyX4573q4949v
          source_id: s_Lg9i3Ct5w2xV4reHeXtEhr
          stance: supports
          locator: CBDB:206705
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1545
          source:
            id: s_Lg9i3Ct5w2xV4reHeXtEhr
            source_type: api_record
            title: 中国历代人物传记资料库：王以通（CBDB 206705）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206705&o=json
            external_identifier: CBDB:206705
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:43.132Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3NdXJZ45s1JG1QZAeqJpTf
        subject_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王以通
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_yDZSWX6CimhbmxY1EoJi23
          claim_id: c_3NdXJZ45s1JG1QZAeqJpTf
          source_id: s_Lg9i3Ct5w2xV4reHeXtEhr
          stance: supports
          locator: CBDB:206705
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（801-900）｜历史性依据：CBDB 生年 = 1545
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dhwpxiAt4qJTwGJeHKn6vq
        subject_person_id: p_BtPUy8Ayd7XFTp2c4HBHNK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xlZLbflc-BzLV_VM54fgXb
          claim_id: c_dhwpxiAt4qJTwGJeHKn6vq
          source_id: s_24eA4fyvhqr7NX93bEWr3B
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_24eA4fyvhqr7NX93bEWr3B
            source_type: api_record
            title: 中国历代人物传记资料库：王榮（CBDB 221819）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221819&o=json
            external_identifier: CBDB:221819
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.344Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BtPUy8Ayd7XFTp2c4HBHNK
        status: active
        display_name: 王榮
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_k9anDmd7jKGRaMfkTopxYT
        subject_person_id: p_JHYkG4D5bDS11ywRtQogJy
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SqHqgKlc18VT_q37oekVyu
          claim_id: c_k9anDmd7jKGRaMfkTopxYT
          source_id: s_B3CBdpsrRwN76oF7SL2JQb
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十一名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_B3CBdpsrRwN76oF7SL2JQb
            source_type: api_record
            title: 中国历代人物传记资料库：王進宗（CBDB 221818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221818&o=json
            external_identifier: CBDB:221818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_JHYkG4D5bDS11ywRtQogJy
        status: active
        display_name: 王進宗
        merged_into_person_id: null
    - claim:
        id: c_iL1-NfsXR5wrZXw3J4mNyw
        subject_person_id: p_prHqmerzCM6YpbMCaZuJpq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qMg6Q8CEPodQMPp2EgjAAi
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rVpm0ImIpweJgomDCsUZ08
          claim_id: c_iL1-NfsXR5wrZXw3J4mNyw
          source_id: s_etdr5hy5MsgFdQm5GjQVGJ
          stance: supports
          locator: 萬曆八年進士登科錄:一卷，第三甲第二百二十一名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_etdr5hy5MsgFdQm5GjQVGJ
            source_type: api_record
            title: 中国历代人物传记资料库：王茂績（CBDB 221817）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221817&o=json
            external_identifier: CBDB:221817
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_prHqmerzCM6YpbMCaZuJpq
        status: active
        display_name: 王茂績
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王以通

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王以通（生于1545年），明人物。明清進士進士，籍贯晉江，入仕進士。（中国历代人物传记资料库 CBDB 206705） | accepted |
| birth.date | 1545年 | accepted |
| name.primary | 王以通 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BtPUy8Ayd7XFTp2c4HBHNK | 王榮 | accepted |
| ancestors | p_JHYkG4D5bDS11ywRtQogJy | 王進宗 | accepted |
| ancestors | p_prHqmerzCM6YpbMCaZuJpq | 王茂績 | accepted |

## 外部来源

- [中国历代人物传记资料库：王進宗（CBDB 221818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221818&o=json)
- [中国历代人物传记资料库：王茂績（CBDB 221817）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221817&o=json)
- [中国历代人物传记资料库：王榮（CBDB 221819）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=221819&o=json)
- [中国历代人物传记资料库：王以通（CBDB 206705）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=206705&o=json)
