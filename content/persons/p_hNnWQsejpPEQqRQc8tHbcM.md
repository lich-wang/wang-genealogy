---
schema: wang-person/v1
id: p_hNnWQsejpPEQqRQc8tHbcM
status: active
merged_into: null
display_name: 王鶴
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_33CXWsAUKjyJaJap8Tpaq6
        subject_person_id: p_hNnWQsejpPEQqRQc8tHbcM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鶴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_wPMcW1t3vTrjAsbszG4cVx
          claim_id: c_33CXWsAUKjyJaJap8Tpaq6
          source_id: s_d1qQD3Qrn4cM42HTdd6hMZ
          stance: supports
          locator: CBDB:126882
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126882）
          source: &a1
            id: s_d1qQD3Qrn4cM42HTdd6hMZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鶴（CBDB 126882）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126882&o=json
            external_identifier: CBDB:126882
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.282Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_A7v229NQxb5hH1ZjCqn7nW
        subject_person_id: p_hNnWQsejpPEQqRQc8tHbcM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tjZKpNus5fF4awyqnuzfbn
          claim_id: c_A7v229NQxb5hH1ZjCqn7nW
          source_id: s_d1qQD3Qrn4cM42HTdd6hMZ
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
        id: c_WKjw-UrVNXnHY7OKTroDCW
        subject_person_id: p_3oaUC24rDBzQdieoGLRvwi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_hNnWQsejpPEQqRQc8tHbcM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_r4VbRTTh3f5xBYNOSs9zF0
          claim_id: c_WKjw-UrVNXnHY7OKTroDCW
          source_id: s_MF1ip2xzfS4k82UcLquWa4
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MF1ip2xzfS4k82UcLquWa4
            source_type: api_record
            title: 中国历代人物传记资料库：王鑾（CBDB 307126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307126&o=json
            external_identifier: CBDB:307126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.787Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3oaUC24rDBzQdieoGLRvwi
        status: active
        display_name: 王鑾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_zKaZpL8fThMjTzybOydHMk
        subject_person_id: p_JhkQF88QRKMzMjFA7shFSh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hNnWQsejpPEQqRQc8tHbcM
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hRx_F9_NmdllvPjWOkryFB
          claim_id: c_zKaZpL8fThMjTzybOydHMk
          source_id: s_3quSJ63qmteEvwULaBU7tF
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3quSJ63qmteEvwULaBU7tF
            source_type: api_record
            title: 中国历代人物传记资料库：王敬（CBDB 307125）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307125&o=json
            external_identifier: CBDB:307125
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JhkQF88QRKMzMjFA7shFSh
        status: active
        display_name: 王敬
        merged_into_person_id: null
    - claim:
        id: c_6jdPhl9PYZ0YCChYDtrmKi
        subject_person_id: p_s16saEUEo3gqA1yJKZiCwg
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_hNnWQsejpPEQqRQc8tHbcM
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iuXHj9pAiUde_zil5KVie3
          claim_id: c_6jdPhl9PYZ0YCChYDtrmKi
          source_id: s_6H5zCoERjxgudkRNw3SVLd
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第八十七名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_6H5zCoERjxgudkRNw3SVLd
            source_type: api_record
            title: 中国历代人物传记资料库：王琰（CBDB 307124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307124&o=json
            external_identifier: CBDB:307124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.786Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_s16saEUEo3gqA1yJKZiCwg
        status: active
        display_name: 王琰
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王鶴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鶴 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3oaUC24rDBzQdieoGLRvwi | 王鑾 | accepted |
| ancestors | p_JhkQF88QRKMzMjFA7shFSh | 王敬 | accepted |
| ancestors | p_s16saEUEo3gqA1yJKZiCwg | 王琰 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鶴（CBDB 126882）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126882&o=json)
- [中国历代人物传记资料库：王敬（CBDB 307125）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307125&o=json)
- [中国历代人物传记资料库：王鑾（CBDB 307126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307126&o=json)
- [中国历代人物传记资料库：王琰（CBDB 307124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=307124&o=json)
