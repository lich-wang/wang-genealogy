---
schema: wang-person/v1
id: p_KvaDyJMUHzeGStoEsTh4se
status: active
merged_into: null
display_name: 王倫
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vcJKqZvrirCfvpbWeEs3sC
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王倫
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cdW4s2dL5bvGc6mQuqkA6A
          claim_id: c_vcJKqZvrirCfvpbWeEs3sC
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
          stance: supports
          locator: CBDB:8178
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（8178）
          source: &a1
            id: s_yykPmVJb5Wn59M9QG2gpGt
            source_type: api_record
            title: 中国历代人物传记资料库：王倫（CBDB 8178）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json
            external_identifier: CBDB:8178
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.505Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_LpPQ1vU3NcvJzJQ7eGbRtL
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1084年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JGBWTWaHNzAz9XpRNL9CJP
          claim_id: c_LpPQ1vU3NcvJzJQ7eGbRtL
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
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
        id: c_mpWHMHZY65LFwdLjPBJHP2
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1144年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3MPmbXB8HXR6kqtcfU7SCs
          claim_id: c_mpWHMHZY65LFwdLjPBJHP2
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
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
        id: c_4XNHdYj13ZS7QAFjQPXhiq
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: "王倫（1084年—1144年），宋人物。籍贯莘縣，入仕科舉學校: 恩賜出身、特賜出身等，曾任朝奉大夫、朝奉郎、樞密副使。（中国历代人物传记资料库 CBDB 8178）"
          language: zh-Hant
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_6jTNb3Kfb4cRS9ta_wP9bo
          claim_id: c_4XNHdYj13ZS7QAFjQPXhiq
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
          stance: supports
          locator: CBDB:8178
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_ZBIJ2bzkKTErShsGClCEvv
        subject_person_id: p_hhgYVggbJctRiJp2aTNSCG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_KvaDyJMUHzeGStoEsTh4se
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_jTt-fbYtCp8IXQnQexFg6s
          claim_id: c_ZBIJ2bzkKTErShsGClCEvv
          source_id: s_pYV6XpC443MeJp1kyFcR5x
          stance: supports
          locator: CBDB 双向互证（子 王倫 ⇄ 父 王毅）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_pYV6XpC443MeJp1kyFcR5x
            source_type: api_record
            title: 中国历代人物传记资料库：王毅（CBDB 7377）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7377&o=json
            external_identifier: CBDB:7377
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.479Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_hhgYVggbJctRiJp2aTNSCG
        status: active
        display_name: 王毅
        merged_into_person_id: null
  children:
    - claim:
        id: c_sypTDLRLiNu5GVjIgAfjHB
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_PQQ9B9zPBAjRcHDw7hpDP7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_UHO9uKc2hGws2FAz3WrftW
          claim_id: c_sypTDLRLiNu5GVjIgAfjHB
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
          stance: supports
          locator: 宋史：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_PQQ9B9zPBAjRcHDw7hpDP7
        status: active
        display_name: 王述
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_5D_VnqXpWgWDo2zk6qsEld
        subject_person_id: p_vq4T7ckAWaTW61626HUaZp
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_KvaDyJMUHzeGStoEsTh4se
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R_0eiTepQBqaxYY--DGXdw
          claim_id: c_5D_VnqXpWgWDo2zk6qsEld
          source_id: s_yykPmVJb5Wn59M9QG2gpGt
          stance: supports
          locator: 宋史：高祖;四世祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vq4T7ckAWaTW61626HUaZp
        status: active
        display_name: 王勗
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_7-9o3aWkJV4cA6AFDqzz--
        subject_person_id: p_KvaDyJMUHzeGStoEsTh4se
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_8M1jTHPpMjrLQ4UVRJ6rD5
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_g69-tVPB7R9oArM0NCF3Rz
          claim_id: c_7-9o3aWkJV4cA6AFDqzz--
          source_id: s_66T3Xf4GiTziGCxFWg29Zn
          stance: supports
          locator: 宋人傳記資料索引(電子版)：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_66T3Xf4GiTziGCxFWg29Zn
            source_type: api_record
            title: 中国历代人物传记资料库：王柟（CBDB 17888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17888&o=json
            external_identifier: CBDB:17888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.696Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_8M1jTHPpMjrLQ4UVRJ6rD5
        status: active
        display_name: 王柟
        merged_into_person_id: null
  other: []
---

# 王倫

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王倫 | accepted |
| birth.date | 1084年 | accepted |
| death.date | 1144年 | accepted |
| bio.summary | 王倫（1084年—1144年），宋人物。籍贯莘縣，入仕科舉學校: 恩賜出身、特賜出身等，曾任朝奉大夫、朝奉郎、樞密副使。（中国历代人物传记资料库 CBDB 8178） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_hhgYVggbJctRiJp2aTNSCG | 王毅 | accepted |
| children | p_PQQ9B9zPBAjRcHDw7hpDP7 | 王述 | accepted |
| ancestors | p_vq4T7ckAWaTW61626HUaZp | 王勗 | accepted |
| descendants | p_8M1jTHPpMjrLQ4UVRJ6rD5 | 王柟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王倫（CBDB 8178）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=8178&o=json)
- [中国历代人物传记资料库：王柟（CBDB 17888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=17888&o=json)
- [中国历代人物传记资料库：王毅（CBDB 7377）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=7377&o=json)
