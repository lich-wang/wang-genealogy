---
schema: wang-person/v1
id: p_46qxZEY1wVCATMP4bSgASc
status: active
merged_into: null
display_name: 王雄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_bHXUGyiEE7hxAfAL4UZMSU
        subject_person_id: p_46qxZEY1wVCATMP4bSgASc
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王雄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_zorLj3KvegFmM2WxhUC59o
          claim_id: c_bHXUGyiEE7hxAfAL4UZMSU
          source_id: s_6FY2SMwBcSnRTTHfZ5Z37d
          stance: supports
          locator: CBDB:199540
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199540）
          source: &a1
            id: s_6FY2SMwBcSnRTTHfZ5Z37d
            source_type: api_record
            title: 中国历代人物传记资料库：王雄（CBDB 199540）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199540&o=json
            external_identifier: CBDB:199540
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.554Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_bkRA9NMLBoHY2YTd3EUDHe
        subject_person_id: p_46qxZEY1wVCATMP4bSgASc
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1435年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_7Gz9AqWyzTs5HkaVhXP4vh
          claim_id: c_bkRA9NMLBoHY2YTd3EUDHe
          source_id: s_6FY2SMwBcSnRTTHfZ5Z37d
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
        id: c_mAJCBzQeJDB2a9Hq7aVEnT
        subject_person_id: p_46qxZEY1wVCATMP4bSgASc
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
        - id: cs_QzD2Ds251SNKPCRRRvwB8H
          claim_id: c_mAJCBzQeJDB2a9Hq7aVEnT
          source_id: s_6FY2SMwBcSnRTTHfZ5Z37d
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
        id: c_5vWoob91S0M4m9_xkh5m_D
        subject_person_id: p_vLt7CbNRRVMBtGsA8iSfNw
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_46qxZEY1wVCATMP4bSgASc
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_oFPzia-4KL0UyBXa76jJEw
          claim_id: c_5vWoob91S0M4m9_xkh5m_D
          source_id: s_6FY2SMwBcSnRTTHfZ5Z37d
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第五十四名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vLt7CbNRRVMBtGsA8iSfNw
        status: active
        display_name: 王恕
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_UMVuNtwW8Ul7qigSnKZEsS
        subject_person_id: p_46qxZEY1wVCATMP4bSgASc
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JhCF2yk57oZy5Yi9JPFxnz
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2QgSWk2hQcAlojCcg7OSn_
          claim_id: c_UMVuNtwW8Ul7qigSnKZEsS
          source_id: s_ca-L4Mll3KhMo4-CUjQ7Re
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第五十四名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_ca-L4Mll3KhMo4-CUjQ7Re
            source_type: api_record
            title: 中国历代人物传记资料库：陳氏(王雄妻)（CBDB 246423）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246423&o=json
            external_identifier: CBDB:246423
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JhCF2yk57oZy5Yi9JPFxnz
        status: active
        display_name: 陳氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_RXeniIWSSB8IAI8bDVBdYa
        subject_person_id: p_k6iPdWWUfd39z2558K8BA7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_46qxZEY1wVCATMP4bSgASc
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_sJexSwjfULHVWL0N4MRu0s
          claim_id: c_RXeniIWSSB8IAI8bDVBdYa
          source_id: s_6FY2SMwBcSnRTTHfZ5Z37d
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第五十四名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_k6iPdWWUfd39z2558K8BA7
        status: active
        display_name: 王士舉
        merged_into_person_id: null
    - claim:
        id: c_fHt-0bb3GkvG0acZMZTB4d
        subject_person_id: p_7PUDT8V1TTTBeu3qDvtJNQ
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_46qxZEY1wVCATMP4bSgASc
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_qYB5tMK5003lOGETj771ga
          claim_id: c_fHt-0bb3GkvG0acZMZTB4d
          source_id: s_6FY2SMwBcSnRTTHfZ5Z37d
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第五十四名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_7PUDT8V1TTTBeu3qDvtJNQ
        status: active
        display_name: 王大公
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王雄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王雄 | accepted |
| birth.date | 1435年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vLt7CbNRRVMBtGsA8iSfNw | 王恕 | accepted |
| spouses | p_JhCF2yk57oZy5Yi9JPFxnz | 陳氏 | accepted |
| ancestors | p_k6iPdWWUfd39z2558K8BA7 | 王士舉 | accepted |
| ancestors | p_7PUDT8V1TTTBeu3qDvtJNQ | 王大公 | accepted |

## 外部来源

- [中国历代人物传记资料库：陳氏(王雄妻)（CBDB 246423）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=246423&o=json)
- [中国历代人物传记资料库：王雄（CBDB 199540）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199540&o=json)
