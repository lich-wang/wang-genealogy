---
schema: wang-person/v1
id: p_f98QE6Q3ZRPwPYfZj3DRmu
status: active
merged_into: null
display_name: 王幸胡
cbdb_id: 168573
revision: 2
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZrGqJZnb4aamoPhhQDMq5h
        subject_person_id: p_f98QE6Q3ZRPwPYfZj3DRmu
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幸胡，史料所见人物。本项目依据《中国历代人物传记资料库：王幸胡（CBDB 168573）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 6
      sources:
        - id: cs_UFzbtg63uyEEKvECWdbBy3
          claim_id: c_ZrGqJZnb4aamoPhhQDMq5h
          source_id: s_3MzU7aJrBsQwbq5txVtDjL
          stance: supports
          locator: CBDB:168573
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_3MzU7aJrBsQwbq5txVtDjL
            source_type: api_record
            title: 中国历代人物传记资料库：王幸胡（CBDB 168573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168573&o=json
            external_identifier: CBDB:168573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_4PWBKhhRMdEJ5rt36vP31t
        subject_person_id: p_f98QE6Q3ZRPwPYfZj3DRmu
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王幸胡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_uaUvZWSQ1p13cwJqF1Jesf
          claim_id: c_4PWBKhhRMdEJ5rt36vP31t
          source_id: s_3MzU7aJrBsQwbq5txVtDjL
          stance: supports
          locator: CBDB:168573
          quotation: null
          interpretation_note: CBDB 2026-08-29 Luna 审核通过人物批量导入（2301-2400）｜历史性依据：CBDB 朝代 = 唐
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_b6RhpZ5iFicBXIeVeLTSGa
        subject_person_id: p_YsPayRFH97RfRhHgyPnWty
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_f98QE6Q3ZRPwPYfZj3DRmu
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BngYbP44jjqtj1upgPs6EC
          claim_id: c_b6RhpZ5iFicBXIeVeLTSGa
          source_id: s_3MzU7aJrBsQwbq5txVtDjL
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Qianfu8：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_3MzU7aJrBsQwbq5txVtDjL
            source_type: api_record
            title: 中国历代人物传记资料库：王幸胡（CBDB 168573）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168573&o=json
            external_identifier: CBDB:168573
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:54.741Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_YsPayRFH97RfRhHgyPnWty
        status: active
        display_name: 王幼虞
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王幸胡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王幸胡，史料所见人物。本项目依据《中国历代人物传记资料库：王幸胡（CBDB 168573）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王幸胡 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_YsPayRFH97RfRhHgyPnWty | 王幼虞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王幸胡（CBDB 168573）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=168573&o=json)
