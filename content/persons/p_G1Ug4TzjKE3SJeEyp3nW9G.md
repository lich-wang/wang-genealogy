---
schema: wang-person/v1
id: p_G1Ug4TzjKE3SJeEyp3nW9G
status: active
merged_into: null
display_name: 王郇
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AG8vtYRL21Biat3Sk3cPdC
        subject_person_id: p_G1Ug4TzjKE3SJeEyp3nW9G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郇
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eYQLBvBXXzpf53Q2D4AKAK
          claim_id: c_AG8vtYRL21Biat3Sk3cPdC
          source_id: s_uhzRPc9yK8H2CMi1aRSMEd
          stance: supports
          locator: CBDB:251778
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（251778）
          source: &a1
            id: s_uhzRPc9yK8H2CMi1aRSMEd
            source_type: api_record
            title: 中国历代人物传记资料库：王郇（CBDB 251778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json
            external_identifier: CBDB:251778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.248Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rw1zAW4y5LLESifR34KjBU
        subject_person_id: p_G1Ug4TzjKE3SJeEyp3nW9G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王郇，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251778）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3wHadshRJ1QySoitbLyD5I
          claim_id: c_rw1zAW4y5LLESifR34KjBU
          source_id: s_uhzRPc9yK8H2CMi1aRSMEd
          stance: supports
          locator: CBDB:251778
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_WzFStDhrVDTeEjbGZzwqlY
        subject_person_id: p_6jw2H1KWkaDQExePFFB6Yj
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_G1Ug4TzjKE3SJeEyp3nW9G
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3rODCgkJxVQTpl1K0SVRwH
          claim_id: c_WzFStDhrVDTeEjbGZzwqlY
          source_id: s_GPOlhq3cEXtNbfJ0VPGUfa
          stance: supports
          locator: CBDB：兄弟 王本儉（199945）之父／母 王孟良
          quotation: null
          interpretation_note: 由兄弟关系推断：王郇 与 王本儉 为同胞（CBDB 记「兄」），王本儉 之父／母即 王郇 之父／母。
          source:
            id: s_GPOlhq3cEXtNbfJ0VPGUfa
            source_type: api_record
            title: 中国历代人物传记资料库：王郇（CBDB 251778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json
            external_identifier: CBDB:251778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6jw2H1KWkaDQExePFFB6Yj
        status: active
        display_name: 王孟良
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_iVp3jup2i4_FLk6ylb0b6o
        subject_person_id: p_9PrBQcpmCF997Qgs2oiS3t
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_G1Ug4TzjKE3SJeEyp3nW9G
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_biDpl4Tvc3cU8Py52VyLDU
          claim_id: c_iVp3jup2i4_FLk6ylb0b6o
          source_id: s_GPOlhq3cEXtNbfJ0VPGUfa
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199945 王本儉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GPOlhq3cEXtNbfJ0VPGUfa
            source_type: api_record
            title: 中国历代人物传记资料库：王郇（CBDB 251778）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json
            external_identifier: CBDB:251778
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_9PrBQcpmCF997Qgs2oiS3t
        status: active
        display_name: 王本儉
        merged_into_person_id: null
---

# 王郇

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王郇 | accepted |
| bio.summary | 王郇，明人物。成化十四年進士，籍贯麻城。（中国历代人物传记资料库 CBDB 251778） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6jw2H1KWkaDQExePFFB6Yj | 王孟良 | accepted |
| other | p_9PrBQcpmCF997Qgs2oiS3t | 王本儉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王郇（CBDB 251778）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=251778&o=json)
