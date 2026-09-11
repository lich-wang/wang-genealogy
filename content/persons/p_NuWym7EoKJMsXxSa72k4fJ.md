---
schema: wang-person/v1
id: p_NuWym7EoKJMsXxSa72k4fJ
status: active
merged_into: null
display_name: 王家蓮
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_87bSNEY8Hs5Yi7SGk4FGdK
        subject_person_id: p_NuWym7EoKJMsXxSa72k4fJ
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家蓮
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_yi2v6T3VHXVgcrbfLmFh3t
          claim_id: c_87bSNEY8Hs5Yi7SGk4FGdK
          source_id: s_NctxAnWS6xLDBQhFUjCZso
          stance: supports
          locator: CBDB:637215
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（637215）
          source: &a1
            id: s_NctxAnWS6xLDBQhFUjCZso
            source_type: api_record
            title: 中国历代人物传记资料库：王家蓮（CBDB 637215）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637215&o=json
            external_identifier: CBDB:637215
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-08T23:54:05.238Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_pMekJyuUpFMwVFiBCv2wrD
        subject_person_id: p_NuWym7EoKJMsXxSa72k4fJ
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王家蓮，清人物。籍贯石阡府，入仕鄉貢舉人，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637215）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_O5gc0chN72L64n5YdHgBnq
          claim_id: c_pMekJyuUpFMwVFiBCv2wrD
          source_id: s_NctxAnWS6xLDBQhFUjCZso
          stance: supports
          locator: CBDB:637215
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

# 王家蓮

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王家蓮 | accepted |
| bio.summary | 王家蓮，清人物。籍贯石阡府，入仕鄉貢舉人，曾任教諭、復設訓導。（中国历代人物传记资料库 CBDB 637215） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王家蓮（CBDB 637215）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=637215&o=json)
