---
schema: wang-person/v1
id: p_AWbhYZkLYhbdEbEhHLDAmo
status: active
merged_into: null
display_name: 王珵
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TdFd4K91yAzUwM4nYd5pHz
        subject_person_id: p_AWbhYZkLYhbdEbEhHLDAmo
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珵
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BHY5r59bQ1KAaNw6DZKHkz
          claim_id: c_TdFd4K91yAzUwM4nYd5pHz
          source_id: s_9wkhbtB644EY8bgftSADa7
          stance: supports
          locator: CBDB:263446
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（263446）
          source: &a1
            id: s_9wkhbtB644EY8bgftSADa7
            source_type: api_record
            title: 中国历代人物传记资料库：王珵（CBDB 263446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263446&o=json
            external_identifier: CBDB:263446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.624Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JmGnK5F32ZQiP34SJ8KaU1
        subject_person_id: p_AWbhYZkLYhbdEbEhHLDAmo
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珵，明人物。弘治三年進士，籍贯蓬萊。（中国历代人物传记资料库 CBDB 263446）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R0OQQfUklvmP-s2XP9JVUa
          claim_id: c_JmGnK5F32ZQiP34SJ8KaU1
          source_id: s_9wkhbtB644EY8bgftSADa7
          stance: supports
          locator: CBDB:263446
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VIB6OdBa5OJltgT1FffVaS
        subject_person_id: p_QC3b5ZQGaNmcoUA7fYYpNT
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_AWbhYZkLYhbdEbEhHLDAmo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gmBotybUwjGfTR9dwT2SEO
          claim_id: c_VIB6OdBa5OJltgT1FffVaS
          source_id: s_VcS_M5X2oTNyTLpB0uEWsP
          stance: supports
          locator: CBDB：兄弟 王瓚（200846）之父／母 王真
          quotation: null
          interpretation_note: 由兄弟关系推断：王珵 与 王瓚 为同胞（CBDB 记「兄」），王瓚 之父／母即 王珵 之父／母。
          source:
            id: s_VcS_M5X2oTNyTLpB0uEWsP
            source_type: api_record
            title: 中国历代人物传记资料库：王珵（CBDB 263446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263446&o=json
            external_identifier: CBDB:263446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_QC3b5ZQGaNmcoUA7fYYpNT
        status: active
        display_name: 王真
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_ZFfybsgvXXej_luM282NoL
        subject_person_id: p_AWbhYZkLYhbdEbEhHLDAmo
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_PzCR5khH48dxkyKzDoAsiq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QhBLACtErGxEJWJXjpOZvY
          claim_id: c_ZFfybsgvXXej_luM282NoL
          source_id: s_VcS_M5X2oTNyTLpB0uEWsP
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200846 王瓚）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VcS_M5X2oTNyTLpB0uEWsP
            source_type: api_record
            title: 中国历代人物传记资料库：王珵（CBDB 263446）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263446&o=json
            external_identifier: CBDB:263446
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_PzCR5khH48dxkyKzDoAsiq
        status: active
        display_name: 王瓚
        merged_into_person_id: null
---

# 王珵

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珵 | accepted |
| bio.summary | 王珵，明人物。弘治三年進士，籍贯蓬萊。（中国历代人物传记资料库 CBDB 263446） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_QC3b5ZQGaNmcoUA7fYYpNT | 王真 | accepted |
| other | p_PzCR5khH48dxkyKzDoAsiq | 王瓚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珵（CBDB 263446）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263446&o=json)
