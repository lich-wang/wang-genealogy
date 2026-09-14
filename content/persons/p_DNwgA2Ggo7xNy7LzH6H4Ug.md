---
schema: wang-person/v1
id: p_DNwgA2Ggo7xNy7LzH6H4Ug
status: active
merged_into: null
display_name: 王如化
cbdb_id: 336308
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_nSCdQocQzEVoA3wxy1U8td
        subject_person_id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336308）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_j-1M-_e9hc-9gpI4jSXugW
          claim_id: c_nSCdQocQzEVoA3wxy1U8td
          source_id: s_KXyQHPTdrNvx5yUQNBDnNQ
          stance: supports
          locator: CBDB:336308
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_KXyQHPTdrNvx5yUQNBDnNQ
            source_type: api_record
            title: 中国历代人物传记资料库：王如化（CBDB 336308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json
            external_identifier: CBDB:336308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_J8iXGEYBZ4VE65Mayg3hgN
        subject_person_id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王如化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_vDhLJa7KCBtg8KGzxt2J12
          claim_id: c_J8iXGEYBZ4VE65Mayg3hgN
          source_id: s_KXyQHPTdrNvx5yUQNBDnNQ
          stance: supports
          locator: CBDB:336308
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_cHY6FRxJKW-6KueSZycyW3
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t6JmAbFJuWqHRQbKMY4SJV
          claim_id: c_cHY6FRxJKW-6KueSZycyW3
          source_id: s_sr1UW7T3k4G9_tjT6yWuTz
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王如化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王如化 之父／母。
          source:
            id: s_sr1UW7T3k4G9_tjT6yWuTz
            source_type: api_record
            title: 中国历代人物传记资料库：王如化（CBDB 336308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json
            external_identifier: CBDB:336308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3NLrzrSSHKzjmRv78pJAPK
        status: active
        display_name: 王士逵
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_txDkmpqLyNt6UMYWcCURk7
        subject_person_id: p_DNwgA2Ggo7xNy7LzH6H4Ug
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_viaM6m196hS8EVYS6L8gg8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mxWLAmO87SaEUVjWteBr7s
          claim_id: c_txDkmpqLyNt6UMYWcCURk7
          source_id: s_sr1UW7T3k4G9_tjT6yWuTz
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sr1UW7T3k4G9_tjT6yWuTz
            source_type: api_record
            title: 中国历代人物传记资料库：王如化（CBDB 336308）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json
            external_identifier: CBDB:336308
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_viaM6m196hS8EVYS6L8gg8
        status: active
        display_name: 王宣化
        merged_into_person_id: null
---

# 王如化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王如化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336308） | accepted |
| name.primary | 王如化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NLrzrSSHKzjmRv78pJAPK | 王士逵 | accepted |
| other | p_viaM6m196hS8EVYS6L8gg8 | 王宣化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王如化（CBDB 336308）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336308&o=json)
