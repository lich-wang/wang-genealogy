---
schema: wang-person/v1
id: p_RQ5mRs9A2eXMZJA1zRRSnp
status: active
merged_into: null
display_name: 王杲
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UYRxtj3tHfUBjYAwrye7c2
        subject_person_id: p_RQ5mRs9A2eXMZJA1zRRSnp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e4Vj5UUAZz79bJ8997JRP4
          claim_id: c_UYRxtj3tHfUBjYAwrye7c2
          source_id: s_qYH99ZRNSkSLCjBs2zvn58
          stance: supports
          locator: CBDB:240197
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240197）
          source: &a1
            id: s_qYH99ZRNSkSLCjBs2zvn58
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 240197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240197&o=json
            external_identifier: CBDB:240197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Dn8TrL7YiTat7j6z6CKv37
        subject_person_id: p_RQ5mRs9A2eXMZJA1zRRSnp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杲，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240197）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U0NjojlioiO-e_n6Cv1i4a
          claim_id: c_Dn8TrL7YiTat7j6z6CKv37
          source_id: s_qYH99ZRNSkSLCjBs2zvn58
          stance: supports
          locator: CBDB:240197
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_XncMYBzpYuAwZNAkMYTb7C
        subject_person_id: p_pXhKxQ18tXJwqo1Ez5cWyA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RQ5mRs9A2eXMZJA1zRRSnp
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3i845kDQrsXB87H7YZYizh
          claim_id: c_XncMYBzpYuAwZNAkMYTb7C
          source_id: s_hocOslwNvbcU-bY9YfhW5M
          stance: supports
          locator: CBDB：兄弟 王昶（199167）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王杲 与 王昶 为同胞（CBDB 记「兄」），王昶 之父／母即 王杲 之父／母。
          source:
            id: s_hocOslwNvbcU-bY9YfhW5M
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 240197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240197&o=json
            external_identifier: CBDB:240197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pXhKxQ18tXJwqo1Ez5cWyA
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2YXcwKdDpqdr-C9avn-MNE
        subject_person_id: p_RQ5mRs9A2eXMZJA1zRRSnp
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hx7iGJRJAsCsAgYtQcK5NG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Li6JIRzoaQT9-nTkMHk4_r
          claim_id: c_2YXcwKdDpqdr-C9avn-MNE
          source_id: s_hocOslwNvbcU-bY9YfhW5M
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 199167 王昶）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_hocOslwNvbcU-bY9YfhW5M
            source_type: api_record
            title: 中国历代人物传记资料库：王杲（CBDB 240197）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240197&o=json
            external_identifier: CBDB:240197
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hx7iGJRJAsCsAgYtQcK5NG
        status: active
        display_name: 王昶
        merged_into_person_id: null
---

# 王杲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杲 | accepted |
| bio.summary | 王杲，明人物。成化二年進士，籍贯靈璧。（中国历代人物传记资料库 CBDB 240197） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pXhKxQ18tXJwqo1Ez5cWyA | 王麟 | accepted |
| other | p_hx7iGJRJAsCsAgYtQcK5NG | 王昶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杲（CBDB 240197）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240197&o=json)
