---
schema: wang-person/v1
id: p_1yWHm3K2AUvqFvD4jN97Aj
status: active
merged_into: null
display_name: 王崇烈
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EG6x_miF1TZz21KHKdi2S-
        subject_person_id: p_1yWHm3K2AUvqFvD4jN97Aj
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇烈（生于1870年），史料所见人物。本项目依据《人民网：甲骨文之父王懿荣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SLYMSx988AJpTfOij4nsR7
          claim_id: c_EG6x_miF1TZz21KHKdi2S-
          source_id: s_YCiogxpUEMJrcECuzDNF24
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_YCiogxpUEMJrcECuzDNF24
            source_type: website
            title: 人民网：甲骨文之父王懿荣
            creator: null
            publisher: 人民网
            published_at_text: null
            canonical_url: https://culture.people.com.cn/n/2014/1102/c22219-25958035.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:58.770Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qSmZsVSDsBGbCJKb71YTvC
        subject_person_id: p_1yWHm3K2AUvqFvD4jN97Aj
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1870年
            calendar_note: null
            earliest: 1870-01-01
            latest: 1870-12-31
            precision: year
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_x3SQSwQyG8CxHBx6WwGWSN
          claim_id: c_qSmZsVSDsBGbCJKb71YTvC
          source_id: s_YCiogxpUEMJrcECuzDNF24
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
        id: c_mzHzbKmZddLWYNT7i3orhK
        subject_person_id: p_1yWHm3K2AUvqFvD4jN97Aj
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王崇烈
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_aeme7PntiQvLzGHf5Jvmz1
          claim_id: c_mzHzbKmZddLWYNT7i3orhK
          source_id: s_YCiogxpUEMJrcECuzDNF24
          stance: supports
          locator: CBDB:null
          quotation: null
          interpretation_note: null
          source:
            id: s_YCiogxpUEMJrcECuzDNF24
            source_type: website
            title: 人民网：甲骨文之父王懿荣
            creator: null
            publisher: 人民网
            published_at_text: null
            canonical_url: https://culture.people.com.cn/n/2014/1102/c22219-25958035.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:58.770Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ohzFSvAN1RyjSUFDAgpBm5
        subject_person_id: p_cM7Evu4QQJ7HxaU4v97UQW
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_1yWHm3K2AUvqFvD4jN97Aj
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_DCZfm2FJ4iUAGgnM4RgcSt
          claim_id: c_ohzFSvAN1RyjSUFDAgpBm5
          source_id: s_YCiogxpUEMJrcECuzDNF24
          stance: supports
          locator: 家庭
          quotation: 次子王崇烈，字翰辅、汉甫，生于1870年。
          interpretation_note: null
          source:
            id: s_YCiogxpUEMJrcECuzDNF24
            source_type: website
            title: 人民网：甲骨文之父王懿荣
            creator: null
            publisher: 人民网
            published_at_text: null
            canonical_url: https://culture.people.com.cn/n/2014/1102/c22219-25958035.html
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T00:05:58.770Z
            metadata_json: null
      object_person:
        id: p_cM7Evu4QQJ7HxaU4v97UQW
        status: active
        display_name: 王懿荣
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王崇烈

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王崇烈（生于1870年），史料所见人物。本项目依据《人民网：甲骨文之父王懿荣》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| birth.date | 1870年 | accepted |
| name.primary | 王崇烈 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cM7Evu4QQJ7HxaU4v97UQW | 王懿荣 | accepted |

## 外部来源

- [人民网：甲骨文之父王懿荣](https://culture.people.com.cn/n/2014/1102/c22219-25958035.html)
