---
schema: wang-person/v1
id: p_e8hYUJFh9Q5fCVadiwHHmT
status: active
merged_into: null
display_name: 王赫
cbdb_id: 271473
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_m3ue5JUyzpeXKZpmC7Vn8A
        subject_person_id: p_e8hYUJFh9Q5fCVadiwHHmT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王赫，明人物。景泰五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 271473）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_8ZGbBeFDI7J0hhaZvp6CRe
          claim_id: c_m3ue5JUyzpeXKZpmC7Vn8A
          source_id: s_Qc5XBurhDse2XJKDyAdNKp
          stance: supports
          locator: CBDB:271473
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Qc5XBurhDse2XJKDyAdNKp
            source_type: api_record
            title: 中国历代人物传记资料库：王赫（CBDB 271473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json
            external_identifier: CBDB:271473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_AwSWNmHbRwFm7i9frLk8Cj
        subject_person_id: p_e8hYUJFh9Q5fCVadiwHHmT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王赫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_3Rr6mfHWe25hXZULuVmX4L
          claim_id: c_AwSWNmHbRwFm7i9frLk8Cj
          source_id: s_Qc5XBurhDse2XJKDyAdNKp
          stance: supports
          locator: CBDB:271473
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zs9Y2FfToeXPC1TjdjnSYb
        subject_person_id: p_CUFBtfXaFjfECLb8K9SuBv
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_e8hYUJFh9Q5fCVadiwHHmT
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MPh64kvcHMdjHn42YvWvVU
          claim_id: c_zs9Y2FfToeXPC1TjdjnSYb
          source_id: s_p2QEKZdMLseRWrXSnA8Zi7
          stance: supports
          locator: CBDB：兄弟 王稽（198434）之父／母 王忠
          quotation: null
          interpretation_note: 由兄弟关系推断：王赫 与 王稽 为同胞（CBDB 记「弟」），王稽 之父／母即 王赫 之父／母。
          source:
            id: s_p2QEKZdMLseRWrXSnA8Zi7
            source_type: api_record
            title: 中国历代人物传记资料库：王赫（CBDB 271473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json
            external_identifier: CBDB:271473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CUFBtfXaFjfECLb8K9SuBv
        status: active
        display_name: 王忠
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_smA7wzKIizLaY1E5SZY3Yc
        subject_person_id: p_3vKgPJZPmMS9ZpS2a75EVV
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_e8hYUJFh9Q5fCVadiwHHmT
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5GSnI_avC4Kh-RvtggLA24
          claim_id: c_smA7wzKIizLaY1E5SZY3Yc
          source_id: s_p2QEKZdMLseRWrXSnA8Zi7
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 198434 王稽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_p2QEKZdMLseRWrXSnA8Zi7
            source_type: api_record
            title: 中国历代人物传记资料库：王赫（CBDB 271473）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json
            external_identifier: CBDB:271473
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3vKgPJZPmMS9ZpS2a75EVV
        status: active
        display_name: 王稽
        merged_into_person_id: null
---

# 王赫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王赫，明人物。景泰五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 271473） | accepted |
| name.primary | 王赫 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CUFBtfXaFjfECLb8K9SuBv | 王忠 | accepted |
| other | p_3vKgPJZPmMS9ZpS2a75EVV | 王稽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王赫（CBDB 271473）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=271473&o=json)
