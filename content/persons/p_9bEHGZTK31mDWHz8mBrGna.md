---
schema: wang-person/v1
id: p_9bEHGZTK31mDWHz8mBrGna
status: active
merged_into: null
display_name: 王国华
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_anCtlDeTeMj2aRy6aG5QWN
        subject_person_id: p_9bEHGZTK31mDWHz8mBrGna
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王国华（卒于1979年），史料所见人物。本项目依据《中国作家网：王国维家书中的王国华》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_788BAkdf9FgRJvnLD023Ni
          claim_id: c_anCtlDeTeMj2aRy6aG5QWN
          source_id: s_N7ar7TnZD6aBMMQoMUHjyK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_N7ar7TnZD6aBMMQoMUHjyK
            source_type: website
            title: 中国作家网：王国维家书中的王国华
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/n1/2020/0731/c419382-31805400.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_Q4PN8HnDKDj9wTSRqqqA15
        subject_person_id: p_9bEHGZTK31mDWHz8mBrGna
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1979年
            calendar_note: null
            earliest: 1979-01-01
            latest: 1979-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_HBNZLhe98EvkWvmX1SvhDn
          claim_id: c_Q4PN8HnDKDj9wTSRqqqA15
          source_id: s_N7ar7TnZD6aBMMQoMUHjyK
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_DKs2DZeQ24ghyJZnM8WjoR
        subject_person_id: p_9bEHGZTK31mDWHz8mBrGna
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王国华
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_Gg5PsYbm78GGdAGPDZ6orH
          claim_id: c_DKs2DZeQ24ghyJZnM8WjoR
          source_id: s_N7ar7TnZD6aBMMQoMUHjyK
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_N7ar7TnZD6aBMMQoMUHjyK
            source_type: website
            title: 中国作家网：王国维家书中的王国华
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/n1/2020/0731/c419382-31805400.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_buEFQeG6WoQeWH8LGGTuXe
        subject_person_id: p_iQ1km9C2raqPCH2o2kf8Kd
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_9bEHGZTK31mDWHz8mBrGna
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cN9pG5nDQnGh8LgZmFtaYv
          claim_id: c_buEFQeG6WoQeWH8LGGTuXe
          source_id: s_N7ar7TnZD6aBMMQoMUHjyK
          stance: supports
          locator: 注释·王国华
          quotation: 健，即王国华（1886-1979），字健安，王国维异母弟。
          interpretation_note: 王国华与王国维为异母兄弟，沿用库内王国维之父王乃誉作为共同父亲。
          source:
            id: s_N7ar7TnZD6aBMMQoMUHjyK
            source_type: website
            title: 中国作家网：王国维家书中的王国华
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/n1/2020/0731/c419382-31805400.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:47.143Z
            metadata_json: null
      object_person:
        id: p_iQ1km9C2raqPCH2o2kf8Kd
        status: active
        display_name: 王乃譽
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王国华

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王国华（卒于1979年），史料所见人物。本项目依据《中国作家网：王国维家书中的王国华》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1979年 | accepted |
| name.primary | 王国华 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iQ1km9C2raqPCH2o2kf8Kd | 王乃譽 | accepted |

## 外部来源

- [中国作家网：王国维家书中的王国华](https://www.chinawriter.com.cn/n1/2020/0731/c419382-31805400.html)
