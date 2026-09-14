---
schema: wang-person/v1
id: p_LrWvySaKBSHFaZdPPoGS9Q
status: active
merged_into: null
display_name: 王道寬
cbdb_id: 313343
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NYEVJkfzgysruLkY1B5PhH
        subject_person_id: p_LrWvySaKBSHFaZdPPoGS9Q
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道寬，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313343）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_x1vRrLB4pXW6ODBHhUU1Is
          claim_id: c_NYEVJkfzgysruLkY1B5PhH
          source_id: s_KH7bm8yY4YFrhz5TFUBMz2
          stance: supports
          locator: CBDB:313343
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KH7bm8yY4YFrhz5TFUBMz2
            source_type: api_record
            title: 中国历代人物传记资料库：王道寬（CBDB 313343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json
            external_identifier: CBDB:313343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_qhg3A9whNmbxZUgN82Evsd
        subject_person_id: p_LrWvySaKBSHFaZdPPoGS9Q
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道寬
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ddCoRGsM5XUwiYmyY6RxsK
          claim_id: c_qhg3A9whNmbxZUgN82Evsd
          source_id: s_KH7bm8yY4YFrhz5TFUBMz2
          stance: supports
          locator: CBDB:313343
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_lAU04DWdyOg9bCDOWScYRf
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LrWvySaKBSHFaZdPPoGS9Q
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SslCPoNCBL1uAOFvKCIDs0
          claim_id: c_lAU04DWdyOg9bCDOWScYRf
          source_id: s_BR2DJ3W-IUzPMBnm2SNmgq
          stance: supports
          locator: CBDB：兄弟 王道直（204021）之父／母 王獻
          quotation: null
          interpretation_note: 由兄弟关系推断：王道寬 与 王道直 为同胞（CBDB 记「兄」），王道直 之父／母即 王道寬 之父／母。
          source:
            id: s_BR2DJ3W-IUzPMBnm2SNmgq
            source_type: api_record
            title: 中国历代人物传记资料库：王道寬（CBDB 313343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json
            external_identifier: CBDB:313343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5g7L2cx4uEGXE6LnD5Pz5F
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
        id: c_8BNg7Y9i3YMLn8bA8ACqs2
        subject_person_id: p_LrWvySaKBSHFaZdPPoGS9Q
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OsoKpNMNSwUlGsipOGOrGW
          claim_id: c_8BNg7Y9i3YMLn8bA8ACqs2
          source_id: s_BR2DJ3W-IUzPMBnm2SNmgq
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 204021 王道直）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_BR2DJ3W-IUzPMBnm2SNmgq
            source_type: api_record
            title: 中国历代人物传记资料库：王道寬（CBDB 313343）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json
            external_identifier: CBDB:313343
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_emRFonnZuCJKKPb7oDivvy
        status: active
        display_name: 王道直
        merged_into_person_id: null
---

# 王道寬

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王道寬，明人物。嘉靖二十九年進士，籍贯咸陽。（中国历代人物传记资料库 CBDB 313343） | accepted |
| name.primary | 王道寬 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5g7L2cx4uEGXE6LnD5Pz5F | 王獻 | accepted |
| other | p_emRFonnZuCJKKPb7oDivvy | 王道直 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道寬（CBDB 313343）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313343&o=json)
