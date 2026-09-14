---
schema: wang-person/v1
id: p_Nexg3FPbSC1oMjvvKHKAS7
status: active
merged_into: null
display_name: 王惠
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_URcunqGtHXXR19Av7YscGJ
        subject_person_id: p_Nexg3FPbSC1oMjvvKHKAS7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2ZZw8GGEogRFPL4iANwJsa
          claim_id: c_URcunqGtHXXR19Av7YscGJ
          source_id: s_LFFsePhJsRD55pf7d6yu1i
          stance: supports
          locator: CBDB:273481
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（273481）
          source: &a1
            id: s_LFFsePhJsRD55pf7d6yu1i
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 273481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json
            external_identifier: CBDB:273481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WNFZYPnmrWkvP9kRLoEfQN
        subject_person_id: p_Nexg3FPbSC1oMjvvKHKAS7
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惠，明人物。弘治十八年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 273481）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_as9SkIQbbMbhZ0YyAyuRmV
          claim_id: c_WNFZYPnmrWkvP9kRLoEfQN
          source_id: s_LFFsePhJsRD55pf7d6yu1i
          stance: supports
          locator: CBDB:273481
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_83dRO0KoIkEvIuxoyRxDgR
        subject_person_id: p_ujsEdeJcxM64Nah2LiaMGR
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Nexg3FPbSC1oMjvvKHKAS7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GvQ_kg6y8M9vGV2Nx08CPC
          claim_id: c_83dRO0KoIkEvIuxoyRxDgR
          source_id: s_I8IlbSTiCJgc4VzeA78PiC
          stance: supports
          locator: CBDB：兄弟 王忠（201503）之父／母 王廷賓
          quotation: null
          interpretation_note: 由兄弟关系推断：王惠 与 王忠 为同胞（CBDB 记「弟」），王忠 之父／母即 王惠 之父／母。
          source:
            id: s_I8IlbSTiCJgc4VzeA78PiC
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 273481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json
            external_identifier: CBDB:273481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_ujsEdeJcxM64Nah2LiaMGR
        status: active
        display_name: 王廷賓
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_sLEAZRsLaH0gxk8OxkuDqc
        subject_person_id: p_2Fu5oCqGVWkUyo9rZxcW5L
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_Nexg3FPbSC1oMjvvKHKAS7
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iYAT2m1zzBEqU-Gwc-LBHk
          claim_id: c_sLEAZRsLaH0gxk8OxkuDqc
          source_id: s_I8IlbSTiCJgc4VzeA78PiC
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 201503 王忠）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_I8IlbSTiCJgc4VzeA78PiC
            source_type: api_record
            title: 中国历代人物传记资料库：王惠（CBDB 273481）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json
            external_identifier: CBDB:273481
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_2Fu5oCqGVWkUyo9rZxcW5L
        status: active
        display_name: 王忠
        merged_into_person_id: null
---

# 王惠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惠 | accepted |
| bio.summary | 王惠，明人物。弘治十八年進士，籍贯瀘州。（中国历代人物传记资料库 CBDB 273481） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ujsEdeJcxM64Nah2LiaMGR | 王廷賓 | accepted |
| other | p_2Fu5oCqGVWkUyo9rZxcW5L | 王忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惠（CBDB 273481）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=273481&o=json)
