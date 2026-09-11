---
schema: wang-person/v1
id: p_tMKNL1y7EFWEsAE8z6bmSc
status: active
merged_into: null
display_name: 王萬圉
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_phy51AqhPnJQqAk46grrGM
        subject_person_id: p_tMKNL1y7EFWEsAE8z6bmSc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬圉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_9m7Ujjn9LumKRHiEqtWGZG
          claim_id: c_phy51AqhPnJQqAk46grrGM
          source_id: s_A71jyRsh7TTANCKzZx43fT
          stance: supports
          locator: CBDB:640115
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（640115）
          source: &a1
            id: s_A71jyRsh7TTANCKzZx43fT
            source_type: api_record
            title: 中国历代人物传记资料库：王萬圉（CBDB 640115）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640115&o=json
            external_identifier: CBDB:640115
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:06.155Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_atX2Cf2KZUXzZu4LbejnRD
        subject_person_id: p_tMKNL1y7EFWEsAE8z6bmSc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王萬圉，清人物。籍贯重慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640115）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_2hjG46g7l54QLkSwgaCZnP
          claim_id: c_atX2Cf2KZUXzZu4LbejnRD
          source_id: s_A71jyRsh7TTANCKzZx43fT
          stance: supports
          locator: CBDB:640115
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

# 王萬圉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王萬圉 | accepted |
| bio.summary | 王萬圉，清人物。籍贯重慶府，入仕鄉貢舉人，曾任訓導。（中国历代人物传记资料库 CBDB 640115） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王萬圉（CBDB 640115）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=640115&o=json)
