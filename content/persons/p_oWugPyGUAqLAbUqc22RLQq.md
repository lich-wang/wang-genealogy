---
schema: wang-person/v1
id: p_oWugPyGUAqLAbUqc22RLQq
status: active
merged_into: null
display_name: 王希召
cbdb_id: 229380
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v1cGmoqaiS68AT5pmmFYvf
        subject_person_id: p_oWugPyGUAqLAbUqc22RLQq
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希召，明人物。萬曆丙戌科進士進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 229380）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_dfspqs0SFV3CgP-km1-DE5
          claim_id: c_v1cGmoqaiS68AT5pmmFYvf
          source_id: s_AY23XTErFHUEaDr9VvYzhQ
          stance: supports
          locator: CBDB:229380
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_AY23XTErFHUEaDr9VvYzhQ
            source_type: api_record
            title: 中国历代人物传记资料库：王希召（CBDB 229380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json
            external_identifier: CBDB:229380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.142Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_GRivzwNKWx9qo5gdNAmK3p
        subject_person_id: p_oWugPyGUAqLAbUqc22RLQq
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王希召
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_GdR5AqcGXa2SzAwzq2yrm4
          claim_id: c_GRivzwNKWx9qo5gdNAmK3p
          source_id: s_AY23XTErFHUEaDr9VvYzhQ
          stance: supports
          locator: CBDB:229380
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2701-2800）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_T7Q5Qu4i6vYqDwh1yNqT6-
        subject_person_id: p_fsKE1F67GJMdBZo9s2p2SK
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_oWugPyGUAqLAbUqc22RLQq
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v-DRHJrwCo14F2-viPc6HG
          claim_id: c_T7Q5Qu4i6vYqDwh1yNqT6-
          source_id: s_LJcfKcqCF86In8M8YHaqb4
          stance: supports
          locator: CBDB：兄弟 王希夔（207197）之父／母 王俊民
          quotation: null
          interpretation_note: 由兄弟关系推断：王希召 与 王希夔 为同胞（CBDB 记「兄」），王希夔 之父／母即 王希召 之父／母。
          source:
            id: s_LJcfKcqCF86In8M8YHaqb4
            source_type: api_record
            title: 中国历代人物传记资料库：王希召（CBDB 229380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json
            external_identifier: CBDB:229380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fsKE1F67GJMdBZo9s2p2SK
        status: active
        display_name: 王俊民
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_r2bGa8eTiz9sYVYbbtXbEm
        subject_person_id: p_oWugPyGUAqLAbUqc22RLQq
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_p7XKo89NhBCAZto4tXob1s
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7L2VIxK7vLYyv4rtBcVW3r
          claim_id: c_r2bGa8eTiz9sYVYbbtXbEm
          source_id: s_LJcfKcqCF86In8M8YHaqb4
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207197 王希夔）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_LJcfKcqCF86In8M8YHaqb4
            source_type: api_record
            title: 中国历代人物传记资料库：王希召（CBDB 229380）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json
            external_identifier: CBDB:229380
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_p7XKo89NhBCAZto4tXob1s
        status: active
        display_name: 王希夔
        merged_into_person_id: null
---

# 王希召

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王希召，明人物。萬曆丙戌科進士進士，籍贯龍溪。（中国历代人物传记资料库 CBDB 229380） | accepted |
| name.primary | 王希召 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fsKE1F67GJMdBZo9s2p2SK | 王俊民 | accepted |
| other | p_p7XKo89NhBCAZto4tXob1s | 王希夔 | accepted |

## 外部来源

- [中国历代人物传记资料库：王希召（CBDB 229380）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=229380&o=json)
