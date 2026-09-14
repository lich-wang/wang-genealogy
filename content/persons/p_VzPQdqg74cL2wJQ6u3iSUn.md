---
schema: wang-person/v1
id: p_VzPQdqg74cL2wJQ6u3iSUn
status: active
merged_into: null
display_name: 王啟臣
cbdb_id: 235987
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ldj4F5W5Fhb5Jj4bP5oZdK
        subject_person_id: p_VzPQdqg74cL2wJQ6u3iSUn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟臣，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235987）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_2q9KudRVAvCravgkEI7Q6M
          claim_id: c_Ldj4F5W5Fhb5Jj4bP5oZdK
          source_id: s_vqCG1LKUPmjKgdgHpvTCfW
          stance: supports
          locator: CBDB:235987
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_vqCG1LKUPmjKgdgHpvTCfW
            source_type: api_record
            title: 中国历代人物传记资料库：王啟臣（CBDB 235987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235987&o=json
            external_identifier: CBDB:235987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_7T79ddr6Y4LZVSNpgLKWcp
        subject_person_id: p_VzPQdqg74cL2wJQ6u3iSUn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王啟臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_tTLhK3jxdyC9Tfszo6NF9i
          claim_id: c_7T79ddr6Y4LZVSNpgLKWcp
          source_id: s_vqCG1LKUPmjKgdgHpvTCfW
          stance: supports
          locator: CBDB:235987
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_61B4ehaOLqEvOJlFk_1-8H
        subject_person_id: p_fvtdZEELHENMPdwBvRdppk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_VzPQdqg74cL2wJQ6u3iSUn
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dzOKA_6z1DwGGeXQDvgp7W
          claim_id: c_61B4ehaOLqEvOJlFk_1-8H
          source_id: s_X0UIUNIdmhhvq45hk5OxB-
          stance: supports
          locator: CBDB：兄弟 王良臣（207791）之父／母 王維城
          quotation: null
          interpretation_note: 由兄弟关系推断：王啟臣 与 王良臣 为同胞（CBDB 记「兄」），王良臣 之父／母即 王啟臣 之父／母。
          source:
            id: s_X0UIUNIdmhhvq45hk5OxB-
            source_type: api_record
            title: 中国历代人物传记资料库：王啟臣（CBDB 235987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235987&o=json
            external_identifier: CBDB:235987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fvtdZEELHENMPdwBvRdppk
        status: active
        display_name: 王維城
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_u9F5b-1ReRfpN2-jJoGI5N
        subject_person_id: p_VzPQdqg74cL2wJQ6u3iSUn
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_fVwHvivQzDYcoN8uZB1uwy
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_F_4CAUnY3NBi7USB943rt2
          claim_id: c_u9F5b-1ReRfpN2-jJoGI5N
          source_id: s_X0UIUNIdmhhvq45hk5OxB-
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 207791 王良臣）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_X0UIUNIdmhhvq45hk5OxB-
            source_type: api_record
            title: 中国历代人物传记资料库：王啟臣（CBDB 235987）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235987&o=json
            external_identifier: CBDB:235987
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_fVwHvivQzDYcoN8uZB1uwy
        status: active
        display_name: 王良臣
        merged_into_person_id: null
---

# 王啟臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王啟臣，明人物。籍贯江陰。（中国历代人物传记资料库 CBDB 235987） | accepted |
| name.primary | 王啟臣 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fvtdZEELHENMPdwBvRdppk | 王維城 | accepted |
| other | p_fVwHvivQzDYcoN8uZB1uwy | 王良臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王啟臣（CBDB 235987）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=235987&o=json)
