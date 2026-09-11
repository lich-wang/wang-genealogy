---
schema: wang-person/v1
id: p_6CudwrahAB4RDWLwREzJK9
status: active
merged_into: null
display_name: 王錡
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8ZyCDBQBU6otCga1mhGBbE
        subject_person_id: p_6CudwrahAB4RDWLwREzJK9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_e5f4t6bc3NzDzM9b1TmyLu
          claim_id: c_8ZyCDBQBU6otCga1mhGBbE
          source_id: s_BLn9G6N75YRFSviwKT82v5
          stance: supports
          locator: CBDB:640578
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640578）
          source: &a1
            id: s_BLn9G6N75YRFSviwKT82v5
            source_type: api_record
            title: 中国历代人物传记资料库：王錡（CBDB 640578）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640578&o=json
            external_identifier: CBDB:640578
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.141Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_6yb1VBR8KVvZkBmPX2hrQv
        subject_person_id: p_6CudwrahAB4RDWLwREzJK9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錡，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640578）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Taf7jjGjN4pvjjep-0l30F
          claim_id: c_6yb1VBR8KVvZkBmPX2hrQv
          source_id: s_BLn9G6N75YRFSviwKT82v5
          stance: supports
          locator: CBDB:640578
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王錡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錡 | accepted |
| bio.summary | 王錡，清人物。籍贯上元，入仕監生，曾任典史。（中国历代人物传记资料库 CBDB 640578） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錡（CBDB 640578）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640578&o=json)
