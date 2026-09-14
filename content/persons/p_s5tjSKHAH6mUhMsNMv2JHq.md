---
schema: wang-person/v1
id: p_s5tjSKHAH6mUhMsNMv2JHq
status: active
merged_into: null
display_name: 王真
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CRdQ5me8HeLMSgKSQVk44s
        subject_person_id: p_s5tjSKHAH6mUhMsNMv2JHq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rAmGffEuEiitxc9Sk9aSS5
          claim_id: c_CRdQ5me8HeLMSgKSQVk44s
          source_id: s_mpqDkUFC6C6YW9zPxRhZTA
          stance: supports
          locator: CBDB:291729
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（291729）
          source: &a1
            id: s_mpqDkUFC6C6YW9zPxRhZTA
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 291729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291729&o=json
            external_identifier: CBDB:291729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.364Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8p7DDrA89tdRexqANq1vnq
        subject_person_id: p_s5tjSKHAH6mUhMsNMv2JHq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王真，明人物。天順元年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 291729）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_20iP-ixklRSSlVoRVTxgSJ
          claim_id: c_8p7DDrA89tdRexqANq1vnq
          source_id: s_mpqDkUFC6C6YW9zPxRhZTA
          stance: supports
          locator: CBDB:291729
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_i8T5sZUYWjknv9pB23-EII
        subject_person_id: p_HrLVrZ6v865GiJPseaqUKx
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_s5tjSKHAH6mUhMsNMv2JHq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TvU1Pw3HV8OCLyO_Z_L2Dq
          claim_id: c_i8T5sZUYWjknv9pB23-EII
          source_id: s_0LzRVspw-Tk2eMyoTfXOqI
          stance: supports
          locator: CBDB：兄弟 王豎（198592）之父／母 王子中
          quotation: null
          interpretation_note: 由兄弟关系推断：王真 与 王豎 为同胞（CBDB 记「兄」），王豎 之父／母即 王真 之父／母。
          source:
            id: s_0LzRVspw-Tk2eMyoTfXOqI
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 291729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291729&o=json
            external_identifier: CBDB:291729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HrLVrZ6v865GiJPseaqUKx
        status: active
        display_name: 王子中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_rlMQnNqwzFiSIzVX4ZZeRi
        subject_person_id: p_s5tjSKHAH6mUhMsNMv2JHq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_yfs4AMpkp3NQmpWdTLnP5v
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_A4RykL9enioRvxbkQNdYjE
          claim_id: c_rlMQnNqwzFiSIzVX4ZZeRi
          source_id: s_0LzRVspw-Tk2eMyoTfXOqI
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198592 王豎）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0LzRVspw-Tk2eMyoTfXOqI
            source_type: api_record
            title: 中国历代人物传记资料库：王真（CBDB 291729）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291729&o=json
            external_identifier: CBDB:291729
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_yfs4AMpkp3NQmpWdTLnP5v
        status: active
        display_name: 王豎
        merged_into_person_id: null
---

# 王真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王真 | accepted |
| bio.summary | 王真，明人物。天順元年進士，籍贯鹽山。（中国历代人物传记资料库 CBDB 291729） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_HrLVrZ6v865GiJPseaqUKx | 王子中 | accepted |
| other | p_yfs4AMpkp3NQmpWdTLnP5v | 王豎 | accepted |

## 外部来源

- [中国历代人物传记资料库：王真（CBDB 291729）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291729&o=json)
