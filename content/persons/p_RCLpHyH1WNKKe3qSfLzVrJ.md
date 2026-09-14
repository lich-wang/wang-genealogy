---
schema: wang-person/v1
id: p_RCLpHyH1WNKKe3qSfLzVrJ
status: active
merged_into: null
display_name: 王道亨
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_d81r4HnNVb9cjowg4K61m6
        subject_person_id: p_RCLpHyH1WNKKe3qSfLzVrJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CfxfDhYbk7rceQ15rwcuf4
          claim_id: c_d81r4HnNVb9cjowg4K61m6
          source_id: s_H7sce1RXFTLnXWXMMeKDhX
          stance: supports
          locator: CBDB:210027
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210027）
          source: &a1
            id: s_H7sce1RXFTLnXWXMMeKDhX
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 210027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json
            external_identifier: CBDB:210027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.996Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3SNoLxjtTBsL3jgoqwFWp7
        subject_person_id: p_RCLpHyH1WNKKe3qSfLzVrJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道亨，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210027）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DyuffKF5FhOYYoQkmCFaIW
          claim_id: c_3SNoLxjtTBsL3jgoqwFWp7
          source_id: s_H7sce1RXFTLnXWXMMeKDhX
          stance: supports
          locator: CBDB:210027
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_OPhizxoycgxBaztCZ5RC4X
        subject_person_id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RCLpHyH1WNKKe3qSfLzVrJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fXva-6U7dRDnVBMMeF4guX
          claim_id: c_OPhizxoycgxBaztCZ5RC4X
          source_id: s_R8Uz2rsFWywzl9P7f5DaCl
          stance: supports
          locator: CBDB：兄弟 王道成（126745）之父／母 王廷宣
          quotation: null
          interpretation_note: 由兄弟关系推断：王道亨 与 王道成 为同胞（CBDB 记「兄」），王道成 之父／母即 王道亨 之父／母。
          source:
            id: s_R8Uz2rsFWywzl9P7f5DaCl
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 210027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json
            external_identifier: CBDB:210027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4CkBCwtn2nCSmzMrTCZ7Ut
        status: active
        display_name: 王廷宣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ktLSRN-5PecGgpYu4fOw9F
        subject_person_id: p_EaFxi6NHrChzwLEA1T89LT
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RCLpHyH1WNKKe3qSfLzVrJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oF7rhQJSGej1cnmcCY-wr6
          claim_id: c_ktLSRN-5PecGgpYu4fOw9F
          source_id: s_R8Uz2rsFWywzl9P7f5DaCl
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126745 王道成）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_R8Uz2rsFWywzl9P7f5DaCl
            source_type: api_record
            title: 中国历代人物传记资料库：王道亨（CBDB 210027）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json
            external_identifier: CBDB:210027
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_EaFxi6NHrChzwLEA1T89LT
        status: active
        display_name: 王道成
        merged_into_person_id: null
---

# 王道亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道亨 | accepted |
| bio.summary | 王道亨，明人物。隆慶五年進士，籍贯巴縣。（中国历代人物传记资料库 CBDB 210027） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_4CkBCwtn2nCSmzMrTCZ7Ut | 王廷宣 | accepted |
| other | p_EaFxi6NHrChzwLEA1T89LT | 王道成 | accepted |

## 外部来源

- [中国历代人物传记资料库：王道亨（CBDB 210027）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210027&o=json)
