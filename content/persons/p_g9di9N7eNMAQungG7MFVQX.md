---
schema: wang-person/v1
id: p_g9di9N7eNMAQungG7MFVQX
status: active
merged_into: null
display_name: 王叔本
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QKx4Z7USP3Ye2AjFLHcqLq
        subject_person_id: p_g9di9N7eNMAQungG7MFVQX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王叔本
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_c5dsfyH6aB8G6j8zRveDa3
          claim_id: c_QKx4Z7USP3Ye2AjFLHcqLq
          source_id: s_r49YJADgNBCPc8LydZFAiH
          stance: supports
          locator: CBDB:328622
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（328622）
          source: &a1
            id: s_r49YJADgNBCPc8LydZFAiH
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 328622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json
            external_identifier: CBDB:328622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.306Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_DsszZPfSLDyCBLG6RzV13H
        subject_person_id: p_g9di9N7eNMAQungG7MFVQX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王叔本，明人物。嘉靖四十一年進士，籍贯永嘉，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)。（中国历代人物传记资料库 CBDB 328622）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FdHL9PSCcvpiWEXUUrUUBO
          claim_id: c_DsszZPfSLDyCBLG6RzV13H
          source_id: s_r49YJADgNBCPc8LydZFAiH
          stance: supports
          locator: CBDB:328622
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8OdyFMZ4IYQMdXJvANXnzb
        subject_person_id: p_gFygQ7tuxUBRH1guyqGQYP
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_g9di9N7eNMAQungG7MFVQX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_4J37mqijzwNSg-hNihvHBX
          claim_id: c_8OdyFMZ4IYQMdXJvANXnzb
          source_id: s_FcBVgddWDwtYXVCWR02iX2
          stance: supports
          locator: CBDB：兄弟 王叔杲（126579）之父／母 王澈
          quotation: null
          interpretation_note: 由兄弟关系推断：王叔本 与 王叔杲 为同胞（CBDB 记「兄」），王叔杲 之父／母即 王叔本 之父／母。
          source:
            id: s_FcBVgddWDwtYXVCWR02iX2
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 328622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json
            external_identifier: CBDB:328622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_gFygQ7tuxUBRH1guyqGQYP
        status: active
        display_name: 王澈
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_8Xa93uCsg6nxIDZVZyYOXc
        subject_person_id: p_2q5oLPYeHNC3ozo65nG5VF
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_g9di9N7eNMAQungG7MFVQX
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_34oCQ8SjpF5jB2_B1OyJ5m
          claim_id: c_8Xa93uCsg6nxIDZVZyYOXc
          source_id: s_FcBVgddWDwtYXVCWR02iX2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126579 王叔杲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_FcBVgddWDwtYXVCWR02iX2
            source_type: api_record
            title: 中国历代人物传记资料库：王叔本（CBDB 328622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json
            external_identifier: CBDB:328622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2q5oLPYeHNC3ozo65nG5VF
        status: active
        display_name: 王叔杲
        merged_into_person_id: null
---

# 王叔本

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王叔本 | accepted |
| bio.summary | 王叔本，明人物。嘉靖四十一年進士，籍贯永嘉，入仕監生: 蔭監(含明代官生、恩生，或清代恩廕生、難廕生)。（中国历代人物传记资料库 CBDB 328622） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_gFygQ7tuxUBRH1guyqGQYP | 王澈 | accepted |
| other | p_2q5oLPYeHNC3ozo65nG5VF | 王叔杲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王叔本（CBDB 328622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=328622&o=json)
