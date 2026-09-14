---
schema: wang-person/v1
id: p_1XSyusiB7GXwQNmzrNDUf4
status: active
merged_into: null
display_name: 王謙
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_epJaX9C7MzVEfecYrko47q
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Jbuk7mz6WF7q4DTsUe1zpV
          claim_id: c_epJaX9C7MzVEfecYrko47q
          source_id: s_pBmMW6zjhQ8EDiVE2Ntyp1
          stance: supports
          locator: CBDB:212637
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（212637）
          source: &a1
            id: s_pBmMW6zjhQ8EDiVE2Ntyp1
            source_type: api_record
            title: 中国历代人物传记资料库：王謙（CBDB 212637）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212637&o=json
            external_identifier: CBDB:212637
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.090Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q7GKN1LHvY896wT19BpEKt
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王謙，明人物。萬曆二年進士，籍贯壽張，曾任省祭官。（中国历代人物传记资料库 CBDB 212637）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_5Y_dxp3No5mKD9pxIqxATJ
          claim_id: c_Q7GKN1LHvY896wT19BpEKt
          source_id: s_pBmMW6zjhQ8EDiVE2Ntyp1
          stance: supports
          locator: CBDB:212637
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_lpVixqSmnBZrlfl_Al7np1
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9WD2WpcaAMBVHNJjVMQ2UR
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KOoT1wCBm2JI4CVV7FYh8Z
          claim_id: c_lpVixqSmnBZrlfl_Al7np1
          source_id: s_pBmMW6zjhQ8EDiVE2Ntyp1
          stance: supports
          locator: 萬曆二年進士登科錄:一卷，第二甲第三十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_9WD2WpcaAMBVHNJjVMQ2UR
        status: active
        display_name: 王錄
        merged_into_person_id: null
    - claim:
        id: c_fmUjcjgNsLItrbVo-HRtL6
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3LbFqpm1y41GseX5pd88Pr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kA2eYlhuh77wyEgMYzPGHu
          claim_id: c_fmUjcjgNsLItrbVo-HRtL6
          source_id: s_TE73UzqivWC4FUf3b7OTYE
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈿 与 王錄 为同胞（CBDB 记「弟」），王錄 之父／母即 王鈿 之父／母。
          source:
            id: s_TE73UzqivWC4FUf3b7OTYE
            source_type: api_record
            title: 中国历代人物传记资料库：王鈿（CBDB 212641）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json
            external_identifier: CBDB:212641
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3LbFqpm1y41GseX5pd88Pr
        status: active
        display_name: 王鈿
        merged_into_person_id: null
    - claim:
        id: c_SHeZwsb2tY_vvpF3T7pxWM
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7aCKMJGMCLmCrY7Kqkq2JB
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XOGy_uP7ALSBJZlZjsxIqL
          claim_id: c_SHeZwsb2tY_vvpF3T7pxWM
          source_id: s_CL0uAurCXkfhlbaUWYAlmF
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鑰 与 王錄 为同胞（CBDB 记「兄」），王錄 之父／母即 王鑰 之父／母。
          source:
            id: s_CL0uAurCXkfhlbaUWYAlmF
            source_type: api_record
            title: 中国历代人物传记资料库：王鑰（CBDB 212644）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json
            external_identifier: CBDB:212644
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_7aCKMJGMCLmCrY7Kqkq2JB
        status: active
        display_name: 王鑰
        merged_into_person_id: null
    - claim:
        id: c_S15Ls3QgiZQbFsmmPpPdwV
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_E3tk8DEMR1zLFQB7rHGWyc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tXXFV4-tIlnNFGmsFCEEg8
          claim_id: c_S15Ls3QgiZQbFsmmPpPdwV
          source_id: s_fnMTAXuMmYEKWs-WUAQmWd
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鈞 与 王錄 为同胞（CBDB 记「兄」），王錄 之父／母即 王鈞 之父／母。
          source:
            id: s_fnMTAXuMmYEKWs-WUAQmWd
            source_type: api_record
            title: 中国历代人物传记资料库：王鈞（CBDB 212642）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212642&o=json
            external_identifier: CBDB:212642
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E3tk8DEMR1zLFQB7rHGWyc
        status: active
        display_name: 王鈞
        merged_into_person_id: null
    - claim:
        id: c_2PZYMwHOwIovyBFuNMbsco
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_eJ2GShzFDsv3ujhyUYDpAc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_nNv_F29pz-YOssUmKRvSJz
          claim_id: c_2PZYMwHOwIovyBFuNMbsco
          source_id: s_wCqTNvLMirj4H7-nbro8OZ
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎬 与 王錄 为同胞（CBDB 记「兄」），王錄 之父／母即 王鎬 之父／母。
          source:
            id: s_wCqTNvLMirj4H7-nbro8OZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鎬（CBDB 212643）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212643&o=json
            external_identifier: CBDB:212643
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eJ2GShzFDsv3ujhyUYDpAc
        status: active
        display_name: 王鎬
        merged_into_person_id: null
    - claim:
        id: c_6gV4N4RtORR0vMpc2-RujY
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nEB3YRum4W4j5bfYNUL33t
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yjkjeGD2VsepvBH1agXPUW
          claim_id: c_6gV4N4RtORR0vMpc2-RujY
          source_id: s_oy8zxW5FuunKe9_20DQ8wt
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鎮 与 王錄 为同胞（CBDB 记「兄」），王錄 之父／母即 王鎮 之父／母。
          source:
            id: s_oy8zxW5FuunKe9_20DQ8wt
            source_type: api_record
            title: 中国历代人物传记资料库：王鎮（CBDB 212645）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212645&o=json
            external_identifier: CBDB:212645
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nEB3YRum4W4j5bfYNUL33t
        status: active
        display_name: 王鎮
        merged_into_person_id: null
    - claim:
        id: c_T6It1a7vWZK7Zc7KkqFh5n
        subject_person_id: p_1XSyusiB7GXwQNmzrNDUf4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nZxuzwuZ74TcymvsCP5xz2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZHIhu_ncXx3ZZKcx25trGV
          claim_id: c_T6It1a7vWZK7Zc7KkqFh5n
          source_id: s_02IVmi36FyTJ7hN_8kI8HV
          stance: supports
          locator: CBDB：兄弟 王錄（206049）之父／母 王謙
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍍 与 王錄 为同胞（CBDB 记「兄」），王錄 之父／母即 王鍍 之父／母。
          source:
            id: s_02IVmi36FyTJ7hN_8kI8HV
            source_type: api_record
            title: 中国历代人物传记资料库：王鍍（CBDB 212646）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json
            external_identifier: CBDB:212646
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nZxuzwuZ74TcymvsCP5xz2
        status: active
        display_name: 王鍍
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王謙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王謙 | accepted |
| bio.summary | 王謙，明人物。萬曆二年進士，籍贯壽張，曾任省祭官。（中国历代人物传记资料库 CBDB 212637） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_9WD2WpcaAMBVHNJjVMQ2UR | 王錄 | accepted |
| children | p_3LbFqpm1y41GseX5pd88Pr | 王鈿 | accepted |
| children | p_7aCKMJGMCLmCrY7Kqkq2JB | 王鑰 | accepted |
| children | p_E3tk8DEMR1zLFQB7rHGWyc | 王鈞 | accepted |
| children | p_eJ2GShzFDsv3ujhyUYDpAc | 王鎬 | accepted |
| children | p_nEB3YRum4W4j5bfYNUL33t | 王鎮 | accepted |
| children | p_nZxuzwuZ74TcymvsCP5xz2 | 王鍍 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鍍（CBDB 212646）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212646&o=json)
- [中国历代人物传记资料库：王鎬（CBDB 212643）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212643&o=json)
- [中国历代人物传记资料库：王鈞（CBDB 212642）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212642&o=json)
- [中国历代人物传记资料库：王謙（CBDB 212637）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212637&o=json)
- [中国历代人物传记资料库：王鈿（CBDB 212641）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212641&o=json)
- [中国历代人物传记资料库：王鑰（CBDB 212644）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212644&o=json)
- [中国历代人物传记资料库：王鎮（CBDB 212645）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=212645&o=json)
