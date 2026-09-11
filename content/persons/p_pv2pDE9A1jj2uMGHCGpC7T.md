---
schema: wang-person/v1
id: p_pv2pDE9A1jj2uMGHCGpC7T
status: active
merged_into: null
display_name: 王廷
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7d6dRxaDKog4FgR5UoTs8m
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E3K6YUE2kLrxomSr3rfsZY
          claim_id: c_7d6dRxaDKog4FgR5UoTs8m
          source_id: s_gNxG6LoadbE6BqckR2GKJ9
          stance: supports
          locator: CBDB:69148
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69148）
          source: &a1
            id: s_gNxG6LoadbE6BqckR2GKJ9
            source_type: api_record
            title: 中国历代人物传记资料库：王廷（CBDB 69148）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69148&o=json
            external_identifier: CBDB:69148
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.126Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_wHwDouyfF9NADqrg2TzmGR
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1589年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FyWMg4NkcnDVrkXMJke9K9
          claim_id: c_wHwDouyfF9NADqrg2TzmGR
          source_id: s_gNxG6LoadbE6BqckR2GKJ9
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
        id: c_EuRFsYZhNAZeD8PXGXhzS1
        subject_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
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
        - id: cs_N4HWqgCc9fTXoMjLy8zLLk
          claim_id: c_EuRFsYZhNAZeD8PXGXhzS1
          source_id: s_gNxG6LoadbE6BqckR2GKJ9
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
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
          source:
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
      object_person:
        id: p_56nMpgobEseCZRMmEFRumw
        status: active
        display_name: 王續之
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_s36NOFEQu6lf4Sx_6e0Um9
        subject_person_id: p_6AWFkDwvMEx3gmWMnZMPwe
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pv2pDE9A1jj2uMGHCGpC7T
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_scV3fKCNzuQtMWFnLNf0ZD
          claim_id: c_s36NOFEQu6lf4Sx_6e0Um9
          source_id: s_SUs9UsZEYNukhuLWGV3uqc
          stance: supports
          locator: 嘉靖十一年進士登科錄:一卷，第二甲第八名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_SUs9UsZEYNukhuLWGV3uqc
            source_type: api_record
            title: 中国历代人物传记资料库：王昺（CBDB 209880）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json
            external_identifier: CBDB:209880
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.985Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6AWFkDwvMEx3gmWMnZMPwe
        status: active
        display_name: 王昺
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷 | accepted |
| death.date | 1589年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_56nMpgobEseCZRMmEFRumw | 王續之 | accepted |
| ancestors | p_6AWFkDwvMEx3gmWMnZMPwe | 王昺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昺（CBDB 209880）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=209880&o=json)
- [中国历代人物传记资料库：王廷（CBDB 69148）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69148&o=json)
- [中国历代人物传记资料库：王續之（CBDB 290827）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=290827&o=json)
