---
schema: wang-person/v1
id: p_W2yKNp1DGJcHNcHpAd1eMS
status: active
merged_into: null
display_name: 王杭
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_D2qP8vECyKjRFYBxyL5Muy
        subject_person_id: p_W2yKNp1DGJcHNcHpAd1eMS
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王杭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A8e7hCL744LFThMP1yxzSN
          claim_id: c_D2qP8vECyKjRFYBxyL5Muy
          source_id: s_AmV6yDAVDzYRn8DFk7GQ3Y
          stance: supports
          locator: CBDB:335737
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（335737）
          source: &a1
            id: s_AmV6yDAVDzYRn8DFk7GQ3Y
            source_type: api_record
            title: 中国历代人物传记资料库：王杭（CBDB 335737）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335737&o=json
            external_identifier: CBDB:335737
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:20.472Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mvbXCtJ3iy4w35mdctWPEA
        subject_person_id: p_W2yKNp1DGJcHNcHpAd1eMS
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
        - id: cs_ct2WEEu2owLCk645odW9zN
          claim_id: c_mvbXCtJ3iy4w35mdctWPEA
          source_id: s_AmV6yDAVDzYRn8DFk7GQ3Y
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
        id: c_1olBEoF0Sxj6rq7VbTRG_t
        subject_person_id: p_W2yKNp1DGJcHNcHpAd1eMS
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oIqVZBWbj2b4QYb846hQKe
          claim_id: c_1olBEoF0Sxj6rq7VbTRG_t
          source_id: s_HcH3xQmb7zb9n2w7Xu1CjS
          stance: supports
          locator: 隆慶二年進士登科錄:一卷，第三甲第一百二十六名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_HcH3xQmb7zb9n2w7Xu1CjS
            source_type: api_record
            title: 中国历代人物传记资料库：王之臣（CBDB 205596）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205596&o=json
            external_identifier: CBDB:205596
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.866Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6fvA7tcbJ3QZeAtYpG1JUJ
        status: active
        display_name: 王之臣
        merged_into_person_id: null
  other: []
---

# 王杭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王杭 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_6fvA7tcbJ3QZeAtYpG1JUJ | 王之臣 | accepted |

## 外部来源

- [中国历代人物传记资料库：王杭（CBDB 335737）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=335737&o=json)
- [中国历代人物传记资料库：王之臣（CBDB 205596）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=205596&o=json)
