---
schema: wang-person/v1
id: p_KrkcMBUwoQAFc2edZWGbBh
status: active
merged_into: null
display_name: 王希範
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kce55qX8HxQYeSE4zxd9sD
        subject_person_id: p_KrkcMBUwoQAFc2edZWGbBh
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希範
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Ea6Q6EJfk9VnA9SeA6DHr3
          claim_id: c_kce55qX8HxQYeSE4zxd9sD
          source_id: s_DWELMp6hTJDjFiePAK4GEE
          stance: supports
          locator: CBDB:13795
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（13795）
          source: &a1
            id: s_DWELMp6hTJDjFiePAK4GEE
            source_type: api_record
            title: 中国历代人物传记资料库：王希範（CBDB 13795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json
            external_identifier: CBDB:13795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.630Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NFLN8HgTZbSM24wDCdCq6N
        subject_person_id: p_KrkcMBUwoQAFc2edZWGbBh
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希範，宋人物。籍贯開封，曾任如京副使。（中国历代人物传记资料库 CBDB 13795）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dGh4FilO06NXc623uP39sn
          claim_id: c_NFLN8HgTZbSM24wDCdCq6N
          source_id: s_DWELMp6hTJDjFiePAK4GEE
          stance: supports
          locator: CBDB:13795
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_DEthcEf1JG7SJea16WzpLA
        subject_person_id: p_F5MupchTBq58jWiQDPz1tE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KrkcMBUwoQAFc2edZWGbBh
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eh8cMppXYsw-cwN_Z0HgzB
          claim_id: c_DEthcEf1JG7SJea16WzpLA
          source_id: s_jGm5MAeMsbMIblY_-hIEHX
          stance: supports
          locator: CBDB 亲属：父（KinPerson 8149）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_jGm5MAeMsbMIblY_-hIEHX
            source_type: api_record
            title: 中国历代人物传记资料库：王希範（CBDB 13795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json
            external_identifier: CBDB:13795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_F5MupchTBq58jWiQDPz1tE
        status: active
        display_name: 王顯
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_PIBBEVZtl03omhqG8MJsa3
        subject_person_id: p_KrkcMBUwoQAFc2edZWGbBh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_eGwj2kV1qTWNvDXuDqBhQ5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5n4eC1IPdZ6GxZ9bUQxUIs
          claim_id: c_PIBBEVZtl03omhqG8MJsa3
          source_id: s_jGm5MAeMsbMIblY_-hIEHX
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 13794 王希逸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_jGm5MAeMsbMIblY_-hIEHX
            source_type: api_record
            title: 中国历代人物传记资料库：王希範（CBDB 13795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json
            external_identifier: CBDB:13795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_eGwj2kV1qTWNvDXuDqBhQ5
        status: active
        display_name: 王希逸
        merged_into_person_id: null
---

# 王希範

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王希範 | accepted |
| bio.summary | 王希範，宋人物。籍贯開封，曾任如京副使。（中国历代人物传记资料库 CBDB 13795） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_F5MupchTBq58jWiQDPz1tE | 王顯 | accepted |
| other | p_eGwj2kV1qTWNvDXuDqBhQ5 | 王希逸 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希範（CBDB 13795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=13795&o=json)
