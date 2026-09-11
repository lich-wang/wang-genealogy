---
schema: wang-person/v1
id: p_bu5WHHhErKiuivkQQLdX1G
status: active
merged_into: null
display_name: 王庭
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_WDWrqrLLePPqWDaS4RNuKP
        subject_person_id: p_bu5WHHhErKiuivkQQLdX1G
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_A8GLEbnboLxrGgdBnv4uQ1
          claim_id: c_WDWrqrLLePPqWDaS4RNuKP
          source_id: s_CayHQhoDVshDdip8F5JA9f
          stance: supports
          locator: CBDB:685815
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（685815）
          source: &a1
            id: s_CayHQhoDVshDdip8F5JA9f
            source_type: api_record
            title: 中国历代人物传记资料库：王庭（CBDB 685815）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685815&o=json
            external_identifier: CBDB:685815
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.353Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8iQrCjXt4d4deii79xoiFa
        subject_person_id: p_bu5WHHhErKiuivkQQLdX1G
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王庭，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 685815）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_XadqsvgTXmtmg8Z42wd7xi
          claim_id: c_8iQrCjXt4d4deii79xoiFa
          source_id: s_CayHQhoDVshDdip8F5JA9f
          stance: supports
          locator: CBDB:685815
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

# 王庭

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王庭 | accepted |
| bio.summary | 王庭，宋人物。籍贯閩縣，入仕進士。（中国历代人物传记资料库 CBDB 685815） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王庭（CBDB 685815）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=685815&o=json)
