---
schema: wang-person/v1
id: p_uE1u3bYV3J8fuYnjaWRvAs
status: active
merged_into: null
display_name: 王釗
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_mgyG9BLzyx3gEFwFrNWpCJ
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_AhfKfudaQRj6QuQUiS4AAC
          claim_id: c_mgyG9BLzyx3gEFwFrNWpCJ
          source_id: s_8Gub5FMYjB2ymJVJoisx4K
          stance: supports
          locator: CBDB:233436
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（233436）
          source: &a1
            id: s_8Gub5FMYjB2ymJVJoisx4K
            source_type: api_record
            title: 中国历代人物传记资料库：王釗（CBDB 233436）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233436&o=json
            external_identifier: CBDB:233436
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.716Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VER4pFCuxUaGac7LArRhAm
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王釗，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 233436）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_fu12pHrMMmKMaHY3qXrwwX
          claim_id: c_VER4pFCuxUaGac7LArRhAm
          source_id: s_8Gub5FMYjB2ymJVJoisx4K
          stance: supports
          locator: CBDB:233436
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_afJkvdubxMvbV5KvpBwPng
        subject_person_id: p_uE1u3bYV3J8fuYnjaWRvAs
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_cpGBEq63QojtvoRHpvNFEb
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fgrkiNHk5F3eXuyCriCmhS
          claim_id: c_afJkvdubxMvbV5KvpBwPng
          source_id: s_hQ4MNw8gYqbwTtzMu8ZNXd
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第三十三名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_hQ4MNw8gYqbwTtzMu8ZNXd
            source_type: api_record
            title: 中国历代人物传记资料库：王家相（CBDB 207666）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json
            external_identifier: CBDB:207666
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.924Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cpGBEq63QojtvoRHpvNFEb
        status: active
        display_name: 王家相
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王釗

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王釗 | accepted |
| bio.summary | 王釗，明人物。籍贯海鹽。（中国历代人物传记资料库 CBDB 233436） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_cpGBEq63QojtvoRHpvNFEb | 王家相 | accepted |

## 外部来源

- [中国历代人物传记资料库：王家相（CBDB 207666）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=207666&o=json)
- [中国历代人物传记资料库：王釗（CBDB 233436）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=233436&o=json)
