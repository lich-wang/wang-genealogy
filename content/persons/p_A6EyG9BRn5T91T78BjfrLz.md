---
schema: wang-person/v1
id: p_A6EyG9BRn5T91T78BjfrLz
status: active
merged_into: null
display_name: 王廷鍚
cbdb_id: 332998
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mBkHSKCCQ14cWzuuABzT57
        subject_person_id: p_A6EyG9BRn5T91T78BjfrLz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鍚，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 332998）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Y9EHbB2MjkmGsPDtH-Ixcz
          claim_id: c_mBkHSKCCQ14cWzuuABzT57
          source_id: s_dyzqrNyuHJEXgCy4T4wKYM
          stance: supports
          locator: CBDB:332998
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_dyzqrNyuHJEXgCy4T4wKYM
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鍚（CBDB 332998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332998&o=json
            external_identifier: CBDB:332998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_m6g6Bk2GmfRCVeV9FmD8uX
        subject_person_id: p_A6EyG9BRn5T91T78BjfrLz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷鍚
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GUDSq5tQn71dNLJFWEo1wP
          claim_id: c_m6g6Bk2GmfRCVeV9FmD8uX
          source_id: s_dyzqrNyuHJEXgCy4T4wKYM
          stance: supports
          locator: CBDB:332998
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_21AdvcL0RceNlTtI1ZjqtZ
        subject_person_id: p_TBNAibWSwiLJagKdPeWqgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_A6EyG9BRn5T91T78BjfrLz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b7jd6gzJumobj4N16tDwUk
          claim_id: c_21AdvcL0RceNlTtI1ZjqtZ
          source_id: s_Yl9-kiOVS3Xms6mHQViUg3
          stance: supports
          locator: CBDB：兄弟 王三鍚（205426）之父／母 王一陽
          quotation: null
          interpretation_note: 由兄弟关系推断：王廷鍚 与 王三鍚 为同胞（CBDB 记「兄」），王三鍚 之父／母即 王廷鍚 之父／母。
          source:
            id: s_Yl9-kiOVS3Xms6mHQViUg3
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鍚（CBDB 332998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332998&o=json
            external_identifier: CBDB:332998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TBNAibWSwiLJagKdPeWqgE
        status: active
        display_name: 王一陽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4F_C04oizs1ZKs0UtLh_GN
        subject_person_id: p_A6EyG9BRn5T91T78BjfrLz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RPorhHfNa1cjhpbMo2ZnFo
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbW-ouly96NFOP-XU0jdo2
          claim_id: c_4F_C04oizs1ZKs0UtLh_GN
          source_id: s_Yl9-kiOVS3Xms6mHQViUg3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205426 王三鍚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_Yl9-kiOVS3Xms6mHQViUg3
            source_type: api_record
            title: 中国历代人物传记资料库：王廷鍚（CBDB 332998）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332998&o=json
            external_identifier: CBDB:332998
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RPorhHfNa1cjhpbMo2ZnFo
        status: active
        display_name: 王三鍚
        merged_into_person_id: null
---

# 王廷鍚

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王廷鍚，明人物。嘉靖四十四年進士，籍贯內江。（中国历代人物传记资料库 CBDB 332998） | accepted |
| name.primary | 王廷鍚 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TBNAibWSwiLJagKdPeWqgE | 王一陽 | accepted |
| other | p_RPorhHfNa1cjhpbMo2ZnFo | 王三鍚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷鍚（CBDB 332998）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332998&o=json)
