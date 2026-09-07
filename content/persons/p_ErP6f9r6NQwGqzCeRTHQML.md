---
schema: wang-person/v1
id: p_ErP6f9r6NQwGqzCeRTHQML
status: active
merged_into: null
display_name: 王抃
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_hcSlL0LUH5cPGax2rKhVbJ
        subject_person_id: p_ErP6f9r6NQwGqzCeRTHQML
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抃（卒于1702年），史料所见人物。本项目依据《澎湃新闻：王时敏家族与娄东画派》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_dqNVp8ToSOCHGYMQIWJ_QF
          claim_id: c_hcSlL0LUH5cPGax2rKhVbJ
          source_id: s_MUMErPUnND48gmdEE7ME1k
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_MUMErPUnND48gmdEE7ME1k
            source_type: website
            title: 澎湃新闻：王时敏家族与娄东画派
            creator: null
            publisher: 澎湃新闻
            published_at_text: null
            canonical_url: https://www.thepaper.cn/newsDetail_forward_30415911
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:48.434Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_rQwYdpVEt8Z1fSPUBPwQ1d
        subject_person_id: p_ErP6f9r6NQwGqzCeRTHQML
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1702年
            calendar_note: null
            earliest: 1702-01-01
            latest: 1702-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aR9Bzg1dfHr8QoZsmXZC6i
          claim_id: c_rQwYdpVEt8Z1fSPUBPwQ1d
          source_id: s_MUMErPUnND48gmdEE7ME1k
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
        id: c_MVqVPXQD7vxHi31nJa3Dg4
        subject_person_id: p_ErP6f9r6NQwGqzCeRTHQML
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王抃
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FMwQcK72nWgt9QdJTNn8Gy
          claim_id: c_MVqVPXQD7vxHi31nJa3Dg4
          source_id: s_MUMErPUnND48gmdEE7ME1k
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_MUMErPUnND48gmdEE7ME1k
            source_type: website
            title: 澎湃新闻：王时敏家族与娄东画派
            creator: null
            publisher: 澎湃新闻
            published_at_text: null
            canonical_url: https://www.thepaper.cn/newsDetail_forward_30415911
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:48.434Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8RN2uwATZivGsMmWNNKTFD
        subject_person_id: p_Xs7SSNKR6whA118xZvjxN2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_ErP6f9r6NQwGqzCeRTHQML
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_RFL6ZjWa972PRCaXdnAGPa
          claim_id: c_8RN2uwATZivGsMmWNNKTFD
          source_id: s_MUMErPUnND48gmdEE7ME1k
          stance: supports
          locator: 家庭段
          quotation: 王挺、王揆、王撰、王持、王抃（1628—1702）、王扶、王摅、王掞先后出生。
          interpretation_note: null
          source:
            id: s_MUMErPUnND48gmdEE7ME1k
            source_type: website
            title: 澎湃新闻：王时敏家族与娄东画派
            creator: null
            publisher: 澎湃新闻
            published_at_text: null
            canonical_url: https://www.thepaper.cn/newsDetail_forward_30415911
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:48.434Z
            metadata_json: null
      object_person:
        id: p_Xs7SSNKR6whA118xZvjxN2
        status: active
        display_name: 王時敏
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王抃

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王抃（卒于1702年），史料所见人物。本项目依据《澎湃新闻：王时敏家族与娄东画派》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1702年 | accepted |
| name.primary | 王抃 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xs7SSNKR6whA118xZvjxN2 | 王時敏 | accepted |

## 外部来源

- [澎湃新闻：王时敏家族与娄东画派](https://www.thepaper.cn/newsDetail_forward_30415911)
