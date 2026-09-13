---
schema: wang-person/v1
id: p_6YpXxeKRMWr6vVrAX9K1Tv
status: active
merged_into: null
display_name: 王婉
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_wvU3arYXhd1Mpa2kFyo8fp
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cykfy6GU119yzmgbAyU5YE
          claim_id: c_wvU3arYXhd1Mpa2kFyo8fp
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: CBDB:142690
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（142690）
          source: &a1
            id: s_KFkS5hiMaGh1959L5ARJrJ
            source_type: api_record
            title: 中国历代人物传记资料库：王婉（CBDB 142690）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json
            external_identifier: CBDB:142690
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.589Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CqnQ7vhnCW1REbqfPR68Vg
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 604年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t8by25HJi7HrfF8cuYmjyA
          claim_id: c_CqnQ7vhnCW1REbqfPR68Vg
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_o5d3br9FPJSUTLS3cmdqkt
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 682年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2A2y3QXzENh9CypgvGs56P
          claim_id: c_o5d3br9FPJSUTLS3cmdqkt
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_aCBojdNKNHnRn3LPgGQf26
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王婉（604年—682年），史料所见人物。本项目依据《中国历代人物传记资料库：王婉（CBDB 142690）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_cWnbKL74kTwX7AwxKT9b_m
          claim_id: c_aCBojdNKNHnRn3LPgGQf26
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: CBDB:142690
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 source。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_RClD--BvNdvHueMGgY3BIW
        subject_person_id: p_5jrDZnpuo7D8jQo9dtTQev
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HrGoC59xYgY86nrLiUJb5u
          claim_id: c_RClD--BvNdvHueMGgY3BIW
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Yongchun3：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5jrDZnpuo7D8jQo9dtTQev
        status: active
        display_name: 王韶
        merged_into_person_id: null
    - claim:
        id: c_lUU91kRDPdyYARkO7aTffP
        subject_person_id: p_qU5ePg25AxmDuXd2vF94MX
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DgHzhPhBwAOlmMygY8ixpn
          claim_id: c_lUU91kRDPdyYARkO7aTffP
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Wansuitongtian4：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_qU5ePg25AxmDuXd2vF94MX
        status: active
        display_name: 王元慎
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RjhO5NQTCA4WaeRrd1y4K-
        subject_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_4nKunucn4H8khSLWF8xZoJ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t_ST7UPSFg6C8najAKhIZz
          claim_id: c_RjhO5NQTCA4WaeRrd1y4K-
          source_id: s_C33xQ9a-quEZtnxjSgUcCm
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Wansuitongtian4：丈夫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_C33xQ9a-quEZtnxjSgUcCm
            source_type: api_record
            title: 中国历代人物传记资料库：韋府君（CBDB 163174）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163174&o=json
            external_identifier: CBDB:163174
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_4nKunucn4H8khSLWF8xZoJ
        status: active
        display_name: 韋府君
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_gYKCA7BM6BSw7qyQhT27F_
        subject_person_id: p_7fzzJxcbXZYkPTFPz4wvKh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-_w-YAnXY5WczcK-iUUD1U
          claim_id: c_gYKCA7BM6BSw7qyQhT27F_
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Wansuitongtian4：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7fzzJxcbXZYkPTFPz4wvKh
        status: active
        display_name: 王緝
        merged_into_person_id: null
    - claim:
        id: c_wrmhPIT-rrK-DR7WfYZyms
        subject_person_id: p_5Np11bpUk1ewMpdWYFHGy2
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6YpXxeKRMWr6vVrAX9K1Tv
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_NSHzodfNdrkusSbSkt8y7L
          claim_id: c_wrmhPIT-rrK-DR7WfYZyms
          source_id: s_KFkS5hiMaGh1959L5ARJrJ
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Wansuitongtian4：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_5Np11bpUk1ewMpdWYFHGy2
        status: active
        display_name: 王令思
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王婉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王婉 | accepted |
| birth.date | 604年 | accepted |
| death.date | 682年 | accepted |
| bio.summary | 王婉（604年—682年），史料所见人物。本项目依据《中国历代人物传记资料库：王婉（CBDB 142690）》所载的独立记录收录其姓名；目前可核实的信息仍较有限，生卒年代、籍贯与具体经历有待更多可靠来源补充。 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5jrDZnpuo7D8jQo9dtTQev | 王韶 | accepted |
| parents | p_qU5ePg25AxmDuXd2vF94MX | 王元慎 | accepted |
| spouses | p_4nKunucn4H8khSLWF8xZoJ | 韋府君 | accepted |
| ancestors | p_7fzzJxcbXZYkPTFPz4wvKh | 王緝 | accepted |
| ancestors | p_5Np11bpUk1ewMpdWYFHGy2 | 王令思 | accepted |

## 外部来源

- [中国历代人物传记资料库：王婉（CBDB 142690）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142690&o=json)
- [中国历代人物传记资料库：韋府君（CBDB 163174）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=163174&o=json)
