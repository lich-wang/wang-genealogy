---
schema: wang-person/v1
id: p_QZDDHQkVG25ym6DbVHajPv
status: active
merged_into: null
display_name: 王晤
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_EeW7qQpNYr3MvB8b1pu5PS
        subject_person_id: p_QZDDHQkVG25ym6DbVHajPv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晤
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rLKX87tg1CcJ9P7sTn9NxQ
          claim_id: c_EeW7qQpNYr3MvB8b1pu5PS
          source_id: s_Ey7DUM5rgNLcQggtBAQhcW
          stance: supports
          locator: CBDB:208873
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208873）
          source: &a1
            id: s_Ey7DUM5rgNLcQggtBAQhcW
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 208873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json
            external_identifier: CBDB:208873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.966Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jf3MYQ4xoaGYgEC1Miyxb7
        subject_person_id: p_QZDDHQkVG25ym6DbVHajPv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王晤，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208873）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nxgZYEtmKfLPZbCsyvc29j
          claim_id: c_jf3MYQ4xoaGYgEC1Miyxb7
          source_id: s_Ey7DUM5rgNLcQggtBAQhcW
          stance: supports
          locator: CBDB:208873
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MOIB8QihuUQwwLVtBWZvbx
        subject_person_id: p_548o1SKAP1oKBMmyuHA5jA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QZDDHQkVG25ym6DbVHajPv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8Aekl5_wVr_mmB1jeZRCLJ
          claim_id: c_MOIB8QihuUQwwLVtBWZvbx
          source_id: s_wWvnbcO3aiiZykEp7jepvR
          stance: supports
          locator: CBDB：兄弟 王曉（205806）之父／母 王崇義
          quotation: null
          interpretation_note: 由兄弟关系推断：王晤 与 王曉 为同胞（CBDB 记「兄」），王曉 之父／母即 王晤 之父／母。
          source:
            id: s_wWvnbcO3aiiZykEp7jepvR
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 208873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json
            external_identifier: CBDB:208873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_548o1SKAP1oKBMmyuHA5jA
        status: active
        display_name: 王崇義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_kpwBZOO_PT5M-FhL4GKV_a
        subject_person_id: p_QZDDHQkVG25ym6DbVHajPv
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RznqNoKYNYcxhtUnus5Vov
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mTcLS3q8ZQXBJ8mn1XEefR
          claim_id: c_kpwBZOO_PT5M-FhL4GKV_a
          source_id: s_wWvnbcO3aiiZykEp7jepvR
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205806 王曉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_wWvnbcO3aiiZykEp7jepvR
            source_type: api_record
            title: 中国历代人物传记资料库：王晤（CBDB 208873）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json
            external_identifier: CBDB:208873
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RznqNoKYNYcxhtUnus5Vov
        status: active
        display_name: 王曉
        merged_into_person_id: null
---

# 王晤

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王晤 | accepted |
| bio.summary | 王晤，明人物。隆慶五年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 208873） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_548o1SKAP1oKBMmyuHA5jA | 王崇義 | accepted |
| other | p_RznqNoKYNYcxhtUnus5Vov | 王曉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王晤（CBDB 208873）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208873&o=json)
