---
schema: wang-person/v1
id: p_s2Sv6MvyL71fwz1JqSBrir
status: active
merged_into: null
display_name: 王仁
cbdb_id: 333133
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_oBGTS3Jw8XfYTDV2tknL9w
        subject_person_id: p_s2Sv6MvyL71fwz1JqSBrir
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁
          language: zh-Hans
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_vTwQwyp4vmxQ8djN1C36RV
          claim_id: c_oBGTS3Jw8XfYTDV2tknL9w
          source_id: s_deDQTbNfsYKav1xFqRqE6d
          stance: supports
          locator: Q45559885
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source: &a1
            id: s_deDQTbNfsYKav1xFqRqE6d
            source_type: api_record
            title: 维基数据：王仁（Q45559885）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45559885
            external_identifier: Q45559885
            license_code: CC0-1.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
        - id: cs_PpC31uToNmH4PxYwFWPuii
          claim_id: c_oBGTS3Jw8XfYTDV2tknL9w
          source_id: s_TwkvvpKdBHsuL68hhYGVog
          stance: supports
          locator: CBDB:333133
          quotation: null
          interpretation_note: 导入亲属人物姓名
          source:
            id: s_TwkvvpKdBHsuL68hhYGVog
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王仁（333133）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333133&o=json
            external_identifier: CBDB:333133
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T08:06:50.055Z
            metadata_json: null
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_BCcieMUXBc7GDQqm6bCLaV
        subject_person_id: p_s2Sv6MvyL71fwz1JqSBrir
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: Ming dynasty person CBDB = 333133
          language: en
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vNy9FXn7K6XJtLzyJi6A55
          claim_id: c_BCcieMUXBc7GDQqm6bCLaV
          source_id: s_deDQTbNfsYKav1xFqRqE6d
          stance: supports
          locator: null
          quotation: null
          interpretation_note: 维基数据条目描述
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_y8vFRMh9nQ15RaRbnb2usH
        subject_person_id: p_s2Sv6MvyL71fwz1JqSBrir
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_vxysH4B8xpbAGBTVKY3Dh2
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8cuHWvYHhDu7jz6fBJNSxH
          claim_id: c_y8vFRMh9nQ15RaRbnb2usH
          source_id: s_FjWPqUA5b5EfEwFHzckW5s
          stance: supports
          locator: P22（父）
          quotation: null
          interpretation_note: null
          source:
            id: s_FjWPqUA5b5EfEwFHzckW5s
            source_type: api_record
            title: 维基数据：王原道（Q45560451）
            creator: 维基数据贡献者
            publisher: Wikimedia Foundation
            published_at_text: null
            canonical_url: https://www.wikidata.org/wiki/Q45560451
            external_identifier: Q45560451
            license_code: CC0-1.0
            accessed_at: 2026-09-05T02:06:58.883Z
            metadata_json: null
        - id: cs_ANBRxQS2aq3UMsGdu3fDLz
          claim_id: c_y8vFRMh9nQ15RaRbnb2usH
          source_id: s_deDQTbNfsYKav1xFqRqE6d
          stance: supports
          locator: P40（子女）
          quotation: null
          interpretation_note: null
          source: *a1
      object_person:
        id: p_vxysH4B8xpbAGBTVKY3Dh2
        status: active
        display_name: 王原道
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_513RO9GRRuZj9bhGUxNs1k
        subject_person_id: p_s2Sv6MvyL71fwz1JqSBrir
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8kvzu18KWCHGBJbrWxW4b9
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c90P8hERrSlWLdRqLq3ptU
          claim_id: c_513RO9GRRuZj9bhGUxNs1k
          source_id: s_dizqWBK4gRWFn4mBpUaSGR
          stance: supports
          locator: 天順八年進士登科錄:一卷，第三甲第十二名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_dizqWBK4gRWFn4mBpUaSGR
            source_type: api_record
            title: 中国历代人物传记资料库：王軾（CBDB 67466）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json
            external_identifier: CBDB:67466
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.995Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8kvzu18KWCHGBJbrWxW4b9
        status: active
        display_name: 王軾
        merged_into_person_id: null
  other: []
---

# 王仁

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁 | accepted |
| bio.summary | Ming dynasty person CBDB = 333133 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_vxysH4B8xpbAGBTVKY3Dh2 | 王原道 | accepted |
| descendants | p_8kvzu18KWCHGBJbrWxW4b9 | 王軾 | accepted |

## 外部来源

- [维基数据：王仁（Q45559885）](https://www.wikidata.org/wiki/Q45559885)
- [维基数据：王原道（Q45560451）](https://www.wikidata.org/wiki/Q45560451)
- [中国历代人物传记资料库：王軾（CBDB 67466）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=67466&o=json)
- [CBDB 中国历代人物传记资料库：王仁（333133）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=333133&o=json)
