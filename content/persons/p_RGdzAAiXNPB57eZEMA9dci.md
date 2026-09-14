---
schema: wang-person/v1
id: p_RGdzAAiXNPB57eZEMA9dci
status: active
merged_into: null
display_name: 王之材
cbdb_id: 223428
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_rJLRRy7dSuWH3PrLMpN5oQ
        subject_person_id: p_RGdzAAiXNPB57eZEMA9dci
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之材，明人物。萬曆十一年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 223428）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Ob33sMUawDZngxqOQFvmDZ
          claim_id: c_rJLRRy7dSuWH3PrLMpN5oQ
          source_id: s_XEjrTshG8T9dFq7oHMRsyd
          stance: supports
          locator: CBDB:223428
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_XEjrTshG8T9dFq7oHMRsyd
            source_type: api_record
            title: 中国历代人物传记资料库：王之材（CBDB 223428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223428&o=json
            external_identifier: CBDB:223428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:57.241Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_iXt2Tf6Z6hP674tM6uF6Ly
        subject_person_id: p_RGdzAAiXNPB57eZEMA9dci
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王之材
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iGJRw42nr1jQj3HyDu2FNA
          claim_id: c_iXt2Tf6Z6hP674tM6uF6Ly
          source_id: s_XEjrTshG8T9dFq7oHMRsyd
          stance: supports
          locator: CBDB:223428
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2601-2700）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_W4OYkodGGe0ypSV_1-1peN
        subject_person_id: p_jEBuZsCrqAXDchh52wkHw1
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RGdzAAiXNPB57eZEMA9dci
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7jqwPzuUKxo0RlLaDvByMp
          claim_id: c_W4OYkodGGe0ypSV_1-1peN
          source_id: s_8YGgHBDie1A9AdQ3QwiFbV
          stance: supports
          locator: CBDB：兄弟 王之棟（206799）之父／母 王克慎
          quotation: null
          interpretation_note: 由兄弟关系推断：王之材 与 王之棟 为同胞（CBDB 记「兄」），王之棟 之父／母即 王之材 之父／母。
          source:
            id: s_8YGgHBDie1A9AdQ3QwiFbV
            source_type: api_record
            title: 中国历代人物传记资料库：王之材（CBDB 223428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223428&o=json
            external_identifier: CBDB:223428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_jEBuZsCrqAXDchh52wkHw1
        status: active
        display_name: 王克慎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_k0s-3XMjc3AdCXTagB52H9
        subject_person_id: p_3D1ztFEygAVyyfATLEVR1H
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_RGdzAAiXNPB57eZEMA9dci
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ausYJ5JJC2hMI2EFSs86xM
          claim_id: c_k0s-3XMjc3AdCXTagB52H9
          source_id: s_8YGgHBDie1A9AdQ3QwiFbV
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 206799 王之棟）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_8YGgHBDie1A9AdQ3QwiFbV
            source_type: api_record
            title: 中国历代人物传记资料库：王之材（CBDB 223428）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223428&o=json
            external_identifier: CBDB:223428
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3D1ztFEygAVyyfATLEVR1H
        status: active
        display_name: 王之棟
        merged_into_person_id: null
---

# 王之材

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王之材，明人物。萬曆十一年進士，籍贯寧晉。（中国历代人物传记资料库 CBDB 223428） | accepted |
| name.primary | 王之材 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_jEBuZsCrqAXDchh52wkHw1 | 王克慎 | accepted |
| other | p_3D1ztFEygAVyyfATLEVR1H | 王之棟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王之材（CBDB 223428）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=223428&o=json)
