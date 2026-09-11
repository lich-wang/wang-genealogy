---
schema: wang-person/v1
id: p_LMN8U3w7r8FiSU2N778GMc
status: active
merged_into: null
display_name: 王勳
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_1Gi8Gk13dQ6bbW1vhv6zNZ
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王勳
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_M6ScqCojuXXu17ELw3ukPS
          claim_id: c_1Gi8Gk13dQ6bbW1vhv6zNZ
          source_id: s_qFS2NUhysAJ7sWECtbuJy6
          stance: supports
          locator: CBDB:1818
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（1818）
          source: &a1
            id: s_qFS2NUhysAJ7sWECtbuJy6
            source_type: api_record
            title: 中国历代人物传记资料库：王勳（CBDB 1818）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1818&o=json
            external_identifier: CBDB:1818
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.283Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: death.date
    recommended:
      claim:
        id: c_S9c2HGYZML6pnQgApYETKi
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1138年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3DP9KxqDzx389uDCPf78GY
          claim_id: c_S9c2HGYZML6pnQgApYETKi
          source_id: s_qFS2NUhysAJ7sWECtbuJy6
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
        id: c_cY7Uk7Fj25xjkkS9KMRq8g
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: CBDB 记载为宋人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_mFHmU3dh1U55tpMgQ75dbS
          claim_id: c_cY7Uk7Fj25xjkkS9KMRq8g
          source_id: s_qFS2NUhysAJ7sWECtbuJy6
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
        id: c_ksCfAWE7QSJoynzMopOw8J
        subject_person_id: p_42szA6CsjsGEHtctBDvhPe
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_LMN8U3w7r8FiSU2N778GMc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3iLLHgmjEtmP8xfnJ6TUok
          claim_id: c_ksCfAWE7QSJoynzMopOw8J
          source_id: s_Yjruqgq98a54tQjfboiysN
          stance: supports
          locator: CBDB 双向互证（子 王勳 ⇄ 父 王玩）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_Yjruqgq98a54tQjfboiysN
            source_type: api_record
            title: CBDB 中国历代人物传记资料库：王玩（19872）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19872&o=json
            external_identifier: CBDB:19872
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-05T01:59:30.084Z
            metadata_json: null
      object_person:
        id: p_42szA6CsjsGEHtctBDvhPe
        status: active
        display_name: 王玩
        merged_into_person_id: null
  children:
    - claim:
        id: c_d_xwewx_aOXkkvR2A267b4
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WfKGNEwFj8S9f7DUKj8X6D
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_c18bPTy_ET1NDOiOW0xXJv
          claim_id: c_d_xwewx_aOXkkvR2A267b4
          source_id: s_PDGaLN51VCohN5Cwc5EZEn
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1234：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_PDGaLN51VCohN5Cwc5EZEn
            source_type: api_record
            title: 中国历代人物传记资料库：王正己（CBDB 3948）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3948&o=json
            external_identifier: CBDB:3948
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.426Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_WfKGNEwFj8S9f7DUKj8X6D
        status: active
        display_name: 王正己
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_o59oD6MVVvOKIutED9Q1pB
        subject_person_id: p_FqUud2w7N1wezRTEw6MRZ4
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LMN8U3w7r8FiSU2N778GMc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_gs2KV_37Kl2m0HCPO1C6EX
          claim_id: c_o59oD6MVVvOKIutED9Q1pB
          source_id: s_Kt2AfBh7fKuTLiRwHyCwPY
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1234：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Kt2AfBh7fKuTLiRwHyCwPY
            source_type: api_record
            title: 中国历代人物传记资料库：王說（CBDB 19870）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json
            external_identifier: CBDB:19870
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.740Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_FqUud2w7N1wezRTEw6MRZ4
        status: active
        display_name: 王說
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_OWuvxVakknQ2BI008KzrYl
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_qfJSTWoxkhv7aQH3839He6
        generation_count: 4
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2tnngDIAfKJ3ggrUrWuLM3
          claim_id: c_OWuvxVakknQ2BI008KzrYl
          source_id: s_szwq2fnD4mZ9YzTnL9gizp
          stance: supports
          locator: CBDB 双向互证（高祖;四世祖 王勳 ⇄ 玄孫;四世孫 王惟忠）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_szwq2fnD4mZ9YzTnL9gizp
            source_type: api_record
            title: 中国历代人物传记资料库：王惟忠（CBDB 19888）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19888&o=json
            external_identifier: CBDB:19888
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.750Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_qfJSTWoxkhv7aQH3839He6
        status: active
        display_name: 王惟忠
        merged_into_person_id: null
    - claim:
        id: c_ixJcdq5tcAPsM7WgLOqA8d
        subject_person_id: p_LMN8U3w7r8FiSU2N778GMc
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_LX6tTUxSzJQLKBETT4sQXD
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_cWSYOxw_9n_KV4dVRbdt5i
          claim_id: c_ixJcdq5tcAPsM7WgLOqA8d
          source_id: s_fb2WkSgLSSqKiZ1YJY4vE2
          stance: supports
          locator: CBDB 双向互证（曾祖 王勳 ⇄ 曾孫; 重孫 王轟）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source:
            id: s_fb2WkSgLSSqKiZ1YJY4vE2
            source_type: api_record
            title: 中国历代人物传记资料库：王轟（CBDB 19889）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19889&o=json
            external_identifier: CBDB:19889
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-06T01:16:44.071Z
            metadata_json:
              source_release: CBDB 2026-08-29
      object_person:
        id: p_LX6tTUxSzJQLKBETT4sQXD
        status: active
        display_name: 王轟
        merged_into_person_id: null
  other: []
---

# 王勳

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王勳 | accepted |
| death.date | 1138年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_42szA6CsjsGEHtctBDvhPe | 王玩 | accepted |
| children | p_WfKGNEwFj8S9f7DUKj8X6D | 王正己 | accepted |
| ancestors | p_FqUud2w7N1wezRTEw6MRZ4 | 王說 | accepted |
| descendants | p_qfJSTWoxkhv7aQH3839He6 | 王惟忠 | accepted |
| descendants | p_LX6tTUxSzJQLKBETT4sQXD | 王轟 | accepted |

## 外部来源

- [中国历代人物传记资料库：王轟（CBDB 19889）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19889&o=json)
- [中国历代人物传记资料库：王說（CBDB 19870）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19870&o=json)
- [中国历代人物传记资料库：王惟忠（CBDB 19888）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19888&o=json)
- [中国历代人物传记资料库：王勳（CBDB 1818）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=1818&o=json)
- [中国历代人物传记资料库：王正己（CBDB 3948）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=3948&o=json)
- [CBDB 中国历代人物传记资料库：王玩（19872）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=19872&o=json)
