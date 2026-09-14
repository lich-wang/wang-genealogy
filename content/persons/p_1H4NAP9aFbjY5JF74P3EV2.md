---
schema: wang-person/v1
id: p_1H4NAP9aFbjY5JF74P3EV2
status: active
merged_into: null
display_name: 王椅
cbdb_id: 29211
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SeBBdKfzMQQJL8s1JedSid
        subject_person_id: p_1H4NAP9aFbjY5JF74P3EV2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椅，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29211）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_1DRUFpeFeecBcRFs3wdEvm
          claim_id: c_SeBBdKfzMQQJL8s1JedSid
          source_id: s_BWLx45j8Abg6FV5PzwGh1F
          stance: supports
          locator: CBDB:29211
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_BWLx45j8Abg6FV5PzwGh1F
            source_type: api_record
            title: 中国历代人物传记资料库：王椅（CBDB 29211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29211&o=json
            external_identifier: CBDB:29211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:45.019Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_QZvX1a7pwMgZpsKxv8c6br
        subject_person_id: p_1H4NAP9aFbjY5JF74P3EV2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王椅
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Xe5wcpw6vttHTBNnNzk9QM
          claim_id: c_QZvX1a7pwMgZpsKxv8c6br
          source_id: s_BWLx45j8Abg6FV5PzwGh1F
          stance: supports
          locator: CBDB:29211
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（1001-1100）｜历史性依据：CBDB 朝代 = 元
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b5xCuiLOSrX4vfo5QJkQ3V
        subject_person_id: p_XVBiZo5rSMuhnxXwBu1Wf6
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_1H4NAP9aFbjY5JF74P3EV2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_-Ur8PWd83pG4kvvil5s3ro
          claim_id: c_b5xCuiLOSrX4vfo5QJkQ3V
          source_id: s_UFwSfydA1L6KLcbXd9RJuB
          stance: supports
          locator: CBDB 亲属：父（KinPerson 29203）
          quotation: null
          interpretation_note: CBDB 直接记录的父／母关系。
          source:
            id: s_UFwSfydA1L6KLcbXd9RJuB
            source_type: api_record
            title: 中国历代人物传记资料库：王椅（CBDB 29211）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29211&o=json
            external_identifier: CBDB:29211
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_XVBiZo5rSMuhnxXwBu1Wf6
        status: active
        display_name: 王義
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王椅

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王椅，元人物。籍贯寧晉。（中国历代人物传记资料库 CBDB 29211） | accepted |
| name.primary | 王椅 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_XVBiZo5rSMuhnxXwBu1Wf6 | 王義 | accepted |

## 外部来源

- [中国历代人物传记资料库：王椅（CBDB 29211）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=29211&o=json)
