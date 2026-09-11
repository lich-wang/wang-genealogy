---
schema: wang-person/v1
id: p_FrJBqWgwUnRtuWZzhb2b4A
status: active
merged_into: null
display_name: 王星奎
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dmabbC9G9LDQMoZXdMQGBL
        subject_person_id: p_FrJBqWgwUnRtuWZzhb2b4A
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王星奎
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ztJMJGz45LodfL35BcpQ5P
          claim_id: c_dmabbC9G9LDQMoZXdMQGBL
          source_id: s_3fHJLD6yoqQ8quiVU7UeMM
          stance: supports
          locator: CBDB:555425
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（555425）
          source: &a1
            id: s_3fHJLD6yoqQ8quiVU7UeMM
            source_type: api_record
            title: 中国历代人物传记资料库：王星奎（CBDB 555425）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555425&o=json
            external_identifier: CBDB:555425
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:04.521Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Tngg4qHdaPsLcHFP7mPZzU
        subject_person_id: p_FrJBqWgwUnRtuWZzhb2b4A
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
        - id: cs_gzSWQ2wgqzC5TQRizRtQLK
          claim_id: c_Tngg4qHdaPsLcHFP7mPZzU
          source_id: s_3fHJLD6yoqQ8quiVU7UeMM
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
        id: c_iZuufjKS4oHNF-B5j6AG8e
        subject_person_id: p_8ct24JW85LFaBwBesKXW2J
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_FrJBqWgwUnRtuWZzhb2b4A
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_pBbCV8R-vaQPFJshuiboUO
          claim_id: c_iZuufjKS4oHNF-B5j6AG8e
          source_id: s_DpXnKmpa5iqAqQ81mNyebu
          stance: supports
          locator: (乾隆)信陽州志，lgid=868493：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_DpXnKmpa5iqAqQ81mNyebu
            source_type: api_record
            title: 中国历代人物传记资料库：王延世（CBDB 555424）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json
            external_identifier: CBDB:555424
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:25.638Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8ct24JW85LFaBwBesKXW2J
        status: active
        display_name: 王延世
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王星奎

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王星奎 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_8ct24JW85LFaBwBesKXW2J | 王延世 | accepted |

## 外部来源

- [中国历代人物传记资料库：王星奎（CBDB 555425）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555425&o=json)
- [中国历代人物传记资料库：王延世（CBDB 555424）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=555424&o=json)
