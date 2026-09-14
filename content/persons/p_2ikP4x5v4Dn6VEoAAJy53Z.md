---
schema: wang-person/v1
id: p_2ikP4x5v4Dn6VEoAAJy53Z
status: active
merged_into: null
display_name: 王汝玉
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_kNX97RqR8C8wBz7e3MrjwQ
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝玉
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_v7cH7rbEj72aTsKnVv5FT3
          claim_id: c_kNX97RqR8C8wBz7e3MrjwQ
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: CBDB:126499
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126499）
          source: &a1
            id: s_1KpQN7kM94ZaSMB6MNtr2m
            source_type: api_record
            title: 中国历代人物传记资料库：王汝玉（CBDB 126499）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json
            external_identifier: CBDB:126499
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:14.987Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_4CughE1jUue47F2EvRkxFR
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1349年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_xGKtE2m8iNUhUdMDvJFBRG
          claim_id: c_4CughE1jUue47F2EvRkxFR
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 生年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_vGLd9ADDY6SrPhr7WkKf2X
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1415年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Equ3XgiBt5a78UwvMexjPt
          claim_id: c_vGLd9ADDY6SrPhr7WkKf2X
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 卒年
          source: *a1
      object_person: null
    alternatives: []
  - predicate: bio.summary
    recommended:
      claim:
        id: c_mkEjrmhQbXrsZ9K3BPBuJJ
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王汝玉（1349年—1415年），明人物。籍贯長洲，身份为經學家、強記;博學強記，入仕薦舉 (保任,保舉)，曾任春坊贊善大夫、府學訓導、翰林五經博士。（中国历代人物传记资料库 CBDB 126499）
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_zW-FKhKW6zOtkelaopbzUb
          claim_id: c_mkEjrmhQbXrsZ9K3BPBuJJ
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: CBDB:126499
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oPO6EvSvGUSJO2dWJ2r5bO
        subject_person_id: p_yP3zm57t1ArYS555kTvxek
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_d1nkZ-KruohZMiRUEaAw5A
          claim_id: c_oPO6EvSvGUSJO2dWJ2r5bO
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: 滸墅關志，176453：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_yP3zm57t1ArYS555kTvxek
        status: active
        display_name: 王立中
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants:
    - claim:
        id: c_LeyI_G2Sv134rgWL-YlfKD
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_uoLcqheZYHzRA2FHqn5iBB
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_o7tfYCf3PAyys21KxwxoTW
          claim_id: c_LeyI_G2Sv134rgWL-YlfKD
          source_id: s_1KpQN7kM94ZaSMB6MNtr2m
          stance: supports
          locator: 滸墅關志，lgid=176454：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uoLcqheZYHzRA2FHqn5iBB
        status: active
        display_name: 王鎧
        merged_into_person_id: null
  other:
    - claim:
        id: c_oCYmDUiEbllxU5ZU3jdPcv
        subject_person_id: p_2ikP4x5v4Dn6VEoAAJy53Z
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_KD2EuMHQRQgQgZacHzwvRz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ka_c0ckhDCR5lr51QB1fJd
          claim_id: c_oCYmDUiEbllxU5ZU3jdPcv
          source_id: s_sC7P_a4qwxjA4delef7x7L
          stance: supports
          locator: CBDB 亲属：弟（KinPerson 126499 王汝玉）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_sC7P_a4qwxjA4delef7x7L
            source_type: api_record
            title: 中国历代人物传记资料库：王璉（CBDB 550751）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json
            external_identifier: CBDB:550751
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_KD2EuMHQRQgQgZacHzwvRz
        status: active
        display_name: 王璉
        merged_into_person_id: null
---

# 王汝玉

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王汝玉 | accepted |
| birth.date | 1349年 | accepted |
| death.date | 1415年 | accepted |
| bio.summary | 王汝玉（1349年—1415年），明人物。籍贯長洲，身份为經學家、強記;博學強記，入仕薦舉 (保任,保舉)，曾任春坊贊善大夫、府學訓導、翰林五經博士。（中国历代人物传记资料库 CBDB 126499） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_yP3zm57t1ArYS555kTvxek | 王立中 | accepted |
| descendants | p_uoLcqheZYHzRA2FHqn5iBB | 王鎧 | accepted |
| other | p_KD2EuMHQRQgQgZacHzwvRz | 王璉 | accepted |

## 外部来源

- [中国历代人物传记资料库：王璉（CBDB 550751）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=550751&o=json)
- [中国历代人物传记资料库：王汝玉（CBDB 126499）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126499&o=json)
