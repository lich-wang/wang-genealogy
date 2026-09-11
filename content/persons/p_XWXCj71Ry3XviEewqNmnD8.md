---
schema: wang-person/v1
id: p_XWXCj71Ry3XviEewqNmnD8
status: active
merged_into: null
display_name: 王光裕
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_dAY1s96yTFZeEzNp69e7E5
        subject_person_id: p_XWXCj71Ry3XviEewqNmnD8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光裕
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T7GwiAjD3g2Yr8jwMtGVcB
          claim_id: c_dAY1s96yTFZeEzNp69e7E5
          source_id: s_2ya9wYmde7xaJwGRr1WcHH
          stance: supports
          locator: CBDB:458166
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（458166）
          source: &a1
            id: s_2ya9wYmde7xaJwGRr1WcHH
            source_type: api_record
            title: 中国历代人物传记资料库：王光裕（CBDB 458166）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458166&o=json
            external_identifier: CBDB:458166
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:22.639Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_xmRXior1diZ58omJy8d4yW
        subject_person_id: p_XWXCj71Ry3XviEewqNmnD8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王光裕，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 458166）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_n_0LVMGz5GoJX7kjvP2fjZ
          claim_id: c_xmRXior1diZ58omJy8d4yW
          source_id: s_2ya9wYmde7xaJwGRr1WcHH
          stance: supports
          locator: CBDB:458166
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

# 王光裕

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王光裕 | accepted |
| bio.summary | 王光裕，明人物。曾任訓導。（中国历代人物传记资料库 CBDB 458166） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王光裕（CBDB 458166）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=458166&o=json)
