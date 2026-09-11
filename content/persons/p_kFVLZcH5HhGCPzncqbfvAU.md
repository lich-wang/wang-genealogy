---
schema: wang-person/v1
id: p_kFVLZcH5HhGCPzncqbfvAU
status: active
merged_into: null
display_name: 王紹
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Wh8Qm5jPV1YRo8VrP2otjq
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王紹
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_6SJpjn6Z7CHRru3CjTewYn
          claim_id: c_Wh8Qm5jPV1YRo8VrP2otjq
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: CBDB:208052
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（208052）
          source: &a1
            id: s_aqtLHn9baQNrzeFNcSJGxm
            source_type: api_record
            title: 中国历代人物传记资料库：王紹（CBDB 208052）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json
            external_identifier: CBDB:208052
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.940Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_WChdUxkFGQZGbKHyyK2xGQ
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1415年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8LvjYMXE75wYc68ZEcCigQ
          claim_id: c_WChdUxkFGQZGbKHyyK2xGQ
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_TveAyRE8vM7JZYn8878wNw
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZNKHycVEtF6e9uAK7PTeDy
          claim_id: c_TveAyRE8vM7JZYn8878wNw
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ykx-Trx3toUgmrlYzU-pgR
        subject_person_id: p_nefeMLtgMPz4G3meRc7Z5Q
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZH5buxZAuueWtAxWZQwCPU
          claim_id: c_ykx-Trx3toUgmrlYzU-pgR
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_nefeMLtgMPz4G3meRc7Z5Q
        status: active
        display_name: 王瓛
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_XuiqqjzvIQIJvpYBf9WrOX
        subject_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_NjPduXYBX7s59BpL4Ei7xQ
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_IXIDSTAn27RbVzw-EWDX3E
          claim_id: c_XuiqqjzvIQIJvpYBf9WrOX
          source_id: s_OwKopGOCD7qZifFKSf2mxQ
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_OwKopGOCD7qZifFKSf2mxQ
            source_type: api_record
            title: 中国历代人物传记资料库：范氏(王紹妻)（CBDB 239749）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239749&o=json
            external_identifier: CBDB:239749
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_NjPduXYBX7s59BpL4Ei7xQ
        status: active
        display_name: 范氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_HsNzWgVXWhRETHa_YDnbhu
        subject_person_id: p_QXWS8yJEnBh94xSEq6pZ6K
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ksk6UD1HePdpu-pFlz-Vka
          claim_id: c_HsNzWgVXWhRETHa_YDnbhu
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_QXWS8yJEnBh94xSEq6pZ6K
        status: active
        display_name: 王伯祥
        merged_into_person_id: null
    - claim:
        id: c_981SOWJjgrFhYGpxNjzbcz
        subject_person_id: p_DbR6AZz63ppJQ3UojmKdb4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kFVLZcH5HhGCPzncqbfvAU
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_u1bXxwJocX0Xs7fo4ZsrDd
          claim_id: c_981SOWJjgrFhYGpxNjzbcz
          source_id: s_aqtLHn9baQNrzeFNcSJGxm
          stance: supports
          locator: 正统十年進士登科錄:一卷，第三甲第五十名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_DbR6AZz63ppJQ3UojmKdb4
        status: active
        display_name: 王彥禮
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王紹

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王紹 | accepted |
| birth.date | 1415年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_nefeMLtgMPz4G3meRc7Z5Q | 王瓛 | accepted |
| spouses | p_NjPduXYBX7s59BpL4Ei7xQ | 范氏 | accepted |
| ancestors | p_QXWS8yJEnBh94xSEq6pZ6K | 王伯祥 | accepted |
| ancestors | p_DbR6AZz63ppJQ3UojmKdb4 | 王彥禮 | accepted |

## 外部来源

- [中国历代人物传记资料库：范氏(王紹妻)（CBDB 239749）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=239749&o=json)
- [中国历代人物传记资料库：王紹（CBDB 208052）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=208052&o=json)
