---
schema: wang-person/v1
id: p_BBH1TU7H1vXUVmr3QxVB4h
status: active
merged_into: null
display_name: 王二共
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_f56AVBPfDiZBcyLEogZXMC
        subject_person_id: p_BBH1TU7H1vXUVmr3QxVB4h
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王二共
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CnhcgS3L5QC2BsrQAZwkpb
          claim_id: c_f56AVBPfDiZBcyLEogZXMC
          source_id: s_5UcocaY3UtAuKE3cvD9wwt
          stance: supports
          locator: CBDB:700927
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（700927）
          source: &a1
            id: s_5UcocaY3UtAuKE3cvD9wwt
            source_type: api_record
            title: 中国历代人物传记资料库：王二共（CBDB 700927）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700927&o=json
            external_identifier: CBDB:700927
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.600Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_okGtuohXnShVddrk8HtbwM
        subject_person_id: p_BBH1TU7H1vXUVmr3QxVB4h
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王二共，明人物。籍贯武清，入仕薦舉 (保任,保舉)，曾任縣令、知府。（中国历代人物传记资料库 CBDB 700927）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_D6PIDY4Kfn-WiUWlKe6wNA
          claim_id: c_okGtuohXnShVddrk8HtbwM
          source_id: s_5UcocaY3UtAuKE3cvD9wwt
          stance: supports
          locator: CBDB:700927
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

# 王二共

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王二共 | accepted |
| bio.summary | 王二共，明人物。籍贯武清，入仕薦舉 (保任,保舉)，曾任縣令、知府。（中国历代人物传记资料库 CBDB 700927） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王二共（CBDB 700927）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=700927&o=json)
