---
schema: wang-person/v1
id: p_A6GtM7UJhYUAHaRvVmsNu6
status: active
merged_into: null
display_name: 王亨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_LSpJzBAuhUC3RDbYZL5pr6
        subject_person_id: p_A6GtM7UJhYUAHaRvVmsNu6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_EF18hA2MN4cdmt7bsgz66m
          claim_id: c_LSpJzBAuhUC3RDbYZL5pr6
          source_id: s_kjVMQYpUeJgBYYPE446kGA
          stance: supports
          locator: CBDB:313620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（313620）
          source: &a1
            id: s_kjVMQYpUeJgBYYPE446kGA
            source_type: api_record
            title: 中国历代人物传记资料库：王亨（CBDB 313620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313620&o=json
            external_identifier: CBDB:313620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.914Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_EJbF8fgLBub6125nMYurPK
        subject_person_id: p_A6GtM7UJhYUAHaRvVmsNu6
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
        - id: cs_s8qHfMRMYNjiQsTLiqLkLH
          claim_id: c_EJbF8fgLBub6125nMYurPK
          source_id: s_kjVMQYpUeJgBYYPE446kGA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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
        id: c_FO3cpcKVjMIpFTZscBUkdB
        subject_person_id: p_A6GtM7UJhYUAHaRvVmsNu6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DHmm96wyqH3FThEZbr7NNh
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tlLjHlTBnRGnZLd111zPYg
          claim_id: c_FO3cpcKVjMIpFTZscBUkdB
          source_id: s_kjVMQYpUeJgBYYPE446kGA
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第九十五名：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DHmm96wyqH3FThEZbr7NNh
        status: active
        display_name: 王應顯
        merged_into_person_id: null
  other: []
---

# 王亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王亨 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_DHmm96wyqH3FThEZbr7NNh | 王應顯 | accepted |

## 外部来源

- [中国历代人物传记资料库：王亨（CBDB 313620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=313620&o=json)
