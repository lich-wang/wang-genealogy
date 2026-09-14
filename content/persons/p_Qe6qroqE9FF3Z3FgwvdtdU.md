---
schema: wang-person/v1
id: p_Qe6qroqE9FF3Z3FgwvdtdU
status: active
merged_into: null
display_name: 王定寧
cbdb_id: 255877
revision: 3
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w7qXA76V17XHobppoeRR3F
        subject_person_id: p_Qe6qroqE9FF3Z3FgwvdtdU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定寧，明人物。成化十七年進士，籍贯懷安。（中国历代人物传记资料库 CBDB 255877）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_5D0d1U0PJrt99tOCNaYkoL
          claim_id: c_w7qXA76V17XHobppoeRR3F
          source_id: s_z8cPW6KA3RGwskGJUBmn7F
          stance: supports
          locator: CBDB:255877
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_z8cPW6KA3RGwskGJUBmn7F
            source_type: api_record
            title: 中国历代人物传记资料库：王定寧（CBDB 255877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255877&o=json
            external_identifier: CBDB:255877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:17:00.581Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_V6pJcj2zZeg2fc4AFevvEM
        subject_person_id: p_Qe6qroqE9FF3Z3FgwvdtdU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王定寧
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5ipEM3696s86AsC2BH7QvP
          claim_id: c_V6pJcj2zZeg2fc4AFevvEM
          source_id: s_z8cPW6KA3RGwskGJUBmn7F
          stance: supports
          locator: CBDB:255877
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（3001-3100）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Ds9KtTe3iY8pxI8QnBAY_k
        subject_person_id: p_UxB3XwyVQqG5MVVCLdJEny
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Qe6qroqE9FF3Z3FgwvdtdU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tSULYPuImvlnrvbJ-IFpiH
          claim_id: c_Ds9KtTe3iY8pxI8QnBAY_k
          source_id: s_-tUaXzjW0eZp_onpFFlWew
          stance: supports
          locator: CBDB：兄弟 王定安（200285）之父／母 王福
          quotation: null
          interpretation_note: 由兄弟关系推断：王定寧 与 王定安 为同胞（CBDB 记「兄」），王定安 之父／母即 王定寧 之父／母。
          source:
            id: s_-tUaXzjW0eZp_onpFFlWew
            source_type: api_record
            title: 中国历代人物传记资料库：王定寧（CBDB 255877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255877&o=json
            external_identifier: CBDB:255877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_UxB3XwyVQqG5MVVCLdJEny
        status: active
        display_name: 王福
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_6ZVoAzLJu1OuP49ge9Fcjv
        subject_person_id: p_Qe6qroqE9FF3Z3FgwvdtdU
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_cWTwgVhpSA8gYnzbvXzbFc
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_zM-vXKB6J-nEG3O6dvsDA7
          claim_id: c_6ZVoAzLJu1OuP49ge9Fcjv
          source_id: s_-tUaXzjW0eZp_onpFFlWew
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 200285 王定安）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_-tUaXzjW0eZp_onpFFlWew
            source_type: api_record
            title: 中国历代人物传记资料库：王定寧（CBDB 255877）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255877&o=json
            external_identifier: CBDB:255877
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_cWTwgVhpSA8gYnzbvXzbFc
        status: active
        display_name: 王定安
        merged_into_person_id: null
---

# 王定寧

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王定寧，明人物。成化十七年進士，籍贯懷安。（中国历代人物传记资料库 CBDB 255877） | accepted |
| name.primary | 王定寧 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UxB3XwyVQqG5MVVCLdJEny | 王福 | accepted |
| other | p_cWTwgVhpSA8gYnzbvXzbFc | 王定安 | accepted |

## 外部来源

- [中国历代人物传记资料库：王定寧（CBDB 255877）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=255877&o=json)
