---
schema: wang-person/v1
id: p_T62TXqPFC9eg2CKPraSrFn
status: active
merged_into: null
display_name: 王元佐
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_MxGH1pbJ1Rnon36QrwqL5L
        subject_person_id: p_T62TXqPFC9eg2CKPraSrFn
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王元佐
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_UpK9DkgfBEJgvg34SqyeMZ
          claim_id: c_MxGH1pbJ1Rnon36QrwqL5L
          source_id: s_R9aB5v2Mo98yLSBovEWzux
          stance: supports
          locator: CBDB:156970
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（156970）
          source: &a1
            id: s_R9aB5v2Mo98yLSBovEWzux
            source_type: api_record
            title: 中国历代人物传记资料库：王元佐（CBDB 156970）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156970&o=json
            external_identifier: CBDB:156970
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.900Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZYpeyy4GLSyQAQ6JQ337EA
        subject_person_id: p_T62TXqPFC9eg2CKPraSrFn
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为唐人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_WBd1kHdFVGbYjpG2uAEsvQ
          claim_id: c_ZYpeyy4GLSyQAQ6JQ337EA
          source_id: s_R9aB5v2Mo98yLSBovEWzux
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

# 王元佐

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王元佐 | accepted |
| bio.summary | CBDB 记载为唐人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王元佐（CBDB 156970）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=156970&o=json)
