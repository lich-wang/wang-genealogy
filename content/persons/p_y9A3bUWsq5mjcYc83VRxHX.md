---
schema: wang-person/v1
id: p_y9A3bUWsq5mjcYc83VRxHX
status: active
merged_into: null
display_name: 王福
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_fqyFUisKQHVkuf1ZZFCDd1
        subject_person_id: p_y9A3bUWsq5mjcYc83VRxHX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王福
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_W447HFYdEgnk42ZtY4pBNr
          claim_id: c_fqyFUisKQHVkuf1ZZFCDd1
          source_id: s_6D3dNQgMqcyrqQYub3HDqA
          stance: supports
          locator: CBDB:69416
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（69416）
          source: &a1
            id: s_6D3dNQgMqcyrqQYub3HDqA
            source_type: api_record
            title: 中国历代人物传记资料库：王福（CBDB 69416）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69416&o=json
            external_identifier: CBDB:69416
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:13.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_2sX3dyx2AT75kgvAk3nN9f
        subject_person_id: p_y9A3bUWsq5mjcYc83VRxHX
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1807年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aJkZF16NSp3u5HSe9aL2Vg
          claim_id: c_2sX3dyx2AT75kgvAk3nN9f
          source_id: s_6D3dNQgMqcyrqQYub3HDqA
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
        id: c_Ewqy1DXwCpUSxhVnhJpsCE
        subject_person_id: p_y9A3bUWsq5mjcYc83VRxHX
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_78ZvBLmAhp4g2Njpfxk71A
          claim_id: c_Ewqy1DXwCpUSxhVnhJpsCE
          source_id: s_6D3dNQgMqcyrqQYub3HDqA
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

# 王福

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王福 | accepted |
| death.date | 1807年 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王福（CBDB 69416）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=69416&o=json)
