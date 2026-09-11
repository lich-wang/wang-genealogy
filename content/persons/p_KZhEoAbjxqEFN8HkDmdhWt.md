---
schema: wang-person/v1
id: p_KZhEoAbjxqEFN8HkDmdhWt
status: active
merged_into: null
display_name: 盧氏
revision: 1
cbdb_id: 265497
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_i5lsZo5hRKzaHHF22BNFMN
        subject_person_id: p_KZhEoAbjxqEFN8HkDmdhWt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265497）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Neph928MM2dTHUMC9IFoU_
          claim_id: c_i5lsZo5hRKzaHHF22BNFMN
          source_id: s_1J5y5fT2BbGch8X2q1J4JH
          stance: supports
          locator: CBDB:265497
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_1J5y5fT2BbGch8X2q1J4JH
            source_type: api_record
            title: 中国历代人物传记资料库：盧氏(王廷妻)（CBDB 265497）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265497&o=json
            external_identifier: CBDB:265497
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_9M7-jAXg0C0sLfiLtE_JYp
        subject_person_id: p_KZhEoAbjxqEFN8HkDmdhWt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 盧氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0mgPl5WRI-VWYkx94m-z0B
          claim_id: c_9M7-jAXg0C0sLfiLtE_JYp
          source_id: s_1J5y5fT2BbGch8X2q1J4JH
          stance: supports
          locator: CBDB:265497
          quotation: null
          interpretation_note: CBDB 明确记录的王廷配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c__z1tcJZOoXxVbTo-hKRBSm
        subject_person_id: p_BoCYzTvdQ3E7NnYNTgV14j
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_KZhEoAbjxqEFN8HkDmdhWt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jV8ZewNUnvHm5Poog0PK_f
          claim_id: c__z1tcJZOoXxVbTo-hKRBSm
          source_id: s_1J5y5fT2BbGch8X2q1J4JH
          stance: supports
          locator: 弘治六年進士登科錄:一卷，第三甲第七十七名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_BoCYzTvdQ3E7NnYNTgV14j
        status: active
        display_name: 王廷
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 盧氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 盧氏，明人物。弘治六年進士。（中国历代人物传记资料库 CBDB 265497） | accepted |
| name.primary | 盧氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_BoCYzTvdQ3E7NnYNTgV14j | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：盧氏(王廷妻)（CBDB 265497）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=265497&o=json)
