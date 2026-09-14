---
schema: wang-person/v1
id: p_BQysQ4M7AfMq9vujKpVLj4
status: active
merged_into: null
display_name: 王民獻
cbdb_id: 210122
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NJMmQ8fdvtjNqF735ZSFgN
        subject_person_id: p_BQysQ4M7AfMq9vujKpVLj4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民獻，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210122）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_PFYhk6mUiTOowydclugq7K
          claim_id: c_NJMmQ8fdvtjNqF735ZSFgN
          source_id: s_kvYGBqZ7iLx863iryo61FL
          stance: supports
          locator: CBDB:210122
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kvYGBqZ7iLx863iryo61FL
            source_type: api_record
            title: 中国历代人物传记资料库：王民獻（CBDB 210122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json
            external_identifier: CBDB:210122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:55.593Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_BtwxcRq1oGV4wVcPiCd2pe
        subject_person_id: p_BQysQ4M7AfMq9vujKpVLj4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王民獻
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Mp6RACH8S1gMDboETS568v
          claim_id: c_BtwxcRq1oGV4wVcPiCd2pe
          source_id: s_kvYGBqZ7iLx863iryo61FL
          stance: supports
          locator: CBDB:210122
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2401-2500）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_0zF8rJnv7AmtRT7VUset50
        subject_person_id: p_THa8fUajs7gLagomkz7Gpb
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_BQysQ4M7AfMq9vujKpVLj4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GxbrlInNSaHIuj8elEpFwJ
          claim_id: c_0zF8rJnv7AmtRT7VUset50
          source_id: s_LMemHArGlvOIsw0SGe7cme
          stance: supports
          locator: CBDB：兄弟 王民順（205877）之父／母 王勑
          quotation: null
          interpretation_note: 由兄弟关系推断：王民獻 与 王民順 为同胞（CBDB 记「弟」），王民順 之父／母即 王民獻 之父／母。
          source:
            id: s_LMemHArGlvOIsw0SGe7cme
            source_type: api_record
            title: 中国历代人物传记资料库：王民獻（CBDB 210122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json
            external_identifier: CBDB:210122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_THa8fUajs7gLagomkz7Gpb
        status: active
        display_name: 王勑
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_fuokqVmEVnQNYUiPlhZCxo
        subject_person_id: p_BQysQ4M7AfMq9vujKpVLj4
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_j9BHN5bLCRAdnEfQP7Yp6q
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IzhtkpfSg4hLWnkAn25YKg
          claim_id: c_fuokqVmEVnQNYUiPlhZCxo
          source_id: s_LMemHArGlvOIsw0SGe7cme
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 205877 王民順）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LMemHArGlvOIsw0SGe7cme
            source_type: api_record
            title: 中国历代人物传记资料库：王民獻（CBDB 210122）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json
            external_identifier: CBDB:210122
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_j9BHN5bLCRAdnEfQP7Yp6q
        status: active
        display_name: 王民順
        merged_into_person_id: null
---

# 王民獻

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王民獻，明人物。隆慶五年進士，籍贯金谿。（中国历代人物传记资料库 CBDB 210122） | accepted |
| name.primary | 王民獻 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_THa8fUajs7gLagomkz7Gpb | 王勑 | accepted |
| other | p_j9BHN5bLCRAdnEfQP7Yp6q | 王民順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王民獻（CBDB 210122）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=210122&o=json)
