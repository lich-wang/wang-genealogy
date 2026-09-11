---
schema: wang-person/v1
id: p_AoBir6hSMNLuhQPCTPedCQ
status: active
merged_into: null
display_name: 汪浩
cbdb_id: 21055
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4oQGz8da08YPbVPnZbCu0Y
        subject_person_id: p_AoBir6hSMNLuhQPCTPedCQ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪浩，宋人物。籍贯金華，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 21055）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lQxj8ncOn8lp7zy1seuqfP
          claim_id: c_4oQGz8da08YPbVPnZbCu0Y
          source_id: s_zaZKjBMk5Bh8yRUg862x8U
          stance: supports
          locator: CBDB:21055
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_zaZKjBMk5Bh8yRUg862x8U
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：汪浩（21055）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21055&o=json
            external_identifier: CBDB:21055
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_bwWJCow99oLcZtUW8Hmvkq
        subject_person_id: p_AoBir6hSMNLuhQPCTPedCQ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 汪浩
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uvLPpjfJiBg12HSWmpZErb
          claim_id: c_bwWJCow99oLcZtUW8Hmvkq
          source_id: s_LVPo88zcjgFEFzCv9KsXen
          stance: supports
          locator: Q45397191
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_LVPo88zcjgFEFzCv9KsXen
            source_type: api_record
            title: 维基数据：汪浩（Q45397191）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45397191
            external_identifier: Q45397191
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_8bLJVk7QVY4HreMfTuLr18
          claim_id: c_bwWJCow99oLcZtUW8Hmvkq
          source_id: s_zaZKjBMk5Bh8yRUg862x8U
          stance: supports
          locator: CBDB:21055
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
        id: c_AihMf3GuKuNDGcSTrkBbpE
        subject_person_id: p_AoBir6hSMNLuhQPCTPedCQ
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Vs1PRNKHH6ZpeN7kAJmKti
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SHMgEUyVp1Q75s7UgJS25w
          claim_id: c_AihMf3GuKuNDGcSTrkBbpE
          source_id: s_LVPo88zcjgFEFzCv9KsXen
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source: *a2
        - id: cs_YEFRiLfnBT6vWAtJftYKw9
          claim_id: c_AihMf3GuKuNDGcSTrkBbpE
          source_id: s_sWCnmYdFgCgATu31i6USy7
          stance: supports
          locator: P26（配偶）
          quotation: null
          interpretation_note: null
          source:
            id: s_sWCnmYdFgCgATu31i6USy7
            source_type: api_record
            title: 维基数据：王氏（Q45364774）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45364774
            external_identifier: Q45364774
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:10.721Z
            metadata_json: null
        - id: cs_GU74n8uFNqSFxG7yM3NVZv
          claim_id: c_AihMf3GuKuNDGcSTrkBbpE
          source_id: s_D9bFN1kDtNLab2fq1CfJ6H
          stance: supports
          locator: 亲属关系：丈夫
          quotation: null
          interpretation_note: CBDB 注明此条来源：未知
          source:
            id: s_D9bFN1kDtNLab2fq1CfJ6H
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王氏（5347）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5347&o=json
            external_identifier: CBDB:5347
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:06:10.889Z
            metadata_json: null
      object_person:
        id: p_Vs1PRNKHH6ZpeN7kAJmKti
        status: active
        display_name: 王氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 汪浩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 汪浩，宋人物。籍贯金華，身份为地方士人/鄉紳。（中国历代人物传记资料库 CBDB 21055） | accepted |
| name.primary | 汪浩 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_Vs1PRNKHH6ZpeN7kAJmKti | 王氏 | accepted |

## 外部来源

- [维基数据：汪浩（Q45397191）](https://www.wikidata.org/wiki/Q45397191)
- [维基数据：王氏（Q45364774）](https://www.wikidata.org/wiki/Q45364774)
- [CBDB 中国历代人物传记资料库：汪浩（21055）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=21055&o=json)
- [CBDB 中国历代人物传记资料库：王氏（5347）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=5347&o=json)
