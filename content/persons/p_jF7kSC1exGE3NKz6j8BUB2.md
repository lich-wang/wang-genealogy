---
schema: wang-person/v1
id: p_jF7kSC1exGE3NKz6j8BUB2
status: active
merged_into: null
display_name: 王三重
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_asxAwoSuSmUw5dic2GL1gQ
        subject_person_id: p_jF7kSC1exGE3NKz6j8BUB2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yu6BPoCr7Cb3eYTHSwUdu8
          claim_id: c_asxAwoSuSmUw5dic2GL1gQ
          source_id: s_wajT465N2v1HpzrNJvA7uC
          stance: supports
          locator: CBDB:298286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（298286）
          source: &a1
            id: s_wajT465N2v1HpzrNJvA7uC
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 298286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298286&o=json
            external_identifier: CBDB:298286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.586Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AWvuLSsudy5GzbFJs8XCe8
        subject_person_id: p_jF7kSC1exGE3NKz6j8BUB2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王三重，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jFO0tS1fze5U0MHwAnoWbK
          claim_id: c_AWvuLSsudy5GzbFJs8XCe8
          source_id: s_wajT465N2v1HpzrNJvA7uC
          stance: supports
          locator: CBDB:298286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tcELV1XtYUDBVKeCLLGdCU
        subject_person_id: p_pBNZiURNhTvnzH774UY4Jb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jF7kSC1exGE3NKz6j8BUB2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BbZf-dokACzdYhvQbB8BIJ
          claim_id: c_tcELV1XtYUDBVKeCLLGdCU
          source_id: s_0McAxH8raK1ITX6Tiqogzl
          stance: supports
          locator: CBDB：兄弟 王三聘（203007）之父／母 王玉
          quotation: null
          interpretation_note: 由兄弟关系推断：王三重 与 王三聘 为同胞（CBDB 记「弟」），王三聘 之父／母即 王三重 之父／母。
          source:
            id: s_0McAxH8raK1ITX6Tiqogzl
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 298286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298286&o=json
            external_identifier: CBDB:298286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pBNZiURNhTvnzH774UY4Jb
        status: active
        display_name: 王玉
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4aEUbltfBYeclwF4Zdeu8j
        subject_person_id: p_UjZpJ3nna6WnKHPp7DAt53
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_jF7kSC1exGE3NKz6j8BUB2
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mSgRmztx5PaVipQUBcbyDs
          claim_id: c_4aEUbltfBYeclwF4Zdeu8j
          source_id: s_0McAxH8raK1ITX6Tiqogzl
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 203007 王三聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_0McAxH8raK1ITX6Tiqogzl
            source_type: api_record
            title: 中国历代人物传记资料库：王三重（CBDB 298286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298286&o=json
            external_identifier: CBDB:298286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UjZpJ3nna6WnKHPp7DAt53
        status: active
        display_name: 王三聘
        merged_into_person_id: null
---

# 王三重

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王三重 | accepted |
| bio.summary | 王三重，明人物。嘉靖十四年進士，籍贯盩厔。（中国历代人物传记资料库 CBDB 298286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pBNZiURNhTvnzH774UY4Jb | 王玉 | accepted |
| other | p_UjZpJ3nna6WnKHPp7DAt53 | 王三聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王三重（CBDB 298286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=298286&o=json)
