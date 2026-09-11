---
schema: wang-person/v1
id: p_nRCNMPx2SM6KXhzY8k8vA7
status: active
merged_into: null
display_name: 王應吉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kj3FDYZNcVuN2Lcv6pYfJZ
        subject_person_id: p_nRCNMPx2SM6KXhzY8k8vA7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王應吉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2VRHQgaNseuQzQMGXhssNJ
          claim_id: c_kj3FDYZNcVuN2Lcv6pYfJZ
          source_id: s_pfLnRuANUnwDmQvrPWV287
          stance: supports
          locator: CBDB:205405
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（205405）
          source: &a1
            id: s_pfLnRuANUnwDmQvrPWV287
            source_type: api_record
            title: 中国历代人物传记资料库：王應吉（CBDB 205405）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205405&o=json
            external_identifier: CBDB:205405
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.860Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_pQ97XS6DZSFqqd9NL6VJuQ
        subject_person_id: p_nRCNMPx2SM6KXhzY8k8vA7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1538年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tLF4AdZwqVKVsxugzPHbrF
          claim_id: c_pQ97XS6DZSFqqd9NL6VJuQ
          source_id: s_pfLnRuANUnwDmQvrPWV287
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
        id: c_iao9nJUFfHP5SRxaqzrvFz
        subject_person_id: p_nRCNMPx2SM6KXhzY8k8vA7
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
        - id: cs_H4NezH8EbCHcUpbL8Qrj53
          claim_id: c_iao9nJUFfHP5SRxaqzrvFz
          source_id: s_pfLnRuANUnwDmQvrPWV287
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
        id: c_5Bbn2ziA5GBiumRMPuB5hT
        subject_person_id: p_aYr6mZtnybMrSwGJzmfuEo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_nRCNMPx2SM6KXhzY8k8vA7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3F8r4PYtnybAOxKmX2G_zZ
          claim_id: c_5Bbn2ziA5GBiumRMPuB5hT
          source_id: s_neatp7ebYns3gQpFS6CttH
          stance: supports
          locator: 嘉靖四十四年進士登科錄:一卷，第三甲第二百三十三名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_neatp7ebYns3gQpFS6CttH
            source_type: api_record
            title: 中国历代人物传记资料库：王用中（CBDB 332688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332688&o=json
            external_identifier: CBDB:332688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.384Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_aYr6mZtnybMrSwGJzmfuEo
        status: active
        display_name: 王用中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王應吉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王應吉 | accepted |
| birth.date | 1538年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_aYr6mZtnybMrSwGJzmfuEo | 王用中 | accepted |

## 外部来源

- [中国历代人物传记资料库：王應吉（CBDB 205405）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205405&o=json)
- [中国历代人物传记资料库：王用中（CBDB 332688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=332688&o=json)
