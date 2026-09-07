---
schema: wang-person/v1
id: p_YtF2rLeKPWA7sm1Z8P1kQf
status: active
merged_into: null
display_name: 王昕
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_bDqCZXM1mbTzQ7UrKc6lEM
        subject_person_id: p_YtF2rLeKPWA7sm1Z8P1kQf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕，史料所见人物。本项目依据《王伦之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_v_kJyUJuA2nPm9bw5tknWT
          claim_id: c_bDqCZXM1mbTzQ7UrKc6lEM
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_zPzun7i3uM4DfNQRFYdPkp
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:47.591Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CCTVJkT3B8QHt2inizoVP1
        subject_person_id: p_YtF2rLeKPWA7sm1Z8P1kQf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昕
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EBjVVzS4vW6Vo2ypDB3GvX
          claim_id: c_CCTVJkT3B8QHt2inizoVP1
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王纶之的儿子叫王昕
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8xbvzeo5Hhpy9reStmMw74
        subject_person_id: p_ECnFVPUvYxpzMpJfxqvQHK
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_YtF2rLeKPWA7sm1Z8P1kQf
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D1sMJAihV1J6ZZFQZADoxq
          claim_id: c_8xbvzeo5Hhpy9reStmMw74
          source_id: s_zPzun7i3uM4DfNQRFYdPkp
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 王纶之的儿子叫王昕
          interpretation_note: null
          source:
            id: s_zPzun7i3uM4DfNQRFYdPkp
            source_type: website
            title: 中文维基百科：王伦之
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:26:47.591Z
            metadata_json: null
      object_person:
        id: p_ECnFVPUvYxpzMpJfxqvQHK
        status: active
        display_name: 王伦之
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王昕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王昕，史料所见人物。本项目依据《王伦之》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王昕 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_ECnFVPUvYxpzMpJfxqvQHK | 王伦之 | accepted |

## 外部来源

- [中文维基百科：王伦之](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BC%A6%E4%B9%8B)
