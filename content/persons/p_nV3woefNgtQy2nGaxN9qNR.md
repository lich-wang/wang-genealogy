---
schema: wang-person/v1
id: p_nV3woefNgtQy2nGaxN9qNR
status: active
merged_into: null
display_name: 王仁堪
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MY6ADy58mH95vHFc2v68nf
        subject_person_id: p_nV3woefNgtQy2nGaxN9qNR
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁堪
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qg2HtXGoCuof8cGmZ7Gae8
          claim_id: c_MY6ADy58mH95vHFc2v68nf
          source_id: s_B98u69cxiARSbs3xKG6Fqm
          stance: supports
          locator: CBDB:55786
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（55786）
          source: &a1
            id: s_B98u69cxiARSbs3xKG6Fqm
            source_type: api_record
            title: 中国历代人物传记资料库：王仁堪（CBDB 55786）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55786&o=json
            external_identifier: CBDB:55786
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_iSZZ9u1pHjdV5CEgAiEzVo
        subject_person_id: p_nV3woefNgtQy2nGaxN9qNR
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1848年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7FZVYZxoMHEmZyqCA5785d
          claim_id: c_iSZZ9u1pHjdV5CEgAiEzVo
          source_id: s_B98u69cxiARSbs3xKG6Fqm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_pnuR2rrXAjJnAzkyU4XJP4
        subject_person_id: p_nV3woefNgtQy2nGaxN9qNR
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1893年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_b9HV4C7HbwYjH99GRbfauS
          claim_id: c_pnuR2rrXAjJnAzkyU4XJP4
          source_id: s_B98u69cxiARSbs3xKG6Fqm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_YNB7RnowGYqFqyUxTUjVCR
        subject_person_id: p_nV3woefNgtQy2nGaxN9qNR
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王仁堪（1848年—1893年），清人物。明清進士進士，籍贯閩縣，入仕進士，曾任管學官、鄉試考官、修撰。（中国历代人物传记资料库 CBDB 55786）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_51aiTqRk3qpdwdkbtuhSmt
          claim_id: c_YNB7RnowGYqFqyUxTUjVCR
          source_id: s_B98u69cxiARSbs3xKG6Fqm
          stance: supports
          locator: CBDB:55786
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

# 王仁堪

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王仁堪 | accepted |
| birth.date | 1848年 | accepted |
| death.date | 1893年 | accepted |
| bio.summary | 王仁堪（1848年—1893年），清人物。明清進士進士，籍贯閩縣，入仕進士，曾任管學官、鄉試考官、修撰。（中国历代人物传记资料库 CBDB 55786） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王仁堪（CBDB 55786）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=55786&o=json)
