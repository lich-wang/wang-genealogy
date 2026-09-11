---
schema: wang-person/v1
id: p_vfBzh9Tg5w9fbvKCkKYmL6
status: active
merged_into: null
display_name: 王璉
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9sdLbFYiAD2UA7nH36TqFZ
        subject_person_id: p_vfBzh9Tg5w9fbvKCkKYmL6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王璉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_piF6gnxFPngM1UMccsNPBr
          claim_id: c_9sdLbFYiAD2UA7nH36TqFZ
          source_id: s_b9eYUbRw4DfRWMdyMMGncF
          stance: supports
          locator: CBDB:283871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（283871）
          source: &a1
            id: s_b9eYUbRw4DfRWMdyMMGncF
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 283871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283871&o=json
            external_identifier: CBDB:283871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.152Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9qfQUNvE28Bw79xM814NnK
        subject_person_id: p_vfBzh9Tg5w9fbvKCkKYmL6
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
        - id: cs_DByeyEgtY1AMmsjyKrF1ci
          claim_id: c_9qfQUNvE28Bw79xM814NnK
          source_id: s_b9eYUbRw4DfRWMdyMMGncF
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
        id: c_hraBz00qrsrneNr8Ha6RJ4
        subject_person_id: p_vfBzh9Tg5w9fbvKCkKYmL6
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_7H3TPU2nfHoiknXCZ9JVid
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_k87wSlljI_u1kJCVoGMf8E
          claim_id: c_hraBz00qrsrneNr8Ha6RJ4
          source_id: s_wCW9jRjL1KypShYP5kjEUG
          stance: supports
          locator: 正德十六年登科錄:一卷，第二甲第八十一名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_wCW9jRjL1KypShYP5kjEUG
            source_type: api_record
            title: 中国历代人物传记资料库：王大化（CBDB 202118）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202118&o=json
            external_identifier: CBDB:202118
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.721Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_7H3TPU2nfHoiknXCZ9JVid
        status: active
        display_name: 王大化
        merged_into_person_id: null
  other: []
---

# 王璉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王璉 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| descendants | p_7H3TPU2nfHoiknXCZ9JVid | 王大化 | accepted |

## 外部来源

- [中国历代人物传记资料库：王大化（CBDB 202118）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=202118&o=json)
- [中国历代人物传记资料库：王璉（CBDB 283871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=283871&o=json)
