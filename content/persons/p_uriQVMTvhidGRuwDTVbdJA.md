---
schema: wang-person/v1
id: p_uriQVMTvhidGRuwDTVbdJA
status: active
merged_into: null
display_name: 王昉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tWk2VwJWjDEKRQFoCkJLwt
        subject_person_id: p_uriQVMTvhidGRuwDTVbdJA
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_BTwDDkhZcuiadt8BQGfddQ
          claim_id: c_tWk2VwJWjDEKRQFoCkJLwt
          source_id: s_fmPHWvSEo6VNP7sJSDtnnK
          stance: supports
          locator: CBDB:169015
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（169015）
          source: &a1
            id: s_fmPHWvSEo6VNP7sJSDtnnK
            source_type: api_record
            title: 中国历代人物传记资料库：王昉（CBDB 169015）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169015&o=json
            external_identifier: CBDB:169015
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.005Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ERgzvQh7L355dbj9PFiziX
        subject_person_id: p_uriQVMTvhidGRuwDTVbdJA
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昉，史料所见人物。本项目依据《中国历代人物传记资料库：王昉（CBDB 169015）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_SGxDXhsJH63KGFeYo-HjJC
          claim_id: c_ERgzvQh7L355dbj9PFiziX
          source_id: s_fmPHWvSEo6VNP7sJSDtnnK
          stance: supports
          locator: CBDB:169015
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_uPyNbpbR5ju27gQc82lvvg
        subject_person_id: p_uriQVMTvhidGRuwDTVbdJA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HdtNY7KFEHTp6DiZEetbWW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Dex5dYEMW8nQ0O7O2HJl-w
          claim_id: c_uPyNbpbR5ju27gQc82lvvg
          source_id: s_MK34MFDSEeVbjumsg12iSE
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Kaiyuan128：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_MK34MFDSEeVbjumsg12iSE
            source_type: api_record
            title: 中国历代人物传记资料库：王膺（CBDB 143710）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143710&o=json
            external_identifier: CBDB:143710
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.628Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_HdtNY7KFEHTp6DiZEetbWW
        status: active
        display_name: 王膺
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昉 | accepted |
| bio.summary | 王昉，史料所见人物。本项目依据《中国历代人物传记资料库：王昉（CBDB 169015）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_HdtNY7KFEHTp6DiZEetbWW | 王膺 | accepted |

## 外部来源

- [中国历代人物传记资料库：王昉（CBDB 169015）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=169015&o=json)
- [中国历代人物传记资料库：王膺（CBDB 143710）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=143710&o=json)
