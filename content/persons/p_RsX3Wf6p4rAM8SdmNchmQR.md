---
schema: wang-person/v1
id: p_RsX3Wf6p4rAM8SdmNchmQR
status: active
merged_into: null
display_name: 王德宣
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_65uqgsLADUg64sFJ1C9fzh
        subject_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_Y7fnL2PkMvJQA9862K23eH
          claim_id: c_65uqgsLADUg64sFJ1C9fzh
          source_id: s_nXYDBduBne5M29HuzunzUB
          stance: supports
          locator: CBDB:218713
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（218713）
          source: &a1
            id: s_nXYDBduBne5M29HuzunzUB
            source_type: api_record
            title: 中国历代人物传记资料库：王德宣（CBDB 218713）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json
            external_identifier: CBDB:218713
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.275Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_GPRzv89rHvPW5x2RnHVfYP
        subject_person_id: p_RsX3Wf6p4rAM8SdmNchmQR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王德宣，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218713）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_i4FfH9ppL2yjpFF8-ohxnC
          claim_id: c_GPRzv89rHvPW5x2RnHVfYP
          source_id: s_nXYDBduBne5M29HuzunzUB
          stance: supports
          locator: CBDB:218713
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

# 王德宣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王德宣 | accepted |
| bio.summary | 王德宣，明人物。萬曆八年進士，籍贯安福。（中国历代人物传记资料库 CBDB 218713） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王德宣（CBDB 218713）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=218713&o=json)
