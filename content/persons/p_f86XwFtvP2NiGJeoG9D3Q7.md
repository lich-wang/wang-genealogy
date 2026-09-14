---
schema: wang-person/v1
id: p_f86XwFtvP2NiGJeoG9D3Q7
status: active
merged_into: null
display_name: 王宗彥
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qe6446dih8TbA5PKvex41G
        subject_person_id: p_f86XwFtvP2NiGJeoG9D3Q7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彥
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qPEkncNAhgqUojxVmWeUNd
          claim_id: c_qe6446dih8TbA5PKvex41G
          source_id: s_s46jaNoe6QhUmoN43NsiAP
          stance: supports
          locator: CBDB:226570
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（226570）
          source: &a1
            id: s_s46jaNoe6QhUmoN43NsiAP
            source_type: api_record
            title: 中国历代人物传记资料库：王宗彥（CBDB 226570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226570&o=json
            external_identifier: CBDB:226570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.466Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q5F4MwKojGWJutzrv4mZBh
        subject_person_id: p_f86XwFtvP2NiGJeoG9D3Q7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗彥，明人物。嘉靖二十六年進士，籍贯京山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 226570）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RRoa1LhM9KHdhZqHJLyo4u
          claim_id: c_Q5F4MwKojGWJutzrv4mZBh
          source_id: s_s46jaNoe6QhUmoN43NsiAP
          stance: supports
          locator: CBDB:226570
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_gPTEfX5Hwk8G5vob_8fZS-
        subject_person_id: p_qbWcARBwiNzFhFH7v3oZN5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f86XwFtvP2NiGJeoG9D3Q7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_94hoIKMAub3nEr6fJ6n4c6
          claim_id: c_gPTEfX5Hwk8G5vob_8fZS-
          source_id: s_RYguadk4eYvxUeCEBY6GHf
          stance: supports
          locator: CBDB：兄弟 王宗蓁（207031）之父／母 王桥
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗彥 与 王宗蓁 为同胞（CBDB 记「弟」），王宗蓁 之父／母即 王宗彥 之父／母。
          source:
            id: s_RYguadk4eYvxUeCEBY6GHf
            source_type: api_record
            title: 中国历代人物传记资料库：王宗彥（CBDB 226570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226570&o=json
            external_identifier: CBDB:226570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_qbWcARBwiNzFhFH7v3oZN5
        status: active
        display_name: 王桥
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_j7Wkg3j0e8p_b8uO7BaprI
        subject_person_id: p_YcgZGHB8b41JUksSD6hCbG
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_f86XwFtvP2NiGJeoG9D3Q7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yZRc9LpQOxkzwSoE6yt4ux
          claim_id: c_j7Wkg3j0e8p_b8uO7BaprI
          source_id: s_RYguadk4eYvxUeCEBY6GHf
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 207031 王宗蓁）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_RYguadk4eYvxUeCEBY6GHf
            source_type: api_record
            title: 中国历代人物传记资料库：王宗彥（CBDB 226570）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226570&o=json
            external_identifier: CBDB:226570
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_YcgZGHB8b41JUksSD6hCbG
        status: active
        display_name: 王宗蓁
        merged_into_person_id: null
---

# 王宗彥

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗彥 | accepted |
| bio.summary | 王宗彥，明人物。嘉靖二十六年進士，籍贯京山，入仕鄉貢舉人。（中国历代人物传记资料库 CBDB 226570） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_qbWcARBwiNzFhFH7v3oZN5 | 王桥 | accepted |
| other | p_YcgZGHB8b41JUksSD6hCbG | 王宗蓁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗彥（CBDB 226570）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=226570&o=json)
