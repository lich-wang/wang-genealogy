---
schema: wang-person/v1
id: p_J9zQk9yETuwFDgMrEDaD8Y
status: active
merged_into: null
display_name: 王武
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XaamyZ9iSEPU6jSMp6Y1SK
        subject_person_id: p_J9zQk9yETuwFDgMrEDaD8Y
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FGwH8W3jPASZYbpncF8V2B
          claim_id: c_XaamyZ9iSEPU6jSMp6Y1SK
          source_id: s_YfvJ4BMmEpCkSyHBFuVbjc
          stance: supports
          locator: CBDB:386295
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（386295）
          source: &a1
            id: s_YfvJ4BMmEpCkSyHBFuVbjc
            source_type: api_record
            title: 中国历代人物传记资料库：王武（CBDB 386295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386295&o=json
            external_identifier: CBDB:386295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.893Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_XD9hxFUgvuqy2EpNbZMgW3
        subject_person_id: p_J9zQk9yETuwFDgMrEDaD8Y
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王武，元人物。籍贯東陽。（中国历代人物传记资料库 CBDB 386295）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_9_czw3R5kVnLSshg3I2RQ1
          claim_id: c_XD9hxFUgvuqy2EpNbZMgW3
          source_id: s_YfvJ4BMmEpCkSyHBFuVbjc
          stance: supports
          locator: CBDB:386295
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_wLpstdmm8CsbTykF74zNMX
        subject_person_id: p_wKfvgdvNixuHKZaA84Vuyy
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_J9zQk9yETuwFDgMrEDaD8Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_C2TaZNNRkjUBIYRU59c5vz
          claim_id: c_wLpstdmm8CsbTykF74zNMX
          source_id: s_1wWeME5jExvZmOh8CFYuZT
          stance: supports
          locator: CBDB 亲属：父（KinPerson 38084）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_1wWeME5jExvZmOh8CFYuZT
            source_type: api_record
            title: 中国历代人物传记资料库：王武（CBDB 386295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386295&o=json
            external_identifier: CBDB:386295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wKfvgdvNixuHKZaA84Vuyy
        status: active
        display_name: 王桂
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sWOn7br6PCAs2z48yj6N1p
        subject_person_id: p_J9zQk9yETuwFDgMrEDaD8Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_qktwr4Cn2P87LKbqvyrRab
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_O8kp9DdxWloaXA1SSNl5uf
          claim_id: c_sWOn7br6PCAs2z48yj6N1p
          source_id: s_1wWeME5jExvZmOh8CFYuZT
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 386296 王復）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1wWeME5jExvZmOh8CFYuZT
            source_type: api_record
            title: 中国历代人物传记资料库：王武（CBDB 386295）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386295&o=json
            external_identifier: CBDB:386295
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qktwr4Cn2P87LKbqvyrRab
        status: active
        display_name: 王復
        merged_into_person_id: null
---

# 王武

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王武 | accepted |
| bio.summary | 王武，元人物。籍贯東陽。（中国历代人物传记资料库 CBDB 386295） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wKfvgdvNixuHKZaA84Vuyy | 王桂 | accepted |
| other | p_qktwr4Cn2P87LKbqvyrRab | 王復 | accepted |

## 外部来源

- [中国历代人物传记资料库：王武（CBDB 386295）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=386295&o=json)
