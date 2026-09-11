---
schema: wang-person/v1
id: p_7x8JYYpfNVCNz7epCoiZPm
status: active
merged_into: null
display_name: 王廷輔
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_x5KfgeLkC5PWABECEFC6BE
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷輔
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EMrpkwiHv1vcp3GNB9DRDQ
          claim_id: c_x5KfgeLkC5PWABECEFC6BE
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: CBDB:204965
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204965）
          source: &a1
            id: s_3p6BBfq8bjfMZEGQHAGUKU
            source_type: api_record
            title: 中国历代人物传记资料库：王廷輔（CBDB 204965）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json
            external_identifier: CBDB:204965
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.843Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_zrHMkvAWbP7PTGbF2kymcS
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1527年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_S5iFPSvTJ6CF94kDSwTuwW
          claim_id: c_zrHMkvAWbP7PTGbF2kymcS
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Ar8ZqxTQ9S1Ggcmf21uj8F
        subject_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ofY8U5xAH2CHBGTi3Log1p
          claim_id: c_Ar8ZqxTQ9S1Ggcmf21uj8F
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_raLXSXSDBzDzUgJl3MdIxj
        subject_person_id: p_UEhwLuzK5mRw1PBd3N1Kd9
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k5sMag1ncVE3mWDtXQJpWP
          claim_id: c_raLXSXSDBzDzUgJl3MdIxj
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第二十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_UEhwLuzK5mRw1PBd3N1Kd9
        status: active
        display_name: 王文盛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_-GKmA2wLLPGtQTtWh00iIz
        subject_person_id: p_W3iJYzgHbrDvkxneDDVXwq
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uHZ14yn10mwMwH2qFUdc3N
          claim_id: c_-GKmA2wLLPGtQTtWh00iIz
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第二十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_W3iJYzgHbrDvkxneDDVXwq
        status: active
        display_name: 王汝徵
        merged_into_person_id: null
    - claim:
        id: c_9UjE83_XT8j4_apeoEgBzZ
        subject_person_id: p_cy9QL3g4hhhRoKSspm9Yjh
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7x8JYYpfNVCNz7epCoiZPm
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qlPmoJNEfuQ8ximFcT0imn
          claim_id: c_9UjE83_XT8j4_apeoEgBzZ
          source_id: s_3p6BBfq8bjfMZEGQHAGUKU
          stance: supports
          locator: 嘉靖四十一年進士登科錄:一卷，第二甲第二十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_cy9QL3g4hhhRoKSspm9Yjh
        status: active
        display_name: 王慶忠
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王廷輔

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷輔 | accepted |
| birth.date | 1527年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_UEhwLuzK5mRw1PBd3N1Kd9 | 王文盛 | accepted |
| ancestors | p_W3iJYzgHbrDvkxneDDVXwq | 王汝徵 | accepted |
| ancestors | p_cy9QL3g4hhhRoKSspm9Yjh | 王慶忠 | accepted |

## 外部来源

- [中国历代人物传记资料库：王廷輔（CBDB 204965）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204965&o=json)
