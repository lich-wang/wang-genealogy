---
schema: wang-person/v1
id: p_9xMBcMTmbpXrzbV1ZAH8Ph
status: active
merged_into: null
display_name: 王偃
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QNiPLjbQLFCsy4Wkk1r7Y7
        subject_person_id: p_9xMBcMTmbpXrzbV1ZAH8Ph
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_jG3UWpkttLwD21Lw8z49MX
          claim_id: c_QNiPLjbQLFCsy4Wkk1r7Y7
          source_id: s_zDuAUThrCSp62q8GEZCxJi
          stance: supports
          locator: CBDB:119752
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119752）
          source: &a1
            id: s_zDuAUThrCSp62q8GEZCxJi
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 119752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119752&o=json
            external_identifier: CBDB:119752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4yr8WHqyFvTVJRKJLG7TUA
        subject_person_id: p_9xMBcMTmbpXrzbV1ZAH8Ph
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王偃，史料所见人物。本项目依据《中国历代人物传记资料库：王偃（CBDB 119752）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e24TnBK5UKdXv5iBlSlLvB
          claim_id: c_4yr8WHqyFvTVJRKJLG7TUA
          source_id: s_zDuAUThrCSp62q8GEZCxJi
          stance: supports
          locator: CBDB:119752
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_rChIl85D_6baZkvHI7FGhw
        subject_person_id: p_6R94tR4BFCymhDkQ193mDd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9xMBcMTmbpXrzbV1ZAH8Ph
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSIgZX7BT64eAk6RKDKvg6
          claim_id: c_rChIl85D_6baZkvHI7FGhw
          source_id: s_ccmkxs9SMr5J5IDUbgeAeN
          stance: supports
          locator: CBDB：兄弟 王侁（39569）之父／母 王朴
          quotation: null
          interpretation_note: 由兄弟关系推断：王偃 与 王侁 为同胞（CBDB 记「兄」），王侁 之父／母即 王偃 之父／母。
          source:
            id: s_ccmkxs9SMr5J5IDUbgeAeN
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 119752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119752&o=json
            external_identifier: CBDB:119752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6R94tR4BFCymhDkQ193mDd
        status: active
        display_name: 王朴
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_F93dVVtRqPMq0S0aB9snij
        subject_person_id: p_9xMBcMTmbpXrzbV1ZAH8Ph
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_bhAmYqEbUVVrFpdRH2MVYq
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YknZ1Mxjf5yCib6unG9oYH
          claim_id: c_F93dVVtRqPMq0S0aB9snij
          source_id: s_ccmkxs9SMr5J5IDUbgeAeN
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 39569 王侁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_ccmkxs9SMr5J5IDUbgeAeN
            source_type: api_record
            title: 中国历代人物传记资料库：王偃（CBDB 119752）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119752&o=json
            external_identifier: CBDB:119752
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bhAmYqEbUVVrFpdRH2MVYq
        status: active
        display_name: 王侁
        merged_into_person_id: null
---

# 王偃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王偃 | accepted |
| bio.summary | 王偃，史料所见人物。本项目依据《中国历代人物传记资料库：王偃（CBDB 119752）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6R94tR4BFCymhDkQ193mDd | 王朴 | accepted |
| other | p_bhAmYqEbUVVrFpdRH2MVYq | 王侁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王偃（CBDB 119752）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119752&o=json)
