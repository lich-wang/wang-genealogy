---
schema: wang-person/v1
id: p_e2ez7TvzE5dLzhCbL1ZhNE
status: active
merged_into: null
display_name: 王惪勷
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kuHadnNXEDLU1agcij81Rn
        subject_person_id: p_e2ez7TvzE5dLzhCbL1ZhNE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惪勷
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Geqx6u4wkuFQuPryEmHatg
          claim_id: c_kuHadnNXEDLU1agcij81Rn
          source_id: s_fi4tuCNMkwrB3WdBYeJ3px
          stance: supports
          locator: CBDB:637905
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637905）
          source: &a1
            id: s_fi4tuCNMkwrB3WdBYeJ3px
            source_type: api_record
            title: 中国历代人物传记资料库：王惪勷（CBDB 637905）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637905&o=json
            external_identifier: CBDB:637905
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.455Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SebNXMZKWWfE7wGUvkz6P3
        subject_person_id: p_e2ez7TvzE5dLzhCbL1ZhNE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王惪勷，清人物。籍贯貴陽府，曾任訓導。（中国历代人物传记资料库 CBDB 637905）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_u8pz_rXjiwQCRwArrOFSlB
          claim_id: c_SebNXMZKWWfE7wGUvkz6P3
          source_id: s_fi4tuCNMkwrB3WdBYeJ3px
          stance: supports
          locator: CBDB:637905
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

# 王惪勷

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王惪勷 | accepted |
| bio.summary | 王惪勷，清人物。籍贯貴陽府，曾任訓導。（中国历代人物传记资料库 CBDB 637905） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王惪勷（CBDB 637905）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637905&o=json)
