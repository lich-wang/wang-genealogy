---
schema: wang-person/v1
id: p_YieZ1UoCG2GNbpNMx4NkYV
status: active
merged_into: null
display_name: 王俊
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Hsgw74JkZQBEvzPWt5Kcfu
        subject_person_id: p_YieZ1UoCG2GNbpNMx4NkYV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_VzQH6SbqCPJ8N9HD79zXEX
          claim_id: c_Hsgw74JkZQBEvzPWt5Kcfu
          source_id: s_C2MDbT2xF1TYpzv9bs6Nq8
          stance: supports
          locator: CBDB:311388
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（311388）
          source: &a1
            id: s_C2MDbT2xF1TYpzv9bs6Nq8
            source_type: api_record
            title: 中国历代人物传记资料库：王俊（CBDB 311388）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311388&o=json
            external_identifier: CBDB:311388
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.858Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mpL5myMyN2Z8y5NY4iWyEk
        subject_person_id: p_YieZ1UoCG2GNbpNMx4NkYV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王俊，明人物。嘉靖二十六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 311388）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ju2zWhrt7igv0q14Wnqk34
          claim_id: c_mpL5myMyN2Z8y5NY4iWyEk
          source_id: s_C2MDbT2xF1TYpzv9bs6Nq8
          stance: supports
          locator: CBDB:311388
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_1r5oFFfN8a-CJKNt4J7AIv
        subject_person_id: p_YieZ1UoCG2GNbpNMx4NkYV
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vc9c3mkQxRy6aUfxzv3hqq
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_f9QKIpyHsytyX_fkl7kQPZ
          claim_id: c_1r5oFFfN8a-CJKNt4J7AIv
          source_id: s_C2MDbT2xF1TYpzv9bs6Nq8
          stance: supports
          locator: 嘉靖二十六年進士登科錄:一卷，第三甲第一百八十三名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vc9c3mkQxRy6aUfxzv3hqq
        status: active
        display_name: 王三接
        merged_into_person_id: null
  other: []
---

# 王俊

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王俊 | accepted |
| bio.summary | 王俊，明人物。嘉靖二十六年進士，曾任壽官。（中国历代人物传记资料库 CBDB 311388） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_vc9c3mkQxRy6aUfxzv3hqq | 王三接 | accepted |

## 外部来源

- [中国历代人物传记资料库：王俊（CBDB 311388）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=311388&o=json)
