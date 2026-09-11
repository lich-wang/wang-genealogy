---
schema: wang-person/v1
id: p_T4LyRWguJPui2H99daWE8V
status: active
merged_into: null
display_name: 王珌
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ZNDBAEZDXxiXJJFTRTsPU5
        subject_person_id: p_T4LyRWguJPui2H99daWE8V
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王珌
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iccZhDySVdU7K581GyhZ9a
          claim_id: c_ZNDBAEZDXxiXJJFTRTsPU5
          source_id: s_FJupYnGPuukTh8xVUeuMd8
          stance: supports
          locator: CBDB:190164
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（190164）
          source: &a1
            id: s_FJupYnGPuukTh8xVUeuMd8
            source_type: api_record
            title: 中国历代人物传记资料库：王珌（CBDB 190164）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190164&o=json
            external_identifier: CBDB:190164
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.316Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_aXphgaAx759mcS9xd4MQ5w
        subject_person_id: p_T4LyRWguJPui2H99daWE8V
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1022年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_bC8K4kALH36io1EC87f3DT
          claim_id: c_aXphgaAx759mcS9xd4MQ5w
          source_id: s_FJupYnGPuukTh8xVUeuMd8
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
        id: c_BGT9KyWCGEUyN4G8WfHe7S
        subject_person_id: p_T4LyRWguJPui2H99daWE8V
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
        - id: cs_4GLajC9JXDKqkzp1Zp9z3M
          claim_id: c_BGT9KyWCGEUyN4G8WfHe7S
          source_id: s_FJupYnGPuukTh8xVUeuMd8
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
        id: c_xgccfrF8Tw6SHE15Aygegr
        subject_person_id: p_dHK6S2CF83o7bsW1omDPPe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_T4LyRWguJPui2H99daWE8V
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Y34UlBzbsgDRQVi1KkLWL-
          claim_id: c_xgccfrF8Tw6SHE15Aygegr
          source_id: s_V2fSUyMizNfJqvRAfkJqCX
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_V2fSUyMizNfJqvRAfkJqCX
            source_type: api_record
            title: 中国历代人物传记资料库：王裕（CBDB 144860）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json
            external_identifier: CBDB:144860
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.636Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_dHK6S2CF83o7bsW1omDPPe
        status: active
        display_name: 王裕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王珌

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王珌 | accepted |
| death.date | 1022年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_dHK6S2CF83o7bsW1omDPPe | 王裕 | accepted |

## 外部来源

- [中国历代人物传记资料库：王珌（CBDB 190164）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=190164&o=json)
- [中国历代人物传记资料库：王裕（CBDB 144860）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=144860&o=json)
