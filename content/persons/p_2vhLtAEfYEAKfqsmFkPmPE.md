---
schema: wang-person/v1
id: p_2vhLtAEfYEAKfqsmFkPmPE
status: active
merged_into: null
display_name: 王固
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YmfXQBra9jQ8w3bwXhCSLR
        subject_person_id: p_2vhLtAEfYEAKfqsmFkPmPE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_bFVX5MNtiAN5VcLovSMNmn
          claim_id: c_YmfXQBra9jQ8w3bwXhCSLR
          source_id: s_wLp8ngGG99yJy2BeQXNSiE
          stance: supports
          locator: CBDB:264269
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264269）
          source: &a1
            id: s_wLp8ngGG99yJy2BeQXNSiE
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 264269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json
            external_identifier: CBDB:264269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.633Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_M8jL1mRcHLvDNkGm2LjbVT
        subject_person_id: p_2vhLtAEfYEAKfqsmFkPmPE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王固，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264269）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NJHA4LeJSrQzIySDtrO6L_
          claim_id: c_M8jL1mRcHLvDNkGm2LjbVT
          source_id: s_wLp8ngGG99yJy2BeQXNSiE
          stance: supports
          locator: CBDB:264269
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AiYup6Cj3_xthoThbERkCn
        subject_person_id: p_58T6FS2HPdsESXyAWQ5HsZ
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2vhLtAEfYEAKfqsmFkPmPE
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y1w8ak-8YEbABmWgBOyMYq
          claim_id: c_AiYup6Cj3_xthoThbERkCn
          source_id: s_7W-NLXejJNhfV3igWR0njf
          stance: supports
          locator: CBDB：兄弟 王鑑（68835）之父／母 王吉甫
          quotation: null
          interpretation_note: 由兄弟关系推断：王固 与 王鑑 为同胞（CBDB 记「弟」），王鑑 之父／母即 王固 之父／母。
          source:
            id: s_7W-NLXejJNhfV3igWR0njf
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 264269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json
            external_identifier: CBDB:264269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_58T6FS2HPdsESXyAWQ5HsZ
        status: active
        display_name: 王吉甫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_DL4ohSnMvGCFVnnIJgboYE
        subject_person_id: p_2vhLtAEfYEAKfqsmFkPmPE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_GBJny92BjTJrCUatL2dF1X
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-xXG1ksbbxnEJos1KNG32G
          claim_id: c_DL4ohSnMvGCFVnnIJgboYE
          source_id: s_7W-NLXejJNhfV3igWR0njf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 68835 王鑑）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_7W-NLXejJNhfV3igWR0njf
            source_type: api_record
            title: 中国历代人物传记资料库：王固（CBDB 264269）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json
            external_identifier: CBDB:264269
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GBJny92BjTJrCUatL2dF1X
        status: active
        display_name: 王鑑
        merged_into_person_id: null
---

# 王固

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王固 | accepted |
| bio.summary | 王固，明人物。景泰五年進士，籍贯太原。（中国历代人物传记资料库 CBDB 264269） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_58T6FS2HPdsESXyAWQ5HsZ | 王吉甫 | accepted |
| other | p_GBJny92BjTJrCUatL2dF1X | 王鑑 | accepted |

## 外部来源

- [中国历代人物传记资料库：王固（CBDB 264269）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264269&o=json)
