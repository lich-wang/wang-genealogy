---
schema: wang-person/v1
id: p_DXUs17WL78tah1YFCAFMcd
status: active
merged_into: null
display_name: 王爽
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_5HdyWdWPmYkTVPrbv6eHNM
        subject_person_id: p_DXUs17WL78tah1YFCAFMcd
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爽
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_afedjwLa17nL3VBvx3PFWs
          claim_id: c_5HdyWdWPmYkTVPrbv6eHNM
          source_id: s_QbJXaSXsq2BrGYAuvuTPgo
          stance: supports
          locator: CBDB:140881
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（140881）
          source: &a1
            id: s_QbJXaSXsq2BrGYAuvuTPgo
            source_type: api_record
            title: 中国历代人物传记资料库：王爽（CBDB 140881）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140881&o=json
            external_identifier: CBDB:140881
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.535Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_nQ49QwNiX6GcgA92CXHpP5
        subject_person_id: p_DXUs17WL78tah1YFCAFMcd
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 675年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UM9UBhQLgs3cRC7yaXUsPd
          claim_id: c_nQ49QwNiX6GcgA92CXHpP5
          source_id: s_QbJXaSXsq2BrGYAuvuTPgo
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_opC1kxMn6b6KHQ7kSy4i2a
        subject_person_id: p_DXUs17WL78tah1YFCAFMcd
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 745年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Cd384Qp9L6QhPsZMXzayHe
          claim_id: c_opC1kxMn6b6KHQ7kSy4i2a
          source_id: s_QbJXaSXsq2BrGYAuvuTPgo
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
        id: c_pi9ZsFcVrToskW6pmScaZU
        subject_person_id: p_DXUs17WL78tah1YFCAFMcd
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王爽（675年—745年），唐人物。籍贯河南府。（中国历代人物传记资料库 CBDB 140881）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_gTdjkP-Tp_8DFEm7yqiApX
          claim_id: c_pi9ZsFcVrToskW6pmScaZU
          source_id: s_QbJXaSXsq2BrGYAuvuTPgo
          stance: supports
          locator: CBDB:140881
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_jUUS-UP0hIdNJFS3fVTIn0
        subject_person_id: p_BtTApjgsFgyMJtB8waKAra
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DXUs17WL78tah1YFCAFMcd
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_P2xFNPegqdRayID67fAelS
          claim_id: c_jUUS-UP0hIdNJFS3fVTIn0
          source_id: s_KM4pLxHEcGb8aAa9Dvmz2g
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 76：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_KM4pLxHEcGb8aAa9Dvmz2g
            source_type: api_record
            title: 中国历代人物传记资料库：王烈（CBDB 153595）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153595&o=json
            external_identifier: CBDB:153595
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.861Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_BtTApjgsFgyMJtB8waKAra
        status: active
        display_name: 王烈
        merged_into_person_id: null
  children:
    - claim:
        id: c_j9IvbWTKvb0u-yEhatSAOA
        subject_person_id: p_DXUs17WL78tah1YFCAFMcd
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6cXiH1xDw5hDE1LEmGQi2Y
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-wY8iq2e8r7n843kVqk6Cj
          claim_id: c_j9IvbWTKvb0u-yEhatSAOA
          source_id: s_vd1TvEhynteCGMC2Twriob
          stance: supports
          locator: 唐代墓誌匯編:二卷，Tianbao 76：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_vd1TvEhynteCGMC2Twriob
            source_type: api_record
            title: 中国历代人物传记资料库：王祐（CBDB 153596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153596&o=json
            external_identifier: CBDB:153596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.862Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6cXiH1xDw5hDE1LEmGQi2Y
        status: active
        display_name: 王祐
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王爽

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王爽 | accepted |
| birth.date | 675年 | accepted |
| death.date | 745年 | accepted |
| bio.summary | 王爽（675年—745年），唐人物。籍贯河南府。（中国历代人物传记资料库 CBDB 140881） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_BtTApjgsFgyMJtB8waKAra | 王烈 | accepted |
| children | p_6cXiH1xDw5hDE1LEmGQi2Y | 王祐 | accepted |

## 外部来源

- [中国历代人物传记资料库：王烈（CBDB 153595）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153595&o=json)
- [中国历代人物传记资料库：王爽（CBDB 140881）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140881&o=json)
- [中国历代人物传记资料库：王祐（CBDB 153596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=153596&o=json)
