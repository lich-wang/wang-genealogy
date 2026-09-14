---
schema: wang-person/v1
id: p_ARBsKDMivmjbBTxJiQz7Aa
status: active
merged_into: null
display_name: 王朝瑬
cbdb_id: 202059
revision: 8
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gqFyvTbrYtjX4Qp7DA1nxK
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝瑬（生于1482年），明人物。正德十二年進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 202059）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_EtJvXBD_hEWkbAtD13jaKL
          claim_id: c_gqFyvTbrYtjX4Qp7DA1nxK
          source_id: s_EGobw13P74wgovSJApHJEL
          stance: supports
          locator: CBDB:202059
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_EGobw13P74wgovSJApHJEL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝瑬（CBDB 202059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202059&o=json
            external_identifier: CBDB:202059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_J1ZDp3N9xmMMKmv3w2JH8g
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1482年
            calendar_note: CBDB 生年字段，精度：年
            earliest: 1482-01-01
            latest: 1482-12-31
            precision: year
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QigVLmrts7VTdERU2D5g5G
          claim_id: c_J1ZDp3N9xmMMKmv3w2JH8g
          source_id: s_EGobw13P74wgovSJApHJEL
          stance: supports
          locator: CBDB:202059
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1482
          source:
            id: s_EGobw13P74wgovSJApHJEL
            source_type: api_record
            title: 中国历代人物传记资料库：王朝瑬（CBDB 202059）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202059&o=json
            external_identifier: CBDB:202059
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:42.210Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_Sw82VcF42MrW91tsaFHMxN
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王朝瑬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_N62Z21AeQPaBMD17onB38M
          claim_id: c_Sw82VcF42MrW91tsaFHMxN
          source_id: s_EGobw13P74wgovSJApHJEL
          stance: supports
          locator: CBDB:202059
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（701-800）｜历史性依据：CBDB 生年 = 1482
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
        id: c_-Nsnw0xoyCqSEREvUPgnWH
        subject_person_id: p_3qLC2oeE1HhZa2mfE2D9n7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Frvy4tyGj0dF5SvbrzCVSV
          claim_id: c_-Nsnw0xoyCqSEREvUPgnWH
          source_id: s_AuaTr2LbeA8Hf2j8SNgdaM
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百零三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_AuaTr2LbeA8Hf2j8SNgdaM
            source_type: api_record
            title: 中国历代人物传记资料库：王聚（CBDB 282721）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282721&o=json
            external_identifier: CBDB:282721
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.101Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3qLC2oeE1HhZa2mfE2D9n7
        status: active
        display_name: 王聚
        merged_into_person_id: null
    - claim:
        id: c_O-NXs19bm9LCacq6Beccx0
        subject_person_id: p_Jj4S5PPcDKSRchCbetDt1A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P4H-kKyTFh1yMi7cUJU76s
          claim_id: c_O-NXs19bm9LCacq6Beccx0
          source_id: s_HX3R1nETddGgJvc6uNortK
          stance: supports
          locator: 正德十二年進士登科錄:一卷，第三甲第二百零三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HX3R1nETddGgJvc6uNortK
            source_type: api_record
            title: 中国历代人物传记资料库：王斌（CBDB 282722）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282722&o=json
            external_identifier: CBDB:282722
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.102Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Jj4S5PPcDKSRchCbetDt1A
        status: active
        display_name: 王斌
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_FNuZfIqR3PL7zuWzjhmbrY
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_B2McsrnuvE8iAUvxMWJ95u
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZYjBHJhucr6Epji29qRMc5
          claim_id: c_FNuZfIqR3PL7zuWzjhmbrY
          source_id: s_dgdNVrRQFZ3WBJSxzTDGuR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_dgdNVrRQFZ3WBJSxzTDGuR
            source_type: api_record
            title: 中国历代人物传记资料库：王朝璋（CBDB 282732）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282732&o=json
            external_identifier: CBDB:282732
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_B2McsrnuvE8iAUvxMWJ95u
        status: active
        display_name: 王朝璋
        merged_into_person_id: null
    - claim:
        id: c_y5fFOWeEUe2TahCgetQxMr
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GeZtZg8taA79XvRo6iJheA
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v23yWuWKBZJOuwXknaDuXD
          claim_id: c_y5fFOWeEUe2TahCgetQxMr
          source_id: s_J0sqL1kqBDPseiMFzxwWdl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_J0sqL1kqBDPseiMFzxwWdl
            source_type: api_record
            title: 中国历代人物传记资料库：王朝璽（CBDB 282727）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282727&o=json
            external_identifier: CBDB:282727
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GeZtZg8taA79XvRo6iJheA
        status: active
        display_name: 王朝璽
        merged_into_person_id: null
    - claim:
        id: c_ggmdOR083eDXPta9k50w2o
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P4fTteXTJto289f9nPogZ3
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_satLKMG6ia6J3VyjTTKOWD
          claim_id: c_ggmdOR083eDXPta9k50w2o
          source_id: s_NgaGws1td5m0D0jaxJPHrz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_NgaGws1td5m0D0jaxJPHrz
            source_type: api_record
            title: 中国历代人物传记资料库：王朝明（CBDB 282729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282729&o=json
            external_identifier: CBDB:282729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_P4fTteXTJto289f9nPogZ3
        status: active
        display_name: 王朝明
        merged_into_person_id: null
    - claim:
        id: c_gUY2UKxlGKB5L41A6ebuyy
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_XZHwAfofVnA9Yr7Xv81tqe
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_h6V0TnYuWTELjmXgzUX--9
          claim_id: c_gUY2UKxlGKB5L41A6ebuyy
          source_id: s_Gk4mwzMccao0aZABh6kNXj
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Gk4mwzMccao0aZABh6kNXj
            source_type: api_record
            title: 中国历代人物传记资料库：王朝雍（CBDB 282728）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282728&o=json
            external_identifier: CBDB:282728
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XZHwAfofVnA9Yr7Xv81tqe
        status: active
        display_name: 王朝雍
        merged_into_person_id: null
    - claim:
        id: c_JouubX_n2TC2jmSBw1BKC9
        subject_person_id: p_ARBsKDMivmjbBTxJiQz7Aa
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kPEXS9YKCdHtELaPsm78vE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kT-FiUcAiSiX9g85uLzSAs
          claim_id: c_JouubX_n2TC2jmSBw1BKC9
          source_id: s_c9Utcn2GTCPe5vaZBMFrB-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202059 王朝瑬）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_c9Utcn2GTCPe5vaZBMFrB-
            source_type: api_record
            title: 中国历代人物传记资料库：王朝弼（CBDB 282730）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282730&o=json
            external_identifier: CBDB:282730
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kPEXS9YKCdHtELaPsm78vE
        status: active
        display_name: 王朝弼
        merged_into_person_id: null
---

# 王朝瑬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王朝瑬（生于1482年），明人物。正德十二年進士，籍贯朝邑，入仕進士。（中国历代人物传记资料库 CBDB 202059） | accepted |
| birth.date | 1482年 | accepted |
| name.primary | 王朝瑬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_3qLC2oeE1HhZa2mfE2D9n7 | 王聚 | accepted |
| ancestors | p_Jj4S5PPcDKSRchCbetDt1A | 王斌 | accepted |
| other | p_B2McsrnuvE8iAUvxMWJ95u | 王朝璋 | accepted |
| other | p_GeZtZg8taA79XvRo6iJheA | 王朝璽 | accepted |
| other | p_P4fTteXTJto289f9nPogZ3 | 王朝明 | accepted |
| other | p_XZHwAfofVnA9Yr7Xv81tqe | 王朝雍 | accepted |
| other | p_kPEXS9YKCdHtELaPsm78vE | 王朝弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斌（CBDB 282722）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282722&o=json)
- [中国历代人物传记资料库：王朝弼（CBDB 282730）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282730&o=json)
- [中国历代人物传记资料库：王朝瑬（CBDB 202059）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202059&o=json)
- [中国历代人物传记资料库：王朝明（CBDB 282729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282729&o=json)
- [中国历代人物传记资料库：王朝璽（CBDB 282727）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282727&o=json)
- [中国历代人物传记资料库：王朝雍（CBDB 282728）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282728&o=json)
- [中国历代人物传记资料库：王朝璋（CBDB 282732）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282732&o=json)
- [中国历代人物传记资料库：王聚（CBDB 282721）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=282721&o=json)
