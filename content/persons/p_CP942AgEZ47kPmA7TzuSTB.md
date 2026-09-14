---
schema: wang-person/v1
id: p_CP942AgEZ47kPmA7TzuSTB
status: active
merged_into: null
display_name: 王格
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_DiGL3zdyP3CvXXGvpfovZH
        subject_person_id: p_CP942AgEZ47kPmA7TzuSTB
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_xyo4WbACVvxSNZ17sHrrGF
          claim_id: c_DiGL3zdyP3CvXXGvpfovZH
          source_id: s_8PfWvW6xu3MnpaRBcsTXJT
          stance: supports
          locator: CBDB:121402
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（121402）
          source: &a1
            id: s_8PfWvW6xu3MnpaRBcsTXJT
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 121402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121402&o=json
            external_identifier: CBDB:121402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.913Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VqTecNBAf7WbA1a8ni53NP
        subject_person_id: p_CP942AgEZ47kPmA7TzuSTB
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王格，史料所见人物。本项目依据《中国历代人物传记资料库：王格（CBDB 121402）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W9vedQqibVMoCA5mu1bqcd
          claim_id: c_VqTecNBAf7WbA1a8ni53NP
          source_id: s_8PfWvW6xu3MnpaRBcsTXJT
          stance: supports
          locator: CBDB:121402
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
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
  other:
    - claim:
        id: c_Tbik0vq1Z7uDkQjQWZUn3L
        subject_person_id: p_6R94tR4BFCymhDkQ193mDd
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_CP942AgEZ47kPmA7TzuSTB
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s8a6DBdc8jveyZ7E90CJq-
          claim_id: c_Tbik0vq1Z7uDkQjQWZUn3L
          source_id: s_AZle38gV8c51LrlkYZIrZ2
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 39576 王樸）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_AZle38gV8c51LrlkYZIrZ2
            source_type: api_record
            title: 中国历代人物传记资料库：王格（CBDB 121402）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121402&o=json
            external_identifier: CBDB:121402
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_6R94tR4BFCymhDkQ193mDd
        status: active
        display_name: 王朴
        merged_into_person_id: null
---

# 王格

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王格 | accepted |
| bio.summary | 王格，史料所见人物。本项目依据《中国历代人物传记资料库：王格（CBDB 121402）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| other | p_6R94tR4BFCymhDkQ193mDd | 王朴 | accepted |

## 外部来源

- [中国历代人物传记资料库：王格（CBDB 121402）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=121402&o=json)
