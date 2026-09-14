---
schema: wang-person/v1
id: p_ZS7hV2qKy5RdfA9dLvzwpE
status: active
merged_into: null
display_name: 王徽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XGYQjYkkmR7FP9dZm2MBEH
        subject_person_id: p_ZS7hV2qKy5RdfA9dLvzwpE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_V4abe8uAetMEHoA11DNmpH
          claim_id: c_XGYQjYkkmR7FP9dZm2MBEH
          source_id: s_pDsXkQuE1MjVg1WRE45SK2
          stance: supports
          locator: CBDB:253013
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（253013）
          source: &a1
            id: s_pDsXkQuE1MjVg1WRE45SK2
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 253013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253013&o=json
            external_identifier: CBDB:253013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.287Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gKjEsFxvycS92giBKQPjoj
        subject_person_id: p_ZS7hV2qKy5RdfA9dLvzwpE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王徽，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 253013）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9X2O7vgJA8KDUuTeEXWKTu
          claim_id: c_gKjEsFxvycS92giBKQPjoj
          source_id: s_pDsXkQuE1MjVg1WRE45SK2
          stance: supports
          locator: CBDB:253013
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_4AePdJCQ9AxSey-vAdTF8A
        subject_person_id: p_PGU15Ugu5s9NEWpLjgtEC5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ZS7hV2qKy5RdfA9dLvzwpE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wTQuZ6jwAB4Z7xGWZZWcu1
          claim_id: c_4AePdJCQ9AxSey-vAdTF8A
          source_id: s_WQPbSjjDZwQV02yNT6oq7P
          stance: supports
          locator: CBDB：兄弟 王齊（198292）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王徽 与 王齊 为同胞（CBDB 记「兄」），王齊 之父／母即 王徽 之父／母。
          source:
            id: s_WQPbSjjDZwQV02yNT6oq7P
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 253013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253013&o=json
            external_identifier: CBDB:253013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PGU15Ugu5s9NEWpLjgtEC5
        status: active
        display_name: 王獻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0U3hQKuqj5cFXWjQImQN9n
        subject_person_id: p_3sCXvZnf2K3JGPtkmiPk7P
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_ZS7hV2qKy5RdfA9dLvzwpE
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_9dnhAGpl0NEilEwKLzJQSK
          claim_id: c_0U3hQKuqj5cFXWjQImQN9n
          source_id: s_WQPbSjjDZwQV02yNT6oq7P
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198292 王齊）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_WQPbSjjDZwQV02yNT6oq7P
            source_type: api_record
            title: 中国历代人物传记资料库：王徽（CBDB 253013）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253013&o=json
            external_identifier: CBDB:253013
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3sCXvZnf2K3JGPtkmiPk7P
        status: active
        display_name: 王齊
        merged_into_person_id: null
---

# 王徽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王徽 | accepted |
| bio.summary | 王徽，明人物。景泰五年進士，籍贯安福。（中国历代人物传记资料库 CBDB 253013） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_PGU15Ugu5s9NEWpLjgtEC5 | 王獻 | accepted |
| other | p_3sCXvZnf2K3JGPtkmiPk7P | 王齊 | accepted |

## 外部来源

- [中国历代人物传记资料库：王徽（CBDB 253013）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=253013&o=json)
