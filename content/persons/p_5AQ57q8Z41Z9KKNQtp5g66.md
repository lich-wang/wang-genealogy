---
schema: wang-person/v1
id: p_5AQ57q8Z41Z9KKNQtp5g66
status: active
merged_into: null
display_name: 王慧民
cbdb_id: 317553
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_r2Caop4KGx4SyP4oF2qnC2
        subject_person_id: p_5AQ57q8Z41Z9KKNQtp5g66
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧民，明人物。嘉靖三十二年進士，籍贯商丘。（中国历代人物传记资料库 CBDB 317553）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_4XUhbh55s3NoholjTULDfX
          claim_id: c_r2Caop4KGx4SyP4oF2qnC2
          source_id: s_L9UcBxuEHYq5Uw6j3HyAYu
          stance: supports
          locator: CBDB:317553
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_L9UcBxuEHYq5Uw6j3HyAYu
            source_type: api_record
            title: 中国历代人物传记资料库：王慧民（CBDB 317553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317553&o=json
            external_identifier: CBDB:317553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_YsTR4dxH8DooFQi8kBJQyu
        subject_person_id: p_5AQ57q8Z41Z9KKNQtp5g66
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慧民
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_woL3ma9CAsjXuTLFgMjDJD
          claim_id: c_YsTR4dxH8DooFQi8kBJQyu
          source_id: s_L9UcBxuEHYq5Uw6j3HyAYu
          stance: supports
          locator: CBDB:317553
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_uCPrkC_9t94np4gTYgByEV
        subject_person_id: p_N5iAhWP4KE2AcDLMVJFVJe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5AQ57q8Z41Z9KKNQtp5g66
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZfxzIUiObpu28LELwmwHqH
          claim_id: c_uCPrkC_9t94np4gTYgByEV
          source_id: s_Txi3--nmH8k7nVfkwhbgUZ
          stance: supports
          locator: CBDB：兄弟 王彥民（204329）之父／母 王宗周
          quotation: null
          interpretation_note: 由兄弟关系推断：王慧民 与 王彥民 为同胞（CBDB 记「兄」），王彥民 之父／母即 王慧民 之父／母。
          source:
            id: s_Txi3--nmH8k7nVfkwhbgUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王慧民（CBDB 317553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317553&o=json
            external_identifier: CBDB:317553
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
        id: c_-shq1Z6BzxxbcqkcB09cVH
        subject_person_id: p_5AQ57q8Z41Z9KKNQtp5g66
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f4g7JR7LjsZli79_2AEUDZ
          claim_id: c_-shq1Z6BzxxbcqkcB09cVH
          source_id: s_Txi3--nmH8k7nVfkwhbgUZ
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204329 王彥民）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Txi3--nmH8k7nVfkwhbgUZ
            source_type: api_record
            title: 中国历代人物传记资料库：王慧民（CBDB 317553）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317553&o=json
            external_identifier: CBDB:317553
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FS8BiVQ7A5TRPBTnfjAmZ6
        status: active
        display_name: 王彥民
        merged_into_person_id: null
---

# 王慧民

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王慧民，明人物。嘉靖三十二年進士，籍贯商丘。（中国历代人物传记资料库 CBDB 317553） | accepted |
| name.primary | 王慧民 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N5iAhWP4KE2AcDLMVJFVJe | 王宗周 | accepted |
| other | p_FS8BiVQ7A5TRPBTnfjAmZ6 | 王彥民 | accepted |

## 外部来源

- [中国历代人物传记资料库：王慧民（CBDB 317553）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=317553&o=json)
