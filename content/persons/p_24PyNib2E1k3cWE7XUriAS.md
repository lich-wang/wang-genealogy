---
schema: wang-person/v1
id: p_24PyNib2E1k3cWE7XUriAS
status: active
merged_into: null
display_name: 王處安
cbdb_id: 239471
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fmSb6kX9y5Asvxd4LnLEnB
        subject_person_id: p_24PyNib2E1k3cWE7XUriAS
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處安，明人物。正统十年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 239471）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 7
      sources:
        - id: cs_Omni7z4IwzD3d6kCM41yu1
          claim_id: c_fmSb6kX9y5Asvxd4LnLEnB
          source_id: s_Sxz6RKRV8Sth4fb3XAFjYK
          stance: supports
          locator: CBDB:239471
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_Sxz6RKRV8Sth4fb3XAFjYK
            source_type: api_record
            title: 中国历代人物传记资料库：王處安（CBDB 239471）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239471&o=json
            external_identifier: CBDB:239471
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:58.856Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_8yz8jjkk1f1EBao6GnKDQk
        subject_person_id: p_24PyNib2E1k3cWE7XUriAS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王處安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_5QdP37At9VPmj9tpFBMi17
          claim_id: c_8yz8jjkk1f1EBao6GnKDQk
          source_id: s_Sxz6RKRV8Sth4fb3XAFjYK
          stance: supports
          locator: CBDB:239471
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2801-2900）｜历史性依据：CBDB 朝代 = 明
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_dwACFuc_k0qqoi19XiteGC
        subject_person_id: p_24PyNib2E1k3cWE7XUriAS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a2MgxrEcSzhbMSTAx75fb8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PEtrzDbUevLIO5OK9Cm8Cw
          claim_id: c_dwACFuc_k0qqoi19XiteGC
          source_id: s_7jwQZDGBhmgWHqs6bzeeYj
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_7jwQZDGBhmgWHqs6bzeeYj
            source_type: api_record
            title: 中国历代人物传记资料库：王鉉（CBDB 126766）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json
            external_identifier: CBDB:126766
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.187Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_a2MgxrEcSzhbMSTAx75fb8
        status: active
        display_name: 王鉉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王處安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王處安，明人物。正统十年進士，籍贯上虞。（中国历代人物传记资料库 CBDB 239471） | accepted |
| name.primary | 王處安 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_a2MgxrEcSzhbMSTAx75fb8 | 王鉉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王處安（CBDB 239471）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239471&o=json)
- [中国历代人物传记资料库：王鉉（CBDB 126766）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126766&o=json)
