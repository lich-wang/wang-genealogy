---
schema: wang-person/v1
id: p_D3zLoGJHryvUYtjxdHz9Wz
status: active
merged_into: null
display_name: 王同升
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nVZo2hxFzhKymRnq6cw9Em
        subject_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同升
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nay2z7QMawE6MxFwaJJp5n
          claim_id: c_nVZo2hxFzhKymRnq6cw9Em
          source_id: s_D3X7CL2nxD1K34b2N3o233
          stance: supports
          locator: CBDB:327389
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（327389）
          source: &a1
            id: s_D3X7CL2nxD1K34b2N3o233
            source_type: api_record
            title: 中国历代人物传记资料库：王同升（CBDB 327389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json
            external_identifier: CBDB:327389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.247Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L5f6bLz26D7rwiTPTJND2C
        subject_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王同升，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327389）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_CFit9ITy9ahkwBtidfiDIN
          claim_id: c_L5f6bLz26D7rwiTPTJND2C
          source_id: s_D3X7CL2nxD1K34b2N3o233
          stance: supports
          locator: CBDB:327389
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_yY3yiUwLX_c_kJALHN6IRj
        subject_person_id: p_A2Zw5HgNNKQfknjQ8rX9z5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0v4nTnE527mWX89vFlvi-7
          claim_id: c_yY3yiUwLX_c_kJALHN6IRj
          source_id: s_VO0ZL7GQebE4ieYJC1FB7z
          stance: supports
          locator: CBDB：兄弟 王同道（205031）之父／母 王廷槐
          quotation: null
          interpretation_note: 由兄弟关系推断：王同升 与 王同道 为同胞（CBDB 记「弟」），王同道 之父／母即 王同升 之父／母。
          source:
            id: s_VO0ZL7GQebE4ieYJC1FB7z
            source_type: api_record
            title: 中国历代人物传记资料库：王同升（CBDB 327389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json
            external_identifier: CBDB:327389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_A2Zw5HgNNKQfknjQ8rX9z5
        status: active
        display_name: 王廷槐
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_EklKzTEMvcJBUYLu3yL6aW
        subject_person_id: p_D3zLoGJHryvUYtjxdHz9Wz
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_DpH4HNkjrsP3PNvkueYKFC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aPnHlhayx3Z_dD0LWDsXs9
          claim_id: c_EklKzTEMvcJBUYLu3yL6aW
          source_id: s_VO0ZL7GQebE4ieYJC1FB7z
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205031 王同道）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_VO0ZL7GQebE4ieYJC1FB7z
            source_type: api_record
            title: 中国历代人物传记资料库：王同升（CBDB 327389）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json
            external_identifier: CBDB:327389
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_DpH4HNkjrsP3PNvkueYKFC
        status: active
        display_name: 王同道
        merged_into_person_id: null
---

# 王同升

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王同升 | accepted |
| bio.summary | 王同升，明人物。嘉靖四十一年進士，籍贯黃岡。（中国历代人物传记资料库 CBDB 327389） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_A2Zw5HgNNKQfknjQ8rX9z5 | 王廷槐 | accepted |
| other | p_DpH4HNkjrsP3PNvkueYKFC | 王同道 | accepted |

## 外部来源

- [中国历代人物传记资料库：王同升（CBDB 327389）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=327389&o=json)
