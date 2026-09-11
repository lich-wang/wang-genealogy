---
schema: wang-person/v1
id: p_UKn461nMytwbp724mTk5J2
status: active
merged_into: null
display_name: 王恩向
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_TwHaFj2ZG5hLEGQ5RnhPmh
        subject_person_id: p_UKn461nMytwbp724mTk5J2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩向
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_E57VHtHFvJRKorduyyjENw
          claim_id: c_TwHaFj2ZG5hLEGQ5RnhPmh
          source_id: s_UQFpwKsAiCzGmyaFZ6Kwyh
          stance: supports
          locator: CBDB:527041
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（527041）
          source: &a1
            id: s_UQFpwKsAiCzGmyaFZ6Kwyh
            source_type: api_record
            title: 中国历代人物传记资料库：王恩向（CBDB 527041）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527041&o=json
            external_identifier: CBDB:527041
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.339Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JvQJV7Yv5U4TJ63TjGDXZK
        subject_person_id: p_UKn461nMytwbp724mTk5J2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王恩向，史料所见人物。本项目依据《中国历代人物传记资料库：王恩向（CBDB 527041）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_eFWnU5Afb3QYa6U07J0Uw7
          claim_id: c_JvQJV7Yv5U4TJ63TjGDXZK
          source_id: s_UQFpwKsAiCzGmyaFZ6Kwyh
          stance: supports
          locator: CBDB:527041
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_tnSI6-v07Nw5e3d1xa4vN6
        subject_person_id: p_sXg5jBkPho8Nr4m51NBBrD
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_UKn461nMytwbp724mTk5J2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o9Ht0sKAYd-HQkvFycevB3
          claim_id: c_tnSI6-v07Nw5e3d1xa4vN6
          source_id: s_UQFpwKsAiCzGmyaFZ6Kwyh
          stance: supports
          locator: 人名權威資料（中央研究院歷史語言研究所），13203：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sXg5jBkPho8Nr4m51NBBrD
        status: active
        display_name: 王鴻儀
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王恩向

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王恩向 | accepted |
| bio.summary | 王恩向，史料所见人物。本项目依据《中国历代人物传记资料库：王恩向（CBDB 527041）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_sXg5jBkPho8Nr4m51NBBrD | 王鴻儀 | accepted |

## 外部来源

- [中国历代人物传记资料库：王恩向（CBDB 527041）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=527041&o=json)
