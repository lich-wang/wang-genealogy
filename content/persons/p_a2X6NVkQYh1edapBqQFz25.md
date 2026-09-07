---
schema: wang-person/v1
id: p_a2X6NVkQYh1edapBqQFz25
status: active
merged_into: null
display_name: 王雲五
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_u7MwDa3Gel0kSXxli0C4jd
        subject_person_id: p_a2X6NVkQYh1edapBqQFz25
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲五（1888年7月9日—1979年8月14日），原名之瑞，後改名雲五，字岫廬，男，籍貫廣東香山，生於上海，中國學者、思想家、教育家、出版家和政治家。王自學成材，在1920年代至1930年代主理商務印書館。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_a5DVU7Hcmt10oFVMIVcVyW
          claim_id: c_u7MwDa3Gel0kSXxli0C4jd
          source_id: s_WK5vGRAcP8MGjx1yUkPR6L
          stance: supports
          locator: 导言
          quotation: 王雲五（1888年7月9日—1979年8月14日），原名之瑞，後
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_WK5vGRAcP8MGjx1yUkPR6L
            source_type: website
            title: 中文维基百科：王雲五
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%B2%E4%BA%94
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:18.105Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_CxQ9LsSPVJxVEMp4NLA4r5
        subject_person_id: p_a2X6NVkQYh1edapBqQFz25
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲五
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_93FNGwFQRWGE7A9xHvoykA
          claim_id: c_CxQ9LsSPVJxVEMp4NLA4r5
          source_id: s_WK5vGRAcP8MGjx1yUkPR6L
          stance: supports
          locator: Q759889
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_79vjXEDEoMLDQsjznCSY67
        subject_person_id: p_B38w52R6nptS1S3yubTYDS
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_a2X6NVkQYh1edapBqQFz25
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_ih3VS9EUohLmoPC94tqB6P
          claim_id: c_79vjXEDEoMLDQsjznCSY67
          source_id: s_WK5vGRAcP8MGjx1yUkPR6L
          stance: supports
          locator: 条文：条文识读（父親）
          quotation: 王雲五生於上海，家中世代務農，父親王光斌破例到上海學商
          interpretation_note: null
          source:
            id: s_WK5vGRAcP8MGjx1yUkPR6L
            source_type: website
            title: 中文维基百科：王雲五
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%B2%E4%BA%94
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T09:53:18.105Z
            metadata_json: null
      object_person:
        id: p_B38w52R6nptS1S3yubTYDS
        status: active
        display_name: 王光斌
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王雲五

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王雲五（1888年7月9日—1979年8月14日），原名之瑞，後改名雲五，字岫廬，男，籍貫廣東香山，生於上海，中國學者、思想家、教育家、出版家和政治家。王自學成材，在1920年代至1930年代主理商務印書館。 | accepted |
| name.primary | 王雲五 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_B38w52R6nptS1S3yubTYDS | 王光斌 | accepted |

## 外部来源

- [中文维基百科：王雲五](https://zh.wikipedia.org/wiki/%E7%8E%8B%E9%9B%B2%E4%BA%94)
