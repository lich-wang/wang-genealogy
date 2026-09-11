---
schema: wang-person/v1
id: p_v7hY2MPWNb5h1Sk11WC84J
status: active
merged_into: null
display_name: 王儀
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_yMtY94nRF3vMH4PE1djyCX
        subject_person_id: p_v7hY2MPWNb5h1Sk11WC84J
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7NJfMV6hF64GWDke2WDUQt
          claim_id: c_yMtY94nRF3vMH4PE1djyCX
          source_id: s_ATCCC5eDCbBCTZ1qKX2WNC
          stance: supports
          locator: CBDB:467714
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（467714）
          source: &a1
            id: s_ATCCC5eDCbBCTZ1qKX2WNC
            source_type: api_record
            title: 中国历代人物传记资料库：王儀（CBDB 467714）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467714&o=json
            external_identifier: CBDB:467714
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.050Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_SVtA2DNDNw4FMcCaRvx4d4
        subject_person_id: p_v7hY2MPWNb5h1Sk11WC84J
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王儀，明人物。曾任巡按御史。（中国历代人物传记资料库 CBDB 467714）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_LMdiEpcKvjmIMGNGEwxyOh
          claim_id: c_SVtA2DNDNw4FMcCaRvx4d4
          source_id: s_ATCCC5eDCbBCTZ1qKX2WNC
          stance: supports
          locator: CBDB:467714
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

# 王儀

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王儀 | accepted |
| bio.summary | 王儀，明人物。曾任巡按御史。（中国历代人物传记资料库 CBDB 467714） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王儀（CBDB 467714）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=467714&o=json)
