---
schema: wang-person/v1
id: p_3HD55GbkzcaZEuvbzP5MDT
status: active
merged_into: null
display_name: 王明遠
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_H13xJL1Bt481wD3rM4gHSJ
        subject_person_id: p_3HD55GbkzcaZEuvbzP5MDT
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明遠
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_WB575z2dwSeC9H6rgwwGW9
          claim_id: c_H13xJL1Bt481wD3rM4gHSJ
          source_id: s_qHNvYUiAZEr373gpT7jeAu
          stance: supports
          locator: CBDB:693215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（693215）
          source: &a1
            id: s_qHNvYUiAZEr373gpT7jeAu
            source_type: api_record
            title: 中国历代人物传记资料库：王明遠（CBDB 693215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693215&o=json
            external_identifier: CBDB:693215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:27.650Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_JJKViiQe7V59JFU5JhJK6j
        subject_person_id: p_3HD55GbkzcaZEuvbzP5MDT
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王明遠，清人物。籍贯吳縣，身份为工匠、孝子/孝女。（中国历代人物传记资料库 CBDB 693215）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Jrhc0MHZ0u-iOXL5IFXG9Q
          claim_id: c_JJKViiQe7V59JFU5JhJK6j
          source_id: s_qHNvYUiAZEr373gpT7jeAu
          stance: supports
          locator: CBDB:693215
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

# 王明遠

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王明遠 | accepted |
| bio.summary | 王明遠，清人物。籍贯吳縣，身份为工匠、孝子/孝女。（中国历代人物传记资料库 CBDB 693215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王明遠（CBDB 693215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=693215&o=json)
