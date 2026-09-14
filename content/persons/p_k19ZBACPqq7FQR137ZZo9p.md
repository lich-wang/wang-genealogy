---
schema: wang-person/v1
id: p_k19ZBACPqq7FQR137ZZo9p
status: active
merged_into: null
display_name: 王洪裕
cbdb_id: 280919
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_c3CvGmjeexsaGPUhCeT3K2
        subject_person_id: p_k19ZBACPqq7FQR137ZZo9p
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪裕，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280919）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_3iOE4sYl53uq3TvehHJGdS
          claim_id: c_c3CvGmjeexsaGPUhCeT3K2
          source_id: s_7YVd2vzgFfQg2qH5HNQA5Y
          stance: supports
          locator: CBDB:280919
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_7YVd2vzgFfQg2qH5HNQA5Y
            source_type: api_record
            title: 中国历代人物传记资料库：王洪裕（CBDB 280919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280919&o=json
            external_identifier: CBDB:280919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CScu725o6ybYudNEL4ZRX4
        subject_person_id: p_k19ZBACPqq7FQR137ZZo9p
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王洪裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_ZPXQTCsGVf6S6v3LQLufRX
          claim_id: c_CScu725o6ybYudNEL4ZRX4
          source_id: s_7YVd2vzgFfQg2qH5HNQA5Y
          stance: supports
          locator: CBDB:280919
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_z3kV4eBbmfUUtPak_T-lUQ
        subject_person_id: p_E31oomNBRBVCzfypYEt5JV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_k19ZBACPqq7FQR137ZZo9p
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_v4qowO7Ib2BdW6lndGxBDm
          claim_id: c_z3kV4eBbmfUUtPak_T-lUQ
          source_id: s_k8u1e9GvwKTX95ABbdO6Wk
          stance: supports
          locator: CBDB：兄弟 王度（198501）之父／母 王嘉謀
          quotation: null
          interpretation_note: 由兄弟关系推断：王洪裕 与 王度 为同胞（CBDB 记「兄」），王度 之父／母即 王洪裕 之父／母。
          source:
            id: s_k8u1e9GvwKTX95ABbdO6Wk
            source_type: api_record
            title: 中国历代人物传记资料库：王洪裕（CBDB 280919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280919&o=json
            external_identifier: CBDB:280919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_E31oomNBRBVCzfypYEt5JV
        status: active
        display_name: 王嘉謀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_0TY1lBKAI4PnFq4m8wIy4f
        subject_person_id: p_J9N7hzaFrJkzxknueiQ82Y
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_k19ZBACPqq7FQR137ZZo9p
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_QoCdXdlLb_cD1MykuKEuv7
          claim_id: c_0TY1lBKAI4PnFq4m8wIy4f
          source_id: s_k8u1e9GvwKTX95ABbdO6Wk
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 198501 王度）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_k8u1e9GvwKTX95ABbdO6Wk
            source_type: api_record
            title: 中国历代人物传记资料库：王洪裕（CBDB 280919）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280919&o=json
            external_identifier: CBDB:280919
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_J9N7hzaFrJkzxknueiQ82Y
        status: active
        display_name: 王度
        merged_into_person_id: null
---

# 王洪裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王洪裕，明人物。景泰五年進士，籍贯吉水。（中国历代人物传记资料库 CBDB 280919） | accepted |
| name.primary | 王洪裕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_E31oomNBRBVCzfypYEt5JV | 王嘉謀 | accepted |
| other | p_J9N7hzaFrJkzxknueiQ82Y | 王度 | accepted |

## 外部来源

- [中国历代人物传记资料库：王洪裕（CBDB 280919）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=280919&o=json)
