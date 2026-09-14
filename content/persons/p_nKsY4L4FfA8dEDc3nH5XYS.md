---
schema: wang-person/v1
id: p_nKsY4L4FfA8dEDc3nH5XYS
status: active
merged_into: null
display_name: 王有道
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fP6iyJJbzA5NCYe9AY6u7t
        subject_person_id: p_nKsY4L4FfA8dEDc3nH5XYS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有道
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7N1E6sEKsU9LpQRFNSuaCE
          claim_id: c_fP6iyJJbzA5NCYe9AY6u7t
          source_id: s_M4hT69LR6b15KgtreQXiQe
          stance: supports
          locator: CBDB:309079
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（309079）
          source: &a1
            id: s_M4hT69LR6b15KgtreQXiQe
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 309079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json
            external_identifier: CBDB:309079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.805Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LaHU2CmYqygUdyPz97KFsb
        subject_person_id: p_nKsY4L4FfA8dEDc3nH5XYS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王有道，明人物。嘉靖二十六年進士，籍贯黔陽。（中国历代人物传记资料库 CBDB 309079）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs__e21J6FTSG5CnvK4MQVNh0
          claim_id: c_LaHU2CmYqygUdyPz97KFsb
          source_id: s_M4hT69LR6b15KgtreQXiQe
          stance: supports
          locator: CBDB:309079
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wsI02a1JT5cQD125ZukJMP
        subject_person_id: p_XiFFgCxGPLXnJMQFHkL5MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nKsY4L4FfA8dEDc3nH5XYS
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yAIwbEVCkEeSzJFIs5cUI2
          claim_id: c_wsI02a1JT5cQD125ZukJMP
          source_id: s_2hazCDN3yDeSey7hXQBTaG
          stance: supports
          locator: CBDB：兄弟 王有為（203722）之父／母 王鵬
          quotation: null
          interpretation_note: 由兄弟关系推断：王有道 与 王有為 为同胞（CBDB 记「兄」），王有為 之父／母即 王有道 之父／母。
          source:
            id: s_2hazCDN3yDeSey7hXQBTaG
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 309079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json
            external_identifier: CBDB:309079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XiFFgCxGPLXnJMQFHkL5MX
        status: active
        display_name: 王鵬
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_xdePaHyOVuG6p54dFGsPDp
        subject_person_id: p_m1KPPjDFuB77sgosg8dB61
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_nKsY4L4FfA8dEDc3nH5XYS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Irvdkqx3ZTJvkLZQ1Ccvdu
          claim_id: c_xdePaHyOVuG6p54dFGsPDp
          source_id: s_2hazCDN3yDeSey7hXQBTaG
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 203722 王有為）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_2hazCDN3yDeSey7hXQBTaG
            source_type: api_record
            title: 中国历代人物传记资料库：王有道（CBDB 309079）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json
            external_identifier: CBDB:309079
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_m1KPPjDFuB77sgosg8dB61
        status: active
        display_name: 王有為
        merged_into_person_id: null
---

# 王有道

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王有道 | accepted |
| bio.summary | 王有道，明人物。嘉靖二十六年進士，籍贯黔陽。（中国历代人物传记资料库 CBDB 309079） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XiFFgCxGPLXnJMQFHkL5MX | 王鵬 | accepted |
| other | p_m1KPPjDFuB77sgosg8dB61 | 王有為 | accepted |

## 外部来源

- [中国历代人物传记资料库：王有道（CBDB 309079）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=309079&o=json)
