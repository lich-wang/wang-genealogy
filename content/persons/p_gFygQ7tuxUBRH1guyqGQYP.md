---
schema: wang-person/v1
id: p_gFygQ7tuxUBRH1guyqGQYP
status: active
merged_into: null
display_name: 王澈
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8KRUBNR6o5JSx6vTqeV2dG
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澈
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bjJQDBtbcGa7KG5uZmCafF
          claim_id: c_8KRUBNR6o5JSx6vTqeV2dG
          source_id: s_x897G6bbUTk1KAL3VE7sHQ
          stance: supports
          locator: CBDB:328614
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328614）
          source: &a1
            id: s_x897G6bbUTk1KAL3VE7sHQ
            source_type: api_record
            title: 中国历代人物传记资料库：王澈（CBDB 328614）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328614&o=json
            external_identifier: CBDB:328614
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.302Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_UdADK1RbQz3cU3ktUhsrS4
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4MaF7GT8GPNMBzjoGCQMPL
          claim_id: c_UdADK1RbQz3cU3ktUhsrS4
          source_id: s_x897G6bbUTk1KAL3VE7sHQ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_HXW4kC4aeHeQ0wTlUqwvZB
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5RESG4AazOp-6uNh6FA8tO
          claim_id: c_HXW4kC4aeHeQ0wTlUqwvZB
          source_id: s_5FoRMCCjYq81yzD5zvd1kZ
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第三甲第一百三十七名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_5FoRMCCjYq81yzD5zvd1kZ
            source_type: api_record
            title: 中国历代人物传记资料库：王叔杲（CBDB 126579）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json
            external_identifier: CBDB:126579
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.038Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_2q5oLPYeHNC3ozo65nG5VF
        status: active
        display_name: 王叔杲
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王澈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澈 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_2q5oLPYeHNC3ozo65nG5VF | 王叔杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王澈（CBDB 328614）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328614&o=json)
- [中国历代人物传记资料库：王叔杲（CBDB 126579）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126579&o=json)
