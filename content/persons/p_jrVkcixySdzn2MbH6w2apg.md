---
schema: wang-person/v1
id: p_jrVkcixySdzn2MbH6w2apg
status: active
merged_into: null
display_name: 王玭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_YrSB47pG5jp99Fe3BWQ81A
        subject_person_id: p_jrVkcixySdzn2MbH6w2apg
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王玭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_44G1uztDHRcCXZDYpHf1sm
          claim_id: c_YrSB47pG5jp99Fe3BWQ81A
          source_id: s_G9DcxTmd3GTsE3b3WS3BL5
          stance: supports
          locator: CBDB:326699
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（326699）
          source: &a1
            id: s_G9DcxTmd3GTsE3b3WS3BL5
            source_type: api_record
            title: 中国历代人物传记资料库：王玭（CBDB 326699）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326699&o=json
            external_identifier: CBDB:326699
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.226Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_3xNi3CvfxHo85VcXCQL8bw
        subject_person_id: p_jrVkcixySdzn2MbH6w2apg
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
        - id: cs_nQHFpjwEpuvzH7WZ69JHy9
          claim_id: c_3xNi3CvfxHo85VcXCQL8bw
          source_id: s_G9DcxTmd3GTsE3b3WS3BL5
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

# 王玭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王玭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王玭（CBDB 326699）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=326699&o=json)
