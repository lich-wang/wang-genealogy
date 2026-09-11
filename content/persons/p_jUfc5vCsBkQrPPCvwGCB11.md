---
schema: wang-person/v1
id: p_jUfc5vCsBkQrPPCvwGCB11
status: active
merged_into: null
display_name: 王堯臣
revision: 4
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_vYRvhPJe9aSrVytRhUkfJy
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王堯臣
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_cY4rGyqz2EmKgPYDhMs6t4
          claim_id: c_vYRvhPJe9aSrVytRhUkfJy
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: CBDB:23477
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（23477）
          source: &a1
            id: s_oc1QNAEk7i97afFuxniTAJ
            source_type: api_record
            title: 中国历代人物传记资料库：王堯臣（CBDB 23477）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json
            external_identifier: CBDB:23477
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:11.882Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_vb3DXFoTeMApyo3HHB7uLr
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1111年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_Uvi9CcRg1sqsA1c4N6G8y9
          claim_id: c_vb3DXFoTeMApyo3HHB7uLr
          source_id: s_oc1QNAEk7i97afFuxniTAJ
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
        id: c_M9Qkmyd3XbRyBfbsYxmuat
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1169年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ui6EevWZrLoPyjf87ayyoL
          claim_id: c_M9Qkmyd3XbRyBfbsYxmuat
          source_id: s_oc1QNAEk7i97afFuxniTAJ
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
        id: c_r4vuN7HUjNq2DD4BPX84vF
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
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
        - id: cs_k9iy73rh7Nt19FzoAej3YQ
          claim_id: c_r4vuN7HUjNq2DD4BPX84vF
          source_id: s_oc1QNAEk7i97afFuxniTAJ
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
        id: c_1L14Eg1CZ312j7bvcUJQhj
        subject_person_id: p_TiUdEhG1LMC9f51Xgx1RW7
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_3YdD2KniTBB55XzVf9RXZn
          claim_id: c_1L14Eg1CZ312j7bvcUJQhj
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: CBDB 双向互证（父 王鎰 ⇄ 子 王堯臣）
          quotation: null
          interpretation_note: Luna 在线复核：CBDB 底本未知，经 Wikidata 双向核对后采纳。
          source: *a1
      object_person:
        id: p_TiUdEhG1LMC9f51Xgx1RW7
        status: active
        display_name: 王鎰
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_I_i5NGEAvgG_X2noA5GqB7
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_sq5G8zDRgzGWpRT8ybQcQS
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_HTftLdYXH9CrrZ4QpgzI3R
          claim_id: c_I_i5NGEAvgG_X2noA5GqB7
          source_id: s___9ZENazfJO3wJ6qKxvKip
          stance: supports
          locator: 紹興十八年同年小錄，136：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s___9ZENazfJO3wJ6qKxvKip
            source_type: api_record
            title: 中国历代人物传记资料库：林氏(王堯臣妻)（CBDB 135279）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135279&o=json
            external_identifier: CBDB:135279
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_sq5G8zDRgzGWpRT8ybQcQS
        status: active
        display_name: 林氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_Xb3vZWf4sV8tg8bXGLmeNW
        subject_person_id: p_XNnEJW93RJQ51JNrQsQRTJ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tnB1AGY8VlutAVVmctRTX-
          claim_id: c_Xb3vZWf4sV8tg8bXGLmeNW
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: 紹興十八年同年小錄，136：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_XNnEJW93RJQ51JNrQsQRTJ
        status: active
        display_name: 王彥
        merged_into_person_id: null
    - claim:
        id: c_y4QFL_q8Qc0ysxcsVGXB_N
        subject_person_id: p_k5osjTmtD6qGAxU1cpt1aP
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_slRd2UUE2rxjekk55k18sQ
          claim_id: c_y4QFL_q8Qc0ysxcsVGXB_N
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: 紹興十八年同年小錄，136：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k5osjTmtD6qGAxU1cpt1aP
        status: active
        display_name: 王文
        merged_into_person_id: null
  descendants:
    - claim:
        id: c_l3gtWlm5tJy6ghIb3MJ1Iy
        subject_person_id: p_jUfc5vCsBkQrPPCvwGCB11
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_E7YL8K8cBwHS7NPmFdwMBH
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_uSmaoWmYUq16NOESYirktB
          claim_id: c_l3gtWlm5tJy6ghIb3MJ1Iy
          source_id: s_oc1QNAEk7i97afFuxniTAJ
          stance: supports
          locator: 宋人傳記資料索引(電子版)，1427：孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_E7YL8K8cBwHS7NPmFdwMBH
        status: active
        display_name: 王元應
        merged_into_person_id: null
  other: []
---

# 王堯臣

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王堯臣 | accepted |
| birth.date | 1111年 | accepted |
| death.date | 1169年 | accepted |
| bio.summary | CBDB 记载为宋人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_TiUdEhG1LMC9f51Xgx1RW7 | 王鎰 | accepted |
| spouses | p_sq5G8zDRgzGWpRT8ybQcQS | 林氏 | accepted |
| ancestors | p_XNnEJW93RJQ51JNrQsQRTJ | 王彥 | accepted |
| ancestors | p_k5osjTmtD6qGAxU1cpt1aP | 王文 | accepted |
| descendants | p_E7YL8K8cBwHS7NPmFdwMBH | 王元應 | accepted |

## 外部来源

- [中国历代人物传记资料库：林氏(王堯臣妻)（CBDB 135279）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=135279&o=json)
- [中国历代人物传记资料库：王堯臣（CBDB 23477）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=23477&o=json)
