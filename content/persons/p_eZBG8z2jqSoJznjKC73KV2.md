---
schema: wang-person/v1
id: p_eZBG8z2jqSoJznjKC73KV2
status: active
merged_into: null
display_name: 王廷熙
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_2v5PDva8bRoYEkADNSRygE
        subject_person_id: p_eZBG8z2jqSoJznjKC73KV2
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷熙
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CVFLP5MBBP8DnokocCd4MP
          claim_id: c_2v5PDva8bRoYEkADNSRygE
          source_id: s_b9nhMMtt657YDb8PS5UAdK
          stance: supports
          locator: CBDB:637532
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637532）
          source: &a1
            id: s_b9nhMMtt657YDb8PS5UAdK
            source_type: api_record
            title: 中国历代人物传记资料库：王廷熙（CBDB 637532）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637532&o=json
            external_identifier: CBDB:637532
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.351Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Bgydh7Lsu1GeNyT1R9PtoC
        subject_person_id: p_eZBG8z2jqSoJznjKC73KV2
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王廷熙，清人物。籍贯睢州，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 637532）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_AaIjH0Bf61C5rGFKGyyU4T
          claim_id: c_Bgydh7Lsu1GeNyT1R9PtoC
          source_id: s_b9nhMMtt657YDb8PS5UAdK
          stance: supports
          locator: CBDB:637532
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王廷熙

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王廷熙 | accepted |
| bio.summary | 王廷熙，清人物。籍贯睢州，入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任縣丞。（中国历代人物传记资料库 CBDB 637532） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王廷熙（CBDB 637532）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637532&o=json)
