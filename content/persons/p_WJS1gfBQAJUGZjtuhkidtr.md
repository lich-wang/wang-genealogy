---
schema: wang-person/v1
id: p_WJS1gfBQAJUGZjtuhkidtr
status: active
merged_into: null
display_name: 王元
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_jPhqDNunKecEomZ4xExNxZ
        subject_person_id: p_WJS1gfBQAJUGZjtuhkidtr
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_hK8pp5VwD8DpQ7PCrHTtTW
          claim_id: c_jPhqDNunKecEomZ4xExNxZ
          source_id: s_3WAYDUEHzocSqKDg6uyvqM
          stance: supports
          locator: CBDB:193688
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（193688）
          source: &a1
            id: s_3WAYDUEHzocSqKDg6uyvqM
            source_type: api_record
            title: 中国历代人物传记资料库：王元（CBDB 193688）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193688&o=json
            external_identifier: CBDB:193688
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.446Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_prN1PipFJJ6bgheaWKPb57
        subject_person_id: p_WJS1gfBQAJUGZjtuhkidtr
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 700年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xW3uF3vEMiwTTTNcusaLny
          claim_id: c_prN1PipFJJ6bgheaWKPb57
          source_id: s_3WAYDUEHzocSqKDg6uyvqM
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
        id: c_ocdGXSbwP1yPtew77m365z
        subject_person_id: p_WJS1gfBQAJUGZjtuhkidtr
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
        - id: cs_qUk8rSEUQMYGkkMYjPJd1G
          claim_id: c_ocdGXSbwP1yPtew77m365z
          source_id: s_3WAYDUEHzocSqKDg6uyvqM
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_3Mi7BYuy34l3T0M45CCfMw
        subject_person_id: p_WJS1gfBQAJUGZjtuhkidtr
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_pih8YZTmQQh8XL1mqsF8Px
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oIKVxv3IwyOAlHGdsSclp_
          claim_id: c_3Mi7BYuy34l3T0M45CCfMw
          source_id: s_QyQhig4HAM8qMei6xoF8hE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QyQhig4HAM8qMei6xoF8hE
            source_type: api_record
            title: 中国历代人物传记资料库：王思獻（CBDB 193687）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193687&o=json
            external_identifier: CBDB:193687
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.445Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_pih8YZTmQQh8XL1mqsF8Px
        status: active
        display_name: 王思獻
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元 | accepted |
| death.date | 700年 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_pih8YZTmQQh8XL1mqsF8Px | 王思獻 | accepted |

## 外部来源

- [中国历代人物传记资料库：王思獻（CBDB 193687）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193687&o=json)
- [中国历代人物传记资料库：王元（CBDB 193688）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=193688&o=json)
