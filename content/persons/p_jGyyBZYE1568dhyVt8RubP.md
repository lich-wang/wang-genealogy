---
schema: wang-person/v1
id: p_jGyyBZYE1568dhyVt8RubP
status: active
merged_into: null
display_name: 王庭珪
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_8Y32ecfspc4jn3A9a96grC
        subject_person_id: p_jGyyBZYE1568dhyVt8RubP
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭珪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cUGRQ6KLPwh3Qkce1xCQKM
          claim_id: c_8Y32ecfspc4jn3A9a96grC
          source_id: s_7uWBDSV6KRgLziPcLqhvGA
          stance: supports
          locator: CBDB:12158
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（12158）
          source: &a1
            id: s_7uWBDSV6KRgLziPcLqhvGA
            source_type: api_record
            title: 中国历代人物传记资料库：王庭珪（CBDB 12158）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12158&o=json
            external_identifier: CBDB:12158
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.588Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_n7K8Z6V7ReJcmuzGtGsWAF
        subject_person_id: p_jGyyBZYE1568dhyVt8RubP
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1080年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FHtzubQJaqTkoYhqhXETE2
          claim_id: c_n7K8Z6V7ReJcmuzGtGsWAF
          source_id: s_7uWBDSV6KRgLziPcLqhvGA
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
        id: c_avFHJ5VrRMBoa3DfhBccHm
        subject_person_id: p_jGyyBZYE1568dhyVt8RubP
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1172年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vphdiE1bfbMh1Z6JRCPZtE
          claim_id: c_avFHJ5VrRMBoa3DfhBccHm
          source_id: s_7uWBDSV6KRgLziPcLqhvGA
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
        id: c_X5etxaucJUuNAhCdjsHHRB
        subject_person_id: p_jGyyBZYE1568dhyVt8RubP
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
        - id: cs_HqthttS7BJ8VCF71zGwBJp
          claim_id: c_X5etxaucJUuNAhCdjsHHRB
          source_id: s_7uWBDSV6KRgLziPcLqhvGA
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
  spouses:
    - claim:
        id: c_K4IDMCEcxNyrVNe6nPUmg0
        subject_person_id: p_jGyyBZYE1568dhyVt8RubP
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_fLPhak96xTAXhLbiBNKCpn
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qY60Mc2iarP8WqLWt6fHos
          claim_id: c_K4IDMCEcxNyrVNe6nPUmg0
          source_id: s_Ccmi9QxWeiliGroC-KTK8V
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1810;1811：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Ccmi9QxWeiliGroC-KTK8V
            source_type: api_record
            title: 中国历代人物传记资料库：劉氏(王庭珪妻)（CBDB 37929）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37929&o=json
            external_identifier: CBDB:37929
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_fLPhak96xTAXhLbiBNKCpn
        status: active
        display_name: 劉氏
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 王庭珪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭珪 | accepted |
| birth.date | 1080年 | accepted |
| death.date | 1172年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_fLPhak96xTAXhLbiBNKCpn | 劉氏 | accepted |

## 外部来源

- [中国历代人物传记资料库：劉氏(王庭珪妻)（CBDB 37929）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=37929&o=json)
- [中国历代人物传记资料库：王庭珪（CBDB 12158）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=12158&o=json)
