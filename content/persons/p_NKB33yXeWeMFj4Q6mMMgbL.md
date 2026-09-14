---
schema: wang-person/v1
id: p_NKB33yXeWeMFj4Q6mMMgbL
status: active
merged_into: null
display_name: 王敟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7XAsohBkCdEURSXMz4LvxF
        subject_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_g4N3NA6FfFiu2veQCfyaRC
          claim_id: c_7XAsohBkCdEURSXMz4LvxF
          source_id: s_CED8d9dEii4s632Crsi4jv
          stance: supports
          locator: CBDB:310029
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（310029）
          source: &a1
            id: s_CED8d9dEii4s632Crsi4jv
            source_type: api_record
            title: 中国历代人物传记资料库：王敟（CBDB 310029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json
            external_identifier: CBDB:310029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.839Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Sy8rPtZEFjke9xYBfM8e1G
        subject_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王敟，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 310029）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ndbviTOyjCzUPj87Gso4aj
          claim_id: c_Sy8rPtZEFjke9xYBfM8e1G
          source_id: s_CED8d9dEii4s632Crsi4jv
          stance: supports
          locator: CBDB:310029
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T9jdEq0Ka4NUAdyeDyfVe3
        subject_person_id: p_mmhxQ3mMMbafknFpAgKiQp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vs9f7mhhRzaMxl-PNeVfh0
          claim_id: c_T9jdEq0Ka4NUAdyeDyfVe3
          source_id: s_qkE1x3TtxEhD9GGQHGNT1C
          stance: supports
          locator: CBDB：兄弟 王徽（67717）之父／母 王寧
          quotation: null
          interpretation_note: 由兄弟关系推断：王敟 与 王徽 为同胞（CBDB 记「兄」），王徽 之父／母即 王敟 之父／母。
          source:
            id: s_qkE1x3TtxEhD9GGQHGNT1C
            source_type: api_record
            title: 中国历代人物传记资料库：王敟（CBDB 310029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json
            external_identifier: CBDB:310029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mmhxQ3mMMbafknFpAgKiQp
        status: active
        display_name: 王寧
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_vgXy8LDVPfpLDSFLNKASx-
        subject_person_id: p_EL3MrLTYLivcbMQDRsPBD7
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_NKB33yXeWeMFj4Q6mMMgbL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-UH5W0wVZd2_Z71L_zc-qS
          claim_id: c_vgXy8LDVPfpLDSFLNKASx-
          source_id: s_qkE1x3TtxEhD9GGQHGNT1C
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 67717 王徽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_qkE1x3TtxEhD9GGQHGNT1C
            source_type: api_record
            title: 中国历代人物传记资料库：王敟（CBDB 310029）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json
            external_identifier: CBDB:310029
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL3MrLTYLivcbMQDRsPBD7
        status: active
        display_name: 王徽
        merged_into_person_id: null
---

# 王敟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王敟 | accepted |
| bio.summary | 王敟，明人物。天順四年進士，籍贯南京錦衣衛。（中国历代人物传记资料库 CBDB 310029） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_mmhxQ3mMMbafknFpAgKiQp | 王寧 | accepted |
| other | p_EL3MrLTYLivcbMQDRsPBD7 | 王徽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王敟（CBDB 310029）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=310029&o=json)
