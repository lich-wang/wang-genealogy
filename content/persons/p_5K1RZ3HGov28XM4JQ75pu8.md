---
schema: wang-person/v1
id: p_5K1RZ3HGov28XM4JQ75pu8
status: active
merged_into: null
display_name: 王休名
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_rL66e5XAbAmpoeNvUhuXA7
        subject_person_id: p_5K1RZ3HGov28XM4JQ75pu8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休名
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_uK33dQouSMk4537CrAGhtg
          claim_id: c_rL66e5XAbAmpoeNvUhuXA7
          source_id: s_T2qACe2pTGd2vvC3qHukV6
          stance: supports
          locator: CBDB:175672
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（175672）
          source: &a1
            id: s_T2qACe2pTGd2vvC3qHukV6
            source_type: api_record
            title: 中国历代人物传记资料库：王休名（CBDB 175672）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175672&o=json
            external_identifier: CBDB:175672
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.051Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_5yU8NYkKRTLohriLMCsR7k
        subject_person_id: p_5K1RZ3HGov28XM4JQ75pu8
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
        - id: cs_yMssFDJwsM4oz4jD2sFG5Y
          claim_id: c_5yU8NYkKRTLohriLMCsR7k
          source_id: s_T2qACe2pTGd2vvC3qHukV6
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
        id: c_TcWCF8J7eYK3dekXdopPR2
        subject_person_id: p_5K1RZ3HGov28XM4JQ75pu8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王休名（卒于700年），唐人物。籍贯泗州，曾任州刺史。（中国历代人物传记资料库 CBDB 175672）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_xLx-8CVPCJcZfQsPub_CpD
          claim_id: c_TcWCF8J7eYK3dekXdopPR2
          source_id: s_T2qACe2pTGd2vvC3qHukV6
          stance: supports
          locator: CBDB:175672
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_CL7K3woeSXe_vuQo2jjkkM
        subject_person_id: p_cwKzjBMKcPC1s1jgGcgBVa
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5K1RZ3HGov28XM4JQ75pu8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_YbmSoqYsV6Qyu9s0-sQcuM
          claim_id: c_CL7K3woeSXe_vuQo2jjkkM
          source_id: s_nd6ttgrtn13qAwN7NSGjcu
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_nd6ttgrtn13qAwN7NSGjcu
            source_type: api_record
            title: 中国历代人物传记资料库：王璿（CBDB 152190）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json
            external_identifier: CBDB:152190
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.847Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_cwKzjBMKcPC1s1jgGcgBVa
        status: active
        display_name: 王璿
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王休名

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王休名 | accepted |
| death.date | 700年 | accepted |
| bio.summary | 王休名（卒于700年），唐人物。籍贯泗州，曾任州刺史。（中国历代人物传记资料库 CBDB 175672） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_cwKzjBMKcPC1s1jgGcgBVa | 王璿 | accepted |

## 外部来源

- [中国历代人物传记资料库：王休名（CBDB 175672）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175672&o=json)
- [中国历代人物传记资料库：王璿（CBDB 152190）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=152190&o=json)
