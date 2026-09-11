---
schema: wang-person/v1
id: p_EPWiag99BjYxF5Kt9ZsQBN
status: active
merged_into: null
display_name: 王培元
revision: 1
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_BSNCcro6wi4HuoNHK6b3sh
        subject_person_id: p_EPWiag99BjYxF5Kt9ZsQBN
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培元
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ukxQLVcgFvukZzFRvKf6FD
          claim_id: c_BSNCcro6wi4HuoNHK6b3sh
          source_id: s_bUz5LMhmF6fTBuiZXN7rWq
          stance: supports
          locator: CBDB:636715
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（636715）
          source: &a1
            id: s_bUz5LMhmF6fTBuiZXN7rWq
            source_type: api_record
            title: 中国历代人物传记资料库：王培元（CBDB 636715）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636715&o=json
            external_identifier: CBDB:636715
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:26.237Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_b6fUA4V9k2y1es5obRYFWP
        subject_person_id: p_EPWiag99BjYxF5Kt9ZsQBN
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王培元，清人物。籍贯吳江，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636715）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_Ds33Bd7J4Sh1u4XDG7zjyt
          claim_id: c_b6fUA4V9k2y1es5obRYFWP
          source_id: s_bUz5LMhmF6fTBuiZXN7rWq
          stance: supports
          locator: CBDB:636715
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

# 王培元

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王培元 | accepted |
| bio.summary | 王培元，清人物。籍贯吳江，入仕監生，曾任知縣。（中国历代人物传记资料库 CBDB 636715） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |

## 外部来源

- [中国历代人物传记资料库：王培元（CBDB 636715）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=636715&o=json)
