---
schema: wang-person/v1
id: p_e3HFm5MJVFJy4um6Sr1YEx
status: active
merged_into: null
display_name: 王顯
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_G81vtFHqVmteSidDJ97p2y
        subject_person_id: p_e3HFm5MJVFJy4um6Sr1YEx
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_D3vuLKSNZvb4eXzfrJL1ZC
          claim_id: c_G81vtFHqVmteSidDJ97p2y
          source_id: s_Ts2BudcoocZbZz3N3wsmx8
          stance: supports
          locator: CBDB:61257
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（61257）
          source: &a1
            id: s_Ts2BudcoocZbZz3N3wsmx8
            source_type: api_record
            title: 中国历代人物传记资料库：王顯（CBDB 61257）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61257&o=json
            external_identifier: CBDB:61257
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.899Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Vxh2p6TV3FZaFRYsfq6Pu5
        subject_person_id: p_e3HFm5MJVFJy4um6Sr1YEx
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王顯，清人物。籍贯曲周，曾任吏部主事、文選司主事、道監察御史。（中国历代人物传记资料库 CBDB 61257）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IJ9xBQfESlfybGbnqQBB__
          claim_id: c_Vxh2p6TV3FZaFRYsfq6Pu5
          source_id: s_Ts2BudcoocZbZz3N3wsmx8
          stance: supports
          locator: CBDB:61257
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

# 王顯

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王顯 | accepted |
| bio.summary | 王顯，清人物。籍贯曲周，曾任吏部主事、文選司主事、道監察御史。（中国历代人物传记资料库 CBDB 61257） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王顯（CBDB 61257）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=61257&o=json)
