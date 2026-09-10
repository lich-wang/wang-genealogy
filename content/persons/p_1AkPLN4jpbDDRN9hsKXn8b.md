---
schema: wang-person/v1
id: p_1AkPLN4jpbDDRN9hsKXn8b
status: active
merged_into: null
display_name: 王安
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_HBs6gNBiwAPRdqmEJBKehb
        subject_person_id: p_1AkPLN4jpbDDRN9hsKXn8b
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王安
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cbSTw2Vh4NgT8DMWw9SfSy
          claim_id: c_HBs6gNBiwAPRdqmEJBKehb
          source_id: s_H4jFAwgWWBH9gKFtqHk52X
          stance: supports
          locator: CBDB:274561
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（274561）
          source: &a1
            id: s_H4jFAwgWWBH9gKFtqHk52X
            source_type: api_record
            title: 中国历代人物传记资料库：王安（CBDB 274561）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274561&o=json
            external_identifier: CBDB:274561
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:18.927Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_96o2LQ535XpoDXz6C3G67g
        subject_person_id: p_1AkPLN4jpbDDRN9hsKXn8b
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
        - id: cs_7GLyB27N2K3F68BPn4dzQa
          claim_id: c_96o2LQ535XpoDXz6C3G67g
          source_id: s_H4jFAwgWWBH9gKFtqHk52X
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9WKXfZh9J0mtcmhcXDcpZo
        subject_person_id: p_1AkPLN4jpbDDRN9hsKXn8b
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_RCL72tBj6tofvSVsLY2voQ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mG7VGK7GyTkfLK2rADHvtw
          claim_id: c_9WKXfZh9J0mtcmhcXDcpZo
          source_id: s_H4jFAwgWWBH9gKFtqHk52X
          stance: supports
          locator: 弘治十八年進士登科錄:一卷，第三甲第九十一名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_RCL72tBj6tofvSVsLY2voQ
        status: active
        display_name: 王希孟
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王安

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王安 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_RCL72tBj6tofvSVsLY2voQ | 王希孟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王安（CBDB 274561）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=274561&o=json)
