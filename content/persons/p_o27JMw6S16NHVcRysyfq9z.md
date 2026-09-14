---
schema: wang-person/v1
id: p_o27JMw6S16NHVcRysyfq9z
status: active
merged_into: null
display_name: 王綵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8H2W8kuXAB7YKUyrK1zz2d
        subject_person_id: p_o27JMw6S16NHVcRysyfq9z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sRDEdMoo6s9wWHtAG4TGwf
          claim_id: c_8H2W8kuXAB7YKUyrK1zz2d
          source_id: s_oNYxZkZWrWTkpHFbKc9L5k
          stance: supports
          locator: CBDB:216225
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（216225）
          source: &a1
            id: s_oNYxZkZWrWTkpHFbKc9L5k
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 216225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json
            external_identifier: CBDB:216225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.235Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ddyPGgJXeqUgE7Fcu5zcSF
        subject_person_id: p_o27JMw6S16NHVcRysyfq9z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王綵，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216225）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nGk5DGuFMBmGLaU4lRsjzd
          claim_id: c_ddyPGgJXeqUgE7Fcu5zcSF
          source_id: s_oNYxZkZWrWTkpHFbKc9L5k
          stance: supports
          locator: CBDB:216225
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_mM3HeE6-5MoteaO1ncSmbd
        subject_person_id: p_oJyHrTtA8vuQzWweqp45TE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_o27JMw6S16NHVcRysyfq9z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OxdNtyJ-YdEp7g3EY3UOKx
          claim_id: c_mM3HeE6-5MoteaO1ncSmbd
          source_id: s_edIW9d1aD4fK4fkNl36twM
          stance: supports
          locator: CBDB：兄弟 王約（206312）之父／母 王以佐
          quotation: null
          interpretation_note: 由兄弟关系推断：王綵 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王綵 之父／母。
          source:
            id: s_edIW9d1aD4fK4fkNl36twM
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 216225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json
            external_identifier: CBDB:216225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_oJyHrTtA8vuQzWweqp45TE
        status: active
        display_name: 王以佐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_L_OFPSqqG8g7EomUJMp2Js
        subject_person_id: p_J55afBgCkqtPSYRig4M9VL
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_o27JMw6S16NHVcRysyfq9z
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JkbuYVO4BpyEeWe1CmN05M
          claim_id: c_L_OFPSqqG8g7EomUJMp2Js
          source_id: s_edIW9d1aD4fK4fkNl36twM
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206312 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_edIW9d1aD4fK4fkNl36twM
            source_type: api_record
            title: 中国历代人物传记资料库：王綵（CBDB 216225）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json
            external_identifier: CBDB:216225
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J55afBgCkqtPSYRig4M9VL
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王綵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王綵 | accepted |
| bio.summary | 王綵，明人物。萬曆五年進士，籍贯惠安。（中国历代人物传记资料库 CBDB 216225） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oJyHrTtA8vuQzWweqp45TE | 王以佐 | accepted |
| other | p_J55afBgCkqtPSYRig4M9VL | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王綵（CBDB 216225）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=216225&o=json)
