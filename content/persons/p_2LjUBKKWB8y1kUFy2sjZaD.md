---
schema: wang-person/v1
id: p_2LjUBKKWB8y1kUFy2sjZaD
status: active
merged_into: null
display_name: 王掞
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3gMJ_SwSx9ykZS09H0RydX
        subject_person_id: p_2LjUBKKWB8y1kUFy2sjZaD
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掞，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 4
      sources:
        - id: cs_OYKA9-ZMue7R89saZzAcD6
          claim_id: c_3gMJ_SwSx9ykZS09H0RydX
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_pEtFG361ZiaauEMGpD9TcR
        subject_person_id: p_2LjUBKKWB8y1kUFy2sjZaD
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王掞
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_oxiEhC9XM9WcZRq5LeYo1p
          claim_id: c_pEtFG361ZiaauEMGpD9TcR
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: Q15902501
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_UPgSFtEf5CMKALAXpu5mVL
        subject_person_id: p_Xs7SSNKR6whA118xZvjxN2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_2LjUBKKWB8y1kUFy2sjZaD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_J16jpUY4133WGQwufKBp7V
          claim_id: c_UPgSFtEf5CMKALAXpu5mVL
          source_id: s_JrZ38wtSfjchSjwE411t3z
          stance: supports
          locator: 条文：条文识读（子）
          quotation: 康熙九年（1670年），八子王掞與爱孫王原祁同中进士。
          interpretation_note: null
          source:
            id: s_JrZ38wtSfjchSjwE411t3z
            source_type: website
            title: 中文维基百科：王时敏
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%B6%E6%95%8F
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:57:09.351Z
            metadata_json: null
        - id: cs_fNSgWjEWhF5j8wLSZWW7zd
          claim_id: c_UPgSFtEf5CMKALAXpu5mVL
          source_id: s_MUMErPUnND48gmdEE7ME1k
          stance: supports
          locator: 家庭段
          quotation: 王摅（1635—1699）、王掞（1645—1728）先后出生。
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
  ancestors:
    - claim:
        id: c_6SUNJ1JNpYRemDvHghoabP
        subject_person_id: p_b5LB8i5ZzNqTwph5kCuvrG
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_2LjUBKKWB8y1kUFy2sjZaD
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_P2NqqFdFo3VshCHjR2dT3e
          claim_id: c_6SUNJ1JNpYRemDvHghoabP
          source_id: s_xLEcAGAMcXLkcFMsmidCME
          stance: supports
          locator: 条文：条文识读（曾孫）（3世）
          quotation: 孫王時敏，工書畫。曾孫王掞，清康熙年間官至大學士。
          interpretation_note: null
          source:
            id: s_xLEcAGAMcXLkcFMsmidCME
            source_type: website
            title: 中文维基百科：王锡爵
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:05.949Z
            metadata_json: null
      object_person:
        id: p_b5LB8i5ZzNqTwph5kCuvrG
        status: active
        display_name: 王锡爵
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王掞

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王掞，史料所见人物。本项目依据《王锡爵》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王掞 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xs7SSNKR6whA118xZvjxN2 | 王時敏 | accepted |
| ancestors | p_b5LB8i5ZzNqTwph5kCuvrG | 王锡爵 | accepted |

## 外部来源

- [澎湃新闻：王时敏家族与娄东画派](https://www.thepaper.cn/newsDetail_forward_30415911)
- [中文维基百科：王时敏](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%97%B6%E6%95%8F)
- [中文维基百科：王锡爵](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%94%A1%E7%88%B5)
