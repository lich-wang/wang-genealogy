---
schema: wang-person/v1
id: p_zxJkBdw3CVNS2vAhFLXuF7
status: active
merged_into: null
display_name: 王紘
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gNcqJRdjMkocqyij6F1qKp
        subject_person_id: p_zxJkBdw3CVNS2vAhFLXuF7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_dqn58D2nNkG8bLYhAVNJ2G
          claim_id: c_gNcqJRdjMkocqyij6F1qKp
          source_id: s_wwAm2G3BocSkgJNMJbo8r4
          stance: supports
          locator: CBDB:260405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（260405）
          source: &a1
            id: s_wwAm2G3BocSkgJNMJbo8r4
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 260405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260405&o=json
            external_identifier: CBDB:260405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.508Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_CkG6tC9zT2BBk4KnbeY2W1
        subject_person_id: p_zxJkBdw3CVNS2vAhFLXuF7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紘，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260405）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R6fYg53pe_XkkSEBT3N7vm
          claim_id: c_CkG6tC9zT2BBk4KnbeY2W1
          source_id: s_wwAm2G3BocSkgJNMJbo8r4
          stance: supports
          locator: CBDB:260405
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6C0lsyPRqsdiwglUBHL-hW
        subject_person_id: p_v17Ui16KgEGN3E8zs7M4y6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_zxJkBdw3CVNS2vAhFLXuF7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_flR6PEB0Z5FnY8zAddr_uW
          claim_id: c_6C0lsyPRqsdiwglUBHL-hW
          source_id: s_tCl1NGErlKN3VaByHlekDx
          stance: supports
          locator: CBDB：兄弟 王約（126619）之父／母 王義
          quotation: null
          interpretation_note: 由兄弟关系推断：王紘 与 王約 为同胞（CBDB 记「兄」），王約 之父／母即 王紘 之父／母。
          source:
            id: s_tCl1NGErlKN3VaByHlekDx
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 260405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260405&o=json
            external_identifier: CBDB:260405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_v17Ui16KgEGN3E8zs7M4y6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_2_NC7m7gWMxkEYi2to3Or4
        subject_person_id: p_bkiJd7fMDoFB71EF4g2i5Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_zxJkBdw3CVNS2vAhFLXuF7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c9lGMOEuf7MksZMV7SRb8f
          claim_id: c_2_NC7m7gWMxkEYi2to3Or4
          source_id: s_tCl1NGErlKN3VaByHlekDx
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126619 王約）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_tCl1NGErlKN3VaByHlekDx
            source_type: api_record
            title: 中国历代人物传记资料库：王紘（CBDB 260405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260405&o=json
            external_identifier: CBDB:260405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_bkiJd7fMDoFB71EF4g2i5Z
        status: active
        display_name: 王約
        merged_into_person_id: null
---

# 王紘

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紘 | accepted |
| bio.summary | 王紘，明人物。成化二十三年進士，籍贯臨川。（中国历代人物传记资料库 CBDB 260405） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_v17Ui16KgEGN3E8zs7M4y6 | 王義 | accepted |
| other | p_bkiJd7fMDoFB71EF4g2i5Z | 王約 | accepted |

## 外部来源

- [中国历代人物传记资料库：王紘（CBDB 260405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=260405&o=json)
