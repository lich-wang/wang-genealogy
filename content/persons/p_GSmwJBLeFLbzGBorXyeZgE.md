---
schema: wang-person/v1
id: p_GSmwJBLeFLbzGBorXyeZgE
status: active
merged_into: null
display_name: 王可旺
cbdb_id: 261818
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9GZMo7dCVNotCNLx9cp19A
        subject_person_id: p_GSmwJBLeFLbzGBorXyeZgE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王可旺
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6h92J5sHfjzuJ3SX353F5S
          claim_id: c_9GZMo7dCVNotCNLx9cp19A
          source_id: s_iQg9CJRmeBebeQvY5eD82F
          stance: supports
          locator: Q45448288
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_iQg9CJRmeBebeQvY5eD82F
            source_type: api_record
            title: 维基数据：王可旺（Q45448288）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45448288
            external_identifier: Q45448288
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_XVvTRG4ec8TTnpmFMPBFMb
          claim_id: c_9GZMo7dCVNotCNLx9cp19A
          source_id: s_v6s8eYTN6QA5swzJ6vY6HW
          stance: supports
          locator: CBDB:261818
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_v6s8eYTN6QA5swzJ6vY6HW
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王可旺（261818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261818&o=json
            external_identifier: CBDB:261818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_LE46rQpszbvkMCHb5i7Q6Q
        subject_person_id: p_GSmwJBLeFLbzGBorXyeZgE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 261818
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_5isABNyzDA1RLUKAosRrBz
          claim_id: c_LE46rQpszbvkMCHb5i7Q6Q
          source_id: s_iQg9CJRmeBebeQvY5eD82F
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_ngkWz582EVfMx4c8h8sDGE
        subject_person_id: p_GSmwJBLeFLbzGBorXyeZgE
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_reuJ3Gy5K3tzEUt9VByf69
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XnGL7tJeadWcYHu8o5iRSd
          claim_id: c_ngkWz582EVfMx4c8h8sDGE
          source_id: s_c1k2mMQxS2K1rhz5KsbitG
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_c1k2mMQxS2K1rhz5KsbitG
            source_type: api_record
            title: 维基数据：王理（Q45448352）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45448352
            external_identifier: Q45448352
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:18.752Z
            metadata_json: null
        - id: cs_GZui9hEY4hcuor5Xuk7xWR
          claim_id: c_ngkWz582EVfMx4c8h8sDGE
          source_id: s_iQg9CJRmeBebeQvY5eD82F
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_reuJ3Gy5K3tzEUt9VByf69
        status: active
        display_name: 王理
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_y-XIZr6HZubm3Soprb2_b4
        subject_person_id: p_GSmwJBLeFLbzGBorXyeZgE
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_38MrYsNYkPoBeMisQP7Sof
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vvW6FczxprmBdgjN-6E1p-
          claim_id: c_y-XIZr6HZubm3Soprb2_b4
          source_id: s_v6s8eYTN6QA5swzJ6vY6HW
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a2
      object_person:
        id: p_38MrYsNYkPoBeMisQP7Sof
        status: active
        display_name: 王经
        merged_into_person_id: null
  other: []
---

# 王可旺

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王可旺 | accepted |
| bio.summary | Ming dynasty person CBDB = 261818 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_reuJ3Gy5K3tzEUt9VByf69 | 王理 | accepted |
| descendants | p_38MrYsNYkPoBeMisQP7Sof | 王经 | accepted |

## 外部来源

- [维基数据：王可旺（Q45448288）](https://www.wikidata.org/wiki/Q45448288)
- [维基数据：王理（Q45448352）](https://www.wikidata.org/wiki/Q45448352)
- [CBDB 中国历代人物传记资料库：王可旺（261818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=261818&o=json)
