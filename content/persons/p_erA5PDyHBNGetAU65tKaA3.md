---
schema: wang-person/v1
id: p_erA5PDyHBNGetAU65tKaA3
status: active
merged_into: null
display_name: 王化隆
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_ESudZARXJaCEo1n88twJdf
        subject_person_id: p_erA5PDyHBNGetAU65tKaA3
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王化隆
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_N52adpHBQAXehsjkerN5Lu
          claim_id: c_ESudZARXJaCEo1n88twJdf
          source_id: s_FEjCdeVxRYxHZcBkkPf4FH
          stance: supports
          locator: CBDB:459403
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（459403）
          source: &a1
            id: s_FEjCdeVxRYxHZcBkkPf4FH
            source_type: api_record
            title: 中国历代人物传记资料库：王化隆（CBDB 459403）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459403&o=json
            external_identifier: CBDB:459403
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.690Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_fMzgCRhFRzYYoFkUgZBLRm
        subject_person_id: p_erA5PDyHBNGetAU65tKaA3
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王化隆，明人物。入仕貢生: 選貢(優貢 after 1628)，曾任主簿。（中国历代人物传记资料库 CBDB 459403）"
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_dPxcys5QTm3i1YNIatwFOb
          claim_id: c_fMzgCRhFRzYYoFkUgZBLRm
          source_id: s_FEjCdeVxRYxHZcBkkPf4FH
          stance: supports
          locator: CBDB:459403
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

# 王化隆

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王化隆 | accepted |
| bio.summary | 王化隆，明人物。入仕貢生: 選貢(優貢 after 1628)，曾任主簿。（中国历代人物传记资料库 CBDB 459403） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王化隆（CBDB 459403）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=459403&o=json)
