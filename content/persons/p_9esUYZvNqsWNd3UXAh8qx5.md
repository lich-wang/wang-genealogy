---
schema: wang-person/v1
id: p_9esUYZvNqsWNd3UXAh8qx5
status: active
merged_into: null
display_name: 王縝
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_82BJCc2ZBNAULgmj2PCmRE
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王縝
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NgYdA7vtbUJQJVe77a4i8e
          claim_id: c_82BJCc2ZBNAULgmj2PCmRE
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: CBDB:68275
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（68275）
          source: &a1
            id: s_8nUwjmnF5xTmqZCNqzBRAK
            source_type: api_record
            title: 中国历代人物传记资料库：王縝（CBDB 68275）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json
            external_identifier: CBDB:68275
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.064Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_38TyjmXJKsNjZPQF3owgAy
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1463年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6A3cg27YA8bK6FAyijxA29
          claim_id: c_38TyjmXJKsNjZPQF3owgAy
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_ijr3s7cgMr7q75rjXBLn6F
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1523年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3cyZCN6rAbM9HYc8HNuERC
          claim_id: c_ijr3s7cgMr7q75rjXBLn6F
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GDUGK4gxd9f9guswMm312x
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_eLMx59GFXLRvEg2wephAn4
          claim_id: c_GDUGK4gxd9f9guswMm312x
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_sP6Q_iQ2vi_UnDKyI_ZcUL
        subject_person_id: p_zQAyFcVTh8uEFRKFQtkku9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LSNqF-BbQdiE3s5Ua1ee4C
          claim_id: c_sP6Q_iQ2vi_UnDKyI_ZcUL
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_zQAyFcVTh8uEFRKFQtkku9
        status: active
        display_name: 王恪
        merged_into_person_id: null
  children:
    - claim:
        id: c_xiLSN7RWcvlDhsyMULof4S
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_iuNfYEiBwec72hde2awF32
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_lXnpO_Tzlzz_FsiwzCCfYh
          claim_id: c_xiLSN7RWcvlDhsyMULof4S
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），11939：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iuNfYEiBwec72hde2awF32
        status: active
        display_name: 王弘久
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_8khpCQpwaRNPt7lDmB7_U5
        subject_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_6iTVhtWv0oZdLH5PbuQBAy
          claim_id: c_8khpCQpwaRNPt7lDmB7_U5
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_EVLq7xAUTLGpaeFfQpgjH5
        status: active
        display_name: 周氏
        merged_into_person_id: null
    - claim:
        id: c_gRWEM67A9ap50BYDZZFp8b
        subject_person_id: p_EVLq7xAUTLGpaeFfQpgjH5
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gAM9U5JCbHO7zfWemJpsg9
          claim_id: c_gRWEM67A9ap50BYDZZFp8b
          source_id: s_DXADjq46Wg2BZwimXWUefF
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DXADjq46Wg2BZwimXWUefF
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：周氏（264941）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264941&o=json
            external_identifier: CBDB:264941
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T02:00:05.935Z
            metadata_json: null
      object_person:
        id: p_EVLq7xAUTLGpaeFfQpgjH5
        status: active
        display_name: 周氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_40pBM4nXKvY-Fjqkhk4HVQ
        subject_person_id: p_WWiatCTUQBMimYAeHSJjDW
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1WvENtP5XcizzwMw80Nn5y
          claim_id: c_40pBM4nXKvY-Fjqkhk4HVQ
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WWiatCTUQBMimYAeHSJjDW
        status: active
        display_name: 王纯礼
        merged_into_person_id: null
    - claim:
        id: c_X8oOHF90L7SsXnn5ImHE5R
        subject_person_id: p_YUKAdQiXr1DTx2KFsrYLgt
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_9esUYZvNqsWNd3UXAh8qx5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hAwj9jGYw27F9FbJfCyLk8
          claim_id: c_X8oOHF90L7SsXnn5ImHE5R
          source_id: s_8nUwjmnF5xTmqZCNqzBRAK
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第二十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_YUKAdQiXr1DTx2KFsrYLgt
        status: active
        display_name: 王琛
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王縝

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王縝 | accepted |
| birth.date | 1463年 | accepted |
| death.date | 1523年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_zQAyFcVTh8uEFRKFQtkku9 | 王恪 | accepted |
| children | p_iuNfYEiBwec72hde2awF32 | 王弘久 | accepted |
| spouses | p_EVLq7xAUTLGpaeFfQpgjH5 | 周氏 | accepted |
| spouses | p_EVLq7xAUTLGpaeFfQpgjH5 | 周氏 | accepted |
| ancestors | p_WWiatCTUQBMimYAeHSJjDW | 王纯礼 | accepted |
| ancestors | p_YUKAdQiXr1DTx2KFsrYLgt | 王琛 | accepted |

## 外部来源

- [中国历代人物传记资料库：王縝（CBDB 68275）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=68275&o=json)
- [CBDB 中国历代人物传记资料库：周氏（264941）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=264941&o=json)
