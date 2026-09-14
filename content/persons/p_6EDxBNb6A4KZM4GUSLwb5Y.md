---
schema: wang-person/v1
id: p_6EDxBNb6A4KZM4GUSLwb5Y
status: active
merged_into: null
display_name: 王穹
cbdb_id: 313621
revision: 4
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZQEjBvcS7uXQLBfaqQZH1y
        subject_person_id: p_6EDxBNb6A4KZM4GUSLwb5Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穹，明人物。嘉靖二十九年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 313621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Yu8zwHXFQdX7MXEgryenM5
          claim_id: c_ZQEjBvcS7uXQLBfaqQZH1y
          source_id: s_sgFVx5SeDJ589PZCLwKjSP
          stance: supports
          locator: CBDB:313621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_sgFVx5SeDJ589PZCLwKjSP
            source_type: api_record
            title: 中国历代人物传记资料库：王穹（CBDB 313621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313621&o=json
            external_identifier: CBDB:313621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_w3RvKrQmbN2j9CH9gjDuFj
        subject_person_id: p_6EDxBNb6A4KZM4GUSLwb5Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王穹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_q58tJVeuaoHATJg1rbkUs7
          claim_id: c_w3RvKrQmbN2j9CH9gjDuFj
          source_id: s_sgFVx5SeDJ589PZCLwKjSP
          stance: supports
          locator: CBDB:313621
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3701-3800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_d-RMlzuKBKT431jpIMLMGU
        subject_person_id: p_6EDxBNb6A4KZM4GUSLwb5Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DHmm96wyqH3FThEZbr7NNh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xbJablzF53L5MW6w0OUY4e
          claim_id: c_d-RMlzuKBKT431jpIMLMGU
          source_id: s_sgFVx5SeDJ589PZCLwKjSP
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十五名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_sgFVx5SeDJ589PZCLwKjSP
            source_type: api_record
            title: 中国历代人物传记资料库：王穹（CBDB 313621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313621&o=json
            external_identifier: CBDB:313621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:06.030Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_DHmm96wyqH3FThEZbr7NNh
        status: active
        display_name: 王應顯
        merged_into_person_id: null
    - claim:
        id: c_JKkeUevDsRUrO3-BIfYKoQ
        subject_person_id: p_6EDxBNb6A4KZM4GUSLwb5Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_NJvWzmsg4zfJ7tYdYWkJP5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7do7gLh-DWDtkLJEkmnV-H
          claim_id: c_JKkeUevDsRUrO3-BIfYKoQ
          source_id: s_zjtEOUkG3pxDRZPJNYhqoV
          stance: supports
          locator: CBDB：兄弟 王應顯（204039）之父／母 王穹
          quotation: null
          interpretation_note: 由兄弟关系推断：王應紀 与 王應顯 为同胞（CBDB 记「兄」），王應顯 之父／母即 王應紀 之父／母。
          source:
            id: s_zjtEOUkG3pxDRZPJNYhqoV
            source_type: api_record
            title: 中国历代人物传记资料库：王應紀（CBDB 313624）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313624&o=json
            external_identifier: CBDB:313624
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_NJvWzmsg4zfJ7tYdYWkJP5
        status: active
        display_name: 王應紀
        merged_into_person_id: null
    - claim:
        id: c_teacJfRBcNbvkGgTjALO0L
        subject_person_id: p_6EDxBNb6A4KZM4GUSLwb5Y
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nmpajcd6h8JuDaduMv9fKQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CPJ1CG-gcxL4JZwZ0t-tP9
          claim_id: c_teacJfRBcNbvkGgTjALO0L
          source_id: s_BGT3DczIXgSA9_TeqpnTAo
          stance: supports
          locator: CBDB：兄弟 王應顯（204039）之父／母 王穹
          quotation: null
          interpretation_note: 由兄弟关系推断：王應琮 与 王應顯 为同胞（CBDB 记「兄」），王應顯 之父／母即 王應琮 之父／母。
          source:
            id: s_BGT3DczIXgSA9_TeqpnTAo
            source_type: api_record
            title: 中国历代人物传记资料库：王應琮（CBDB 313625）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313625&o=json
            external_identifier: CBDB:313625
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nmpajcd6h8JuDaduMv9fKQ
        status: active
        display_name: 王應琮
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王穹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王穹，明人物。嘉靖二十九年進士，籍贯漳浦。（中国历代人物传记资料库 CBDB 313621） | accepted |
| name.primary | 王穹 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_DHmm96wyqH3FThEZbr7NNh | 王應顯 | accepted |
| children | p_NJvWzmsg4zfJ7tYdYWkJP5 | 王應紀 | accepted |
| children | p_Nmpajcd6h8JuDaduMv9fKQ | 王應琮 | accepted |

## 外部来源

- [中国历代人物传记资料库：王穹（CBDB 313621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313621&o=json)
- [中国历代人物传记资料库：王應琮（CBDB 313625）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313625&o=json)
- [中国历代人物传记资料库：王應紀（CBDB 313624）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313624&o=json)
