---
schema: wang-person/v1
id: p_EfAXQivQSGsRmR9LKiD55Z
status: active
merged_into: null
display_name: 王鵕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_nTdMUCiE7Erco948DoGUeY
        subject_person_id: p_EfAXQivQSGsRmR9LKiD55Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_NNxBkA37yVK8uvbSXiz2C5
          claim_id: c_nTdMUCiE7Erco948DoGUeY
          source_id: s_cfs854gZj7HAARchUcpUhB
          stance: supports
          locator: CBDB:691305
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（691305）
          source: &a1
            id: s_cfs854gZj7HAARchUcpUhB
            source_type: api_record
            title: 中国历代人物传记资料库：王鵕（CBDB 691305）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691305&o=json
            external_identifier: CBDB:691305
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.491Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_vDv98QHEmCgTuJV4GgFX2c
        subject_person_id: p_EfAXQivQSGsRmR9LKiD55Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王鵕，清人物。籍贯崑山，身份为曲譜曲韻作家。（中国历代人物传记资料库 CBDB 691305）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_bZnHQSONpkLdTXjvrb_4wF
          claim_id: c_vDv98QHEmCgTuJV4GgFX2c
          source_id: s_cfs854gZj7HAARchUcpUhB
          stance: supports
          locator: CBDB:691305
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

# 王鵕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王鵕 | accepted |
| bio.summary | 王鵕，清人物。籍贯崑山，身份为曲譜曲韻作家。（中国历代人物传记资料库 CBDB 691305） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王鵕（CBDB 691305）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=691305&o=json)
