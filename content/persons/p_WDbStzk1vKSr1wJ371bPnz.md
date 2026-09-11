---
schema: wang-person/v1
id: p_WDbStzk1vKSr1wJ371bPnz
status: active
merged_into: null
display_name: 王義
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_tNtRUtgAaHKcT7pxowLYGo
        subject_person_id: p_WDbStzk1vKSr1wJ371bPnz
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_CPPLQBCmVCy2fYA98HMqu4
          claim_id: c_tNtRUtgAaHKcT7pxowLYGo
          source_id: s_1wm8Sa1Th4G5imApznSxd5
          stance: supports
          locator: CBDB:150356
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（150356）
          source: &a1
            id: s_1wm8Sa1Th4G5imApznSxd5
            source_type: api_record
            title: 中国历代人物传记资料库：王義（CBDB 150356）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150356&o=json
            external_identifier: CBDB:150356
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.812Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_ZC1cwWYvseeE1BKBSg24d9
        subject_person_id: p_WDbStzk1vKSr1wJ371bPnz
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王義，唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 150356）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_3a-qrZ3Li89FTkp7hUQER0
          claim_id: c_ZC1cwWYvseeE1BKBSg24d9
          source_id: s_1wm8Sa1Th4G5imApznSxd5
          stance: supports
          locator: CBDB:150356
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_KUQrv3P53xkct5sVK4yvcl
        subject_person_id: p_WDbStzk1vKSr1wJ371bPnz
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_awVba6ceCU97BSyUH4tnLy
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SVtEqxa7s4SbnXvpj-_wB4
          claim_id: c_KUQrv3P53xkct5sVK4yvcl
          source_id: s_VJr7Vz53eu5S9mJ22g5diG
          stance: supports
          locator: 唐代墓誌匯編:二卷，Changan 19：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_VJr7Vz53eu5S9mJ22g5diG
            source_type: api_record
            title: 中国历代人物传记资料库：王貞（CBDB 140124）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140124&o=json
            external_identifier: CBDB:140124
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.469Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_awVba6ceCU97BSyUH4tnLy
        status: active
        display_name: 王貞
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王義

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王義 | accepted |
| bio.summary | 王義，唐人物。籍贯洛陽。（中国历代人物传记资料库 CBDB 150356） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_awVba6ceCU97BSyUH4tnLy | 王貞 | accepted |

## 外部来源

- [中国历代人物传记资料库：王義（CBDB 150356）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=150356&o=json)
- [中国历代人物传记资料库：王貞（CBDB 140124）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=140124&o=json)
