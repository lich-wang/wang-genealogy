---
schema: wang-person/v1
id: p_znAcPph3Ny2FkUGcQdE5go
status: active
merged_into: null
display_name: 王珩
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bKb4VToGCFT8kwHWYYHbF7
        subject_person_id: p_znAcPph3Ny2FkUGcQdE5go
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N8bYBf25k4JzD7GDvU7pmd
          claim_id: c_bKb4VToGCFT8kwHWYYHbF7
          source_id: s_3pMW92dsryxvSXX1Zst7o1
          stance: supports
          locator: CBDB:202648
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（202648）
          source: &a1
            id: s_3pMW92dsryxvSXX1Zst7o1
            source_type: api_record
            title: 中国历代人物传记资料库：王珩（CBDB 202648）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202648&o=json
            external_identifier: CBDB:202648
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.748Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EESE87ZxciH3F2YgUQGMCX
        subject_person_id: p_znAcPph3Ny2FkUGcQdE5go
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1502年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Re7AaBCTqtFiygTGv7Zvm4
          claim_id: c_EESE87ZxciH3F2YgUQGMCX
          source_id: s_3pMW92dsryxvSXX1Zst7o1
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vrw8au2HZX7RsVgyhJbcss
        subject_person_id: p_znAcPph3Ny2FkUGcQdE5go
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珩（生于1502年），明人物。明清進士進士，籍贯交河，入仕進士，曾任翰林庶吉士、大理寺觀政、布政使司僉事。（中国历代人物传记资料库 CBDB 202648）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3z0ak_NFsbgbIMVjVGMd16
          claim_id: c_Vrw8au2HZX7RsVgyhJbcss
          source_id: s_3pMW92dsryxvSXX1Zst7o1
          stance: supports
          locator: CBDB:202648
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_dfVf7viL747mSP0_jx_52-
        subject_person_id: p_hm7Wj97RnwGDWxbzPtoAnt
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_znAcPph3Ny2FkUGcQdE5go
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_epFUuGz7PqicpPvWMofJkn
          claim_id: c_dfVf7viL747mSP0_jx_52-
          source_id: s_8iGQvjzV3xMFZ3D3eaQNCG
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十四名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8iGQvjzV3xMFZ3D3eaQNCG
            source_type: api_record
            title: 中国历代人物传记资料库：王浩（CBDB 291578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291578&o=json
            external_identifier: CBDB:291578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.360Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hm7Wj97RnwGDWxbzPtoAnt
        status: active
        display_name: 王浩
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_LwnbY97hPNFALL4O8_NwhB
        subject_person_id: p_bHKHUELTYLRJrn3SokBcGr
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_znAcPph3Ny2FkUGcQdE5go
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LeGhKsNNak5DUPpiJ2O7BN
          claim_id: c_LwnbY97hPNFALL4O8_NwhB
          source_id: s_MT8Qv6bhCMqGwCNLwRhE8q
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十四名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MT8Qv6bhCMqGwCNLwRhE8q
            source_type: api_record
            title: 中国历代人物传记资料库：王永（CBDB 291577）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291577&o=json
            external_identifier: CBDB:291577
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_bHKHUELTYLRJrn3SokBcGr
        status: active
        display_name: 王永
        merged_into_person_id: null
    - claim:
        id: c_5OH0Tb16oZAgfG9yWU15pW
        subject_person_id: p_t8oN87NDpGiy2GVF2RPjL2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_znAcPph3Ny2FkUGcQdE5go
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ut_wtd1fccUHzaEJZO2XPw
          claim_id: c_5OH0Tb16oZAgfG9yWU15pW
          source_id: s_dHeZSkuqn7N7WUqeKQ4CFt
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第六十四名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dHeZSkuqn7N7WUqeKQ4CFt
            source_type: api_record
            title: 中国历代人物传记资料库：王英（CBDB 291576）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291576&o=json
            external_identifier: CBDB:291576
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.359Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_t8oN87NDpGiy2GVF2RPjL2
        status: active
        display_name: 王英
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王珩

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珩 | accepted |
| birth.date | 1502年 | accepted |
| bio.summary | 王珩（生于1502年），明人物。明清進士進士，籍贯交河，入仕進士，曾任翰林庶吉士、大理寺觀政、布政使司僉事。（中国历代人物传记资料库 CBDB 202648） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hm7Wj97RnwGDWxbzPtoAnt | 王浩 | accepted |
| ancestors | p_bHKHUELTYLRJrn3SokBcGr | 王永 | accepted |
| ancestors | p_t8oN87NDpGiy2GVF2RPjL2 | 王英 | accepted |

## 外部来源

- [中国历代人物传记资料库：王浩（CBDB 291578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291578&o=json)
- [中国历代人物传记资料库：王珩（CBDB 202648）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202648&o=json)
- [中国历代人物传记资料库：王英（CBDB 291576）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291576&o=json)
- [中国历代人物传记资料库：王永（CBDB 291577）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=291577&o=json)
