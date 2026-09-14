---
schema: wang-person/v1
id: p_a66XwJPN1SnGehtNYkmZT2
status: active
merged_into: null
display_name: 王元承
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qu538pgShbq1pc9wEEzeA6
        subject_person_id: p_a66XwJPN1SnGehtNYkmZT2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元承
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_aQBhve9EHBBAHZYHEyEqwC
          claim_id: c_qu538pgShbq1pc9wEEzeA6
          source_id: s_JLo5ixx5fyNai3G2AQUFgp
          stance: supports
          locator: CBDB:235479
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（235479）
          source: &a1
            id: s_JLo5ixx5fyNai3G2AQUFgp
            source_type: api_record
            title: 中国历代人物传记资料库：王元承（CBDB 235479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json
            external_identifier: CBDB:235479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.760Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_kcnKDY27J62vbHy9hACvu4
        subject_person_id: p_a66XwJPN1SnGehtNYkmZT2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元承，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235479）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_QGeqel-WpbMb3_-HUhQ87Y
          claim_id: c_kcnKDY27J62vbHy9hACvu4
          source_id: s_JLo5ixx5fyNai3G2AQUFgp
          stance: supports
          locator: CBDB:235479
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_N1l-G6sRwFetKOPOr95osl
        subject_person_id: p_5GoCZ6LMqwnyLpJJPbTAtp
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a66XwJPN1SnGehtNYkmZT2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_274pZVQymm01Uf965YTG3E
          claim_id: c_N1l-G6sRwFetKOPOr95osl
          source_id: s_lFfYfoTuV4RtjcOJVoSdzb
          stance: supports
          locator: CBDB：兄弟 王元爽（207767）之父／母 王溉槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王元承 与 王元爽 为同胞（CBDB 记「兄」），王元爽 之父／母即 王元承 之父／母。
          source:
            id: s_lFfYfoTuV4RtjcOJVoSdzb
            source_type: api_record
            title: 中国历代人物传记资料库：王元承（CBDB 235479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json
            external_identifier: CBDB:235479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_5GoCZ6LMqwnyLpJJPbTAtp
        status: active
        display_name: 王溉槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_emfonLxGoooyUtDnbHlUMC
        subject_person_id: p_a66XwJPN1SnGehtNYkmZT2
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hpsegmCooo9gAZbLr3f93A
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xlXs1NVr6Wo_GTYze09VUN
          claim_id: c_emfonLxGoooyUtDnbHlUMC
          source_id: s_lFfYfoTuV4RtjcOJVoSdzb
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207767 王元爽）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_lFfYfoTuV4RtjcOJVoSdzb
            source_type: api_record
            title: 中国历代人物传记资料库：王元承（CBDB 235479）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json
            external_identifier: CBDB:235479
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hpsegmCooo9gAZbLr3f93A
        status: active
        display_name: 王元爽
        merged_into_person_id: null
---

# 王元承

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元承 | accepted |
| bio.summary | 王元承，明人物。籍贯東光。（中国历代人物传记资料库 CBDB 235479） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5GoCZ6LMqwnyLpJJPbTAtp | 王溉槐 | accepted |
| other | p_hpsegmCooo9gAZbLr3f93A | 王元爽 | accepted |

## 外部来源

- [中国历代人物传记资料库：王元承（CBDB 235479）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235479&o=json)
