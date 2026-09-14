---
schema: wang-person/v1
id: p_TbqR8ceRg5pDBvWfhgcuNT
status: active
merged_into: null
display_name: 王行敏
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QiFQ2WQUjFwoc16SMGz2XY
        subject_person_id: p_TbqR8ceRg5pDBvWfhgcuNT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行敏
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ci6zYc2f6o1EjvPxDs8N2J
          claim_id: c_QiFQ2WQUjFwoc16SMGz2XY
          source_id: s_AYYQTHXvowJWJ2mdGUT2wM
          stance: supports
          locator: CBDB:525128
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（525128）
          source: &a1
            id: s_AYYQTHXvowJWJ2mdGUT2wM
            source_type: api_record
            title: 中国历代人物传记资料库：王行敏（CBDB 525128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525128&o=json
            external_identifier: CBDB:525128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.325Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_poy3fW4pU3wd4QGF1Tf5Bf
        subject_person_id: p_TbqR8ceRg5pDBvWfhgcuNT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王行敏，史料所见人物。本项目依据《中国历代人物传记资料库：王行敏（CBDB 525128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AZGTP4nZYU2OrcnowhVyw_
          claim_id: c_poy3fW4pU3wd4QGF1Tf5Bf
          source_id: s_AYYQTHXvowJWJ2mdGUT2wM
          stance: supports
          locator: CBDB:525128
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_fpZP6Zm-YpHfKsSoVHqEG1
        subject_person_id: p_QQS2uT34uLgVeU49WUG1R1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_TbqR8ceRg5pDBvWfhgcuNT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cFHNUXsYGB2tY9Dg-ke7EK
          claim_id: c_fpZP6Zm-YpHfKsSoVHqEG1
          source_id: s_3PypzN181wfDe0PQlvjsMQ
          stance: supports
          locator: CBDB：兄弟 王直（34493）之父／母 王伯貞
          quotation: null
          interpretation_note: 由兄弟关系推断：王行敏 与 王直 为同胞（CBDB 记「弟」），王直 之父／母即 王行敏 之父／母。
          source:
            id: s_3PypzN181wfDe0PQlvjsMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王行敏（CBDB 525128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525128&o=json
            external_identifier: CBDB:525128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QQS2uT34uLgVeU49WUG1R1
        status: active
        display_name: 王伯貞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_TdGooUUjlugcvGw-lkxZPh
        subject_person_id: p_PgGP8n81XBb5kcs7D54q73
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_TbqR8ceRg5pDBvWfhgcuNT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cel-9TuEki00fVZhRb0DmV
          claim_id: c_TdGooUUjlugcvGw-lkxZPh
          source_id: s_3PypzN181wfDe0PQlvjsMQ
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 34493 王直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_3PypzN181wfDe0PQlvjsMQ
            source_type: api_record
            title: 中国历代人物传记资料库：王行敏（CBDB 525128）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525128&o=json
            external_identifier: CBDB:525128
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PgGP8n81XBb5kcs7D54q73
        status: active
        display_name: 王直
        merged_into_person_id: null
---

# 王行敏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王行敏 | accepted |
| bio.summary | 王行敏，史料所见人物。本项目依据《中国历代人物传记资料库：王行敏（CBDB 525128）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QQS2uT34uLgVeU49WUG1R1 | 王伯貞 | accepted |
| other | p_PgGP8n81XBb5kcs7D54q73 | 王直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王行敏（CBDB 525128）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=525128&o=json)
