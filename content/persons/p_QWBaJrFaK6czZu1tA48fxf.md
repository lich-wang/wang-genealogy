---
schema: wang-person/v1
id: p_QWBaJrFaK6czZu1tA48fxf
status: active
merged_into: null
display_name: 王思泰
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_K57yXHCbakHDvf84ApMn2A
        subject_person_id: p_QWBaJrFaK6czZu1tA48fxf
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思泰
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_2Jf4t4hgAgUJAQF9XyGU61
          claim_id: c_K57yXHCbakHDvf84ApMn2A
          source_id: s_P9k88Y3ExuHLWVhLFp1C4B
          stance: supports
          locator: CBDB:164583
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（164583）
          source: &a1
            id: s_P9k88Y3ExuHLWVhLFp1C4B
            source_type: api_record
            title: 中国历代人物传记资料库：王思泰（CBDB 164583）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164583&o=json
            external_identifier: CBDB:164583
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.969Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_9KcE4hjEh9273kS1cAgp8v
        subject_person_id: p_QWBaJrFaK6czZu1tA48fxf
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王思泰，唐人物。籍贯丹徒，曾任州刺史。（中国历代人物传记资料库 CBDB 164583）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_tqdrk28la8B5hd0FH1onVY
          claim_id: c_9KcE4hjEh9273kS1cAgp8v
          source_id: s_P9k88Y3ExuHLWVhLFp1C4B
          stance: supports
          locator: CBDB:164583
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_9o9KWq-5rwJ-sRVwSocrCt
        subject_person_id: p_kpAhKMDABDScnE9Hdp7QQo
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_QWBaJrFaK6czZu1tA48fxf
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZN_ohoHlpVgoAD1Q7vGAsH
          claim_id: c_9o9KWq-5rwJ-sRVwSocrCt
          source_id: s_Z6YTMbHKMqB4ihYyqChUmE
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Z6YTMbHKMqB4ihYyqChUmE
            source_type: api_record
            title: 中国历代人物传记资料库：王閔（CBDB 175842）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175842&o=json
            external_identifier: CBDB:175842
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.157Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_kpAhKMDABDScnE9Hdp7QQo
        status: active
        display_name: 王閔
        merged_into_person_id: null
  children:
    - claim:
        id: c_h0cYx4snHSJ2onsQ3H3LQs
        subject_person_id: p_QWBaJrFaK6czZu1tA48fxf
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_CWPBrhMiB4QhsDQzD22Bfc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R3nD-laiCjp_LSCEtAgzLZ
          claim_id: c_h0cYx4snHSJ2onsQ3H3LQs
          source_id: s_yd3oS6UgooQrEVwzqDGCU1
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_yd3oS6UgooQrEVwzqDGCU1
            source_type: api_record
            title: 中国历代人物传记资料库：王美暢（CBDB 150489）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150489&o=json
            external_identifier: CBDB:150489
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.815Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_CWPBrhMiB4QhsDQzD22Bfc
        status: active
        display_name: 王美暢
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_eMAsN8Yas9SWxZdL6YLCLb
        subject_person_id: p_QWBaJrFaK6czZu1tA48fxf
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_QvPhnczVXd8EJkAtkRAA2Q
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_-kUGtdqLADTNX-6exUHUw8
          claim_id: c_eMAsN8Yas9SWxZdL6YLCLb
          source_id: s_8dG9nvMoysHKHsrrpYe2t9
          stance: supports
          locator: 唐代墓誌彙編續集，(XJ)Tianbao26：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_8dG9nvMoysHKHsrrpYe2t9
            source_type: api_record
            title: 中国历代人物传记资料库：王芳媚（CBDB 142971）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142971&o=json
            external_identifier: CBDB:142971
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:39.240Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_QvPhnczVXd8EJkAtkRAA2Q
        status: active
        display_name: 王芳媚
        merged_into_person_id: null
  other: []
---

# 王思泰

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王思泰 | accepted |
| bio.summary | 王思泰，唐人物。籍贯丹徒，曾任州刺史。（中国历代人物传记资料库 CBDB 164583） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_kpAhKMDABDScnE9Hdp7QQo | 王閔 | accepted |
| children | p_CWPBrhMiB4QhsDQzD22Bfc | 王美暢 | accepted |
| descendants | p_QvPhnczVXd8EJkAtkRAA2Q | 王芳媚 | accepted |

## 外部来源

- [中国历代人物传记资料库：王芳媚（CBDB 142971）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=142971&o=json)
- [中国历代人物传记资料库：王美暢（CBDB 150489）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150489&o=json)
- [中国历代人物传记资料库：王閔（CBDB 175842）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=175842&o=json)
- [中国历代人物传记资料库：王思泰（CBDB 164583）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=164583&o=json)
