---
schema: wang-person/v1
id: p_EHosypq5k9YAB5xCUgjsne
status: active
merged_into: null
display_name: 王志
cbdb_id: 26227
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Yo4gHhbtPtQQh3Ra315atk
        subject_person_id: p_EHosypq5k9YAB5xCUgjsne
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_fvuQcnSgzaNuio6NEFXUWH
          claim_id: c_Yo4gHhbtPtQQh3Ra315atk
          source_id: s_mLEJ2xVWyL44UosCGpuK7Y
          stance: supports
          locator: Q45409550
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_mLEJ2xVWyL44UosCGpuK7Y
            source_type: api_record
            title: 维基数据：王志（Q45409550）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409550
            external_identifier: Q45409550
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_6Cb8jekRaRqesQRe4ihdu8
          claim_id: c_Yo4gHhbtPtQQh3Ra315atk
          source_id: s_fm65E8qaP4LqwY1AJ2RGia
          stance: supports
          locator: CBDB:26227
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a2
            id: s_fm65E8qaP4LqwY1AJ2RGia
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王志（26227）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26227&o=json
            external_identifier: CBDB:26227
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_L9hEK7Q92N4pzPywNbzspn
        subject_person_id: p_EHosypq5k9YAB5xCUgjsne
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王志，宋人物。籍贯鉅野，身份为地方士人/鄉紳、士人。（中国历代人物传记资料库 CBDB 26227）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_jXUPo33ZDt1FFwmX3LXSLv
          claim_id: c_L9hEK7Q92N4pzPywNbzspn
          source_id: s_mLEJ2xVWyL44UosCGpuK7Y
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
        - id: cs_u8GgDIOmdLSxfxsm2CcV0b
          claim_id: c_L9hEK7Q92N4pzPywNbzspn
          source_id: s_fm65E8qaP4LqwY1AJ2RGia
          stance: supports
          locator: CBDB:26227
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a2
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3b3c84UZcn0bF2uANCSwGI
        subject_person_id: p_JG3JZEHJsTUhP7iLnLPdEN
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EHosypq5k9YAB5xCUgjsne
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_w7rLI9qYZEV4dZ7E5DNH5D
          claim_id: c_3b3c84UZcn0bF2uANCSwGI
          source_id: s_RuEuVErYYNAtbrM3YM6veK
          stance: supports
          locator: CBDB 双向互证（子 王志 ⇄ 父 王鄰）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_RuEuVErYYNAtbrM3YM6veK
            source_type: api_record
            title: 中国历代人物传记资料库：王鄰（CBDB 26226）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26226&o=json
            external_identifier: CBDB:26226
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.929Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JG3JZEHJsTUhP7iLnLPdEN
        status: active
        display_name: 王鄰
        merged_into_person_id: null
  children:
    - claim:
        id: c_aMNv6bSFEU7yi5XatZYkWQ
        subject_person_id: p_EHosypq5k9YAB5xCUgjsne
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_Ue4bc6JWNDY3CgoJjDceoC
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_K3Dh1PAJ5koLuDR1FGZ4Zm
          claim_id: c_aMNv6bSFEU7yi5XatZYkWQ
          source_id: s_7fjU4ew89CPXuYB51QW2G2
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_7fjU4ew89CPXuYB51QW2G2
            source_type: api_record
            title: 维基数据：王丕（Q45409552）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45409552
            external_identifier: Q45409552
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:14.259Z
            metadata_json: null
        - id: cs_YzFWMzb3gc336Lmm24G4rJ
          claim_id: c_aMNv6bSFEU7yi5XatZYkWQ
          source_id: s_mLEJ2xVWyL44UosCGpuK7Y
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_Ue4bc6JWNDY3CgoJjDceoC
        status: active
        display_name: 王丕
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王志

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王志 | accepted |
| bio.summary | 王志，宋人物。籍贯鉅野，身份为地方士人/鄉紳、士人。（中国历代人物传记资料库 CBDB 26227） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_JG3JZEHJsTUhP7iLnLPdEN | 王鄰 | accepted |
| children | p_Ue4bc6JWNDY3CgoJjDceoC | 王丕 | accepted |

## 外部来源

- [维基数据：王丕（Q45409552）](https://www.wikidata.org/wiki/Q45409552)
- [维基数据：王志（Q45409550）](https://www.wikidata.org/wiki/Q45409550)
- [中国历代人物传记资料库：王鄰（CBDB 26226）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26226&o=json)
- [CBDB 中国历代人物传记资料库：王志（26227）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=26227&o=json)
