---
schema: wang-person/v1
id: p_svtNF7GBN4DZNA4eqhmCDp
status: active
merged_into: null
display_name: 王應乾
revision: 8
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_RWsr5snW5A196pexy7ke4v
        subject_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應乾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jGHrdTeJD6GNj49NDSf6NN
          claim_id: c_RWsr5snW5A196pexy7ke4v
          source_id: s_x5aHJTcdgpDKD2LF4RkPPB
          stance: supports
          locator: CBDB:205803
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205803）
          source: &a1
            id: s_x5aHJTcdgpDKD2LF4RkPPB
            source_type: api_record
            title: 中国历代人物传记资料库：王應乾（CBDB 205803）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205803&o=json
            external_identifier: CBDB:205803
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.872Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_GSeauu7uzr522swkNEhPAu
        subject_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1540年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_khHaM7ykWb7x78KYj1mh5L
          claim_id: c_GSeauu7uzr522swkNEhPAu
          source_id: s_x5aHJTcdgpDKD2LF4RkPPB
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
        id: c_EgGvKLD5KF4FpM4BoeGMzM
        subject_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應乾（生于1540年），明人物。明清進士進士，籍贯東流，入仕進士。（中国历代人物传记资料库 CBDB 205803）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_rZFtraA9fr99uJuqLxqqtl
          claim_id: c_EgGvKLD5KF4FpM4BoeGMzM
          source_id: s_x5aHJTcdgpDKD2LF4RkPPB
          stance: supports
          locator: CBDB:205803
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-2JZBbF6mjf6-0gyWkMUBv
        subject_person_id: p_9wJmZu8ZKLBaT7U97D7E3V
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eLyZQJVYMVOJWWNClZuD6d
          claim_id: c_-2JZBbF6mjf6-0gyWkMUBv
          source_id: s_NDK9hzRsb38FVL8t3brT4a
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NDK9hzRsb38FVL8t3brT4a
            source_type: api_record
            title: 中国历代人物传记资料库：王文錦（CBDB 208833）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208833&o=json
            external_identifier: CBDB:208833
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.960Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9wJmZu8ZKLBaT7U97D7E3V
        status: active
        display_name: 王文錦
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_6NVqZcRfqTzy47u2nuHVbm
        subject_person_id: p_BwSK1wePNKFq4VEfY6jr8A
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_EcuHEaV1lYJov8BMu7qorL
          claim_id: c_6NVqZcRfqTzy47u2nuHVbm
          source_id: s_wCfvRbnwn2AKpwKHRpGQoo
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wCfvRbnwn2AKpwKHRpGQoo
            source_type: api_record
            title: 中国历代人物传记资料库：王禎（CBDB 208832）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208832&o=json
            external_identifier: CBDB:208832
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.959Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BwSK1wePNKFq4VEfY6jr8A
        status: active
        display_name: 王禎
        merged_into_person_id: null
    - claim:
        id: c_A5wuUWZvsxSg182IEt2YFk
        subject_person_id: p_YB8zgczxYhRCLX7M3PkMcJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kg5Q8wLXTZFOl3q0sr-4VU
          claim_id: c_A5wuUWZvsxSg182IEt2YFk
          source_id: s_Q9Thvw2J6cP5R8a5kERzJM
          stance: supports
          locator: 隆慶五年進士登科錄:一卷，第三甲第三名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Q9Thvw2J6cP5R8a5kERzJM
            source_type: api_record
            title: 中国历代人物传记资料库：王維（CBDB 208831）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208831&o=json
            external_identifier: CBDB:208831
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.958Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_YB8zgczxYhRCLX7M3PkMcJ
        status: active
        display_name: 王維
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_T0yhSBgYgd9bT5Fjzk-iVE
        subject_person_id: p_5dHGKL6dvFs9TobMmidjvE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zio1NsYW8nh8tpfzoJzjYJ
          claim_id: c_T0yhSBgYgd9bT5Fjzk-iVE
          source_id: s_QWaO4R4YU5KSBKct-J8hpM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205803 王應乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_QWaO4R4YU5KSBKct-J8hpM
            source_type: api_record
            title: 中国历代人物传记资料库：王應昇（CBDB 208839）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208839&o=json
            external_identifier: CBDB:208839
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5dHGKL6dvFs9TobMmidjvE
        status: active
        display_name: 王應昇
        merged_into_person_id: null
    - claim:
        id: c_9rpgvg1k1_FMxWHCkOavvx
        subject_person_id: p_631DC9e1iJAezZraGCuHTm
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fBhwSKxvNdhvwUR9k9dD9D
          claim_id: c_9rpgvg1k1_FMxWHCkOavvx
          source_id: s__wxaBkXRFLQBBeHJ-8lqk4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205803 王應乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s__wxaBkXRFLQBBeHJ-8lqk4
            source_type: api_record
            title: 中国历代人物传记资料库：王應晉（CBDB 208840）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208840&o=json
            external_identifier: CBDB:208840
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_631DC9e1iJAezZraGCuHTm
        status: active
        display_name: 王應晉
        merged_into_person_id: null
    - claim:
        id: c_qTfNQ4eoSVs1hHbGU-_YG2
        subject_person_id: p_mGyNT3kFkyNgy9szwF2Wxd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_G-gvyQxWppnsw51NKMz8jp
          claim_id: c_qTfNQ4eoSVs1hHbGU-_YG2
          source_id: s_VhF0tqSrwbhjqDN9Oskp9Z
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205803 王應乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VhF0tqSrwbhjqDN9Oskp9Z
            source_type: api_record
            title: 中国历代人物传记资料库：王應鼎（CBDB 208838）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208838&o=json
            external_identifier: CBDB:208838
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mGyNT3kFkyNgy9szwF2Wxd
        status: active
        display_name: 王應鼎
        merged_into_person_id: null
    - claim:
        id: c_fo098lndEpMW8z6gXCBac4
        subject_person_id: p_s9nS8NH2KVQ8MEGZC3YoDu
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_svtNF7GBN4DZNA4eqhmCDp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SToXYx8whF4ggQY0HWEl9B
          claim_id: c_fo098lndEpMW8z6gXCBac4
          source_id: s_jRqIqL7WCkLPaqFsb3Z93Y
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205803 王應乾）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jRqIqL7WCkLPaqFsb3Z93Y
            source_type: api_record
            title: 中国历代人物传记资料库：王應臨（CBDB 208836）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208836&o=json
            external_identifier: CBDB:208836
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_s9nS8NH2KVQ8MEGZC3YoDu
        status: active
        display_name: 王應臨
        merged_into_person_id: null
---

# 王應乾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應乾 | accepted |
| birth.date | 1540年 | accepted |
| bio.summary | 王應乾（生于1540年），明人物。明清進士進士，籍贯東流，入仕進士。（中国历代人物传记资料库 CBDB 205803） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9wJmZu8ZKLBaT7U97D7E3V | 王文錦 | accepted |
| ancestors | p_BwSK1wePNKFq4VEfY6jr8A | 王禎 | accepted |
| ancestors | p_YB8zgczxYhRCLX7M3PkMcJ | 王維 | accepted |
| other | p_5dHGKL6dvFs9TobMmidjvE | 王應昇 | accepted |
| other | p_631DC9e1iJAezZraGCuHTm | 王應晉 | accepted |
| other | p_mGyNT3kFkyNgy9szwF2Wxd | 王應鼎 | accepted |
| other | p_s9nS8NH2KVQ8MEGZC3YoDu | 王應臨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王維（CBDB 208831）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208831&o=json)
- [中国历代人物传记资料库：王文錦（CBDB 208833）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208833&o=json)
- [中国历代人物传记资料库：王應鼎（CBDB 208838）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208838&o=json)
- [中国历代人物传记资料库：王應晉（CBDB 208840）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208840&o=json)
- [中国历代人物传记资料库：王應臨（CBDB 208836）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208836&o=json)
- [中国历代人物传记资料库：王應乾（CBDB 205803）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205803&o=json)
- [中国历代人物传记资料库：王應昇（CBDB 208839）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208839&o=json)
- [中国历代人物传记资料库：王禎（CBDB 208832）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208832&o=json)
