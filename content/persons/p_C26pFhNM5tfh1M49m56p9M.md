---
schema: wang-person/v1
id: p_C26pFhNM5tfh1M49m56p9M
status: active
merged_into: null
display_name: 李洞真
revision: 1
cbdb_id: 145145
properties:
  - predicate: bio.summary
    recommended:
      claim:
        id: c_OHf4xCmFSCFRbGkujJD-y0
        subject_person_id: p_C26pFhNM5tfh1M49m56p9M
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李洞真（765—835），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 145145）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Wt-B1U8U39VGkedQu8DpEU
          claim_id: c_OHf4xCmFSCFRbGkujJD-y0
          source_id: s_kNzGvRWzofYxaGhmXXwvTO
          stance: supports
          locator: CBDB:145145
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: &a1
            id: s_kNzGvRWzofYxaGhmXXwvTO
            source_type: api_record
            title: 中国历代人物传记资料库：李洞真（CBDB 145145）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145145&o=json
            external_identifier: CBDB:145145
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: name.primary
    recommended:
      claim:
        id: c_oaFMROOzdy4H1pg636lKze
        subject_person_id: p_C26pFhNM5tfh1M49m56p9M
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 李洞真
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UKZQv6zsuHqPksDBNKvl7o
          claim_id: c_oaFMROOzdy4H1pg636lKze
          source_id: s_kNzGvRWzofYxaGhmXXwvTO
          stance: supports
          locator: CBDB:145145
          quotation: null
          interpretation_note: CBDB 明确记录的王鍊配偶
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_BUbnmi20O7DWEnQ0NMkKwg
        subject_person_id: p_3JQhJ6V1PYArAt9hMRD7UM
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_C26pFhNM5tfh1M49m56p9M
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_OjwuSo8lis1JhZ8dmUakYB
          claim_id: c_BUbnmi20O7DWEnQ0NMkKwg
          source_id: s_kNzGvRWzofYxaGhmXXwvTO
          stance: supports
          locator: 唐五代人物傳記與社會網絡資料庫(1.0版)：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_3JQhJ6V1PYArAt9hMRD7UM
        status: active
        display_name: 王鍊
        merged_into_person_id: null
  ancestors: []
  descendants: []
  other: []
---

# 李洞真

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| bio.summary | 李洞真（765—835），唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 145145） | accepted |
| name.primary | 李洞真 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| spouses | p_3JQhJ6V1PYArAt9hMRD7UM | 王鍊 | accepted |

## 外部来源

- [中国历代人物传记资料库：李洞真（CBDB 145145）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=145145&o=json)
