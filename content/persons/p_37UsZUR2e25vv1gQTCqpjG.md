---
schema: wang-person/v1
id: p_37UsZUR2e25vv1gQTCqpjG
status: active
merged_into: null
display_name: 王沈
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_VevZRJF5MBh3bSd5li4hB0
        subject_person_id: p_37UsZUR2e25vv1gQTCqpjG
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沈，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_VhqPaUR3Wp09o-QlfBMGEK
          claim_id: c_VevZRJF5MBh3bSd5li4hB0
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_8v3HEWJMg8p43rd4zxNR9r
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:15.556Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_3aJtdCpeXgtuc8xHZ9uDZe
        subject_person_id: p_37UsZUR2e25vv1gQTCqpjG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王沈
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3HAFfYntksFyr4cxjSHcH5
          claim_id: c_3aJtdCpeXgtuc8xHZ9uDZe
          source_id: s_8v3HEWJMg8p43rd4zxNR9r
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8LtY5FzNjA6zckc2kwXkct
        subject_person_id: p_VvYxpLBPWvkLS9tqQFhvMP
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_37UsZUR2e25vv1gQTCqpjG
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_NsTYcqtFj1Yk4rnVPr8xwE
          claim_id: c_8LtY5FzNjA6zckc2kwXkct
          source_id: s_reaTfWx18D3nBWzMLvY2eV
          stance: supports
          locator: 《晋书》王沈传
          quotation: 王沉字處道，太原晉陽人也。祖柔……父機，魏東郡太守。
          interpretation_note: null
          source:
            id: s_reaTfWx18D3nBWzMLvY2eV
            source_type: book
            title: 识典古籍：《晋书》王沈传
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/LS0005/chapter/LS0005_667
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:15:01.384Z
            metadata_json: null
      object_person:
        id: p_VvYxpLBPWvkLS9tqQFhvMP
        status: active
        display_name: 王機
        merged_into_person_id: null
  children:
    - claim:
        id: c_WnTU7ksFryWHHVPSJJtSjK
        subject_person_id: p_37UsZUR2e25vv1gQTCqpjG
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_zZKVcF87pDBen7HbsJPftV
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dSxSixWEvUFnDLqkdDEHWM
          claim_id: c_WnTU7ksFryWHHVPSJJtSjK
          source_id: s_reaTfWx18D3nBWzMLvY2eV
          stance: supports
          locator: 《晋书》王沈传
          quotation: 子浚嗣。浚字彭祖……遂生浚。
          interpretation_note: null
          source:
            id: s_reaTfWx18D3nBWzMLvY2eV
            source_type: book
            title: 识典古籍：《晋书》王沈传
            creator: null
            publisher: 识典古籍
            published_at_text: null
            canonical_url: https://www.shidianguji.com/book/LS0005/chapter/LS0005_667
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:15:01.384Z
            metadata_json: null
      object_person:
        id: p_zZKVcF87pDBen7HbsJPftV
        status: active
        display_name: 王浚
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_iMd3mYK7552EnJ4nfxETyj
        subject_person_id: p_37UsZUR2e25vv1gQTCqpjG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_FEwdbRFzcoh7gV1FB3Vm6o
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_X2ubWittRJ6SQSWDVWG5wf
          claim_id: c_iMd3mYK7552EnJ4nfxETyj
          source_id: s_aw8xd6LrHMNCx64JpGaxGe
          stance: supports
          locator: 条文：条文识读（從孫）（2世）
          quotation: 王道素，王沈從孫
          interpretation_note: null
          source:
            id: s_aw8xd6LrHMNCx64JpGaxGe
            source_type: website
            title: 中文维基百科：太原王氏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:03.601Z
            metadata_json: null
      object_person:
        id: p_FEwdbRFzcoh7gV1FB3Vm6o
        status: active
        display_name: 王道素
        merged_into_person_id: null
  other: []
---

# 王沈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王沈，史料所见人物。本项目依据《太原王氏》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王沈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VvYxpLBPWvkLS9tqQFhvMP | 王機 | accepted |
| children | p_zZKVcF87pDBen7HbsJPftV | 王浚 | accepted |
| descendants | p_FEwdbRFzcoh7gV1FB3Vm6o | 王道素 | accepted |

## 外部来源

- [识典古籍：《晋书》王沈传](https://www.shidianguji.com/book/LS0005/chapter/LS0005_667)
- [中文维基百科：太原王氏](https://zh.wikipedia.org/wiki/%E5%A4%AA%E5%8E%9F%E7%8E%8B%E6%B0%8F)
