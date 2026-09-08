---
schema: wang-person/v1
id: p_ycA2oTJXibCxh2GARsmbib
status: active
merged_into: null
display_name: 王友
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NatEof7N2CFQrNsY3GFBrh
        subject_person_id: p_ycA2oTJXibCxh2GARsmbib
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王友
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_AxBQKqyHhuPCKL4PC8Y1GY
          claim_id: c_NatEof7N2CFQrNsY3GFBrh
          source_id: s_5tzRE_QlQ1kU-SkOBxEd8a
          stance: supports
          locator: 导言：祖父
          quotation: 據說，他家本來是琅琊郡人，王恁的曾祖父王曄為光州定城縣令，遂遷居河南，成為固始人。祖父王友、父親王蘊玉和他都在固始務農。
          interpretation_note: 作为王恁条文中的具名亲属端点收录；未与明代同名人物合并。
          source: &wang-ren-source
            id: s_5tzRE_QlQ1kU-SkOBxEd8a
            source_type: website
            title: 中文维基百科：王恁
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%81
            external_identifier: Q10414256
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-09-06T22:33:22.403Z
            metadata_json: null
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_AHc416E278PF8WGnw6n5Fi
        subject_person_id: p_FqraCEhYfekF5C8tgwhX9H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_ycA2oTJXibCxh2GARsmbib
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_VjNcyDX1MxzNKhEqFt7PZo
          claim_id: c_AHc416E278PF8WGnw6n5Fi
          source_id: s_5tzRE_QlQ1kU-SkOBxEd8a
          stance: supports
          locator: 导言：曾祖父、祖父
          quotation: 據說，他家本來是琅琊郡人，王恁的曾祖父王曄為光州定城縣令，遂遷居河南，成為固始人。祖父王友、父親王蘊玉和他都在固始務農。
          interpretation_note: “曾祖父”和“祖父”均为父系称谓，且相邻两代姓名齐全，据此记录王曄为王友之父。
          source: *wang-ren-source
      object_person:
        id: p_FqraCEhYfekF5C8tgwhX9H
        status: active
        display_name: 王曄
        merged_into_person_id: null
  children:
    - claim:
        id: c_LUN8JAq3B8FHs8nyNBiGPU
        subject_person_id: p_ycA2oTJXibCxh2GARsmbib
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_YC1TwQRY7uJP9GEZJCoGCU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8RD8agaRtcdwzUSYtzgst2
          claim_id: c_LUN8JAq3B8FHs8nyNBiGPU
          source_id: s_5tzRE_QlQ1kU-SkOBxEd8a
          stance: supports
          locator: 导言：祖父、父親
          quotation: 據說，他家本來是琅琊郡人，王恁的曾祖父王曄為光州定城縣令，遂遷居河南，成為固始人。祖父王友、父親王蘊玉和他都在固始務農。
          interpretation_note: “祖父”和“父親”均为父系称谓，且相邻两代姓名齐全，据此记录王友为王蘊玉之父。
          source: *wang-ren-source
      object_person:
        id: p_YC1TwQRY7uJP9GEZJCoGCU
        status: active
        display_name: 王蘊玉
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王友

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王友 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_FqraCEhYfekF5C8tgwhX9H | 王曄 | accepted |
| children | p_YC1TwQRY7uJP9GEZJCoGCU | 王蘊玉 | accepted |

## 外部来源

- [中文维基百科：王恁](https://zh.wikipedia.org/wiki/%E7%8E%8B%E6%81%81)
