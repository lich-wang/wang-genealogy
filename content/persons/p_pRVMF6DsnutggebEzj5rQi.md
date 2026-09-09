---
schema: wang-person/v1
id: p_pRVMF6DsnutggebEzj5rQi
status: active
merged_into: null
display_name: 王昭遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_QSjh4T6td5KM4fwKMGpK8d
        subject_person_id: p_pRVMF6DsnutggebEzj5rQi
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王昭遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_o6UPR3cFkPt2FUuJAvGKoi
          claim_id: c_QSjh4T6td5KM4fwKMGpK8d
          source_id: s_KZHV3uRC1wBaVzEnHMLQeA
          stance: supports
          locator: CBDB:638434
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（638434）
          source: &a1
            id: s_KZHV3uRC1wBaVzEnHMLQeA
            source_type: api_record
            title: 中国历代人物传记资料库：王昭遠（CBDB 638434）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638434&o=json
            external_identifier: CBDB:638434
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.683Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GWob4FSyXCVeyr7kKUgKYr
        subject_person_id: p_pRVMF6DsnutggebEzj5rQi
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为清人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_FX8z3W887aXACi82JsQ8qo
          claim_id: c_GWob4FSyXCVeyr7kKUgKYr
          source_id: s_KZHV3uRC1wBaVzEnHMLQeA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
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

# 王昭遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王昭遠 | accepted |
| bio.summary | CBDB 记载为清人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王昭遠（CBDB 638434）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=638434&o=json)
