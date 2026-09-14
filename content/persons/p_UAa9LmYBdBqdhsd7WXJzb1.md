---
schema: wang-person/v1
id: p_UAa9LmYBdBqdhsd7WXJzb1
status: active
merged_into: null
display_name: 王弘誥
cbdb_id: 331182
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hZFox3VPFdgALSeUTGj7Jj
        subject_person_id: p_UAa9LmYBdBqdhsd7WXJzb1
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘誥，明人物。嘉靖四十四年進士，籍贯定安。（中国历代人物传记资料库 CBDB 331182）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_e46auk-tfJJ0nfTYgeLbOZ
          claim_id: c_hZFox3VPFdgALSeUTGj7Jj
          source_id: s_Fjbaj2K7ZZUUkPdK6kW4AZ
          stance: supports
          locator: CBDB:331182
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Fjbaj2K7ZZUUkPdK6kW4AZ
            source_type: api_record
            title: 中国历代人物传记资料库：王弘誥（CBDB 331182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331182&o=json
            external_identifier: CBDB:331182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:07.614Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_t7iFHpFokMTwjGYwwTmkU3
        subject_person_id: p_UAa9LmYBdBqdhsd7WXJzb1
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弘誥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_w7u35DjUGu3zkdptomsQE6
          claim_id: c_t7iFHpFokMTwjGYwwTmkU3
          source_id: s_Fjbaj2K7ZZUUkPdK6kW4AZ
          stance: supports
          locator: CBDB:331182
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3901-4000）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Rh5NOdyh7Eu-Ssj0LjhP4c
        subject_person_id: p_cCJhqBHpoSnrc87c6Zt2oi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UAa9LmYBdBqdhsd7WXJzb1
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_TTsh7fdAJ_jdHNGaQgQ602
          claim_id: c_Rh5NOdyh7Eu-Ssj0LjhP4c
          source_id: s_t--RXMr0yRLbBWCvpo8SsV
          stance: supports
          locator: CBDB：兄弟 王弘誨（126486）之父／母 王允升
          quotation: null
          interpretation_note: 由兄弟关系推断：王弘誥 与 王弘誨 为同胞（CBDB 记「弟」），王弘誨 之父／母即 王弘誥 之父／母。
          source:
            id: s_t--RXMr0yRLbBWCvpo8SsV
            source_type: api_record
            title: 中国历代人物传记资料库：王弘誥（CBDB 331182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331182&o=json
            external_identifier: CBDB:331182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cCJhqBHpoSnrc87c6Zt2oi
        status: active
        display_name: 王允升
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_GFw-kW9akayEsyxiRsTS1K
        subject_person_id: p_UAa9LmYBdBqdhsd7WXJzb1
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_sZEnnJm6tMYD9G3rVKEL7w
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_M2xFvfzkMv8sVUCruUv2o4
          claim_id: c_GFw-kW9akayEsyxiRsTS1K
          source_id: s_t--RXMr0yRLbBWCvpo8SsV
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126486 王弘誨）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_t--RXMr0yRLbBWCvpo8SsV
            source_type: api_record
            title: 中国历代人物传记资料库：王弘誥（CBDB 331182）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331182&o=json
            external_identifier: CBDB:331182
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_sZEnnJm6tMYD9G3rVKEL7w
        status: active
        display_name: 王弘誨
        merged_into_person_id: null
---

# 王弘誥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弘誥，明人物。嘉靖四十四年進士，籍贯定安。（中国历代人物传记资料库 CBDB 331182） | accepted |
| name.primary | 王弘誥 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cCJhqBHpoSnrc87c6Zt2oi | 王允升 | accepted |
| other | p_sZEnnJm6tMYD9G3rVKEL7w | 王弘誨 | accepted |

## 外部来源

- [中国历代人物传记资料库：王弘誥（CBDB 331182）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=331182&o=json)
