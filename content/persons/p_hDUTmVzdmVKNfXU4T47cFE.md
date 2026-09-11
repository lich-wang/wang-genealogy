---
schema: wang-person/v1
id: p_hDUTmVzdmVKNfXU4T47cFE
status: active
merged_into: null
display_name: 王慎微
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_qgYeoxHM12MHWHAJ75E4bs
        subject_person_id: p_hDUTmVzdmVKNfXU4T47cFE
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎微
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_H16dgtFUWFqFqEywnjQh4U
          claim_id: c_qgYeoxHM12MHWHAJ75E4bs
          source_id: s_2cVqefdUGfuaGrJCUR9Mny
          stance: supports
          locator: CBDB:1868
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1868）
          source: &a1
            id: s_2cVqefdUGfuaGrJCUR9Mny
            source_type: api_record
            title: 中国历代人物传记资料库：王慎微（CBDB 1868）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1868&o=json
            external_identifier: CBDB:1868
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.362Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_Wio3fdpP6LymjLZSvaFauL
        subject_person_id: p_hDUTmVzdmVKNfXU4T47cFE
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王慎微，宋人物。籍贯洛陽，曾任都水監丞。（中国历代人物传记资料库 CBDB 1868）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_GCWA6XX_91gQeAFK497wLA
          claim_id: c_Wio3fdpP6LymjLZSvaFauL
          source_id: s_2cVqefdUGfuaGrJCUR9Mny
          stance: supports
          locator: CBDB:1868
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

# 王慎微

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王慎微 | accepted |
| bio.summary | 王慎微，宋人物。籍贯洛陽，曾任都水監丞。（中国历代人物传记资料库 CBDB 1868） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王慎微（CBDB 1868）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1868&o=json)
