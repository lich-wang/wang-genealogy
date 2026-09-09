---
schema: wang-person/v1
id: p_vNFxCZHKiFh8P34YzFhoeN
status: active
merged_into: null
display_name: 王錫侯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ijJ1PnWiWyPMYZ3iqrwE5P
        subject_person_id: p_vNFxCZHKiFh8P34YzFhoeN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王錫侯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_rtD42TTMkaJ3iEyBB7DSn9
          claim_id: c_ijJ1PnWiWyPMYZ3iqrwE5P
          source_id: s_vM2HodT4XCB9FD5DG2y9ZY
          stance: supports
          locator: CBDB:126835
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126835）
          source: &a1
            id: s_vM2HodT4XCB9FD5DG2y9ZY
            source_type: api_record
            title: 中国历代人物传记资料库：王錫侯（CBDB 126835）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126835&o=json
            external_identifier: CBDB:126835
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.244Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_qCqntZKxtqN7TpsirNjd3D
        subject_person_id: p_vNFxCZHKiFh8P34YzFhoeN
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1558年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_fK1HtDoM3iLM4pV7RoLLNe
          claim_id: c_qCqntZKxtqN7TpsirNjd3D
          source_id: s_vM2HodT4XCB9FD5DG2y9ZY
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
        id: c_b9rG39L8URMuu5EGeiGF9T
        subject_person_id: p_vNFxCZHKiFh8P34YzFhoeN
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1624年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UjG2n3jL7GLgu2v7K6DCns
          claim_id: c_b9rG39L8URMuu5EGeiGF9T
          source_id: s_vM2HodT4XCB9FD5DG2y9ZY
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
        id: c_ocodq7xXC4xDaT4wZEdaSx
        subject_person_id: p_vNFxCZHKiFh8P34YzFhoeN
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
        - id: cs_ZLiRqNUHHmwxv3HAjqtydj
          claim_id: c_ocodq7xXC4xDaT4wZEdaSx
          source_id: s_vM2HodT4XCB9FD5DG2y9ZY
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
  descendants: []
  other: []
---

# 王錫侯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王錫侯 | accepted |
| birth.date | 1558年 | accepted |
| death.date | 1624年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王錫侯（CBDB 126835）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126835&o=json)
