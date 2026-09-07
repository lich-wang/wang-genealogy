---
schema: wang-person/v1
id: p_FLJYK3XdzB53ifFwVmskEK
status: active
merged_into: null
display_name: 王纪明
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_h5vUz6R7CNQfCiNfXRk6bJ
        subject_person_id: p_FLJYK3XdzB53ifFwVmskEK
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纪明（1910年—1978年），史料所见人物。本项目依据《清华大学校史馆：王国维——清华国学院第一位导师》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_EautB2od_i1E1AQcEjW_l3
          claim_id: c_h5vUz6R7CNQfCiNfXRk6bJ
          source_id: s_APBwcjwov853xnCXkGKzhJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_APBwcjwov853xnCXkGKzhJ
            source_type: website
            title: 清华大学校史馆：王国维——清华国学院第一位导师
            creator: 钱丹红
            publisher: 清华大学校史馆
            published_at_text: null
            canonical_url: https://xsg.tsinghua.edu.cn/info/1004/2264.htm
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:59.843Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_2vjYKG1tDDpvgaJci1Ctxq
        subject_person_id: p_FLJYK3XdzB53ifFwVmskEK
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1910年
            calendar_note: null
            earliest: 1910-01-01
            latest: 1910-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_kVTvGbTj8niZ6CcfV6psG4
          claim_id: c_2vjYKG1tDDpvgaJci1Ctxq
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_sSQYA4gU12D6DkjbWLQ84s
        subject_person_id: p_FLJYK3XdzB53ifFwVmskEK
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1978年
            calendar_note: null
            earliest: 1978-01-01
            latest: 1978-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_iYiPd8rEWurbqDx6ctHn4r
          claim_id: c_sSQYA4gU12D6DkjbWLQ84s
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: null
          source:
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_G6BiGpdq9o7U38Z5D1YTNt
        subject_person_id: p_FLJYK3XdzB53ifFwVmskEK
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王纪明
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_J44LWv4Z1i5wAisVSXRnME
          claim_id: c_G6BiGpdq9o7U38Z5D1YTNt
          source_id: s_APBwcjwov853xnCXkGKzhJ
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
        - id: cs_bbCTRhgJsJQEu4KHc4qu4q
          claim_id: c_G6BiGpdq9o7U38Z5D1YTNt
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_MjiJthKxHvJPA4KMDfWoUm
        subject_person_id: p_CRTiUFbJJTt5FqJL9A5xNr
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_FLJYK3XdzB53ifFwVmskEK
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_ZGzgEV2NA3okJwhJBDZDiU
          claim_id: c_MjiJthKxHvJPA4KMDfWoUm
          source_id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
          stance: supports
          locator: 家族成员
          quotation: 四子王纪明（1910—1978）。
          interpretation_note: null
          source:
            id: s_Cnnrjz2Tj7Fm8vbeTxuviJ
            source_type: website
            title: 中国作家网：国学大师王国维的悲情家族
            creator: null
            publisher: 中国作家网
            published_at_text: null
            canonical_url: https://www.chinawriter.com.cn/2013/2013-12-31/186877.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:06:00.018Z
            metadata_json: null
      object_person:
        id: p_CRTiUFbJJTt5FqJL9A5xNr
        status: active
        display_name: 王國維
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王纪明

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王纪明（1910年—1978年），史料所见人物。本项目依据《清华大学校史馆：王国维——清华国学院第一位导师》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1910年 | accepted |
| death.date | 1978年 | accepted |
| name.primary | 王纪明 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_CRTiUFbJJTt5FqJL9A5xNr | 王國維 | accepted |

## 外部来源

- [清华大学校史馆：王国维——清华国学院第一位导师](https://xsg.tsinghua.edu.cn/info/1004/2264.htm)
- [中国作家网：国学大师王国维的悲情家族](https://www.chinawriter.com.cn/2013/2013-12-31/186877.html)
