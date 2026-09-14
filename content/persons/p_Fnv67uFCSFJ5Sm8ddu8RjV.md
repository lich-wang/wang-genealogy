---
schema: wang-person/v1
id: p_Fnv67uFCSFJ5Sm8ddu8RjV
status: active
merged_into: null
display_name: 王秀民
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K4Wpw7Ao99boJJmuwwWoSM
        subject_person_id: p_Fnv67uFCSFJ5Sm8ddu8RjV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LHobbgKnDQSXPddLBnyPbN
          claim_id: c_K4Wpw7Ao99boJJmuwwWoSM
          source_id: s_vDexwJu5nDZypzLTjtEqXW
          stance: supports
          locator: CBDB:317550
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（317550）
          source: &a1
            id: s_vDexwJu5nDZypzLTjtEqXW
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 317550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317550&o=json
            external_identifier: CBDB:317550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7msGNtgVUpF2yeQgkJY1Z2
        subject_person_id: p_Fnv67uFCSFJ5Sm8ddu8RjV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王秀民，明人物。嘉靖三十二年進士，籍贯商丘。（中国历代人物传记资料库 CBDB 317550）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_MfytKhWcnpMvqwEQ6vs4iS
          claim_id: c_7msGNtgVUpF2yeQgkJY1Z2
          source_id: s_vDexwJu5nDZypzLTjtEqXW
          stance: supports
          locator: CBDB:317550
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XvkTHkzAkCmB0JMjjR0i_u
        subject_person_id: p_N5iAhWP4KE2AcDLMVJFVJe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Fnv67uFCSFJ5Sm8ddu8RjV
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Qj5YRPMxq606OKzPtR3oK8
          claim_id: c_XvkTHkzAkCmB0JMjjR0i_u
          source_id: s_7zfdXGZuYe-2F8Irlxd0xA
          stance: supports
          locator: CBDB：兄弟 王彥民（204329）之父／母 王宗周
          quotation: null
          interpretation_note: 由兄弟关系推断：王秀民 与 王彥民 为同胞（CBDB 记「弟」），王彥民 之父／母即 王秀民 之父／母。
          source:
            id: s_7zfdXGZuYe-2F8Irlxd0xA
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 317550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317550&o=json
            external_identifier: CBDB:317550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N5iAhWP4KE2AcDLMVJFVJe
        status: active
        display_name: 王宗周
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ub9oEg57nVmhR3FWGzzD_G
        subject_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Fnv67uFCSFJ5Sm8ddu8RjV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OS9zClhFWGj6GRqwQ2AVuc
          claim_id: c_ub9oEg57nVmhR3FWGzzD_G
          source_id: s_7zfdXGZuYe-2F8Irlxd0xA
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 204329 王彥民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7zfdXGZuYe-2F8Irlxd0xA
            source_type: api_record
            title: 中国历代人物传记资料库：王秀民（CBDB 317550）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317550&o=json
            external_identifier: CBDB:317550
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        status: active
        display_name: 王彥民
        merged_into_person_id: null
---

# 王秀民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王秀民 | accepted |
| bio.summary | 王秀民，明人物。嘉靖三十二年進士，籍贯商丘。（中国历代人物传记资料库 CBDB 317550） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N5iAhWP4KE2AcDLMVJFVJe | 王宗周 | accepted |
| other | p_FS8BiVQ7A5TRPBTnfjAmZ6 | 王彥民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王秀民（CBDB 317550）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317550&o=json)
