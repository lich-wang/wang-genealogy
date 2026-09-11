---
schema: wang-person/v1
id: p_isBbPe2JJdjy4jsVxiLhNU
status: active
merged_into: null
display_name: 王萬成
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_smapaadHSfaepKsEDaRkLJ
        subject_person_id: p_isBbPe2JJdjy4jsVxiLhNU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬成
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9EXKr17tQpn3b2WsBJjFQc
          claim_id: c_smapaadHSfaepKsEDaRkLJ
          source_id: s_sm2gHHis8ZJuwLaxBbW8CQ
          stance: supports
          locator: CBDB:486738
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（486738）
          source: &a1
            id: s_sm2gHHis8ZJuwLaxBbW8CQ
            source_type: api_record
            title: 中国历代人物传记资料库：王萬成（CBDB 486738）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486738&o=json
            external_identifier: CBDB:486738
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:23.920Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_WePDGS1oC73dE2dU9N9wWx
        subject_person_id: p_isBbPe2JJdjy4jsVxiLhNU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬成，明人物。曾任參將。（中国历代人物传记资料库 CBDB 486738）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_W_sF_d0pAW-a8SrGczeyzo
          claim_id: c_WePDGS1oC73dE2dU9N9wWx
          source_id: s_sm2gHHis8ZJuwLaxBbW8CQ
          stance: supports
          locator: CBDB:486738
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

# 王萬成

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬成 | accepted |
| bio.summary | 王萬成，明人物。曾任參將。（中国历代人物传记资料库 CBDB 486738） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬成（CBDB 486738）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=486738&o=json)
