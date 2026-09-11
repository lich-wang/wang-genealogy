---
schema: wang-person/v1
id: p_vrEbi67KsYot6GoKX91Xqt
status: active
merged_into: null
display_name: 王度
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_4KS92Cn1QwD46MUuPxEVzU
        subject_person_id: p_vrEbi67KsYot6GoKX91Xqt
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_7EWDDBR9oSxeg7YGf4Ut16
          claim_id: c_4KS92Cn1QwD46MUuPxEVzU
          source_id: s_G2y7rEtSeiAavtyBMKgV33
          stance: supports
          locator: CBDB:60745
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（60745）
          source: &a1
            id: s_G2y7rEtSeiAavtyBMKgV33
            source_type: api_record
            title: 中国历代人物传记资料库：王度（CBDB 60745）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60745&o=json
            external_identifier: CBDB:60745
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:12.855Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_NH4QP7jm2PLz8fw12RG2y6
        subject_person_id: p_vrEbi67KsYot6GoKX91Xqt
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王度，清人物。明清進士進士，籍贯沁水，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 60745）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_IExcl4vE3Xzrz-rFJR7adr
          claim_id: c_NH4QP7jm2PLz8fw12RG2y6
          source_id: s_G2y7rEtSeiAavtyBMKgV33
          stance: supports
          locator: CBDB:60745
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

# 王度

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王度 | accepted |
| bio.summary | 王度，清人物。明清進士進士，籍贯沁水，入仕進士，曾任太僕寺少卿。（中国历代人物传记资料库 CBDB 60745） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王度（CBDB 60745）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=60745&o=json)
