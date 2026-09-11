---
schema: wang-person/v1
id: p_7JDKFiBKup7aCwY51vxauZ
status: active
merged_into: null
display_name: 王怡
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_9nFcbLd4YtLrCX2VyoTppe
        subject_person_id: p_7JDKFiBKup7aCwY51vxauZ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王怡
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_F6VAyN6i6kr9QL9RewbA4F
          claim_id: c_9nFcbLd4YtLrCX2VyoTppe
          source_id: s_6TzxNGNNHF3pq2R7WUYS8M
          stance: supports
          locator: CBDB:175907
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175907）
          source: &a1
            id: s_6TzxNGNNHF3pq2R7WUYS8M
            source_type: api_record
            title: 中国历代人物传记资料库：王怡（CBDB 175907）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175907&o=json
            external_identifier: CBDB:175907
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.190Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_uAnW33wJZfG2QhK3UU9Brx
        subject_person_id: p_7JDKFiBKup7aCwY51vxauZ
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 658年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_RKNfa7nNFkB654KELLb25f
          claim_id: c_uAnW33wJZfG2QhK3UU9Brx
          source_id: s_6TzxNGNNHF3pq2R7WUYS8M
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
        id: c_1WTC3Hs3FqEwGLBdmUTVhD
        subject_person_id: p_7JDKFiBKup7aCwY51vxauZ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Zx3GwoS7LiykmFFjS8u54u
          claim_id: c_1WTC3Hs3FqEwGLBdmUTVhD
          source_id: s_6TzxNGNNHF3pq2R7WUYS8M
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
        id: c_NusUwsE-VWAHnT5LL4ouCv
        subject_person_id: p_D5C793m8SK9qUPDT8ndoer
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_7JDKFiBKup7aCwY51vxauZ
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_DwOwHblc0KDB4mikIMmYOY
          claim_id: c_NusUwsE-VWAHnT5LL4ouCv
          source_id: s_6TzxNGNNHF3pq2R7WUYS8M
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_D5C793m8SK9qUPDT8ndoer
        status: active
        display_name: 王真
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王怡

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王怡 | accepted |
| death.date | 658年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_D5C793m8SK9qUPDT8ndoer | 王真 | accepted |

## 外部来源

- [中国历代人物传记资料库：王怡（CBDB 175907）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175907&o=json)
