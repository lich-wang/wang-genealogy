---
schema: wang-person/v1
id: p_56nMpgobEseCZRMmEFRumw
status: active
merged_into: null
display_name: 王續之
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Unn9L43NcFQ7xpr8EPT8L9
        subject_person_id: p_56nMpgobEseCZRMmEFRumw
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續之
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_FNAdST8eN7sf5EyNCPx5NP
          claim_id: c_Unn9L43NcFQ7xpr8EPT8L9
          source_id: s_n3PVAp7p3NaZiZLgN6nEHs
          stance: supports
          locator: CBDB:290827
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（290827）
          source: &a1
            id: s_n3PVAp7p3NaZiZLgN6nEHs
            source_type: api_record
            title: 中国历代人物传记资料库：王續之（CBDB 290827）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290827&o=json
            external_identifier: CBDB:290827
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_F3NeorctaJwSgfrCKkA9Yu
        subject_person_id: p_56nMpgobEseCZRMmEFRumw
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王續之，明人物。嘉靖十一年進士，籍贯南充，曾任左布政使。（中国历代人物传记资料库 CBDB 290827）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dnn5Sp6FevELQBW_v_uhk_
          claim_id: c_F3NeorctaJwSgfrCKkA9Yu
          source_id: s_n3PVAp7p3NaZiZLgN6nEHs
          stance: supports
          locator: CBDB:290827
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_3kcCNHi3zmA6_NKyCirGNk
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_56nMpgobEseCZRMmEFRumw
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bgozAdy9HPRxYj9gR0RsZ9
          claim_id: c_3kcCNHi3zmA6_NKyCirGNk
          source_id: s_n3PVAp7p3NaZiZLgN6nEHs
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_pv2pDE9A1jj2uMGHCGpC7T
        status: active
        display_name: 王廷
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王續之

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王續之 | accepted |
| bio.summary | 王續之，明人物。嘉靖十一年進士，籍贯南充，曾任左布政使。（中国历代人物传记资料库 CBDB 290827） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_pv2pDE9A1jj2uMGHCGpC7T | 王廷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王續之（CBDB 290827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290827&o=json)
