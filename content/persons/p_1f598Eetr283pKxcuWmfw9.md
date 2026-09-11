---
schema: wang-person/v1
id: p_1f598Eetr283pKxcuWmfw9
status: active
merged_into: null
display_name: 王章
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_xSbG86SN71tzuwns6C28Ej
        subject_person_id: p_1f598Eetr283pKxcuWmfw9
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_asg6ajE1T12CDxf9VfE86G
          claim_id: c_xSbG86SN71tzuwns6C28Ej
          source_id: s_k1PMCcedA5P61DD1or1PZG
          stance: supports
          locator: CBDB:496697
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（496697）
          source: &a1
            id: s_k1PMCcedA5P61DD1or1PZG
            source_type: api_record
            title: 中国历代人物传记资料库：王章（CBDB 496697）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496697&o=json
            external_identifier: CBDB:496697
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:24.584Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_4JAD62pXgsAvLnFCKHfLgy
        subject_person_id: p_1f598Eetr283pKxcuWmfw9
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王章，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 496697）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7NITkRIj4pBGV6tu8Mwkur
          claim_id: c_4JAD62pXgsAvLnFCKHfLgy
          source_id: s_k1PMCcedA5P61DD1or1PZG
          stance: supports
          locator: CBDB:496697
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

# 王章

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王章 | accepted |
| bio.summary | 王章，清人物。入仕貢生 = 貢監生 (明清賓貢,功貢)，曾任知縣。（中国历代人物传记资料库 CBDB 496697） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王章（CBDB 496697）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=496697&o=json)
