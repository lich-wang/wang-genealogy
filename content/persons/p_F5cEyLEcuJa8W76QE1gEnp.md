---
schema: wang-person/v1
id: p_F5cEyLEcuJa8W76QE1gEnp
status: active
merged_into: null
display_name: 王媼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_5NkOwjx5iHEOY1VO9rCq3i
        subject_person_id: p_F5cEyLEcuJa8W76QE1gEnp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媼，史料所见人物。本项目依据《王迺始》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DQtNZULXyiQ8AJC4fgpSbf
          claim_id: c_5NkOwjx5iHEOY1VO9rCq3i
          source_id: s_zTkaUf8PcUScZqd5uJmggc
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zTkaUf8PcUScZqd5uJmggc
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:25.343Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_28h1xLxBhEMwXYqtE2cvRs
        subject_person_id: p_F5cEyLEcuJa8W76QE1gEnp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王媼
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_R7mnYgac2hK6exXnFWRGSh
          claim_id: c_28h1xLxBhEMwXYqtE2cvRs
          source_id: s_zTkaUf8PcUScZqd5uJmggc
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_uftF4H18hZJD9ZypMFJhGt
        subject_person_id: p_F5cEyLEcuJa8W76QE1gEnp
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_cu518yUajb6WPKMAjP8xPC
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FAFd5sRvDfL7E2rKtjTdez
          claim_id: c_uftF4H18hZJD9ZypMFJhGt
          source_id: s_xFEpxPkqbQhyUJoVMF2Wim
          stance: supports
          locator: 条文：条文识读（娶）
          quotation: 娶蠡吾平鄉（今河北省博野县）人王妄人（王媼）
          interpretation_note: null
          source:
            id: s_xFEpxPkqbQhyUJoVMF2Wim
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:13:33.035Z
            metadata_json: null
        - id: cs_P3qc8iKQEEN47QnvnYFvnR
          claim_id: c_uftF4H18hZJD9ZypMFJhGt
          source_id: s_GWo94xYmoW8KFnT6uJLFen
          stance: supports
          locator: 条文：条文识读（娶）
          quotation: 娶蠡吾平鄉（今河北省博野县）人王妄人（王媼）
          interpretation_note: null
          source:
            id: s_GWo94xYmoW8KFnT6uJLFen
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:33.166Z
            metadata_json: null
        - id: cs_RrH161cT5orvyUvdDWtU6A
          claim_id: c_uftF4H18hZJD9ZypMFJhGt
          source_id: s_VBxZZVPo5SwVei1WsfZcSP
          stance: supports
          locator: 条文：条文识读（spouse）
          quotation: 王迺始娶蠡吾平鄉（今河北省博野县）人王妄人（王媼）
          interpretation_note: null
          source:
            id: s_VBxZZVPo5SwVei1WsfZcSP
            source_type: website
            title: 中文维基百科：王迺始
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:54:59.175Z
            metadata_json: null
      object_person:
        id: p_cu518yUajb6WPKMAjP8xPC
        status: active
        display_name: 王乃始
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王媼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王媼，史料所见人物。本项目依据《王迺始》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王媼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_cu518yUajb6WPKMAjP8xPC | 王乃始 | accepted |

## 外部来源

- [中文维基百科：王迺始](https://zh.wikipedia.org/wiki/%E7%8E%8B%E8%BF%BA%E5%A7%8B)
