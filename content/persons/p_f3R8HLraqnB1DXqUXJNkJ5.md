---
schema: wang-person/v1
id: p_f3R8HLraqnB1DXqUXJNkJ5
status: active
merged_into: null
display_name: 王爵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_6JVy99MBfCRXHTY7UiJUaV
        subject_person_id: p_f3R8HLraqnB1DXqUXJNkJ5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_MB6mkCC14eCdSPGCJnvU5f
          claim_id: c_6JVy99MBfCRXHTY7UiJUaV
          source_id: s_7VNg5kC6XVn77hMor629vw
          stance: supports
          locator: CBDB:295404
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（295404）
          source: &a1
            id: s_7VNg5kC6XVn77hMor629vw
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 295404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295404&o=json
            external_identifier: CBDB:295404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.498Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XExXkNbFaYYNfhwsLX9NxT
        subject_person_id: p_f3R8HLraqnB1DXqUXJNkJ5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爵，明人物。嘉靖十四年進士，籍贯深州。（中国历代人物传记资料库 CBDB 295404）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P9TgEnHEgnBtjRq031cx-3
          claim_id: c_XExXkNbFaYYNfhwsLX9NxT
          source_id: s_7VNg5kC6XVn77hMor629vw
          stance: supports
          locator: CBDB:295404
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_FGhFfzh4LgvVbkaLDRvkDo
        subject_person_id: p_ZC9cZs12t7iJnxdJfx5Hj4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f3R8HLraqnB1DXqUXJNkJ5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_E7p4sgkN1mttSGH968nD1-
          claim_id: c_FGhFfzh4LgvVbkaLDRvkDo
          source_id: s_mdyr2YqmDyXoAGKXP19paL
          stance: supports
          locator: CBDB：兄弟 王珉（202834）之父／母 王思義
          quotation: null
          interpretation_note: 由兄弟关系推断：王爵 与 王珉 为同胞（CBDB 记「弟」），王珉 之父／母即 王爵 之父／母。
          source:
            id: s_mdyr2YqmDyXoAGKXP19paL
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 295404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295404&o=json
            external_identifier: CBDB:295404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ZC9cZs12t7iJnxdJfx5Hj4
        status: active
        display_name: 王思義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_Q2xsDRycBbhoJlQGktG-2N
        subject_person_id: p_f3R8HLraqnB1DXqUXJNkJ5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fJbtRZx7s1XqSoTR8tLmBu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qdQ2OeCw6Yv0YyrTF8RiSr
          claim_id: c_Q2xsDRycBbhoJlQGktG-2N
          source_id: s_mdyr2YqmDyXoAGKXP19paL
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 202834 王珉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_mdyr2YqmDyXoAGKXP19paL
            source_type: api_record
            title: 中国历代人物传记资料库：王爵（CBDB 295404）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295404&o=json
            external_identifier: CBDB:295404
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fJbtRZx7s1XqSoTR8tLmBu
        status: active
        display_name: 王珉
        merged_into_person_id: null
---

# 王爵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爵 | accepted |
| bio.summary | 王爵，明人物。嘉靖十四年進士，籍贯深州。（中国历代人物传记资料库 CBDB 295404） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ZC9cZs12t7iJnxdJfx5Hj4 | 王思義 | accepted |
| other | p_fJbtRZx7s1XqSoTR8tLmBu | 王珉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王爵（CBDB 295404）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=295404&o=json)
