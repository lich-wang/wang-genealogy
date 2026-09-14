---
schema: wang-person/v1
id: p_kuyuiJHgUznyGsvyFU7zw8
status: active
merged_into: null
display_name: 王雲
revision: 5
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_Ap6mgaCt8yq4gU8uXKqvAL
        subject_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ghWDqjJRgpv8ebFdQt7Kat
          claim_id: c_Ap6mgaCt8yq4gU8uXKqvAL
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: CBDB:201331
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（201331）
          source: &a1
            id: s_CXUAh52abVRTJgP1MCCsKj
            source_type: api_record
            title: 中国历代人物传记资料库：王雲（CBDB 201331）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json
            external_identifier: CBDB:201331
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.671Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_CMySGGuuDL9MzPmX9gdYNf
        subject_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1465年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_JbqJZXuQip5FH59GDDNGDs
          claim_id: c_CMySGGuuDL9MzPmX9gdYNf
          source_id: s_CXUAh52abVRTJgP1MCCsKj
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
        id: c_aHjs824Ku4MNhFBtSGNS76
        subject_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        claim_kind: property
        predicate: bio.summary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雲（生于1465年），明人物。弘治十五年進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 201331）
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 2
      sources:
        - id: cs_wjQbpk-OOWXvUN_aRj1k4S
          claim_id: c_aHjs824Ku4MNhFBtSGNS76
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: CBDB:201331
          quotation: null
          interpretation_note: 自动补全人物基本介绍；身份由稳定外部标识锁定，信息来源层级为 cbdb。
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents:
    - claim:
        id: c_oOKKpRPx_0HTG9yJpankss
        subject_person_id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_hOWVO3RQOsLEGlb1Xa66C_
          claim_id: c_oOKKpRPx_0HTG9yJpankss
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_SA9Pc7n2AYxZ7RijE7Kt9H
        status: active
        display_name: 王通
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_RgfQjfj4Ako1r9VMqd0f3v
        subject_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_Bo5qQ9f85dqKZAxHwgr7RL
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_yS_B7QPoZ86DtmCX2mwr9k
          claim_id: c_RgfQjfj4Ako1r9VMqd0f3v
          source_id: s_GKv2XUvObbn3FHc3H5MSBp
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_GKv2XUvObbn3FHc3H5MSBp
            source_type: api_record
            title: 中国历代人物传记资料库：竇氏(王雲妻)（CBDB 270651）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270651&o=json
            external_identifier: CBDB:270651
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_Bo5qQ9f85dqKZAxHwgr7RL
        status: active
        display_name: 竇氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Fjn0HTqeT-v_S4dfyGTpJi
        subject_person_id: p_sa7HcKM9Pqnx8VLSSn5ypv
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Ci07-B47NEgZ_KRhgOI7RJ
          claim_id: c_Fjn0HTqeT-v_S4dfyGTpJi
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_sa7HcKM9Pqnx8VLSSn5ypv
        status: active
        display_name: 王希魯
        merged_into_person_id: null
    - claim:
        id: c_CGtYOEPlAUpCPbXdK_ZjFs
        subject_person_id: p_tquvUZCS3nSST43tjtkMAn
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8WX7VCra8JeUacoOlEKWtM
          claim_id: c_CGtYOEPlAUpCPbXdK_ZjFs
          source_id: s_CXUAh52abVRTJgP1MCCsKj
          stance: supports
          locator: 弘治十五年進士登科錄:一卷，第二甲第八十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_tquvUZCS3nSST43tjtkMAn
        status: active
        display_name: 王順
        merged_into_person_id: null
  descendants: []
  other:
    - claim:
        id: c_pnVB3gYz6B-jl_LkepY3uL
        subject_person_id: p_Nr2hwJmwAZeMSAFRBKvRi5
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_aM-eUU5vlSy1Jb2V8P1WgA
          claim_id: c_pnVB3gYz6B-jl_LkepY3uL
          source_id: s_5yf1Do-XQ4ahD3JpFqxHmh
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201331 王雲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_5yf1Do-XQ4ahD3JpFqxHmh
            source_type: api_record
            title: 中国历代人物传记资料库：王霓（CBDB 270652）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270652&o=json
            external_identifier: CBDB:270652
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_Nr2hwJmwAZeMSAFRBKvRi5
        status: active
        display_name: 王霓
        merged_into_person_id: null
    - claim:
        id: c_iB_Iy7Za8hSsnNSy6JudhN
        subject_person_id: p_kuyuiJHgUznyGsvyFU7zw8
        claim_kind: relationship
        predicate: kinship.sibling_of
        object_person_id: p_mf1q4db1p2ptsEKQidLGnS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_MkyfjQ081OF4OLJdSkrtqM
          claim_id: c_iB_Iy7Za8hSsnNSy6JudhN
          source_id: s_B_iBZNfsRLL267yKgvCE40
          stance: supports
          locator: CBDB 亲属：兄（KinPerson 201331 王雲）
          quotation: null
          interpretation_note: CBDB 记录的同辈兄弟姊妹关系，按字典序规范化存储。
          source:
            id: s_B_iBZNfsRLL267yKgvCE40
            source_type: api_record
            title: 中国历代人物传记资料库：王霽（CBDB 270653）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            published_at_text: null
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270653&o=json
            external_identifier: CBDB:270653
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-14T15:51:37.715Z
            metadata_json: null
      object_person:
        id: p_mf1q4db1p2ptsEKQidLGnS
        status: active
        display_name: 王霽
        merged_into_person_id: null
---

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| birth.date | 1465年 | accepted |
| bio.summary | 王雲（生于1465年），明人物。弘治十五年進士，籍贯諸城，入仕進士。（中国历代人物传记资料库 CBDB 201331） | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SA9Pc7n2AYxZ7RijE7Kt9H | 王通 | accepted |
| spouses | p_Bo5qQ9f85dqKZAxHwgr7RL | 竇氏 | accepted |
| ancestors | p_sa7HcKM9Pqnx8VLSSn5ypv | 王希魯 | accepted |
| ancestors | p_tquvUZCS3nSST43tjtkMAn | 王順 | accepted |
| other | p_Nr2hwJmwAZeMSAFRBKvRi5 | 王霓 | accepted |
| other | p_mf1q4db1p2ptsEKQidLGnS | 王霽 | accepted |

## 外部来源

- [中国历代人物传记资料库：竇氏(王雲妻)（CBDB 270651）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270651&o=json)
- [中国历代人物传记资料库：王霽（CBDB 270653）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270653&o=json)
- [中国历代人物传记资料库：王霓（CBDB 270652）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=270652&o=json)
- [中国历代人物传记资料库：王雲（CBDB 201331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json)
