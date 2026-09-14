---
schema: wang-person/v1
id: p_y8e2xqPCMkfRYEcZvTsyDs
status: active
merged_into: null
display_name: 王致中
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nhhmsGu6S1b2ncxyzrdQ6M
        subject_person_id: p_y8e2xqPCMkfRYEcZvTsyDs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CJCuq38Y393Ab9MN7Pc2xs
          claim_id: c_nhhmsGu6S1b2ncxyzrdQ6M
          source_id: s_9gDo7cnSra2nCAGjBxEmxN
          stance: supports
          locator: CBDB:304160
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（304160）
          source: &a1
            id: s_9gDo7cnSra2nCAGjBxEmxN
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 304160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304160&o=json
            external_identifier: CBDB:304160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.705Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6g6bYTr5N6noWYK7kUiutQ
        subject_person_id: p_y8e2xqPCMkfRYEcZvTsyDs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王致中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304160）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9ntmXXKMbeWBQxhWWHfRma
          claim_id: c_6g6bYTr5N6noWYK7kUiutQ
          source_id: s_9gDo7cnSra2nCAGjBxEmxN
          stance: supports
          locator: CBDB:304160
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VGbM0TNsI8Cxn5Il4Hgqgz
        subject_person_id: p_EL1xAzh69eBckvCoFLRC2M
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_y8e2xqPCMkfRYEcZvTsyDs
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cTtPbOGAhDx0BeZo7BUhZk
          claim_id: c_VGbM0TNsI8Cxn5Il4Hgqgz
          source_id: s_GzcrEBIihp2xVVeNUV9fJj
          stance: supports
          locator: CBDB：兄弟 王惟中（203400）之父／母 王紀
          quotation: null
          interpretation_note: 由兄弟关系推断：王致中 与 王惟中 为同胞（CBDB 记「兄」），王惟中 之父／母即 王致中 之父／母。
          source:
            id: s_GzcrEBIihp2xVVeNUV9fJj
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 304160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304160&o=json
            external_identifier: CBDB:304160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EL1xAzh69eBckvCoFLRC2M
        status: active
        display_name: 王紀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_qhUZNmRKGIHkEVtUEeormW
        subject_person_id: p_V5Z6bC9P1YiqepVeP78NQA
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_y8e2xqPCMkfRYEcZvTsyDs
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xAJIWdzHVgCATkAA20wDWd
          claim_id: c_qhUZNmRKGIHkEVtUEeormW
          source_id: s_GzcrEBIihp2xVVeNUV9fJj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203400 王惟中）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_GzcrEBIihp2xVVeNUV9fJj
            source_type: api_record
            title: 中国历代人物传记资料库：王致中（CBDB 304160）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304160&o=json
            external_identifier: CBDB:304160
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_V5Z6bC9P1YiqepVeP78NQA
        status: active
        display_name: 王惟中
        merged_into_person_id: null
---

# 王致中

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王致中 | accepted |
| bio.summary | 王致中，明人物。嘉靖二十年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 304160） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_EL1xAzh69eBckvCoFLRC2M | 王紀 | accepted |
| other | p_V5Z6bC9P1YiqepVeP78NQA | 王惟中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王致中（CBDB 304160）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=304160&o=json)
