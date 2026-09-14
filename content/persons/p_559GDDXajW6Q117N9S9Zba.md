---
schema: wang-person/v1
id: p_559GDDXajW6Q117N9S9Zba
status: active
merged_into: null
display_name: 王備
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Eiu6b8j4u1Noa74aRB6W5j
        subject_person_id: p_559GDDXajW6Q117N9S9Zba
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王備
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_DkL5EuFvxrNVJaeqmEtvQK
          claim_id: c_Eiu6b8j4u1Noa74aRB6W5j
          source_id: s_RwZd5Z6QkBnDQB5UPD4ed1
          stance: supports
          locator: CBDB:119751
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（119751）
          source: &a1
            id: s_RwZd5Z6QkBnDQB5UPD4ed1
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 119751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119751&o=json
            external_identifier: CBDB:119751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.894Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_7UaoRbPDWGnvScviA8MxGQ
        subject_person_id: p_559GDDXajW6Q117N9S9Zba
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王備，史料所见人物。本项目依据《中国历代人物传记资料库：王備（CBDB 119751）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_syFeh9RBq9ewHssjabdzvB
          claim_id: c_7UaoRbPDWGnvScviA8MxGQ
          source_id: s_RwZd5Z6QkBnDQB5UPD4ed1
          stance: supports
          locator: CBDB:119751
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dWU-ly3jtLCAPD2x1gFgOH
        subject_person_id: p_6R94tR4BFCymhDkQ193mDd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_559GDDXajW6Q117N9S9Zba
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HrXTvcGseUxK7nATBBWQLI
          claim_id: c_dWU-ly3jtLCAPD2x1gFgOH
          source_id: s_pYrqRcwzyh78gendiWHnG4
          stance: supports
          locator: CBDB：兄弟 王侁（39569）之父／母 王朴
          quotation: null
          interpretation_note: 由兄弟关系推断：王備 与 王侁 为同胞（CBDB 记「兄」），王侁 之父／母即 王備 之父／母。
          source:
            id: s_pYrqRcwzyh78gendiWHnG4
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 119751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119751&o=json
            external_identifier: CBDB:119751
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
        id: c_8OUvNEHY9aaRxPsBeVYKxt
        subject_person_id: p_559GDDXajW6Q117N9S9Zba
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
        - id: cs_m3kpuUpJHAFZ_Z30n5Hpyf
          claim_id: c_8OUvNEHY9aaRxPsBeVYKxt
          source_id: s_pYrqRcwzyh78gendiWHnG4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 39569 王侁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_pYrqRcwzyh78gendiWHnG4
            source_type: api_record
            title: 中国历代人物传记资料库：王備（CBDB 119751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119751&o=json
            external_identifier: CBDB:119751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bhAmYqEbUVVrFpdRH2MVYq
        status: active
        display_name: 王侁
        merged_into_person_id: null
---

# 王備

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王備 | accepted |
| bio.summary | 王備，史料所见人物。本项目依据《中国历代人物传记资料库：王備（CBDB 119751）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6R94tR4BFCymhDkQ193mDd | 王朴 | accepted |
| other | p_bhAmYqEbUVVrFpdRH2MVYq | 王侁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王備（CBDB 119751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=119751&o=json)
