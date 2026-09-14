---
schema: wang-person/v1
id: p_Y39RCaP94GU9ZUQKggCsWM
status: active
merged_into: null
display_name: 王繼宗
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DXVNAojMoJWsDEyyK9yLvj
        subject_person_id: p_Y39RCaP94GU9ZUQKggCsWM
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼宗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_izCVZPHSYFhod3NEC3YxcH
          claim_id: c_DXVNAojMoJWsDEyyK9yLvj
          source_id: s_CP8NAHzV6UBje4L4GvXc3X
          stance: supports
          locator: CBDB:281266
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（281266）
          source: &a1
            id: s_CP8NAHzV6UBje4L4GvXc3X
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 281266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281266&o=json
            external_identifier: CBDB:281266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L2gDEaxgZy9zZRmZdkgNpD
        subject_person_id: p_Y39RCaP94GU9ZUQKggCsWM
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王繼宗，明人物。正德十二年進士，籍贯固安，曾任百戶。（中国历代人物传记资料库 CBDB 281266）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W9VL8SvO8nA7fkvPoUbcRb
          claim_id: c_L2gDEaxgZy9zZRmZdkgNpD
          source_id: s_CP8NAHzV6UBje4L4GvXc3X
          stance: supports
          locator: CBDB:281266
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YcTMbIq27Zy98XTqXdUuhC
        subject_person_id: p_qEzMiRzsrE1MGWNCLuPUfF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Y39RCaP94GU9ZUQKggCsWM
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c0PYILObfOCHuChgaip7tQ
          claim_id: c_YcTMbIq27Zy98XTqXdUuhC
          source_id: s_v1pblyyPBSIrhlhlQoFizD
          stance: supports
          locator: CBDB：兄弟 王正宗（201966）之父／母 王澍
          quotation: null
          interpretation_note: 由兄弟关系推断：王繼宗 与 王正宗 为同胞（CBDB 记「弟」），王正宗 之父／母即 王繼宗 之父／母。
          source:
            id: s_v1pblyyPBSIrhlhlQoFizD
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 281266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281266&o=json
            external_identifier: CBDB:281266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qEzMiRzsrE1MGWNCLuPUfF
        status: active
        display_name: 王澍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_anVmA_0844lOaGbbXKPEf7
        subject_person_id: p_HW595LoSX5sZYxTZGrBbPN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Y39RCaP94GU9ZUQKggCsWM
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eBvYu6m05qRC9TW3uSe7yf
          claim_id: c_anVmA_0844lOaGbbXKPEf7
          source_id: s_v1pblyyPBSIrhlhlQoFizD
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201966 王正宗）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_v1pblyyPBSIrhlhlQoFizD
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 281266）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281266&o=json
            external_identifier: CBDB:281266
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_HW595LoSX5sZYxTZGrBbPN
        status: active
        display_name: 王正宗
        merged_into_person_id: null
---

# 王繼宗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王繼宗 | accepted |
| bio.summary | 王繼宗，明人物。正德十二年進士，籍贯固安，曾任百戶。（中国历代人物传记资料库 CBDB 281266） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qEzMiRzsrE1MGWNCLuPUfF | 王澍 | accepted |
| other | p_HW595LoSX5sZYxTZGrBbPN | 王正宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王繼宗（CBDB 281266）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=281266&o=json)
