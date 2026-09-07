---
schema: wang-person/v1
id: p_ajJ3GUJD8w7ZktUXDD9NAb
status: active
merged_into: null
display_name: 王凱
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Xr9aLaQDKab2RSAYHRCF9o
        subject_person_id: p_ajJ3GUJD8w7ZktUXDD9NAb
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱：王弼（226年—249年），字輔嗣，山陽郡高平縣（今山東省濟寧市微山縣西北）人，三國時代曹魏經學家、易學家，魏晉玄學的主要代表人物之一。 父親是王業，兄長是王宏。祖父王凱是王粲的族兄，祖母是劉表之女（《博物記》）。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 3
      sources:
        - id: cs_0kAX-qV17HWKLUVIC6641j
          claim_id: c_Xr9aLaQDKab2RSAYHRCF9o
          source_id: s_zGHySM1hgkDFxaapA2pAtB
          stance: supports
          locator: 导言
          quotation: 王凱：王弼（226年—249年），字輔嗣，山陽郡高平縣（今山東省
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 wikipedia。
          source: &a1
            id: s_zGHySM1hgkDFxaapA2pAtB
            source_type: website
            title: 中文维基百科：王弼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%BC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:49.187Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_vJ6Ue33954dYM2Mg44g41q
        subject_person_id: p_ajJ3GUJD8w7ZktUXDD9NAb
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王凱
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_x8zG5Wx6BzsyDqfZXK9Sts
          claim_id: c_vJ6Ue33954dYM2Mg44g41q
          source_id: s_zGHySM1hgkDFxaapA2pAtB
          stance: supports
          locator: CBDB:null
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
        id: c_7h4FfsDrg9nKb4AGrBL7Qe
        subject_person_id: p_ajJ3GUJD8w7ZktUXDD9NAb
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_Lcjo9PzKUJ4DoRFQ5LdSEp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Qg4tthGPdrLf8VxqmQbj1X
          claim_id: c_7h4FfsDrg9nKb4AGrBL7Qe
          source_id: s_zGHySM1hgkDFxaapA2pAtB
          stance: supports
          locator: 家庭·祖父
          quotation: 祖父王凱是王粲的族兄，祖母是劉表之女（《博物記》）
          interpretation_note: 祖父关系记为两代先祖，不作父子。
          source:
            id: s_zGHySM1hgkDFxaapA2pAtB
            source_type: website
            title: 中文维基百科：王弼
            creator: 维基百科贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%BC
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-25T02:41:49.187Z
            metadata_json: null
      object_person:
        id: p_Lcjo9PzKUJ4DoRFQ5LdSEp
        status: active
        display_name: 王弼
        merged_into_person_id: null
  other: []
---

# 王凱

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王凱：王弼（226年—249年），字輔嗣，山陽郡高平縣（今山東省濟寧市微山縣西北）人，三國時代曹魏經學家、易學家，魏晉玄學的主要代表人物之一。 父親是王業，兄長是王宏。祖父王凱是王粲的族兄，祖母是劉表之女（《博物記》）。 | accepted |
| name.primary | 王凱 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_Lcjo9PzKUJ4DoRFQ5LdSEp | 王弼 | accepted |

## 外部来源

- [中文维基百科：王弼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%BC)
