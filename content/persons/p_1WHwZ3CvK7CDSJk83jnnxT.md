---
schema: wang-person/v1
id: p_1WHwZ3CvK7CDSJk83jnnxT
status: active
merged_into: null
display_name: 王渾
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_CxjtdVCqpQM228F5PEbEW7
        subject_person_id: p_1WHwZ3CvK7CDSJk83jnnxT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王渾
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_sjzLkAt1EoFXoRX5VeaxyF
          claim_id: c_CxjtdVCqpQM228F5PEbEW7
          source_id: s_QgMsndFC1Z41FRAkucRhYB
          stance: supports
          locator: CBDB:134966
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（134966）
          source: &a1
            id: s_QgMsndFC1Z41FRAkucRhYB
            source_type: api_record
            title: 中国历代人物传记资料库：王渾（CBDB 134966）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134966&o=json
            external_identifier: CBDB:134966
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.333Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_ajpMAy5uptMN8D75AA8T9k
        subject_person_id: p_1WHwZ3CvK7CDSJk83jnnxT
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 223年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_iScig2E4oRsDDedNpdnDbb
          claim_id: c_ajpMAy5uptMN8D75AA8T9k
          source_id: s_QgMsndFC1Z41FRAkucRhYB
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
        id: c_qnufrmBHonCU8GVN1GB3d3
        subject_person_id: p_1WHwZ3CvK7CDSJk83jnnxT
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 297年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LEvh7a7xzGqScDp2ocu1c2
          claim_id: c_qnufrmBHonCU8GVN1GB3d3
          source_id: s_QgMsndFC1Z41FRAkucRhYB
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
        id: c_TNmeMN8CFubPibK9JV19jS
        subject_person_id: p_1WHwZ3CvK7CDSJk83jnnxT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为西晉人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_vyQPeHghKqVmtAvgDDFez7
          claim_id: c_TNmeMN8CFubPibK9JV19jS
          source_id: s_QgMsndFC1Z41FRAkucRhYB
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

# 王渾

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王渾 | accepted |
| birth.date | 223年 | accepted |
| death.date | 297年 | accepted |
| bio.summary | CBDB 记载为西晉人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王渾（CBDB 134966）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=134966&o=json)
