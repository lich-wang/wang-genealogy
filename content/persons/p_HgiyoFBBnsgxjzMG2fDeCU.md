---
schema: wang-person/v1
id: p_HgiyoFBBnsgxjzMG2fDeCU
status: active
merged_into: null
display_name: 王式
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_cDZgNeTwcgqP2kFWZNuCPJ
        subject_person_id: p_HgiyoFBBnsgxjzMG2fDeCU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_eB9FTGp51RQLFdwvjbDMqC
          claim_id: c_cDZgNeTwcgqP2kFWZNuCPJ
          source_id: s_JXDF2WY8UYvvD5RuFGTPGN
          stance: supports
          locator: CBDB:175914
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175914）
          source: &a1
            id: s_JXDF2WY8UYvvD5RuFGTPGN
            source_type: api_record
            title: 中国历代人物传记资料库：王式（CBDB 175914）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175914&o=json
            external_identifier: CBDB:175914
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.196Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_D18PcMtMrt4AzQ3m5PVGwY
        subject_person_id: p_HgiyoFBBnsgxjzMG2fDeCU
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 865年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_csLDiJwqs8LpSq5Zwxzepf
          claim_id: c_D18PcMtMrt4AzQ3m5PVGwY
          source_id: s_JXDF2WY8UYvvD5RuFGTPGN
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
        id: c_r83Sbfuc3AR6eiRknCDi5X
        subject_person_id: p_HgiyoFBBnsgxjzMG2fDeCU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王式（卒于865年），唐人物。籍贯太原，曾任金吾大將軍、州刺史。（中国历代人物传记资料库 CBDB 175914）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tJf68d9gAkX-lY_GvKLEDz
          claim_id: c_r83Sbfuc3AR6eiRknCDi5X
          source_id: s_JXDF2WY8UYvvD5RuFGTPGN
          stance: supports
          locator: CBDB:175914
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_NYUBLQzJBQD0v9sBeDCyM7
        subject_person_id: p_6RPHj2j4cH1L4YTjuMhCpn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_HgiyoFBBnsgxjzMG2fDeCU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ypGMGR1vCe7qWB4ybw8bTT
          claim_id: c_NYUBLQzJBQD0v9sBeDCyM7
          source_id: s_QZUQfDNG45gtkNvmB8J354
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_QZUQfDNG45gtkNvmB8J354
            source_type: api_record
            title: 中国历代人物传记资料库：王起（CBDB 92061）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json
            external_identifier: CBDB:92061
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.110Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_6RPHj2j4cH1L4YTjuMhCpn
        status: active
        display_name: 王起
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王式

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王式 | accepted |
| death.date | 865年 | accepted |
| bio.summary | 王式（卒于865年），唐人物。籍贯太原，曾任金吾大將軍、州刺史。（中国历代人物传记资料库 CBDB 175914） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_6RPHj2j4cH1L4YTjuMhCpn | 王起 | accepted |

## 外部来源

- [中国历代人物传记资料库：王起（CBDB 92061）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=92061&o=json)
- [中国历代人物传记资料库：王式（CBDB 175914）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175914&o=json)
