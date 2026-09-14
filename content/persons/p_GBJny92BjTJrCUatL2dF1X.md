---
schema: wang-person/v1
id: p_GBJny92BjTJrCUatL2dF1X
status: active
merged_into: null
display_name: 王鑑
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QLPZajVH2JB471t3rfDv5p
        subject_person_id: p_GBJny92BjTJrCUatL2dF1X
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xo3Yq7Mncop48CHp7ZMTFu
          claim_id: c_QLPZajVH2JB471t3rfDv5p
          source_id: s_U3eQ3oKSSidQnCMqQZa6Gd
          stance: supports
          locator: CBDB:68835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68835）
          source: &a1
            id: s_U3eQ3oKSSidQnCMqQZa6Gd
            source_type: api_record
            title: 中国历代人物传记资料库：王鑑（CBDB 68835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68835&o=json
            external_identifier: CBDB:68835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.097Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7QiF7e6jcHAQJRDc9xxKQr
        subject_person_id: p_GBJny92BjTJrCUatL2dF1X
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鑑，清人物。明清進士進士，籍贯定州直隸州，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 68835）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pEyKWNahZygpvL7Cdrl_Nj
          claim_id: c_7QiF7e6jcHAQJRDc9xxKQr
          source_id: s_U3eQ3oKSSidQnCMqQZa6Gd
          stance: supports
          locator: CBDB:68835
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_B2417emsSUxDTsvkAPbQN6
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O81292x2E-mYh5SwFlEnCy
          claim_id: c_B2417emsSUxDTsvkAPbQN6
          source_id: s_oJweWCL2PxjJbK2zRjDYF6
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_oJweWCL2PxjJbK2zRjDYF6
            source_type: api_record
            title: 中国历代人物传记资料库：王吉甫（CBDB 264236）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264236&o=json
            external_identifier: CBDB:264236
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_58T6FS2HPdsESXyAWQ5HsZ
        status: active
        display_name: 王吉甫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_cIG5iU5N0LkTxcDEeSB7LE
        subject_person_id: p_A9vJuh2UYD5eWvCSDmg7tj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OI3fxDfIxDAn6BD2FbEjAe
          claim_id: c_cIG5iU5N0LkTxcDEeSB7LE
          source_id: s_QCs4gUzQgKAbYYevDeG3Qu
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第三十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QCs4gUzQgKAbYYevDeG3Qu
            source_type: api_record
            title: 中国历代人物传记资料库：王疇（CBDB 264225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264225&o=json
            external_identifier: CBDB:264225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_A9vJuh2UYD5eWvCSDmg7tj
        status: active
        display_name: 王疇
        merged_into_person_id: null
    - claim:
        id: c_5JnrxxYLPWl-aLF0rMuXt7
        subject_person_id: p_EDnmHqmtBQUHHB1hZ2ien3
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HKnLijo1iw3tLOTgYmdnqV
          claim_id: c_5JnrxxYLPWl-aLF0rMuXt7
          source_id: s_XHHYfBAeBB1z4cU62x2Gup
          stance: supports
          locator: 景泰五年進士登科錄:一卷，第三甲第三十三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_XHHYfBAeBB1z4cU62x2Gup
            source_type: api_record
            title: 中国历代人物传记资料库：王公柔（CBDB 264214）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264214&o=json
            external_identifier: CBDB:264214
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:01.428Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_EDnmHqmtBQUHHB1hZ2ien3
        status: active
        display_name: 王公柔
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_DL4ohSnMvGCFVnnIJgboYE
        subject_person_id: p_2vhLtAEfYEAKfqsmFkPmPE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-xXG1ksbbxnEJos1KNG32G
          claim_id: c_DL4ohSnMvGCFVnnIJgboYE
          source_id: s_7W-NLXejJNhfV3igWR0njf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68835 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7W-NLXejJNhfV3igWR0njf
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 264269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json
            external_identifier: CBDB:264269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2vhLtAEfYEAKfqsmFkPmPE
        status: active
        display_name: 王固
        merged_into_person_id: null
    - claim:
        id: c_gcMFMXY_GmDlC9yPwCXlJd
        subject_person_id: p_4NNH2b7ph6dGDSzKVJgCbo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_THcmFiG7Nwn6bHVRB2fd72
          claim_id: c_gcMFMXY_GmDlC9yPwCXlJd
          source_id: s_MvBc9Pp7ZTIcUn0117qy65
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68835 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MvBc9Pp7ZTIcUn0117qy65
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 264303）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264303&o=json
            external_identifier: CBDB:264303
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4NNH2b7ph6dGDSzKVJgCbo
        status: active
        display_name: 王銳
        merged_into_person_id: null
    - claim:
        id: c_rC6LCNv6u-VfFKvIE2EZDr
        subject_person_id: p_GBJny92BjTJrCUatL2dF1X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pZvZDWqN8fXFnFhqGjtXXD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7SeDBxHKt-4YzqVD4slguf
          claim_id: c_rC6LCNv6u-VfFKvIE2EZDr
          source_id: s_Kd2o05297TgdeYBezwvBN9
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68835 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Kd2o05297TgdeYBezwvBN9
            source_type: api_record
            title: 中国历代人物传记资料库：王樽（CBDB 264280）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json
            external_identifier: CBDB:264280
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pZvZDWqN8fXFnFhqGjtXXD
        status: active
        display_name: 王樽
        merged_into_person_id: null
    - claim:
        id: c_LJsAB9--1XhHXf37WI3aGl
        subject_person_id: p_GBJny92BjTJrCUatL2dF1X
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_urh8FniQCZwFsizAw6pB3W
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_L3Mjf81EY27xhRuZXcdGpt
          claim_id: c_LJsAB9--1XhHXf37WI3aGl
          source_id: s_GFS-beQc8wQGwp5wVNUU80
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 68835 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GFS-beQc8wQGwp5wVNUU80
            source_type: api_record
            title: 中国历代人物传记资料库：王鉞（CBDB 264291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264291&o=json
            external_identifier: CBDB:264291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_urh8FniQCZwFsizAw6pB3W
        status: active
        display_name: 王鉞
        merged_into_person_id: null
---

# 王鑑

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鑑 | accepted |
| bio.summary | 王鑑，清人物。明清進士進士，籍贯定州直隸州，身份为良吏;循吏，入仕進士。（中国历代人物传记资料库 CBDB 68835） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_58T6FS2HPdsESXyAWQ5HsZ | 王吉甫 | accepted |
| ancestors | p_A9vJuh2UYD5eWvCSDmg7tj | 王疇 | accepted |
| ancestors | p_EDnmHqmtBQUHHB1hZ2ien3 | 王公柔 | accepted |
| other | p_2vhLtAEfYEAKfqsmFkPmPE | 王固 | accepted |
| other | p_4NNH2b7ph6dGDSzKVJgCbo | 王銳 | accepted |
| other | p_pZvZDWqN8fXFnFhqGjtXXD | 王樽 | accepted |
| other | p_urh8FniQCZwFsizAw6pB3W | 王鉞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王疇（CBDB 264225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264225&o=json)
- [中国历代人物传记资料库：王公柔（CBDB 264214）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264214&o=json)
- [中国历代人物传记资料库：王固（CBDB 264269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json)
- [中国历代人物传记资料库：王吉甫（CBDB 264236）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264236&o=json)
- [中国历代人物传记资料库：王鑑（CBDB 68835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68835&o=json)
- [中国历代人物传记资料库：王銳（CBDB 264303）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264303&o=json)
- [中国历代人物传记资料库：王鉞（CBDB 264291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264291&o=json)
- [中国历代人物传记资料库：王樽（CBDB 264280）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264280&o=json)
