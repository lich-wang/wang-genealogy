---
schema: wang-person/v1
id: p_P7bDvyyRkLv8JFTFh22BX7
status: active
merged_into: null
display_name: 王崇志
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_UCpyrQjGmLx8gR1v762nY3
        subject_person_id: p_P7bDvyyRkLv8JFTFh22BX7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇志
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1WAX5b1C7732ZhNidvMCS4
          claim_id: c_UCpyrQjGmLx8gR1v762nY3
          source_id: s_KBCbsA8QAdo3zYNagbXotp
          stance: supports
          locator: CBDB:302977
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（302977）
          source: &a1
            id: s_KBCbsA8QAdo3zYNagbXotp
            source_type: api_record
            title: 中国历代人物传记资料库：王崇志（CBDB 302977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302977&o=json
            external_identifier: CBDB:302977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.674Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_79L2AHB2ieg2SrB5ANZaq9
        subject_person_id: p_P7bDvyyRkLv8JFTFh22BX7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇志，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302977）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TEOdo1HmpXja6ugEVKMh-O
          claim_id: c_79L2AHB2ieg2SrB5ANZaq9
          source_id: s_KBCbsA8QAdo3zYNagbXotp
          stance: supports
          locator: CBDB:302977
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vatWVACIu-NjrgtnB6bSOZ
        subject_person_id: p_YCdG7XtqNcYaExuN76xqKv
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_P7bDvyyRkLv8JFTFh22BX7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Ocan5HaelSNIpFLb_S6Cx
          claim_id: c_vatWVACIu-NjrgtnB6bSOZ
          source_id: s_O7wANae-wlj0luU3C86yrw
          stance: supports
          locator: CBDB：兄弟 王崇古（124981）之父／母 王瑶
          quotation: null
          interpretation_note: 由兄弟关系推断：王崇志 与 王崇古 为同胞（CBDB 记「弟」），王崇古 之父／母即 王崇志 之父／母。
          source:
            id: s_O7wANae-wlj0luU3C86yrw
            source_type: api_record
            title: 中国历代人物传记资料库：王崇志（CBDB 302977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302977&o=json
            external_identifier: CBDB:302977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YCdG7XtqNcYaExuN76xqKv
        status: active
        display_name: 王瑶
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2-asd1VdN2Uu8sEmBKX9Cq
        subject_person_id: p_CqGGoAHd4xav6yj4gHyTHE
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_P7bDvyyRkLv8JFTFh22BX7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eOdjjlBUsFXmRcyApNPtL4
          claim_id: c_2-asd1VdN2Uu8sEmBKX9Cq
          source_id: s_O7wANae-wlj0luU3C86yrw
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 124981 王崇古）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_O7wANae-wlj0luU3C86yrw
            source_type: api_record
            title: 中国历代人物传记资料库：王崇志（CBDB 302977）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302977&o=json
            external_identifier: CBDB:302977
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_CqGGoAHd4xav6yj4gHyTHE
        status: active
        display_name: 王崇古
        merged_into_person_id: null
---

# 王崇志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王崇志 | accepted |
| bio.summary | 王崇志，明人物。嘉靖二十年進士，籍贯蒲州。（中国历代人物传记资料库 CBDB 302977） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YCdG7XtqNcYaExuN76xqKv | 王瑶 | accepted |
| other | p_CqGGoAHd4xav6yj4gHyTHE | 王崇古 | accepted |

## 外部来源

- [中国历代人物传记资料库：王崇志（CBDB 302977）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=302977&o=json)
