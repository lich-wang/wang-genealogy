---
schema: wang-person/v1
id: p_f5HDaeimCAPXFME3b5BWep
status: active
merged_into: null
display_name: 王智
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7U7aMmWqWLL2LL6xK75KEQ
        subject_person_id: p_f5HDaeimCAPXFME3b5BWep
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王智
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_1fJ1S4SMksH7Qu26ozEMhs
          claim_id: c_7U7aMmWqWLL2LL6xK75KEQ
          source_id: s_Age4vQ8iGxLttrSeChk9Fp
          stance: supports
          locator: CBDB:165867
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（165867）
          source: &a1
            id: s_Age4vQ8iGxLttrSeChk9Fp
            source_type: api_record
            title: 中国历代人物传记资料库：王智（CBDB 165867）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165867&o=json
            external_identifier: CBDB:165867
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.977Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_PhudjyJsa7qthcgb4MwphZ
        subject_person_id: p_f5HDaeimCAPXFME3b5BWep
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_C7LNC9XLPppbwT8x7WK8QE
          claim_id: c_PhudjyJsa7qthcgb4MwphZ
          source_id: s_Age4vQ8iGxLttrSeChk9Fp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_COdDvi-APcFZEzLMTAe4xT
        subject_person_id: p_9vp8SfkcaLh3BHQ66WSVvS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f5HDaeimCAPXFME3b5BWep
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HJrIlt0S7vHFl4pFWp-oAm
          claim_id: c_COdDvi-APcFZEzLMTAe4xT
          source_id: s_NUKaMQLG4Qa6pFRsxP79dG
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_NUKaMQLG4Qa6pFRsxP79dG
            source_type: api_record
            title: 中国历代人物传记资料库：王文林（CBDB 190754）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json
            external_identifier: CBDB:190754
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.335Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9vp8SfkcaLh3BHQ66WSVvS
        status: active
        display_name: 王文林
        merged_into_person_id: null
  children:
    - claim:
        id: c_7sVKlwiHNubenV9-GcT0gn
        subject_person_id: p_f5HDaeimCAPXFME3b5BWep
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_GyDFNM8h3KCT9MHvDUXLC2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vfg_tjTmXjcGPdw4-2LoXS
          claim_id: c_7sVKlwiHNubenV9-GcT0gn
          source_id: s_i7VeDGRjr3jLVssGMAx7FC
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yuanhe3：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_i7VeDGRjr3jLVssGMAx7FC
            source_type: api_record
            title: 中国历代人物传记资料库：王惟誠（CBDB 143228）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json
            external_identifier: CBDB:143228
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.618Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GyDFNM8h3KCT9MHvDUXLC2
        status: active
        display_name: 王惟誠
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王智

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王智 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_9vp8SfkcaLh3BHQ66WSVvS | 王文林 | accepted |
| children | p_GyDFNM8h3KCT9MHvDUXLC2 | 王惟誠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王惟誠（CBDB 143228）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143228&o=json)
- [中国历代人物传记资料库：王文林（CBDB 190754）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190754&o=json)
- [中国历代人物传记资料库：王智（CBDB 165867）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=165867&o=json)
