---
schema: wang-person/v1
id: p_Lcjo9PzKUJ4DoRFQ5LdSEp
status: active
merged_into: null
display_name: 王弼
revision: 1
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_1NuRHExLtPxheyFSemrNy5
        subject_person_id: p_Lcjo9PzKUJ4DoRFQ5LdSEp
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼（226年—249年），字輔嗣，山陽郡高平縣（今山東省濟寧市微山縣西北）人，三國時代曹魏經學家、易學家，魏晉玄學的主要代表人物之一。 父親是王業，兄長是王宏。祖父王凱是王粲的族兄，祖母是劉表之女（《博物記》）。
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zumc2QRtk_wdn4DFKotn__
          claim_id: c_1NuRHExLtPxheyFSemrNy5
          source_id: s_zGHySM1hgkDFxaapA2pAtB
          stance: supports
          locator: 导言
          quotation: 王弼（226年—249年），字輔嗣，山陽郡高平縣（今山東省濟寧市
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
        id: c_5cdr4mTKkBeontwMH3cYr5
        subject_person_id: p_Lcjo9PzKUJ4DoRFQ5LdSEp
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王弼
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_VP8BcM1BsjoWcCVGeL5fJM
          claim_id: c_5cdr4mTKkBeontwMH3cYr5
          source_id: s_zGHySM1hgkDFxaapA2pAtB
          stance: supports
          locator: Q459865
          quotation: null
          interpretation_note: null
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_8ZcU7LwnvKL9PmME2BfGNQ
        subject_person_id: p_oNkHTMoDGV5D9gHmvCAx7L
        claim_kind: relationship
        predicate: kinship.parent_of
        object_person_id: p_Lcjo9PzKUJ4DoRFQ5LdSEp
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_FP7VCRQmnjSw3MgxoWRY6E
          claim_id: c_8ZcU7LwnvKL9PmME2BfGNQ
          source_id: s_dpqAhQsFHKgCSDbQDY8Vj6
          stance: supports
          locator: 首段
          quotation: 弼字輔嗣，魏國山陽人也。父業，為尚書郎。
          interpretation_note: null
          source:
            id: s_dpqAhQsFHKgCSDbQDY8Vj6
            source_type: book
            title: 中文维基文库：王弼傳
            creator: 何劭
            publisher: 维基文库
            published_at_text: null
            canonical_url: https://zh.wikisource.org/wiki/%E7%8E%8B%E5%BC%BC%E5%82%B3
            external_identifier: null
            license_code: CC-BY-SA-4.0
            accessed_at: 2026-08-31T15:55:32.628Z
            metadata_json: null
        - id: cs_G4u6WBXBh1FR4YBpiVLgvV
          claim_id: c_8ZcU7LwnvKL9PmME2BfGNQ
          source_id: s_Th4mxe62wMJ85VN4URfY1j
          stance: supports
          locator: 王弼家世辨析
          quotation: 凱生業……宏，弼之兄也。
          interpretation_note: null
          source:
            id: s_Th4mxe62wMJ85VN4URfY1j
            source_type: website
            title: 東海大學圖書館館刊第15期：王弼家世考辨
            creator: null
            publisher: 東海大學圖書館
            published_at_text: null
            canonical_url: https://dcollection.lib.thu.edu.tw/wp-content/uploads/2024/12/%E7%AC%AC15%E6%9C%9F%E9%A4%A8%E5%88%8A1-16.pdf
            external_identifier: null
            license_code: unknown
            accessed_at: 2026-09-01T02:14:44.746Z
            metadata_json: null
      object_person:
        id: p_oNkHTMoDGV5D9gHmvCAx7L
        status: active
        display_name: 王業
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
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
        id: p_ajJ3GUJD8w7ZktUXDD9NAb
        status: active
        display_name: 王凱
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王弼

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 王弼（226年—249年），字輔嗣，山陽郡高平縣（今山東省濟寧市微山縣西北）人，三國時代曹魏經學家、易學家，魏晉玄學的主要代表人物之一。 父親是王業，兄長是王宏。祖父王凱是王粲的族兄，祖母是劉表之女（《博物記》）。 | accepted |
| name.primary | 王弼 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_oNkHTMoDGV5D9gHmvCAx7L | 王業 | accepted |
| ancestors | p_ajJ3GUJD8w7ZktUXDD9NAb | 王凱 | accepted |

## 外部来源

- [東海大學圖書館館刊第15期：王弼家世考辨](https://dcollection.lib.thu.edu.tw/wp-content/uploads/2024/12/%E7%AC%AC15%E6%9C%9F%E9%A4%A8%E5%88%8A1-16.pdf)
- [中文维基百科：王弼](https://zh.wikipedia.org/wiki/%E7%8E%8B%E5%BC%BC)
- [中文维基文库：王弼傳](https://zh.wikisource.org/wiki/%E7%8E%8B%E5%BC%BC%E5%82%B3)
