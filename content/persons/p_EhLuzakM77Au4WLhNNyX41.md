---
schema: wang-person/v1
id: p_EhLuzakM77Au4WLhNNyX41
status: active
merged_into: null
display_name: 王遴
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_W1xs28Qfv9d9w1CdMnRTCP
        subject_person_id: p_EhLuzakM77Au4WLhNNyX41
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遴
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AnLDwr8G4YZqyLVoeqiz3H
          claim_id: c_W1xs28Qfv9d9w1CdMnRTCP
          source_id: s_BpKRwsCicofES3Nc59EeZu
          stance: supports
          locator: CBDB:290820
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290820）
          source: &a1
            id: s_BpKRwsCicofES3Nc59EeZu
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.349Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hoDo5UE57s6nMLxtTdQ288
        subject_person_id: p_EhLuzakM77Au4WLhNNyX41
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王遴，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290820）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BDe5gCiwE1DqoWmuZBEGP2
          claim_id: c_hoDo5UE57s6nMLxtTdQ288
          source_id: s_BpKRwsCicofES3Nc59EeZu
          stance: supports
          locator: CBDB:290820
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c__CiQSprX-Y-Bx8XE0AJ8Ne
        subject_person_id: p_N7qE8Uar4CzK9TTK6UVM28
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EhLuzakM77Au4WLhNNyX41
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PQIPgcBhtbxWm9dGDUFxcT
          claim_id: c__CiQSprX-Y-Bx8XE0AJ8Ne
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB：兄弟 王廷（69148）之父／母 王希文
          quotation: null
          interpretation_note: 由兄弟关系推断：王遴 与 王廷 为同胞（CBDB 记「兄」），王廷 之父／母即 王遴 之父／母。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_N7qE8Uar4CzK9TTK6UVM28
        status: active
        display_name: 王希文
        merged_into_person_id: null
    - claim:
        id: c_9eizG5DusTkThf7-MJ7WlR
        subject_person_id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EhLuzakM77Au4WLhNNyX41
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5OTZzJulZs07c8WoQ1ELFI
          claim_id: c_9eizG5DusTkThf7-MJ7WlR
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB：兄弟 王遵（202897）之父／母 王希德
          quotation: null
          interpretation_note: 由兄弟关系推断：王遴 与 王遵 为同胞（CBDB 记「兄」），王遵 之父／母即 王遴 之父／母。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_rw3SZ4WX6NQUFQKsyEHVZ4
        status: active
        display_name: 王希德
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_E9Xo6h0dLExxvuTVq1Zz3A
        subject_person_id: p_EhLuzakM77Au4WLhNNyX41
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gG18ysPFUTc3_6ekSpQgmu
          claim_id: c_E9Xo6h0dLExxvuTVq1Zz3A
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 69148 王廷）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
    - claim:
        id: c_ytx8-OVaaNEKMPzx1cnL3Q
        subject_person_id: p_2LvZRKXC4bvnUqu11G57yb
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_EhLuzakM77Au4WLhNNyX41
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y_d8-NaiFromPALQHGgtiA
          claim_id: c_ytx8-OVaaNEKMPzx1cnL3Q
          source_id: s_MHqRX7mOhkmgJF2ufs8kt3
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 202897 王遵）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_MHqRX7mOhkmgJF2ufs8kt3
            source_type: api_record
            title: 中国历代人物传记资料库：王遴（CBDB 290820）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json
            external_identifier: CBDB:290820
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2LvZRKXC4bvnUqu11G57yb
        status: active
        display_name: 王遵
        merged_into_person_id: null
---

# 王遴

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王遴 | accepted |
| bio.summary | 王遴，明人物。嘉靖十一年進士，籍贯南充。（中国历代人物传记资料库 CBDB 290820） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_N7qE8Uar4CzK9TTK6UVM28 | 王希文 | accepted |
| parents | p_rw3SZ4WX6NQUFQKsyEHVZ4 | 王希德 | accepted |
| other | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |
| other | p_2LvZRKXC4bvnUqu11G57yb | 王遵 | accepted |

## 外部来源

- [中国历代人物传记资料库：王遴（CBDB 290820）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290820&o=json)
