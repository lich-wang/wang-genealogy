---
schema: wang-person/v1
id: p_ENQ7n9UZn7NQkd2E5f3qfY
status: active
merged_into: null
display_name: 王懷感
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_XrsCYQ4hM3pmBH1wZnMrCD
        subject_person_id: p_ENQ7n9UZn7NQkd2E5f3qfY
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷感
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_LGrKtyDLR992kJ4z5Vdazj
          claim_id: c_XrsCYQ4hM3pmBH1wZnMrCD
          source_id: s_yKHLKiAAu5ZhCejCr5SWmv
          stance: supports
          locator: CBDB:150542
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150542）
          source: &a1
            id: s_yKHLKiAAu5ZhCejCr5SWmv
            source_type: api_record
            title: 中国历代人物传记资料库：王懷感（CBDB 150542）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150542&o=json
            external_identifier: CBDB:150542
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.819Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4JGhHs3NtbqEEpxTsnRBxc
        subject_person_id: p_ENQ7n9UZn7NQkd2E5f3qfY
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王懷感，史料所见人物。本项目依据《中国历代人物传记资料库：王懷感（CBDB 150542）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_BLqfQliT_1eZw3vbEoPYSA
          claim_id: c_4JGhHs3NtbqEEpxTsnRBxc
          source_id: s_yKHLKiAAu5ZhCejCr5SWmv
          stance: supports
          locator: CBDB:150542
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_YQiJu8jn0U5xIAdZulJgtP
        subject_person_id: p_V6Vh65UhA29fnCXkG6WPsA
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ENQ7n9UZn7NQkd2E5f3qfY
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_q8kvJ62nbZuQu3V7Zti_Jh
          claim_id: c_YQiJu8jn0U5xIAdZulJgtP
          source_id: s_yKHLKiAAu5ZhCejCr5SWmv
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 68：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_V6Vh65UhA29fnCXkG6WPsA
        status: active
        display_name: 王某通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王懷感

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王懷感 | accepted |
| bio.summary | 王懷感，史料所见人物。本项目依据《中国历代人物传记资料库：王懷感（CBDB 150542）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_V6Vh65UhA29fnCXkG6WPsA | 王某通 | accepted |

## 外部来源

- [中国历代人物传记资料库：王懷感（CBDB 150542）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150542&o=json)
