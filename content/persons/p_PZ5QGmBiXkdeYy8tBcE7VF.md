---
schema: wang-person/v1
id: p_PZ5QGmBiXkdeYy8tBcE7VF
status: active
merged_into: null
display_name: 王恭
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_buE4Z9NNyGsNkbjt9sYp4S
        subject_person_id: p_PZ5QGmBiXkdeYy8tBcE7VF
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Knj2LZKRxLtJ6BkuMFDjGp
          claim_id: c_buE4Z9NNyGsNkbjt9sYp4S
          source_id: s_2A6ZNAsFCFpFcbDMm3243G
          stance: supports
          locator: CBDB:703800
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（703800）
          source: &a1
            id: s_2A6ZNAsFCFpFcbDMm3243G
            source_type: api_record
            title: 中国历代人物传记资料库：王恭（CBDB 703800）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703800&o=json
            external_identifier: CBDB:703800
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.831Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_v3r98EhfMVLavugPZH7Apf
        subject_person_id: p_PZ5QGmBiXkdeYy8tBcE7VF
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恭，史料所见人物。本项目依据《中国历代人物传记资料库：王恭（CBDB 703800）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_e6zheCeKVl7HBpOyL5qbjx
          claim_id: c_v3r98EhfMVLavugPZH7Apf
          source_id: s_2A6ZNAsFCFpFcbDMm3243G
          stance: supports
          locator: CBDB:703800
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_Vp4xx1-KlR4kf8LwtxV-DZ
        subject_person_id: p_fQ5Buk421CUuiAxyk4ogFo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PZ5QGmBiXkdeYy8tBcE7VF
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-uc65RWLHUSJHAAeXpvNig
          claim_id: c_Vp4xx1-KlR4kf8LwtxV-DZ
          source_id: s_qeG9o7wSVDqarvMicZUZAa
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_qeG9o7wSVDqarvMicZUZAa
            source_type: api_record
            title: 中国历代人物传记资料库：王茂怡（CBDB 703799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703799&o=json
            external_identifier: CBDB:703799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.632Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fQ5Buk421CUuiAxyk4ogFo
        status: active
        display_name: 王茂怡
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_ZBJDFXIAHdtGRDaSSqy7a8
        subject_person_id: p_iC9eyW5EGTjEu2z7hi9uMs
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_PZ5QGmBiXkdeYy8tBcE7VF
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MS5zba85OuTyP8ttpz9PFW
          claim_id: c_ZBJDFXIAHdtGRDaSSqy7a8
          source_id: s_uKXPADSL5E4iYQmAyG8Ru3
          stance: supports
          locator: (道光)徽州府志:十六卷卷首一卷，lgid=1160984：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_uKXPADSL5E4iYQmAyG8Ru3
            source_type: api_record
            title: 中国历代人物传记资料库：王士階（CBDB 703795）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703795&o=json
            external_identifier: CBDB:703795
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.631Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_iC9eyW5EGTjEu2z7hi9uMs
        status: active
        display_name: 王士階
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王恭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恭 | accepted |
| bio.summary | 王恭，史料所见人物。本项目依据《中国历代人物传记资料库：王恭（CBDB 703800）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_fQ5Buk421CUuiAxyk4ogFo | 王茂怡 | accepted |
| ancestors | p_iC9eyW5EGTjEu2z7hi9uMs | 王士階 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恭（CBDB 703800）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703800&o=json)
- [中国历代人物传记资料库：王茂怡（CBDB 703799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703799&o=json)
- [中国历代人物传记资料库：王士階（CBDB 703795）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=703795&o=json)
