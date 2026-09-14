---
schema: wang-person/v1
id: p_LiqkD4efNPSpUEDn51rahu
status: active
merged_into: null
display_name: 王用榮
cbdb_id: 335481
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_J8NoEUviR6EAHoaUJqxF3x
        subject_person_id: p_LiqkD4efNPSpUEDn51rahu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用榮，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335481）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5k8lVJFn4M4h2Co7x4zYNK
          claim_id: c_J8NoEUviR6EAHoaUJqxF3x
          source_id: s_VgD2UCN4gG5LynacANKJtN
          stance: supports
          locator: CBDB:335481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_VgD2UCN4gG5LynacANKJtN
            source_type: api_record
            title: 中国历代人物传记资料库：王用榮（CBDB 335481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335481&o=json
            external_identifier: CBDB:335481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GeBsLbrRDh6QBBqxFyeJFp
        subject_person_id: p_LiqkD4efNPSpUEDn51rahu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王用榮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Z8mDDKBv9mstKye94nLLfA
          claim_id: c_GeBsLbrRDh6QBBqxFyeJFp
          source_id: s_VgD2UCN4gG5LynacANKJtN
          stance: supports
          locator: CBDB:335481
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_6oQDfFIyaNnIm55SLKeevr
        subject_person_id: p_wFTS9Dws5nhZvJ8pXQTGVc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LiqkD4efNPSpUEDn51rahu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gWNK9gqD3adIHigOwQQ7df
          claim_id: c_6oQDfFIyaNnIm55SLKeevr
          source_id: s_1nEFzAcaiDeqd0TG4tMhYe
          stance: supports
          locator: CBDB：兄弟 王用汲（126494）之父／母 王孫
          quotation: null
          interpretation_note: 由兄弟关系推断：王用榮 与 王用汲 为同胞（CBDB 记「弟」），王用汲 之父／母即 王用榮 之父／母。
          source:
            id: s_1nEFzAcaiDeqd0TG4tMhYe
            source_type: api_record
            title: 中国历代人物传记资料库：王用榮（CBDB 335481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335481&o=json
            external_identifier: CBDB:335481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_wFTS9Dws5nhZvJ8pXQTGVc
        status: active
        display_name: 王孫
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_d38x7IYROxsmNj9VRRubN-
        subject_person_id: p_BzK6A2uXvZyrjjgruuh1Qh
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_LiqkD4efNPSpUEDn51rahu
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eYgRLSFDE35557Zvo48Cms
          claim_id: c_d38x7IYROxsmNj9VRRubN-
          source_id: s_1nEFzAcaiDeqd0TG4tMhYe
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126494 王用汲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_1nEFzAcaiDeqd0TG4tMhYe
            source_type: api_record
            title: 中国历代人物传记资料库：王用榮（CBDB 335481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335481&o=json
            external_identifier: CBDB:335481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_BzK6A2uXvZyrjjgruuh1Qh
        status: active
        display_name: 王用汲
        merged_into_person_id: null
---

# 王用榮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王用榮，明人物。隆慶二年進士，籍贯晉江。（中国历代人物传记资料库 CBDB 335481） | accepted |
| name.primary | 王用榮 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_wFTS9Dws5nhZvJ8pXQTGVc | 王孫 | accepted |
| other | p_BzK6A2uXvZyrjjgruuh1Qh | 王用汲 | accepted |

## 外部来源

- [中国历代人物传记资料库：王用榮（CBDB 335481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335481&o=json)
