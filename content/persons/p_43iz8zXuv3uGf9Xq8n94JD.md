---
schema: wang-person/v1
id: p_43iz8zXuv3uGf9Xq8n94JD
status: active
merged_into: null
display_name: 王光仕
cbdb_id: 275621
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_jLvFUyQCVQpEM512YXjoqs
        subject_person_id: p_43iz8zXuv3uGf9Xq8n94JD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光仕，明人物。弘治十八年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 275621）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_vHMtEC4sOURw77CCf5gdn7
          claim_id: c_jLvFUyQCVQpEM512YXjoqs
          source_id: s_Ufar3FktpD3SszHYXjDy9E
          stance: supports
          locator: CBDB:275621
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Ufar3FktpD3SszHYXjDy9E
            source_type: api_record
            title: 中国历代人物传记资料库：王光仕（CBDB 275621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275621&o=json
            external_identifier: CBDB:275621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:02.295Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_E4f3636zg3vZ3iqxMZEhDH
        subject_person_id: p_43iz8zXuv3uGf9Xq8n94JD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光仕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J31vVkmAB75tRqTW8TWiEH
          claim_id: c_E4f3636zg3vZ3iqxMZEhDH
          source_id: s_Ufar3FktpD3SszHYXjDy9E
          stance: supports
          locator: CBDB:275621
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3201-3300）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_-64AF9B9yw_OtkuZRM8H65
        subject_person_id: p_3pGecEKBQ7L7i74yoHX3og
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_43iz8zXuv3uGf9Xq8n94JD
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fcoDWfWqEn9i8xO7A-6JT7
          claim_id: c_-64AF9B9yw_OtkuZRM8H65
          source_id: s_SApntJKlTUvgroF_SkzxC5
          stance: supports
          locator: CBDB：兄弟 王光佐（201648）之父／母 王京幾
          quotation: null
          interpretation_note: 由兄弟关系推断：王光仕 与 王光佐 为同胞（CBDB 记「兄」），王光佐 之父／母即 王光仕 之父／母。
          source:
            id: s_SApntJKlTUvgroF_SkzxC5
            source_type: api_record
            title: 中国历代人物传记资料库：王光仕（CBDB 275621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275621&o=json
            external_identifier: CBDB:275621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3pGecEKBQ7L7i74yoHX3og
        status: active
        display_name: 王京幾
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_4hJOTtKBCfedxTAJVUqGA8
        subject_person_id: p_43iz8zXuv3uGf9Xq8n94JD
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_hgNMo84ydGRxnNtLqHjNYL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mbjpEB9cauZhAqSt0QDOEu
          claim_id: c_4hJOTtKBCfedxTAJVUqGA8
          source_id: s_SApntJKlTUvgroF_SkzxC5
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201648 王光佐）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_SApntJKlTUvgroF_SkzxC5
            source_type: api_record
            title: 中国历代人物传记资料库：王光仕（CBDB 275621）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275621&o=json
            external_identifier: CBDB:275621
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_hgNMo84ydGRxnNtLqHjNYL
        status: active
        display_name: 王光佐
        merged_into_person_id: null
---

# 王光仕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王光仕，明人物。弘治十八年進士，籍贯新昌。（中国历代人物传记资料库 CBDB 275621） | accepted |
| name.primary | 王光仕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_3pGecEKBQ7L7i74yoHX3og | 王京幾 | accepted |
| other | p_hgNMo84ydGRxnNtLqHjNYL | 王光佐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王光仕（CBDB 275621）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=275621&o=json)
