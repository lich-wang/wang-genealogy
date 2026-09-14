---
schema: wang-person/v1
id: p_d6UDv6dAxjBQ8P1sMj6D6e
status: active
merged_into: null
display_name: 王昂
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_uE9vSLNdVUvtF4mQ82tDT9
        subject_person_id: p_d6UDv6dAxjBQ8P1sMj6D6e
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_mhKqPSPy5CfVrTZxTCvQzB
          claim_id: c_uE9vSLNdVUvtF4mQ82tDT9
          source_id: s_Scx7Ydivj7ErSSyAYk5h5W
          stance: supports
          locator: CBDB:264588
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（264588）
          source: &a1
            id: s_Scx7Ydivj7ErSSyAYk5h5W
            source_type: api_record
            title: 中国历代人物传记资料库：王昂（CBDB 264588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264588&o=json
            external_identifier: CBDB:264588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.647Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_QPv6cMYxTpk1MmUFdAEjeU
        subject_person_id: p_d6UDv6dAxjBQ8P1sMj6D6e
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昂，明人物。弘治六年進士，籍贯新都。（中国历代人物传记资料库 CBDB 264588）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_4QSJW8YQ9xbBbQGd82t50T
          claim_id: c_QPv6cMYxTpk1MmUFdAEjeU
          source_id: s_Scx7Ydivj7ErSSyAYk5h5W
          stance: supports
          locator: CBDB:264588
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_p7bV6mXM95MkOn4uY_R_ng
        subject_person_id: p_d6UDv6dAxjBQ8P1sMj6D6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_655CGkFBuWbBdZzbbcQcR6
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2okWWnj66_vTZbLh4F9BE0
          claim_id: c_p7bV6mXM95MkOn4uY_R_ng
          source_id: s_Scx7Ydivj7ErSSyAYk5h5W
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第二甲第七十八名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_655CGkFBuWbBdZzbbcQcR6
        status: active
        display_name: 王舜夫
        merged_into_person_id: null
    - claim:
        id: c_UtYt-4jGTFay0VvhD5aJ2Z
        subject_person_id: p_d6UDv6dAxjBQ8P1sMj6D6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kCKTJGBnGvZ8D1WDLCAAVq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1W3cxx_7qY156-QzUjiYeO
          claim_id: c_UtYt-4jGTFay0VvhD5aJ2Z
          source_id: s_wJixUNW1oKshSCDNoiQaTg
          stance: supports
          locator: CBDB：兄弟 王舜夫（200919）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王禹夫 与 王舜夫 为同胞（CBDB 记「兄」），王舜夫 之父／母即 王禹夫 之父／母。
          source:
            id: s_wJixUNW1oKshSCDNoiQaTg
            source_type: api_record
            title: 中国历代人物传记资料库：王禹夫（CBDB 264591）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264591&o=json
            external_identifier: CBDB:264591
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_kCKTJGBnGvZ8D1WDLCAAVq
        status: active
        display_name: 王禹夫
        merged_into_person_id: null
    - claim:
        id: c_r09E0vejTEgtE7FRSRuZGB
        subject_person_id: p_d6UDv6dAxjBQ8P1sMj6D6e
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nQuut1g1ouB5gnHvQKaVjQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JBCdS-wtjSv45818wFxphf
          claim_id: c_r09E0vejTEgtE7FRSRuZGB
          source_id: s_QPP6rvgN-CMswKnMEOpCuI
          stance: supports
          locator: CBDB：兄弟 王舜夫（200919）之父／母 王昂
          quotation: null
          interpretation_note: 由兄弟关系推断：王湯夫 与 王舜夫 为同胞（CBDB 记「兄」），王舜夫 之父／母即 王湯夫 之父／母。
          source:
            id: s_QPP6rvgN-CMswKnMEOpCuI
            source_type: api_record
            title: 中国历代人物传记资料库：王湯夫（CBDB 264593）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264593&o=json
            external_identifier: CBDB:264593
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_nQuut1g1ouB5gnHvQKaVjQ
        status: active
        display_name: 王湯夫
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昂 | accepted |
| bio.summary | 王昂，明人物。弘治六年進士，籍贯新都。（中国历代人物传记资料库 CBDB 264588） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_655CGkFBuWbBdZzbbcQcR6 | 王舜夫 | accepted |
| children | p_kCKTJGBnGvZ8D1WDLCAAVq | 王禹夫 | accepted |
| children | p_nQuut1g1ouB5gnHvQKaVjQ | 王湯夫 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昂（CBDB 264588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264588&o=json)
- [中国历代人物传记资料库：王湯夫（CBDB 264593）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264593&o=json)
- [中国历代人物传记资料库：王禹夫（CBDB 264591）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264591&o=json)
