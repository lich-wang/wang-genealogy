---
schema: wang-person/v1
id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
status: active
merged_into: null
display_name: 王永化
cbdb_id: 336314
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_a1Lg4X84Y8egfuEp1BABap
        subject_person_id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336314）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_AgoHdEN-2DUAYML3zL64fe
          claim_id: c_a1Lg4X84Y8egfuEp1BABap
          source_id: s_Xpw8593YbttT8B6BiL3mGo
          stance: supports
          locator: CBDB:336314
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Xpw8593YbttT8B6BiL3mGo
            source_type: api_record
            title: 中国历代人物传记资料库：王永化（CBDB 336314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json
            external_identifier: CBDB:336314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:08.348Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_tRS6xZQ1Hvp3pKURMf5C1t
        subject_person_id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王永化
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ovXJwLKU25CfsVS62gCsp2
          claim_id: c_tRS6xZQ1Hvp3pKURMf5C1t
          source_id: s_Xpw8593YbttT8B6BiL3mGo
          stance: supports
          locator: CBDB:336314
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（4001-4100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_VYlWTRB9K_I55wThisJdQC
        subject_person_id: p_3NLrzrSSHKzjmRv78pJAPK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AeWTJP-0V4Q8GxwE4Vh4Ha
          claim_id: c_VYlWTRB9K_I55wThisJdQC
          source_id: s_IdJzQ0heBhdhS4tjFWPMtd
          stance: supports
          locator: CBDB：兄弟 王宣化（205636）之父／母 王士逵
          quotation: null
          interpretation_note: 由兄弟关系推断：王永化 与 王宣化 为同胞（CBDB 记「兄」），王宣化 之父／母即 王永化 之父／母。
          source:
            id: s_IdJzQ0heBhdhS4tjFWPMtd
            source_type: api_record
            title: 中国历代人物传记资料库：王永化（CBDB 336314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json
            external_identifier: CBDB:336314
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
        id: c_Q4aYq_g4kr4L1n05vRsQdu
        subject_person_id: p_Z7ZY6f1BLeHfACq1Q6k7Y7
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
        - id: cs_vcApLL6uaXzfpe8IUehYzS
          claim_id: c_Q4aYq_g4kr4L1n05vRsQdu
          source_id: s_IdJzQ0heBhdhS4tjFWPMtd
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 205636 王宣化）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_IdJzQ0heBhdhS4tjFWPMtd
            source_type: api_record
            title: 中国历代人物传记资料库：王永化（CBDB 336314）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json
            external_identifier: CBDB:336314
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_viaM6m196hS8EVYS6L8gg8
        status: active
        display_name: 王宣化
        merged_into_person_id: null
---

# 王永化

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王永化，明人物。隆慶二年進士，籍贯淄川。（中国历代人物传记资料库 CBDB 336314） | accepted |
| name.primary | 王永化 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3NLrzrSSHKzjmRv78pJAPK | 王士逵 | accepted |
| other | p_viaM6m196hS8EVYS6L8gg8 | 王宣化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王永化（CBDB 336314）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=336314&o=json)
