---
schema: wang-person/v1
id: p_A6QxRDJCCFin64JkXSiALi
status: active
merged_into: null
display_name: 王堂
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ggxcoqrjQBMH7dnPfbJ3s3
        subject_person_id: p_A6QxRDJCCFin64JkXSiALi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QXCBUZU5LZKDRmfEU2NwoK
          claim_id: c_ggxcoqrjQBMH7dnPfbJ3s3
          source_id: s_8dG3nRnqUgvytJ4LQxum8Y
          stance: supports
          locator: CBDB:286463
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（286463）
          source: &a1
            id: s_8dG3nRnqUgvytJ4LQxum8Y
            source_type: api_record
            title: 中国历代人物传记资料库：王堂（CBDB 286463）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286463&o=json
            external_identifier: CBDB:286463
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.239Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Q8487gR4P7GqKEJnQdJNHv
        subject_person_id: p_A6QxRDJCCFin64JkXSiALi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堂，明人物。永樂十年進士，籍贯諸暨。（中国历代人物传记资料库 CBDB 286463）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_elyuRh1FkA6Etj6lWJHNuW
          claim_id: c_Q8487gR4P7GqKEJnQdJNHv
          source_id: s_8dG3nRnqUgvytJ4LQxum8Y
          stance: supports
          locator: CBDB:286463
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_-4jDOYozrTQiuCe3fjyBDL
        subject_person_id: p_A6QxRDJCCFin64JkXSiALi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_rzQDNnMKSBa8nJNVJmieoC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Rfg7dccpzfCPfIzwOX_3Xq
          claim_id: c_-4jDOYozrTQiuCe3fjyBDL
          source_id: s_8dG3nRnqUgvytJ4LQxum8Y
          stance: supports
          locator: 永樂十年進士登科錄:一卷，第一甲第三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_rzQDNnMKSBa8nJNVJmieoC
        status: active
        display_name: 王鈺
        merged_into_person_id: null
    - claim:
        id: c_MgRnyxQWntgK5c4NlLdPiB
        subject_person_id: p_A6QxRDJCCFin64JkXSiALi
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_b22tKHuMcRLB93x2PpeEjm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Q6EVfIXHttHhx7owJ1bpWm
          claim_id: c_MgRnyxQWntgK5c4NlLdPiB
          source_id: s_hRRelSrri-eP-7_AWANIWv
          stance: supports
          locator: CBDB：兄弟 王鈺（126767）之父／母 王堂
          quotation: null
          interpretation_note: 由兄弟关系推断：王鍾 与 王鈺 为同胞（CBDB 记「弟」），王鈺 之父／母即 王鍾 之父／母。
          source:
            id: s_hRRelSrri-eP-7_AWANIWv
            source_type: api_record
            title: 中国历代人物传记资料库：王鍾（CBDB 286466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286466&o=json
            external_identifier: CBDB:286466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_b22tKHuMcRLB93x2PpeEjm
        status: active
        display_name: 王鍾
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王堂

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堂 | accepted |
| bio.summary | 王堂，明人物。永樂十年進士，籍贯諸暨。（中国历代人物传记资料库 CBDB 286463） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_rzQDNnMKSBa8nJNVJmieoC | 王鈺 | accepted |
| children | p_b22tKHuMcRLB93x2PpeEjm | 王鍾 | accepted |

## 外部来源

- [中国历代人物传记资料库：王堂（CBDB 286463）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286463&o=json)
- [中国历代人物传记资料库：王鍾（CBDB 286466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=286466&o=json)
