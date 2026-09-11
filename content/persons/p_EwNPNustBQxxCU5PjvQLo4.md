---
schema: wang-person/v1
id: p_EwNPNustBQxxCU5PjvQLo4
status: active
merged_into: null
display_name: 王睿
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_zKTdWxrNm4JNmKa1qz5Evw
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yu2xTE5YDguK374Qzig5YN
          claim_id: c_zKTdWxrNm4JNmKa1qz5Evw
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
          stance: supports
          locator: CBDB:145126
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（145126）
          source: &a1
            id: s_LYrNrmBcf5P7Ra2VcWpnth
            source_type: api_record
            title: 中国历代人物传记资料库：王睿（CBDB 145126）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145126&o=json
            external_identifier: CBDB:145126
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.653Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_e8Ccd7LpABQ9LocSHT9UPg
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 810年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7qCo3MLVNvQNNurtGaHSKn
          claim_id: c_e8Ccd7LpABQ9LocSHT9UPg
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
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
        id: c_Q1rL1xcnxXJQCzGZp39rP5
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 872年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_1Pz9i6AQYxbxAQ7KQDnJ3m
          claim_id: c_Q1rL1xcnxXJQCzGZp39rP5
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
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
        id: c_CYUR8DZvKgH1fnZqiSUUCb
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王睿（810年—872年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 145126）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_TEWrixB1JJr04yELmohnNE
          claim_id: c_CYUR8DZvKgH1fnZqiSUUCb
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
          stance: supports
          locator: CBDB:145126
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_zHkPom0Deo05P2zuLAAXqT
        subject_person_id: p_iExwTUSihbBvbcDkEjipqk
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_EwNPNustBQxxCU5PjvQLo4
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_15sS-TqlETWMIOeksPXS0x
          claim_id: c_zHkPom0Deo05P2zuLAAXqT
          source_id: s_LYrNrmBcf5P7Ra2VcWpnth
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_iExwTUSihbBvbcDkEjipqk
        status: active
        display_name: 王珍
        merged_into_person_id: null
  children:
    - claim:
        id: c_MMTctieHkzYrtUZajxlPfJ
        subject_person_id: p_EwNPNustBQxxCU5PjvQLo4
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CQ1KyJY837q7EWfjdLbmfj
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_kXzCSKAiKLstffVIpRGfpi
          claim_id: c_MMTctieHkzYrtUZajxlPfJ
          source_id: s_zBLxbpy2E2g79M9edo3M6q
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_zBLxbpy2E2g79M9edo3M6q
            source_type: api_record
            title: 中国历代人物传记资料库：王殷（CBDB 185025）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185025&o=json
            external_identifier: CBDB:185025
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.236Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CQ1KyJY837q7EWfjdLbmfj
        status: active
        display_name: 王殷
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王睿

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王睿 | accepted |
| birth.date | 810年 | accepted |
| death.date | 872年 | accepted |
| bio.summary | 王睿（810年—872年），唐人物。籍贯新鄉。（中国历代人物传记资料库 CBDB 145126） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_iExwTUSihbBvbcDkEjipqk | 王珍 | accepted |
| children | p_CQ1KyJY837q7EWfjdLbmfj | 王殷 | accepted |

## 外部来源

- [中国历代人物传记资料库：王睿（CBDB 145126）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145126&o=json)
- [中国历代人物传记资料库：王殷（CBDB 185025）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=185025&o=json)
