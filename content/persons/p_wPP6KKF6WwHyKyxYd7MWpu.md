---
schema: wang-person/v1
id: p_wPP6KKF6WwHyKyxYd7MWpu
status: active
merged_into: null
display_name: 王宗楚
cbdb_id: 226575
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1Vy4aL1CrsYx2LBRyH4zHq
        subject_person_id: p_wPP6KKF6WwHyKyxYd7MWpu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗楚，明人物。萬曆丙戌科進士進士，籍贯京山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 226575）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_UTw01c7gHOtTLUEcFe7RPt
          claim_id: c_1Vy4aL1CrsYx2LBRyH4zHq
          source_id: s_kAFYvA5nnnQn56TcKogGqQ
          stance: supports
          locator: CBDB:226575
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kAFYvA5nnnQn56TcKogGqQ
            source_type: api_record
            title: 中国历代人物传记资料库：王宗楚（CBDB 226575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226575&o=json
            external_identifier: CBDB:226575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_wL2F23NEZWGvb5JXy3omv3
        subject_person_id: p_wPP6KKF6WwHyKyxYd7MWpu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗楚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_jcM2ShmkdR3SeCeonhTX34
          claim_id: c_wL2F23NEZWGvb5JXy3omv3
          source_id: s_kAFYvA5nnnQn56TcKogGqQ
          stance: supports
          locator: CBDB:226575
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yDGkQwnSOLVQHF7m-oMs4L
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wPP6KKF6WwHyKyxYd7MWpu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_T2q9X49OIZsR7lcgstWg1q
          claim_id: c_yDGkQwnSOLVQHF7m-oMs4L
          source_id: s_vvaEtVIpLs5jSqL5MFcrcY
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗楚 与 王宗蓁 为同胞（CBDB 记「兄」），王宗蓁 之父／母即 王宗楚 之父／母。
          source:
            id: s_vvaEtVIpLs5jSqL5MFcrcY
            source_type: api_record
            title: 中国历代人物传记资料库：王宗楚（CBDB 226575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226575&o=json
            external_identifier: CBDB:226575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qbWcARBwiNzFhFH7v3oZN5
        status: active
        display_name: 王桥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Hnl-VX4J3R6D6Mwj-S17fo
        subject_person_id: p_YcgZGHB8b41JUksSD6hCbG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wPP6KKF6WwHyKyxYd7MWpu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qb4GC2SGG-NPd-fSXPndza
          claim_id: c_Hnl-VX4J3R6D6Mwj-S17fo
          source_id: s_vvaEtVIpLs5jSqL5MFcrcY
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207031 王宗蓁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_vvaEtVIpLs5jSqL5MFcrcY
            source_type: api_record
            title: 中国历代人物传记资料库：王宗楚（CBDB 226575）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226575&o=json
            external_identifier: CBDB:226575
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
---

# 王宗楚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王宗楚，明人物。萬曆丙戌科進士進士，籍贯京山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 226575） | accepted |
| name.primary | 王宗楚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qbWcARBwiNzFhFH7v3oZN5 | 王桥 | accepted |
| other | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗楚（CBDB 226575）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226575&o=json)
