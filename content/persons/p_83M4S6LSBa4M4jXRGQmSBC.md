---
schema: wang-person/v1
id: p_83M4S6LSBa4M4jXRGQmSBC
status: active
merged_into: null
display_name: 王宗望
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VEEABX86172Yk1NWg1Fzi2
        subject_person_id: p_83M4S6LSBa4M4jXRGQmSBC
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UMJdZZR1AZA4hqxJEYFYHA
          claim_id: c_VEEABX86172Yk1NWg1Fzi2
          source_id: s_4CTrrkqJ66B6jGS91xQk9d
          stance: supports
          locator: CBDB:327781
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327781）
          source: &a1
            id: s_4CTrrkqJ66B6jGS91xQk9d
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 327781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327781&o=json
            external_identifier: CBDB:327781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.257Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q2TkAwjUGf7KPYD62NU7uG
        subject_person_id: p_83M4S6LSBa4M4jXRGQmSBC
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗望，明人物。嘉靖四十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 327781）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qt8vfpL2LbIi2MDDTup7_u
          claim_id: c_Q2TkAwjUGf7KPYD62NU7uG
          source_id: s_4CTrrkqJ66B6jGS91xQk9d
          stance: supports
          locator: CBDB:327781
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_pzEW0pasvGVZ-kZNAFL1_j
        subject_person_id: p_fHWLZSGPRrVehEZSh8KThr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_83M4S6LSBa4M4jXRGQmSBC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fAzjEBXVn0Oid14GeDWx9y
          claim_id: c_pzEW0pasvGVZ-kZNAFL1_j
          source_id: s_yH9h2JwtzJquvgHoFeNszA
          stance: supports
          locator: CBDB：兄弟 王宗載（205060）之父／母 王宋
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗望 与 王宗載 为同胞（CBDB 记「弟」），王宗載 之父／母即 王宗望 之父／母。
          source:
            id: s_yH9h2JwtzJquvgHoFeNszA
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 327781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327781&o=json
            external_identifier: CBDB:327781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fHWLZSGPRrVehEZSh8KThr
        status: active
        display_name: 王宋
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_bNg5v5DQ4wH3FMTaMcqXKR
        subject_person_id: p_83M4S6LSBa4M4jXRGQmSBC
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jmQBNF2thuLTj5CEgg4gFw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2r0q2HaljHA7pVnPV0vTHk
          claim_id: c_bNg5v5DQ4wH3FMTaMcqXKR
          source_id: s_yH9h2JwtzJquvgHoFeNszA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205060 王宗載）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yH9h2JwtzJquvgHoFeNszA
            source_type: api_record
            title: 中国历代人物传记资料库：王宗望（CBDB 327781）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327781&o=json
            external_identifier: CBDB:327781
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jmQBNF2thuLTj5CEgg4gFw
        status: active
        display_name: 王宗載
        merged_into_person_id: null
---

# 王宗望

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗望 | accepted |
| bio.summary | 王宗望，明人物。嘉靖四十一年進士，籍贯京山。（中国历代人物传记资料库 CBDB 327781） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fHWLZSGPRrVehEZSh8KThr | 王宋 | accepted |
| other | p_jmQBNF2thuLTj5CEgg4gFw | 王宗載 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗望（CBDB 327781）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327781&o=json)
