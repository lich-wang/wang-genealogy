---
schema: wang-person/v1
id: p_Fef9GcY47kV37W9xnN8Y4B
status: active
merged_into: null
display_name: 冉氏
revision: 1
cbdb_id: 239756
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5u9LNx5KXaC34dtcCiqWK_
        subject_person_id: p_Fef9GcY47kV37W9xnN8Y4B
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 冉氏，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239756）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_skyPJKxnEyrFfusZgEqqGH
          claim_id: c_5u9LNx5KXaC34dtcCiqWK_
          source_id: s_FgVpp9DoHJPxjJX11NXrBz
          stance: supports
          locator: CBDB:239756
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_FgVpp9DoHJPxjJX11NXrBz
            source_type: api_record
            title: 中国历代人物传记资料库：冉氏(王宣妻)（CBDB 239756）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239756&o=json
            external_identifier: CBDB:239756
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1UMX2Fc6Wz6LaScrwhUHFX
        subject_person_id: p_Fef9GcY47kV37W9xnN8Y4B
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 冉氏
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_CkpjohYd88wlj73pSfcs6s
          claim_id: c_1UMX2Fc6Wz6LaScrwhUHFX
          source_id: s_FgVpp9DoHJPxjJX11NXrBz
          stance: supports
          locator: CBDB:239756
          quotation: null
          interpretation_note: CBDB 明确记录的王宣配偶
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
        id: c_B06LmDgC4IFTj2MqbW35Ri
        subject_person_id: p_ye9VLgV3pJbXBYdJ82vvQv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Fef9GcY47kV37W9xnN8Y4B
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_GdX1twDrZxMtJ0-gq2s1xZ
          claim_id: c_B06LmDgC4IFTj2MqbW35Ri
          source_id: s_FgVpp9DoHJPxjJX11NXrBz
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十一名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_ye9VLgV3pJbXBYdJ82vvQv
        status: active
        display_name: 王宣
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 冉氏

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 冉氏，明人物。正统十年進士。（中国历代人物传记资料库 CBDB 239756） | accepted |
| name.primary | 冉氏 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_ye9VLgV3pJbXBYdJ82vvQv | 王宣 | accepted |

## 外部来源

- [中国历代人物传记资料库：冉氏(王宣妻)（CBDB 239756）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239756&o=json)
