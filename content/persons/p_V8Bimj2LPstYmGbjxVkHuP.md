---
schema: wang-person/v1
id: p_V8Bimj2LPstYmGbjxVkHuP
status: active
merged_into: null
display_name: 王來賓
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_VRkVx2FoN5dbgXMn65BjcD
        subject_person_id: p_V8Bimj2LPstYmGbjxVkHuP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_XZoisEFhvcJKe8gx9mYN7h
          claim_id: c_VRkVx2FoN5dbgXMn65BjcD
          source_id: s_qH8zQyhNomVcJucRmseDw2
          stance: supports
          locator: CBDB:210617
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（210617）
          source: &a1
            id: s_qH8zQyhNomVcJucRmseDw2
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 210617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210617&o=json
            external_identifier: CBDB:210617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.010Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EvEKz7HJVK9uBEkuJGjRgD
        subject_person_id: p_V8Bimj2LPstYmGbjxVkHuP
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王來賓，明人物。隆慶五年進士，籍贯壽陽。（中国历代人物传记资料库 CBDB 210617）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_0ouQ8J6MLL6w0CpbFumv4o
          claim_id: c_EvEKz7HJVK9uBEkuJGjRgD
          source_id: s_qH8zQyhNomVcJucRmseDw2
          stance: supports
          locator: CBDB:210617
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_PWQ2rf51tmTETnRtYRIx4c
        subject_person_id: p_Xfq2hzbf2P25NMCS4qwtRa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_V8Bimj2LPstYmGbjxVkHuP
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UpuArgs_cakb4MX64iKv6Y
          claim_id: c_PWQ2rf51tmTETnRtYRIx4c
          source_id: s_yfoPQD_Bp_RUXdRCpuzLL2
          stance: supports
          locator: CBDB：兄弟 王來聘（205915）之父／母 王麟
          quotation: null
          interpretation_note: 由兄弟关系推断：王來賓 与 王來聘 为同胞（CBDB 记「兄」），王來聘 之父／母即 王來賓 之父／母。
          source:
            id: s_yfoPQD_Bp_RUXdRCpuzLL2
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 210617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210617&o=json
            external_identifier: CBDB:210617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Xfq2hzbf2P25NMCS4qwtRa
        status: active
        display_name: 王麟
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NerrZ5Sx0jWZ7FqUaTe-H9
        subject_person_id: p_TFTLmHU5uD9CZvePXzWQV6
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_V8Bimj2LPstYmGbjxVkHuP
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wafF9bYgOIUriGYwLAUreK
          claim_id: c_NerrZ5Sx0jWZ7FqUaTe-H9
          source_id: s_yfoPQD_Bp_RUXdRCpuzLL2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205915 王來聘）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_yfoPQD_Bp_RUXdRCpuzLL2
            source_type: api_record
            title: 中国历代人物传记资料库：王來賓（CBDB 210617）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210617&o=json
            external_identifier: CBDB:210617
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_TFTLmHU5uD9CZvePXzWQV6
        status: active
        display_name: 王來聘
        merged_into_person_id: null
---

# 王來賓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王來賓 | accepted |
| bio.summary | 王來賓，明人物。隆慶五年進士，籍贯壽陽。（中国历代人物传记资料库 CBDB 210617） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xfq2hzbf2P25NMCS4qwtRa | 王麟 | accepted |
| other | p_TFTLmHU5uD9CZvePXzWQV6 | 王來聘 | accepted |

## 外部来源

- [中国历代人物传记资料库：王來賓（CBDB 210617）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210617&o=json)
