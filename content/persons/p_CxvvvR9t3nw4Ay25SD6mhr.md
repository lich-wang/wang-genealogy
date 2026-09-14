---
schema: wang-person/v1
id: p_CxvvvR9t3nw4Ay25SD6mhr
status: active
merged_into: null
display_name: 王濟
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_L2V1xFdGLptiFY7NUUGGuH
        subject_person_id: p_CxvvvR9t3nw4Ay25SD6mhr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fqp3hctUQANMcGCCEpzFKC
          claim_id: c_L2V1xFdGLptiFY7NUUGGuH
          source_id: s_QZLM2j1nrzVHE4FunM13Ud
          stance: supports
          locator: CBDB:260083
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260083）
          source: &a1
            id: s_QZLM2j1nrzVHE4FunM13Ud
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 260083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260083&o=json
            external_identifier: CBDB:260083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9uPwoSjKf3aNV6BvKgK2mF
        subject_person_id: p_CxvvvR9t3nw4Ay25SD6mhr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王濟，明人物。成化二十三年進士，籍贯濬縣。（中国历代人物传记资料库 CBDB 260083）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_-RzzDMgOm5g4G1mdvs_f6x
          claim_id: c_9uPwoSjKf3aNV6BvKgK2mF
          source_id: s_QZLM2j1nrzVHE4FunM13Ud
          stance: supports
          locator: CBDB:260083
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9woNI9iaUHtkPiDwmCe6Df
        subject_person_id: p_43jCdaQscpAsd5Gw1VzpwH
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CxvvvR9t3nw4Ay25SD6mhr
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gtFCovyixzliW538-bh_Pd
          claim_id: c_9woNI9iaUHtkPiDwmCe6Df
          source_id: s_49IOdIYDhEODuUQcMprbLj
          stance: supports
          locator: CBDB：兄弟 王洧（126589）之父／母 王宸
          quotation: null
          interpretation_note: 由兄弟关系推断：王濟 与 王洧 为同胞（CBDB 记「兄」），王洧 之父／母即 王濟 之父／母。
          source:
            id: s_49IOdIYDhEODuUQcMprbLj
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 260083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260083&o=json
            external_identifier: CBDB:260083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_43jCdaQscpAsd5Gw1VzpwH
        status: active
        display_name: 王宸
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_HhnrRaDZNMfvHyYFbMBLRr
        subject_person_id: p_6nEkGFMvqFS2nrjxSDZLbY
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CxvvvR9t3nw4Ay25SD6mhr
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SJWHV01VX0CcFJFM2cKouR
          claim_id: c_HhnrRaDZNMfvHyYFbMBLRr
          source_id: s_49IOdIYDhEODuUQcMprbLj
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126589 王洧）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_49IOdIYDhEODuUQcMprbLj
            source_type: api_record
            title: 中国历代人物传记资料库：王濟（CBDB 260083）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260083&o=json
            external_identifier: CBDB:260083
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6nEkGFMvqFS2nrjxSDZLbY
        status: active
        display_name: 王洧
        merged_into_person_id: null
---

# 王濟

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王濟 | accepted |
| bio.summary | 王濟，明人物。成化二十三年進士，籍贯濬縣。（中国历代人物传记资料库 CBDB 260083） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_43jCdaQscpAsd5Gw1VzpwH | 王宸 | accepted |
| other | p_6nEkGFMvqFS2nrjxSDZLbY | 王洧 | accepted |

## 外部来源

- [中国历代人物传记资料库：王濟（CBDB 260083）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260083&o=json)
