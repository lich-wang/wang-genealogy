---
schema: wang-person/v1
id: p_CsFdH8PxFCRt2fMScjK1Yr
status: active
merged_into: null
display_name: 王儒
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fMhvh3NoZMN4Gt8WraV44k
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_QyyJW1bmrhtuLDZGbzyAQB
          claim_id: c_fMhvh3NoZMN4Gt8WraV44k
          source_id: s_ihTS5ELNKA6qZ5PPLVNW2f
          stance: supports
          locator: CBDB:314793
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（314793）
          source: &a1
            id: s_ihTS5ELNKA6qZ5PPLVNW2f
            source_type: api_record
            title: 中国历代人物传记资料库：王儒（CBDB 314793）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314793&o=json
            external_identifier: CBDB:314793
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.942Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_AQE1VrAHSVUN24B4tAanx2
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儒，明人物。嘉靖二十九年進士，籍贯融縣，曾任通判。（中国历代人物传记资料库 CBDB 314793）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_q1q_IjCLBY329FZVgbGMeB
          claim_id: c_AQE1VrAHSVUN24B4tAanx2
          source_id: s_ihTS5ELNKA6qZ5PPLVNW2f
          stance: supports
          locator: CBDB:314793
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_GVpAYiTx80ZJBFqrNA_6dd
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nuBK1wsMvCBFXuA1nKxaa5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LggXngXsNCc9vQOFabXRjg
          claim_id: c_GVpAYiTx80ZJBFqrNA_6dd
          source_id: s_ihTS5ELNKA6qZ5PPLVNW2f
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第二百一十二名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nuBK1wsMvCBFXuA1nKxaa5
        status: active
        display_name: 王納講
        merged_into_person_id: null
    - claim:
        id: c_ml5fKw5JYXEhW9jg5dq9rv
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_4YXKWy6SMNaEJM1R3UmhPJ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xiVqnI9ABXW3CSsF4WPia1
          claim_id: c_ml5fKw5JYXEhW9jg5dq9rv
          source_id: s_ecJlww7cxlIb8gxfM5lkzo
          stance: supports
          locator: CBDB：兄弟 王納講（204128）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王納言 与 王納講 为同胞（CBDB 记「弟」），王納講 之父／母即 王納言 之父／母。
          source:
            id: s_ecJlww7cxlIb8gxfM5lkzo
            source_type: api_record
            title: 中国历代人物传记资料库：王納言（CBDB 314799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json
            external_identifier: CBDB:314799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_4YXKWy6SMNaEJM1R3UmhPJ
        status: active
        display_name: 王納言
        merged_into_person_id: null
    - claim:
        id: c_puXY2LxZIghW-_Y8CRId2G
        subject_person_id: p_CsFdH8PxFCRt2fMScjK1Yr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Q6z2Rzm5XaJUBN19vPaCM4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q4q6EVLCJPyFz6lU9T_UmJ
          claim_id: c_puXY2LxZIghW-_Y8CRId2G
          source_id: s_vK3H6VgR_M2_-f02KzKOm8
          stance: supports
          locator: CBDB：兄弟 王納講（204128）之父／母 王儒
          quotation: null
          interpretation_note: 由兄弟关系推断：王納議 与 王納講 为同胞（CBDB 记「弟」），王納講 之父／母即 王納議 之父／母。
          source:
            id: s_vK3H6VgR_M2_-f02KzKOm8
            source_type: api_record
            title: 中国历代人物传记资料库：王納議（CBDB 314800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json
            external_identifier: CBDB:314800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Q6z2Rzm5XaJUBN19vPaCM4
        status: active
        display_name: 王納議
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王儒

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儒 | accepted |
| bio.summary | 王儒，明人物。嘉靖二十九年進士，籍贯融縣，曾任通判。（中国历代人物传记资料库 CBDB 314793） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_nuBK1wsMvCBFXuA1nKxaa5 | 王納講 | accepted |
| children | p_4YXKWy6SMNaEJM1R3UmhPJ | 王納言 | accepted |
| children | p_Q6z2Rzm5XaJUBN19vPaCM4 | 王納議 | accepted |

## 外部来源

- [中国历代人物传记资料库：王納言（CBDB 314799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314799&o=json)
- [中国历代人物传记资料库：王納議（CBDB 314800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314800&o=json)
- [中国历代人物传记资料库：王儒（CBDB 314793）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=314793&o=json)
