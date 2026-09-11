---
schema: wang-person/v1
id: p_zQApjdJ2Abk1P3JQMfcbuT
status: active
merged_into: null
display_name: 王銳
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_w1FGQrVqMKE8rzqL5gKYuS
        subject_person_id: p_zQApjdJ2Abk1P3JQMfcbuT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王銳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6AUCRdaY3FnDLUxoC71pZ5
          claim_id: c_w1FGQrVqMKE8rzqL5gKYuS
          source_id: s_QEBXLCWZQ3PnS3P5BRH8MB
          stance: supports
          locator: CBDB:312869
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（312869）
          source: &a1
            id: s_QEBXLCWZQ3PnS3P5BRH8MB
            source_type: api_record
            title: 中国历代人物传记资料库：王銳（CBDB 312869）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312869&o=json
            external_identifier: CBDB:312869
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.886Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JQ1HA6sdSMuh7tvH35ZgPF
        subject_person_id: p_zQApjdJ2Abk1P3JQMfcbuT
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
        - id: cs_e31cQMBe6i6NmTj15S8Lzi
          claim_id: c_JQ1HA6sdSMuh7tvH35ZgPF
          source_id: s_QEBXLCWZQ3PnS3P5BRH8MB
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
        id: c_LNWSRmlntc7FvmkBJndsG4
        subject_person_id: p_zQApjdJ2Abk1P3JQMfcbuT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_3m7CP7DGKJ8uiCH5xxVdzo
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_umvKiiH8WYPXS6d4_sF7Or
          claim_id: c_LNWSRmlntc7FvmkBJndsG4
          source_id: s_bZsmvVZ8aVw1owZkSWkXLZ
          stance: supports
          locator: 嘉靖二十九年進士登科錄:一卷，第三甲第十九名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_bZsmvVZ8aVw1owZkSWkXLZ
            source_type: api_record
            title: 中国历代人物传记资料库：王極（CBDB 203985）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json
            external_identifier: CBDB:203985
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.810Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_3m7CP7DGKJ8uiCH5xxVdzo
        status: active
        display_name: 王極
        merged_into_person_id: null
  other: []
---

# 王銳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王銳 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_3m7CP7DGKJ8uiCH5xxVdzo | 王極 | accepted |

## 外部来源

- [中国历代人物传记资料库：王極（CBDB 203985）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203985&o=json)
- [中国历代人物传记资料库：王銳（CBDB 312869）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=312869&o=json)
