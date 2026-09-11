---
schema: wang-person/v1
id: p_x34BYkJKaMmQxzJmMFzpo6
status: active
merged_into: null
display_name: 陳玉蘭
revision: 1
cbdb_id: 93588
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_iaTBoR4Kz_W28TGHcEN3DL
        subject_person_id: p_x34BYkJKaMmQxzJmMFzpo6
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 陳玉蘭
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gP8KwlJSRt2Vr_NOfOmylK
          claim_id: c_iaTBoR4Kz_W28TGHcEN3DL
          source_id: s_jlrMQ1k6dGv-wmcHxnreQp
          stance: supports
          locator: CBDB:93588
          quotation: null
          interpretation_note: CBDB 明确记录的王駕配偶
          source: &a1
            id: s_jlrMQ1k6dGv-wmcHxnreQp
            source_type: api_record
            title: 中国历代人物传记资料库：陳玉蘭（CBDB 93588）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93588&o=json
            external_identifier: CBDB:93588
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_GvJToAVlSc-8vXI36_GPi2
        subject_person_id: p_b5sCnEynEg8hf3tXrLTDrR
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_x34BYkJKaMmQxzJmMFzpo6
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-POxFkMr4uzImtG1Gv6N1Q
          claim_id: c_GvJToAVlSc-8vXI36_GPi2
          source_id: s_jlrMQ1k6dGv-wmcHxnreQp
          stance: supports
          locator: "明清婦女著作數據庫，MQWW PoetID #2083：妻子"
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_b5sCnEynEg8hf3tXrLTDrR
        status: active
        display_name: 王駕
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 陳玉蘭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 陳玉蘭 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_b5sCnEynEg8hf3tXrLTDrR | 王駕 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳玉蘭（CBDB 93588）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=93588&o=json)
