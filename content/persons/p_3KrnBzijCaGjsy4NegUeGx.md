---
schema: wang-person/v1
id: p_3KrnBzijCaGjsy4NegUeGx
status: active
merged_into: null
display_name: 王光袓
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bn4AnYZZEbYtVsVSNaFDxx
        subject_person_id: p_3KrnBzijCaGjsy4NegUeGx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光袓
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_SwVcKqbyWB9yAnj6LT2k1P
          claim_id: c_bn4AnYZZEbYtVsVSNaFDxx
          source_id: s_MXF5wLGVhg56bKgiZayW1x
          stance: supports
          locator: CBDB:532014
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（532014）
          source: &a1
            id: s_MXF5wLGVhg56bKgiZayW1x
            source_type: api_record
            title: 中国历代人物传记资料库：王光袓（CBDB 532014）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532014&o=json
            external_identifier: CBDB:532014
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.365Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4tz3CbVAzDHgQRozUk2bfP
        subject_person_id: p_3KrnBzijCaGjsy4NegUeGx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_i2RYHX2i7UHvoBBuPNTMDa
          claim_id: c_4tz3CbVAzDHgQRozUk2bfP
          source_id: s_MXF5wLGVhg56bKgiZayW1x
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

# 王光袓

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光袓 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光袓（CBDB 532014）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=532014&o=json)
