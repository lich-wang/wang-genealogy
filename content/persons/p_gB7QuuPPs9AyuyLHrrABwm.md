---
schema: wang-person/v1
id: p_gB7QuuPPs9AyuyLHrrABwm
status: active
merged_into: null
display_name: 王宗正
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_7h6taasejhW4EMEw8pJ1D5
        subject_person_id: p_gB7QuuPPs9AyuyLHrrABwm
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗正
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qUPqCJVN6ss41868NPHb5k
          claim_id: c_7h6taasejhW4EMEw8pJ1D5
          source_id: s_Wwo8cLLozqY3J6KhiRBkh4
          stance: supports
          locator: CBDB:240082
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（240082）
          source: &a1
            id: s_Wwo8cLLozqY3J6KhiRBkh4
            source_type: api_record
            title: 中国历代人物传记资料库：王宗正（CBDB 240082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240082&o=json
            external_identifier: CBDB:240082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:17.911Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_8eN7jLKqFiMvPFbgrqZiuZ
        subject_person_id: p_gB7QuuPPs9AyuyLHrrABwm
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王宗正，明人物。正统十年進士，籍贯襄城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 240082）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_7a1Yl3gjutxFpQuJkU5gsl
          claim_id: c_8eN7jLKqFiMvPFbgrqZiuZ
          source_id: s_Wwo8cLLozqY3J6KhiRBkh4
          stance: supports
          locator: CBDB:240082
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_2bWoMclKEXpu-Mpm63T68W
        subject_person_id: p_w9i3DxK5tYZ48zzRUjm6Xn
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_gB7QuuPPs9AyuyLHrrABwm
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mCsijWiOThbRBJJve_sQxL
          claim_id: c_2bWoMclKEXpu-Mpm63T68W
          source_id: s_O8XudKCJkY-YwjfoiN6edk
          stance: supports
          locator: CBDB：兄弟 王瓖（338696）之父／母 王警道
          quotation: null
          interpretation_note: 由兄弟关系推断：王宗正 与 王瓖 为同胞（CBDB 记「弟」），王瓖 之父／母即 王宗正 之父／母。
          source:
            id: s_O8XudKCJkY-YwjfoiN6edk
            source_type: api_record
            title: 中国历代人物传记资料库：王宗正（CBDB 240082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240082&o=json
            external_identifier: CBDB:240082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_w9i3DxK5tYZ48zzRUjm6Xn
        status: active
        display_name: 王警道
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other:
    - claim:
        id: c_NA8REL0I_9slgYsRK5sl4L
        subject_person_id: p_GGoCNoVNHxmsGgT4y3whCN
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_gB7QuuPPs9AyuyLHrrABwm
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_KFiascggJwBsYcpbnMHU3Q
          claim_id: c_NA8REL0I_9slgYsRK5sl4L
          source_id: s_O8XudKCJkY-YwjfoiN6edk
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 338696 王瓖）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_O8XudKCJkY-YwjfoiN6edk
            source_type: api_record
            title: 中国历代人物传记资料库：王宗正（CBDB 240082）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240082&o=json
            external_identifier: CBDB:240082
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_GGoCNoVNHxmsGgT4y3whCN
        status: active
        display_name: 王瓖
        merged_into_person_id: null
---

# 王宗正

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王宗正 | accepted |
| bio.summary | 王宗正，明人物。正统十年進士，籍贯襄城，入仕監生，曾任縣丞。（中国历代人物传记资料库 CBDB 240082） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_w9i3DxK5tYZ48zzRUjm6Xn | 王警道 | accepted |
| other | p_GGoCNoVNHxmsGgT4y3whCN | 王瓖 | accepted |

## 外部来源

- [中国历代人物传记资料库：王宗正（CBDB 240082）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=240082&o=json)
