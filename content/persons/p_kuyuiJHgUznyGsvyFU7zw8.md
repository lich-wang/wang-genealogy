---
schema: wang-person/v1
id: p_kuyuiJHgUznyGsvyFU7zw8
status: active
merged_into: null
display_name: 王雲
revision: 2
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
          text: CBDB 记载为明人物
          language: zh-Hans
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2y2LGaeoLfyQ8EEv7Xcgo4
          claim_id: c_aHjs824Ku4MNhFBtSGNS76
          source_id: s_CXUAh52abVRTJgP1MCCsKj
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
  spouses: []
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
  other: []
---

# 王雲

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雲 | accepted |
| birth.date | 1465年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_SA9Pc7n2AYxZ7RijE7Kt9H | 王通 | accepted |
| ancestors | p_sa7HcKM9Pqnx8VLSSn5ypv | 王希魯 | accepted |
| ancestors | p_tquvUZCS3nSST43tjtkMAn | 王順 | accepted |

## 外部来源

- [中国历代人物传记资料库：王雲（CBDB 201331）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=201331&o=json)
