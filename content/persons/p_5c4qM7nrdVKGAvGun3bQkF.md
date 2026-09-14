---
schema: wang-person/v1
id: p_5c4qM7nrdVKGAvGun3bQkF
status: active
merged_into: null
display_name: 王鳳
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_pmyAHSv8R1eXBJz7Bd89Ga
        subject_person_id: p_5c4qM7nrdVKGAvGun3bQkF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_GDFTLksTUXGXFBUY96cBH1
          claim_id: c_pmyAHSv8R1eXBJz7Bd89Ga
          source_id: s_AjjZKFKm6h7x6QhyVxUWuZ
          stance: supports
          locator: CBDB:237286
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（237286）
          source: &a1
            id: s_AjjZKFKm6h7x6QhyVxUWuZ
            source_type: api_record
            title: 中国历代人物传记资料库：王鳳（CBDB 237286）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237286&o=json
            external_identifier: CBDB:237286
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ERJhfJJCJKcWgcRyK9FLYE
        subject_person_id: p_5c4qM7nrdVKGAvGun3bQkF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鳳，明人物。正統四年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 237286）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_OQfM8LrFagmsrmNEeim_88
          claim_id: c_ERJhfJJCJKcWgcRyK9FLYE
          source_id: s_AjjZKFKm6h7x6QhyVxUWuZ
          stance: supports
          locator: CBDB:237286
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_IUSppv0mLAloQHXRx-0rgN
        subject_person_id: p_5c4qM7nrdVKGAvGun3bQkF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GHVQL4hWHQRpyP8bz5zK2L
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RbgEvB7nqR4dBjyS_kaU2a
          claim_id: c_IUSppv0mLAloQHXRx-0rgN
          source_id: s_AjjZKFKm6h7x6QhyVxUWuZ
          stance: supports
          locator: 正統四年進士登科錄:一卷，第三甲第四十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_GHVQL4hWHQRpyP8bz5zK2L
        status: active
        display_name: 王澤
        merged_into_person_id: null
    - claim:
        id: c_4j6HHgNo-7xFJcBVYwNj5s
        subject_person_id: p_5c4qM7nrdVKGAvGun3bQkF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_3RzVzQR8Y32crEFtQpY6RF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_J8pepmsMc-jsmcG_iJWhT-
          claim_id: c_4j6HHgNo-7xFJcBVYwNj5s
          source_id: s_uHG1bfKkvxQN5IKN6wdtUX
          stance: supports
          locator: CBDB：兄弟 王澤（207874）之父／母 王鳳
          quotation: null
          interpretation_note: 由兄弟关系推断：王選 与 王澤 为同胞（CBDB 记「兄」），王澤 之父／母即 王選 之父／母。
          source:
            id: s_uHG1bfKkvxQN5IKN6wdtUX
            source_type: api_record
            title: 中国历代人物传记资料库：王選（CBDB 237291）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json
            external_identifier: CBDB:237291
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_3RzVzQR8Y32crEFtQpY6RF
        status: active
        display_name: 王選
        merged_into_person_id: null
    - claim:
        id: c_Pp92LvzSRETuFELthJzAMh
        subject_person_id: p_5c4qM7nrdVKGAvGun3bQkF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RzHeKRrrFVE4Ac6M22sZsg
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RTH1sSTuziRPXpCTcewxjT
          claim_id: c_Pp92LvzSRETuFELthJzAMh
          source_id: s_sT22kr5Z9iXULMVATsWCeE
          stance: supports
          locator: CBDB：兄弟 王澤（207874）之父／母 王鳳
          quotation: null
          interpretation_note: 由兄弟关系推断：王震 与 王澤 为同胞（CBDB 记「弟」），王澤 之父／母即 王震 之父／母。
          source:
            id: s_sT22kr5Z9iXULMVATsWCeE
            source_type: api_record
            title: 中国历代人物传记资料库：王震（CBDB 237290）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237290&o=json
            external_identifier: CBDB:237290
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_RzHeKRrrFVE4Ac6M22sZsg
        status: active
        display_name: 王震
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王鳳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鳳 | accepted |
| bio.summary | 王鳳，明人物。正統四年進士，籍贯汝州。（中国历代人物传记资料库 CBDB 237286） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_GHVQL4hWHQRpyP8bz5zK2L | 王澤 | accepted |
| children | p_3RzVzQR8Y32crEFtQpY6RF | 王選 | accepted |
| children | p_RzHeKRrrFVE4Ac6M22sZsg | 王震 | accepted |

## 外部来源

- [中国历代人物传记资料库：王鳳（CBDB 237286）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237286&o=json)
- [中国历代人物传记资料库：王選（CBDB 237291）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237291&o=json)
- [中国历代人物传记资料库：王震（CBDB 237290）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=237290&o=json)
