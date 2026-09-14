---
schema: wang-person/v1
id: p_fg5dttMaBqxJcJXQ2NTiGw
status: active
merged_into: null
display_name: 王整
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AAkAEipvrNXhKiM8B9RXc9
        subject_person_id: p_fg5dttMaBqxJcJXQ2NTiGw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1M9FRPbc567J6kLyDRSgdQ
          claim_id: c_AAkAEipvrNXhKiM8B9RXc9
          source_id: s_sGJMXKsUvMyS5RuPEeQW6M
          stance: supports
          locator: CBDB:239890
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（239890）
          source: &a1
            id: s_sGJMXKsUvMyS5RuPEeQW6M
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 239890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239890&o=json
            external_identifier: CBDB:239890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.906Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_gPyjP2ZoMwnfcCTsC1M33H
        subject_person_id: p_fg5dttMaBqxJcJXQ2NTiGw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王整，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239890）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QQYPljEqjXaxIUQZhf4zmN
          claim_id: c_gPyjP2ZoMwnfcCTsC1M33H
          source_id: s_sGJMXKsUvMyS5RuPEeQW6M
          stance: supports
          locator: CBDB:239890
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_SLG5jWWKgzsbboMUPmx-Th
        subject_person_id: p_14ogWJ1NeYn1acYejdfnia
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_fg5dttMaBqxJcJXQ2NTiGw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xj1i_Ah09tQfBlL35TwgKv
          claim_id: c_SLG5jWWKgzsbboMUPmx-Th
          source_id: s_9s_31UxuHaYMxjxHveCuP0
          stance: supports
          locator: CBDB：兄弟 王敞（208063）之父／母 王斌
          quotation: null
          interpretation_note: 由兄弟关系推断：王整 与 王敞 为同胞（CBDB 记「兄」），王敞 之父／母即 王整 之父／母。
          source:
            id: s_9s_31UxuHaYMxjxHveCuP0
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 239890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239890&o=json
            external_identifier: CBDB:239890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_14ogWJ1NeYn1acYejdfnia
        status: active
        display_name: 王斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_VFM9NUdGmPsnpFdHon4saz
        subject_person_id: p_e8Zr493vi2djpmCUjmBf8z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fg5dttMaBqxJcJXQ2NTiGw
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Z7q50yukwQE5B_J7y2WkFr
          claim_id: c_VFM9NUdGmPsnpFdHon4saz
          source_id: s_9s_31UxuHaYMxjxHveCuP0
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 208063 王敞）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_9s_31UxuHaYMxjxHveCuP0
            source_type: api_record
            title: 中国历代人物传记资料库：王整（CBDB 239890）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239890&o=json
            external_identifier: CBDB:239890
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_e8Zr493vi2djpmCUjmBf8z
        status: active
        display_name: 王敞
        merged_into_person_id: null
---

# 王整

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王整 | accepted |
| bio.summary | 王整，明人物。正统十年進士，籍贯永寧衛。（中国历代人物传记资料库 CBDB 239890） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_14ogWJ1NeYn1acYejdfnia | 王斌 | accepted |
| other | p_e8Zr493vi2djpmCUjmBf8z | 王敞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王整（CBDB 239890）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239890&o=json)
