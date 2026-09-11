---
schema: wang-person/v1
id: p_emRFonnZuCJKKPb7oDivvy
status: active
merged_into: null
display_name: 王道直
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QaTxFXaXArDsj1ixPnhjyG
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王道直
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_nqMA2h3RQ1qAi5RcuvwncX
          claim_id: c_QaTxFXaXArDsj1ixPnhjyG
          source_id: s_A8hUijcJXQq8JwoN2yTSsp
          stance: supports
          locator: CBDB:204021
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（204021）
          source: &a1
            id: s_A8hUijcJXQq8JwoN2yTSsp
            source_type: api_record
            title: 中国历代人物传记资料库：王道直（CBDB 204021）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204021&o=json
            external_identifier: CBDB:204021
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_EYcLk2JwBANJeh26qqXg8s
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1517年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2jRop7sdcjx8k32w3uxyyx
          claim_id: c_EYcLk2JwBANJeh26qqXg8s
          source_id: s_A8hUijcJXQq8JwoN2yTSsp
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
        id: c_wp99uJJ5h9V4wwMUTJifLN
        subject_person_id: p_emRFonnZuCJKKPb7oDivvy
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
        - id: cs_kuXhZ1uX5BY7Wprk5BYBKG
          claim_id: c_wp99uJJ5h9V4wwMUTJifLN
          source_id: s_A8hUijcJXQq8JwoN2yTSsp
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
        id: c_CoPF9n7WeliGRoh4fqm7D2
        subject_person_id: p_5g7L2cx4uEGXE6LnD5Pz5F
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_huOjUs1s-CVAWXguO5mMrR
          claim_id: c_CoPF9n7WeliGRoh4fqm7D2
          source_id: s_VpqdCQeZzzvdm8X8ssSNqu
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VpqdCQeZzzvdm8X8ssSNqu
            source_type: api_record
            title: 中国历代人物传记资料库：王獻（CBDB 313336）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json
            external_identifier: CBDB:313336
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_5g7L2cx4uEGXE6LnD5Pz5F
        status: active
        display_name: 王獻
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_YmOXiY3wlD5uOjTj4Mvs4j
        subject_person_id: p_9dndF91Cp3MxiCBxuANawM
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_emRFonnZuCJKKPb7oDivvy
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_n8cRfHrYm-i3y83u5h3uaJ
          claim_id: c_YmOXiY3wlD5uOjTj4Mvs4j
          source_id: s_mS2EJeBETQ4KMtHcLozP4C
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第六十七名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_mS2EJeBETQ4KMtHcLozP4C
            source_type: api_record
            title: 中国历代人物传记资料库：王才（CBDB 313335）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313335&o=json
            external_identifier: CBDB:313335
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.904Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_9dndF91Cp3MxiCBxuANawM
        status: active
        display_name: 王才
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王道直

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王道直 | accepted |
| birth.date | 1517年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_5g7L2cx4uEGXE6LnD5Pz5F | 王獻 | accepted |
| ancestors | p_9dndF91Cp3MxiCBxuANawM | 王才 | accepted |

## 外部来源

- [中国历代人物传记资料库：王才（CBDB 313335）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313335&o=json)
- [中国历代人物传记资料库：王道直（CBDB 204021）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=204021&o=json)
- [中国历代人物传记资料库：王獻（CBDB 313336）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313336&o=json)
