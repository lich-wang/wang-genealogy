---
schema: wang-person/v1
id: p_kJATJTH5PPbmzSLV3yS7TN
status: active
merged_into: null
display_name: 王全
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_RsUC5d0sY-eo-7Fi1TpemH
        subject_person_id: p_kJATJTH5PPbmzSLV3yS7TN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全，史料所见人物。本项目依据《湖南日报：王夫之故居寻根》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_wihGcjxtaXJuuDfoU3whhp
          claim_id: c_RsUC5d0sY-eo-7Fi1TpemH
          source_id: s_RbvovaqoYD5h7qPmkNsY65
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: &a1
            id: s_RbvovaqoYD5h7qPmkNsY65
            source_type: website
            title: 湖南日报：王夫之故居寻根
            creator: null
            publisher: 湖南日报（新浪转载）
            published_at_text: null
            canonical_url: https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:46.270Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_1C7E15KqC3TwzjF1FFsM66
        subject_person_id: p_kJATJTH5PPbmzSLV3yS7TN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王全
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 2
      sources:
        - id: cs_F5orM2Q7WiqibjZJ7pHvXf
          claim_id: c_1C7E15KqC3TwzjF1FFsM66
          source_id: s_RbvovaqoYD5h7qPmkNsY65
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
        id: c_zFXBhn1w9pHtsoL2oBq26x
        subject_person_id: p_aEZ2MeKHdAzenJ2h7vtp9G
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_kJATJTH5PPbmzSLV3yS7TN
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_hYhg7ooACRiL63HF9uXpWA
          claim_id: c_zFXBhn1w9pHtsoL2oBq26x
          source_id: s_RbvovaqoYD5h7qPmkNsY65
          stance: supports
          locator: 迁衡始祖段
          quotation: 永乐年间，王仲一之子王全……遂籍于衡。
          interpretation_note: null
          source:
            id: s_RbvovaqoYD5h7qPmkNsY65
            source_type: website
            title: 湖南日报：王夫之故居寻根
            creator: null
            publisher: 湖南日报（新浪转载）
            published_at_text: null
            canonical_url: https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:46.270Z
            metadata_json: null
      object_person:
        id: p_aEZ2MeKHdAzenJ2h7vtp9G
        status: active
        display_name: 王仲一
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_UK7DHE3ixcattPe6ndAoKk
        subject_person_id: p_kJATJTH5PPbmzSLV3yS7TN
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_vLvDV5P2y7vDwkpQ8mjYAY
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_JwehDQWChTLQf3WA5QG1mG
          claim_id: c_UK7DHE3ixcattPe6ndAoKk
          source_id: s_RbvovaqoYD5h7qPmkNsY65
          stance: supports
          locator: 迁衡始祖段
          quotation: 王全……遂籍于衡，此乃王氏迁衡之始祖也。
          interpretation_note: 中间世代未逐一列出，保守记为先祖关系。
          source:
            id: s_RbvovaqoYD5h7qPmkNsY65
            source_type: website
            title: 湖南日报：王夫之故居寻根
            creator: null
            publisher: 湖南日报（新浪转载）
            published_at_text: null
            canonical_url: https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:46.270Z
            metadata_json: null
      object_person:
        id: p_vLvDV5P2y7vDwkpQ8mjYAY
        status: active
        display_name: 王夫之
        merged_into_person_id: null
  other: []
---

# 王全

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王全，史料所见人物。本项目依据《湖南日报：王夫之故居寻根》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |
| name.primary | 王全 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aEZ2MeKHdAzenJ2h7vtp9G | 王仲一 | accepted |
| descendants | p_vLvDV5P2y7vDwkpQ8mjYAY | 王夫之 | accepted |

## 外部来源

- [湖南日报：王夫之故居寻根](https://news.sina.com.cn/o/2017-01-13/doc-ifxzqhka2859249.shtml)
