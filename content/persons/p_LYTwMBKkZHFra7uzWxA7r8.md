---
schema: wang-person/v1
id: p_LYTwMBKkZHFra7uzWxA7r8
status: active
merged_into: null
display_name: 王思政
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_iQ5jxRvbGG6cv_doX6b8TS
        subject_person_id: p_LYTwMBKkZHFra7uzWxA7r8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思政：王仁祐（?—?），唐朝官员、外戚。唐高宗皇后王氏的父亲。 出身于太原王氏的分支——祁县王氏，是元魏尚书左仆射王思政曾孙。贞观年间为罗山县令。唐太宗的姑母同安长公主，是王仁祐的婶婶。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_X6rWdkY_w2MHi2VjUGwlrI
          claim_id: c_iQ5jxRvbGG6cv_doX6b8TS
          source_id: s_4ivYSGaHKf512iMKDsFqMm
          stance: supports
          locator: 导言
          quotation: 王思政：王仁祐（?—?），唐朝官员、外戚。唐高宗皇后王氏的父亲。
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_4ivYSGaHKf512iMKDsFqMm
            source_type: website
            title: 中文维基百科：王仁祐
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81%E7%A5%90
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-24T12:07:25.344Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_HH5oHChgDy61rddoMjqCGN
        subject_person_id: p_LYTwMBKkZHFra7uzWxA7r8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思政
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_upPWaNHKcSJm54HtkrZy4r
          claim_id: c_HH5oHChgDy61rddoMjqCGN
          source_id: s_4ivYSGaHKf512iMKDsFqMm
          stance: supports
          locator: Q6752417
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
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_jN9Mwx6U7wEKKHFcv6qEta
        subject_person_id: p_LYTwMBKkZHFra7uzWxA7r8
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_pw5PbWZzfQQNgNYXwrhd1t
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_U5gbmDzb9wk6V7CDExVMjW
          claim_id: c_jN9Mwx6U7wEKKHFcv6qEta
          source_id: s_EsJY623CFoyY9xajmooYZ6
          stance: supports
          locator: 条文：条文识读（曾孙）（3世）
          quotation: 是元魏尚书左仆射王思政曾孙
          interpretation_note: null
          source:
            id: s_EsJY623CFoyY9xajmooYZ6
            source_type: website
            title: 中文维基百科：王仁祐
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81%E7%A5%90
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T01:51:58.845Z
            metadata_json: null
      object_person:
        id: p_pw5PbWZzfQQNgNYXwrhd1t
        status: active
        display_name: 王仁祐
        merged_into_person_id: null
  other: []
---

# 王思政

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王思政：王仁祐（?—?），唐朝官员、外戚。唐高宗皇后王氏的父亲。 出身于太原王氏的分支——祁县王氏，是元魏尚书左仆射王思政曾孙。贞观年间为罗山县令。唐太宗的姑母同安长公主，是王仁祐的婶婶。 | accepted |
| name.primary | 王思政 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_pw5PbWZzfQQNgNYXwrhd1t | 王仁祐 | accepted |

## 外部来源

- [中文维基百科：王仁祐](https://zh.wikipedia.org/wiki/%E7%8E%8B%E4%BB%81%E7%A5%90)
