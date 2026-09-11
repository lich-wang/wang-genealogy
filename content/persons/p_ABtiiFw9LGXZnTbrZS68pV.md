---
schema: wang-person/v1
id: p_ABtiiFw9LGXZnTbrZS68pV
status: active
merged_into: null
display_name: 王澐
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_49UaBfLUJd2dmTq5sUYGVC
        subject_person_id: p_ABtiiFw9LGXZnTbrZS68pV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_baS4MVPRjF28budUWDTNSG
          claim_id: c_49UaBfLUJd2dmTq5sUYGVC
          source_id: s_KLaqPeB83sXFMGwzFcAFHq
          stance: supports
          locator: CBDB:385799
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（385799）
          source: &a1
            id: s_KLaqPeB83sXFMGwzFcAFHq
            source_type: api_record
            title: 中国历代人物传记资料库：王澐（CBDB 385799）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385799&o=json
            external_identifier: CBDB:385799
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:21.883Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9NRKuZaH8Gt86B4H8DcrjP
        subject_person_id: p_ABtiiFw9LGXZnTbrZS68pV
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王澐，史料所见人物。本项目依据《中国历代人物传记资料库：王澐（CBDB 385799）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tjjQiH8fOFFkHVd3OyJb0T
          claim_id: c_9NRKuZaH8Gt86B4H8DcrjP
          source_id: s_KLaqPeB83sXFMGwzFcAFHq
          stance: supports
          locator: CBDB:385799
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
  ancestors:
    - claim:
        id: c_Km3nzbGjOihJYtQghi6KDg
        subject_person_id: p_35wd94gwG3pzokf4a6CedM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_ABtiiFw9LGXZnTbrZS68pV
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_0HtTgCLVWuEBR8HYxOIu6W
          claim_id: c_Km3nzbGjOihJYtQghi6KDg
          source_id: s_jnU1wrcswMwACQgeP5fatf
          stance: supports
          locator: 全宋文，卷 5677：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jnU1wrcswMwACQgeP5fatf
            source_type: api_record
            title: 中国历代人物传记资料库：王登（CBDB 10686）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json
            external_identifier: CBDB:10686
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.540Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_35wd94gwG3pzokf4a6CedM
        status: active
        display_name: 王登
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王澐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王澐 | accepted |
| bio.summary | 王澐，史料所见人物。本项目依据《中国历代人物传记资料库：王澐（CBDB 385799）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| ancestors | p_35wd94gwG3pzokf4a6CedM | 王登 | accepted |

## 外部来源

- [中国历代人物传记资料库：王登（CBDB 10686）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=10686&o=json)
- [中国历代人物传记资料库：王澐（CBDB 385799）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=385799&o=json)
