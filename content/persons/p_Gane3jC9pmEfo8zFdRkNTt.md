---
schema: wang-person/v1
id: p_Gane3jC9pmEfo8zFdRkNTt
status: active
merged_into: null
display_name: 王持
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_f9eIJ5jwBR4zCYaP-8cFAd
        subject_person_id: p_Gane3jC9pmEfo8zFdRkNTt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王持（卒于1658年），史料所见人物。本项目依据《澎湃新闻：王时敏家族与娄东画派》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YGy-ke_1AGq3Fu2giBQXYm
          claim_id: c_f9eIJ5jwBR4zCYaP-8cFAd
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
        id: c_2TkhoG6UCEyzpMSxM9k8AN
        subject_person_id: p_Gane3jC9pmEfo8zFdRkNTt
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1658年
            calendar_note: null
            earliest: 1658-01-01
            latest: 1658-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_FKGjA7Q69mtW74ahBPePig
          claim_id: c_2TkhoG6UCEyzpMSxM9k8AN
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
        id: c_KF6yMSU9ARJm1usZ7jR9E1
        subject_person_id: p_Gane3jC9pmEfo8zFdRkNTt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王持
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_4TQDRQ65FhAX2tL8GJea1S
          claim_id: c_KF6yMSU9ARJm1usZ7jR9E1
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
        id: c_NyeC952rwWD5FEGCv62DLa
        subject_person_id: p_Xs7SSNKR6whA118xZvjxN2
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Gane3jC9pmEfo8zFdRkNTt
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_nqFLNGfYr2WkkAiPUey9Q6
          claim_id: c_NyeC952rwWD5FEGCv62DLa
          source_id: s_MUMErPUnND48gmdEE7ME1k
          stance: supports
          locator: 家庭段
          quotation: 王挺、王揆、王撰、王持（1627—1658）、王抃、王扶、王摅、王掞先后出生。
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

# 王持

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王持（卒于1658年），史料所见人物。本项目依据《澎湃新闻：王时敏家族与娄东画派》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| death.date | 1658年 | accepted |
| name.primary | 王持 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_Xs7SSNKR6whA118xZvjxN2 | 王時敏 | accepted |

## 外部来源

- [澎湃新闻：王时敏家族与娄东画派](https://www.thepaper.cn/newsDetail_forward_30415911)
