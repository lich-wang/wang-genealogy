---
schema: wang-person/v1
id: p_TFYLNz818Sj3Pa3L1D9Wxf
status: active
merged_into: null
display_name: 郭氏
cbdb_id: 334084
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HZgsDki4eNgNHD1hOfAusd
        subject_person_id: p_TFYLNz818Sj3Pa3L1D9Wxf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334084）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qDEypYqqQU0RnDShPh1rGL
          claim_id: c_HZgsDki4eNgNHD1hOfAusd
          source_id: s_VjMEu9hqNMPKzNzwuWHnML
          stance: supports
          locator: CBDB:334084
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VjMEu9hqNMPKzNzwuWHnML
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：郭氏（334084）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334084&o=json
            external_identifier: CBDB:334084
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J27ZGtxsKAaSPChkMofFVp
        subject_person_id: p_TFYLNz818Sj3Pa3L1D9Wxf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 郭氏
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yE2QFffQvLWDyWkBJ3sArH
          claim_id: c_J27ZGtxsKAaSPChkMofFVp
          source_id: s_23PKPLKZ6G77ENet7b2DNz
          stance: supports
          locator: Q65861473
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_23PKPLKZ6G77ENet7b2DNz
            source_type: api_record
            title: 维基数据：郭氏（Q65861473）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q65861473
            external_identifier: Q65861473
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_hVkJe6iS3sZBbyCZ5YAb3H
          claim_id: c_J27ZGtxsKAaSPChkMofFVp
          source_id: s_VjMEu9hqNMPKzNzwuWHnML
          stance: supports
          locator: CBDB:334084
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_g3C93CdjEqavQy1vniXdss
        subject_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_TFYLNz818Sj3Pa3L1D9Wxf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78sHQGox2P9mZmakZ1Q8xg
          claim_id: c_g3C93CdjEqavQy1vniXdss
          source_id: s_23PKPLKZ6G77ENet7b2DNz
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_gq5ZJV54vKaRdQtA6s7Qgq
          claim_id: c_g3C93CdjEqavQy1vniXdss
          source_id: s_4aAHVT5jB6WtTJCwPKgxKa
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_4aAHVT5jB6WtTJCwPKgxKa
            source_type: api_record
            title: 维基数据：王汝鲁（Q45577422）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45577422
            external_identifier: Q45577422
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:07:07.754Z
            metadata_json:
              zh_wikipedia: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%B1%9D%E9%AD%AF
        - id: cs_g3Hz1ACD5NPPUudRC6esM8
          claim_id: c_g3C93CdjEqavQy1vniXdss
          source_id: s_mrU2gd98oKTzUYL8GJNQru
          stance: supports
          locator: 亲属关系：妻子
          quotation: null
          interpretation_note: CBDB 注明此条来源：隆慶二年進士登科錄:一卷
          source:
            id: s_mrU2gd98oKTzUYL8GJNQru
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王汝魯（126502）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126502&o=json
            external_identifier: CBDB:126502
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:07:07.904Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 郭氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 郭氏，明人物。隆慶二年進士。（中国历代人物传记资料库 CBDB 334084） | accepted |
| name.primary | 郭氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [维基数据：郭氏（Q65861473）](https://www.wikidata.org/wiki/Q65861473)
- [维基数据：王汝鲁（Q45577422）](https://www.wikidata.org/wiki/Q45577422)
- [CBDB 中国历代人物传记资料库：郭氏（334084）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334084&o=json)
- [CBDB 中国历代人物传记资料库：王汝魯（126502）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126502&o=json)
