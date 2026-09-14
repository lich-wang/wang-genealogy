---
schema: wang-person/v1
id: p_CvkqbHiKU1yv5J5yN1sDim
status: active
merged_into: null
display_name: 王师古
cbdb_id: 10688
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_dqqtee8HQXeEjDmUmzHTTJ
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师古，宋人物。籍贯金華，身份为良吏;循吏，入仕進士，曾任教授、禮儀院、承議郎。（中国历代人物传记资料库 CBDB 10688）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_4LbsWANEVa8bLnpVsn7CMy
          claim_id: c_dqqtee8HQXeEjDmUmzHTTJ
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: &a2
            id: s_D7NNZLUFKQfdTjRPpLvri2
            source_type: api_record
            title: 维基数据：王师古（Q45369091）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369091
            external_identifier: Q45369091
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_JYFdzhHg7qGa6TjL6o4dmH
          claim_id: c_dqqtee8HQXeEjDmUmzHTTJ
          source_id: s_411AG8EkY8NdEgG32DgoBa
          stance: supports
          locator: CBDB:10688
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_411AG8EkY8NdEgG32DgoBa
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王師古（10688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10688&o=json
            external_identifier: CBDB:10688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:58:57.995Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_ikHRXmMrLbrUL5NUFXtm1q
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王师古
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_oEbxfz46KxKNDsu27oXry3
          claim_id: c_ikHRXmMrLbrUL5NUFXtm1q
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: Q45369091
          quotation: null
          interpretation_note: null
          source:
            id: s_D7NNZLUFKQfdTjRPpLvri2
            source_type: api_record
            title: 维基数据：王师古（Q45369091）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369091
            external_identifier: Q45369091
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
        - id: cs_x7U1KFYJ2W8L45DqDf4at6
          claim_id: c_ikHRXmMrLbrUL5NUFXtm1q
          source_id: s_411AG8EkY8NdEgG32DgoBa
          stance: supports
          locator: Q45369091
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_BC8JbqaoABV5sYbUGVLC5H
        subject_person_id: p_mLtGjU7JUkYcfBzdb7BH9M
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_B9cDiU4DsdwgqetbGc78Uu
          claim_id: c_BC8JbqaoABV5sYbUGVLC5H
          source_id: s_u5XDNLvUkkSgZpXLohmAbF
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_u5XDNLvUkkSgZpXLohmAbF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王登（10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:02:19.443Z
            metadata_json: null
        - id: cs_VxFZvAGetEKM3wiUcatRSP
          claim_id: c_BC8JbqaoABV5sYbUGVLC5H
          source_id: s_rUvLhH5bEHHz1S1yAbATCK
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_rUvLhH5bEHHz1S1yAbATCK
            source_type: api_record
            title: 维基数据：王登（Q45369083）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369083
            external_identifier: Q45369083
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:50:09.552Z
            metadata_json: null
        - id: cs_eaqqUFFMayPF4BkQd3bB15
          claim_id: c_BC8JbqaoABV5sYbUGVLC5H
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_D7NNZLUFKQfdTjRPpLvri2
            source_type: api_record
            title: 维基数据：王师古（Q45369091）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369091
            external_identifier: Q45369091
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
      object_person:
        id: p_mLtGjU7JUkYcfBzdb7BH9M
        status: active
        display_name: 王登
        merged_into_person_id: null
  children:
    - claim:
        id: c_9RgLtkxWCrk8a3iduMPqJ7
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_KvSAytfnCEPFcT3odvBu7N
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ErqdKkgmxfx2RQRK2ZuvT2
          claim_id: c_9RgLtkxWCrk8a3iduMPqJ7
          source_id: s_XvF4Z98PD6E1Z1qCxPAAG7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_XvF4Z98PD6E1Z1qCxPAAG7
            source_type: api_record
            title: 维基数据：王象之（Q10417099）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q10417099
            external_identifier: Q10417099
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:44:52.196Z
            metadata_json: null
        - id: cs_c7zRQ1KoLFk15xjPBuMT81
          claim_id: c_9RgLtkxWCrk8a3iduMPqJ7
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source:
            id: s_D7NNZLUFKQfdTjRPpLvri2
            source_type: api_record
            title: 维基数据：王师古（Q45369091）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45369091
            external_identifier: Q45369091
            license_code: CC0-1.0
            accessed_at: 2026-09-05T01:58:57.822Z
            metadata_json: null
      object_person:
        id: p_KvSAytfnCEPFcT3odvBu7N
        status: active
        display_name: 王象之
        merged_into_person_id: null
    - claim:
        id: c_pqUq1nA5e1kb3gxCyiH2Ko
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_tvnrFsvHvQUKrNdzPoHEVm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eQ4LDMuS3wRGKzBA3EAUrA
          claim_id: c_pqUq1nA5e1kb3gxCyiH2Ko
          source_id: s_hGdsQz7aqgwRprM8Z69YpF
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_hGdsQz7aqgwRprM8Z69YpF
            source_type: api_record
            title: 维基数据：王益之（Q18905525）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q18905525
            external_identifier: Q18905525
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:06.804Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E7%9B%8A%E4%B9%8B
        - id: cs_ZJDtt5CCGAiWgjGM3gnviF
          claim_id: c_pqUq1nA5e1kb3gxCyiH2Ko
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_CyVhr9wMgzyJ7VLjZGkjak
          claim_id: c_pqUq1nA5e1kb3gxCyiH2Ko
          source_id: s_411AG8EkY8NdEgG32DgoBa
          stance: supports
          locator: 亲属关系：三子
          quotation: null
          interpretation_note: CBDB 注明此条来源：宋人傳記資料索引(電子版)
          source: *a1
      object_person:
        id: p_tvnrFsvHvQUKrNdzPoHEVm
        status: active
        display_name: 王益之
        merged_into_person_id: null
    - claim:
        id: c_3pAWjvkNTGpFR8Xcsv73BB
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Vs1PRNKHH6ZpeN7kAJmKti
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rX67LM1AqcapeFV9Ltx8H5
          claim_id: c_3pAWjvkNTGpFR8Xcsv73BB
          source_id: s_sWCnmYdFgCgATu31i6USy7
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_sWCnmYdFgCgATu31i6USy7
            source_type: api_record
            title: 维基数据：王氏（Q45364774）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364774
            external_identifier: Q45364774
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_uh6v1vHe3adkH488fVvxA8
          claim_id: c_3pAWjvkNTGpFR8Xcsv73BB
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_qJhrdrJEinAZbTcgwt1qoN
          claim_id: c_3pAWjvkNTGpFR8Xcsv73BB
          source_id: s_411AG8EkY8NdEgG32DgoBa
          stance: supports
          locator: 亲属关系：女兒
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_Vs1PRNKHH6ZpeN7kAJmKti
        status: active
        display_name: 王氏
        merged_into_person_id: null
    - claim:
        id: c_GQBsKF3rBJkrFSWGSLUCRt
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Xeon7wNRj64Mbj4Xs6WS9n
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4kpDK6dLHNWoqvSe7FvtJx
          claim_id: c_GQBsKF3rBJkrFSWGSLUCRt
          source_id: s_GrN1Mt1Gg3KqbLt2HdbAZH
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_GrN1Mt1Gg3KqbLt2HdbAZH
            source_type: api_record
            title: 维基数据：王谦之（Q45403904）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45403904
            external_identifier: Q45403904
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:12.861Z
            metadata_json: null
        - id: cs_y4mACLmR9MfRC24szK9YeS
          claim_id: c_GQBsKF3rBJkrFSWGSLUCRt
          source_id: s_D7NNZLUFKQfdTjRPpLvri2
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_7a3p4SjvSNgVa5yudKn7c9
          claim_id: c_GQBsKF3rBJkrFSWGSLUCRt
          source_id: s_411AG8EkY8NdEgG32DgoBa
          stance: supports
          locator: 亲属关系：長子
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source: *a1
      object_person:
        id: p_Xeon7wNRj64Mbj4Xs6WS9n
        status: active
        display_name: 王谦之
        merged_into_person_id: null
    - claim:
        id: c_wBdvoGNNADzLdDqKzFbn_c
        subject_person_id: p_CvkqbHiKU1yv5J5yN1sDim
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S21V1QtRVNHD8arYZz2Tbo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zNnUXcyhCmqrI2tcyyLCbr
          claim_id: c_wBdvoGNNADzLdDqKzFbn_c
          source_id: s_waNdnAWGu0tY6BWrRcusgG
          stance: supports
          locator: CBDB：兄弟 王益之（22239）之父／母 王师古
          quotation: null
          interpretation_note: 由兄弟关系推断：王睡之 与 王益之 为同胞（CBDB 记「兄」），王益之 之父／母即 王睡之 之父／母。
          source:
            id: s_waNdnAWGu0tY6BWrRcusgG
            source_type: api_record
            title: 中国历代人物传记资料库：王睡之（CBDB 384594）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json
            external_identifier: CBDB:384594
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_S21V1QtRVNHD8arYZz2Tbo
        status: active
        display_name: 王睡之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王师古

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王师古，宋人物。籍贯金華，身份为良吏;循吏，入仕進士，曾任教授、禮儀院、承議郎。（中国历代人物传记资料库 CBDB 10688） | accepted |
| name.primary | 王师古 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mLtGjU7JUkYcfBzdb7BH9M | 王登 | accepted |
| children | p_KvSAytfnCEPFcT3odvBu7N | 王象之 | accepted |
| children | p_tvnrFsvHvQUKrNdzPoHEVm | 王益之 | accepted |
| children | p_Vs1PRNKHH6ZpeN7kAJmKti | 王氏 | accepted |
| children | p_Xeon7wNRj64Mbj4Xs6WS9n | 王谦之 | accepted |
| children | p_S21V1QtRVNHD8arYZz2Tbo | 王睡之 | accepted |

## 外部来源

- [维基数据：王登（Q45369083）](https://www.wikidata.org/wiki/Q45369083)
- [维基数据：王谦之（Q45403904）](https://www.wikidata.org/wiki/Q45403904)
- [维基数据：王师古（Q45369091）](https://www.wikidata.org/wiki/Q45369091)
- [维基数据：王氏（Q45364774）](https://www.wikidata.org/wiki/Q45364774)
- [维基数据：王象之（Q10417099）](https://www.wikidata.org/wiki/Q10417099)
- [维基数据：王益之（Q18905525）](https://www.wikidata.org/wiki/Q18905525)
- [中国历代人物传记资料库：王睡之（CBDB 384594）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=384594&o=json)
- [CBDB 中国历代人物传记资料库：王登（10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
- [CBDB 中国历代人物传记资料库：王師古（10688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10688&o=json)
