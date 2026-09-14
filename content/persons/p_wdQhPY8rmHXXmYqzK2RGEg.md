---
schema: wang-person/v1
id: p_wdQhPY8rmHXXmYqzK2RGEg
status: active
merged_into: null
display_name: 王烜
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_V3JqJ41AQpuksjQBsLXCuB
        subject_person_id: p_wdQhPY8rmHXXmYqzK2RGEg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hJBn9Vc3pEa1J9FEZwF3KE
          claim_id: c_V3JqJ41AQpuksjQBsLXCuB
          source_id: s_qKf8xAdpNPUddJav6bzQiQ
          stance: supports
          locator: CBDB:249897
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（249897）
          source: &a1
            id: s_qKf8xAdpNPUddJav6bzQiQ
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 249897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json
            external_identifier: CBDB:249897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.198Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_FSWKbRp9Z2qiA7DQe7NPnr
        subject_person_id: p_wdQhPY8rmHXXmYqzK2RGEg
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王烜，明人物。成化十一年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 249897）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nZzdYpesL9WTmfFNhJiYbx
          claim_id: c_FSWKbRp9Z2qiA7DQe7NPnr
          source_id: s_qKf8xAdpNPUddJav6bzQiQ
          stance: supports
          locator: CBDB:249897
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oc6ZaRakIiE1RJwA09zBc8
        subject_person_id: p_FYj3Ea7MLmAqyMy1S17vQe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_wdQhPY8rmHXXmYqzK2RGEg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofyqhjm5U4oYCGSXjslwZL
          claim_id: c_oc6ZaRakIiE1RJwA09zBc8
          source_id: s_LGHsaZ8jEgsW5wLvhdItWY
          stance: supports
          locator: CBDB：兄弟 王弼（126707）之父／母 王秬
          quotation: null
          interpretation_note: 由兄弟关系推断：王烜 与 王弼 为同胞（CBDB 记「弟」），王弼 之父／母即 王烜 之父／母。
          source:
            id: s_LGHsaZ8jEgsW5wLvhdItWY
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 249897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json
            external_identifier: CBDB:249897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_FYj3Ea7MLmAqyMy1S17vQe
        status: active
        display_name: 王秬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_41fuPEogl7ILhEB_rurDBP
        subject_person_id: p_d2dNE2KPJApVMV192KKz46
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_wdQhPY8rmHXXmYqzK2RGEg
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oajudXWoro68U1ps7rVjFK
          claim_id: c_41fuPEogl7ILhEB_rurDBP
          source_id: s_LGHsaZ8jEgsW5wLvhdItWY
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126707 王弼）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LGHsaZ8jEgsW5wLvhdItWY
            source_type: api_record
            title: 中国历代人物传记资料库：王烜（CBDB 249897）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json
            external_identifier: CBDB:249897
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_d2dNE2KPJApVMV192KKz46
        status: active
        display_name: 王弼
        merged_into_person_id: null
---

# 王烜

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王烜 | accepted |
| bio.summary | 王烜，明人物。成化十一年進士，籍贯黃巖。（中国历代人物传记资料库 CBDB 249897） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FYj3Ea7MLmAqyMy1S17vQe | 王秬 | accepted |
| other | p_d2dNE2KPJApVMV192KKz46 | 王弼 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烜（CBDB 249897）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=249897&o=json)
