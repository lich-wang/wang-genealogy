---
schema: wang-person/v1
id: p_M1GRMmmB6zw7T9HZbBDcti
status: active
merged_into: null
display_name: 王汝直
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ceGiVBC3nzMo6HQoeeDaUQ
        subject_person_id: p_M1GRMmmB6zw7T9HZbBDcti
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZyK7b7swTYyv9gkTrFaX52
          claim_id: c_ceGiVBC3nzMo6HQoeeDaUQ
          source_id: s_f4eugo5yde3DZYK7VMytRg
          stance: supports
          locator: CBDB:334089
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（334089）
          source: &a1
            id: s_f4eugo5yde3DZYK7VMytRg
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 334089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334089&o=json
            external_identifier: CBDB:334089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.431Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_HSZBT74o47ywraysC3qpCj
        subject_person_id: p_M1GRMmmB6zw7T9HZbBDcti
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝直，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334089）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_pjZt2MHsefH2M7VT4X-4UI
          claim_id: c_HSZBT74o47ywraysC3qpCj
          source_id: s_f4eugo5yde3DZYK7VMytRg
          stance: supports
          locator: CBDB:334089
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_vs7yInnOpnzWUsWM89lJwK
        subject_person_id: p_51Pca5wdng4NB9T2FpYuFX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_M1GRMmmB6zw7T9HZbBDcti
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_epEiEpgw0YkHo0ADyw0vtB
          claim_id: c_vs7yInnOpnzWUsWM89lJwK
          source_id: s_73GlavPRTSDEPGDyyCa5-t
          stance: supports
          locator: CBDB：兄弟 王汝鲁（126502）之父／母 王可
          quotation: null
          interpretation_note: 由兄弟关系推断：王汝直 与 王汝鲁 为同胞（CBDB 记「兄」），王汝鲁 之父／母即 王汝直 之父／母。
          source:
            id: s_73GlavPRTSDEPGDyyCa5-t
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 334089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334089&o=json
            external_identifier: CBDB:334089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_51Pca5wdng4NB9T2FpYuFX
        status: active
        display_name: 王可
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_LivEUtrpSmNQiuzVj5AavG
        subject_person_id: p_M1GRMmmB6zw7T9HZbBDcti
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_iRoPCMQGG7T8QWQEfbMdBx
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sT9ASvPxbokR-fkdkwV5B7
          claim_id: c_LivEUtrpSmNQiuzVj5AavG
          source_id: s_73GlavPRTSDEPGDyyCa5-t
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 126502 王汝魯）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_73GlavPRTSDEPGDyyCa5-t
            source_type: api_record
            title: 中国历代人物传记资料库：王汝直（CBDB 334089）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334089&o=json
            external_identifier: CBDB:334089
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_iRoPCMQGG7T8QWQEfbMdBx
        status: active
        display_name: 王汝鲁
        merged_into_person_id: null
---

# 王汝直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝直 | accepted |
| bio.summary | 王汝直，明人物。隆慶二年進士，籍贯南陽。（中国历代人物传记资料库 CBDB 334089） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_51Pca5wdng4NB9T2FpYuFX | 王可 | accepted |
| other | p_iRoPCMQGG7T8QWQEfbMdBx | 王汝鲁 | accepted |

## 外部来源

- [中国历代人物传记资料库：王汝直（CBDB 334089）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=334089&o=json)
