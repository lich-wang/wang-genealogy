---
schema: wang-person/v1
id: p_v1wNuqzhhseaxSVEmHC3NT
status: active
merged_into: null
display_name: 王身誠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dLJetCXG1TE7w83YbnZtp3
        subject_person_id: p_v1wNuqzhhseaxSVEmHC3NT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王身誠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_iQo55UjnZo9KyLPjiU6SN4
          claim_id: c_dLJetCXG1TE7w83YbnZtp3
          source_id: s_csD9kU7X9mFu6DiHLoMaus
          stance: supports
          locator: CBDB:640367
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640367）
          source: &a1
            id: s_csD9kU7X9mFu6DiHLoMaus
            source_type: api_record
            title: 中国历代人物传记资料库：王身誠（CBDB 640367）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640367&o=json
            external_identifier: CBDB:640367
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_w3sBnDyPapS58bXEWpsGYW
        subject_person_id: p_v1wNuqzhhseaxSVEmHC3NT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王身誠，清人物。籍贯秦州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 640367）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Tfm-A5U1a8E8puZHV6wrs9
          claim_id: c_w3sBnDyPapS58bXEWpsGYW
          source_id: s_csD9kU7X9mFu6DiHLoMaus
          stance: supports
          locator: CBDB:640367
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

# 王身誠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王身誠 | accepted |
| bio.summary | 王身誠，清人物。籍贯秦州直隸州直轄地方，曾任訓導。（中国历代人物传记资料库 CBDB 640367） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王身誠（CBDB 640367）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640367&o=json)
