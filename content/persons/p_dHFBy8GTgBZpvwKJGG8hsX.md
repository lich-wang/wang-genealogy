---
schema: wang-person/v1
id: p_dHFBy8GTgBZpvwKJGG8hsX
status: active
merged_into: null
display_name: 王暄
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_NM4E914SETsavFAnNjc2bu
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王暄
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_T1U7HHwhascxfKPE2VFVgj
          claim_id: c_NM4E914SETsavFAnNjc2bu
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: CBDB:199620
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（199620）
          source: &a1
            id: s_UajPbreWAJ8SWtEFXGFhUY
            source_type: api_record
            title: 中国历代人物传记资料库：王暄（CBDB 199620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json
            external_identifier: CBDB:199620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.564Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_BmXkh5xJCKRh1jyvZtLgaF
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1438年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_s5fZZ3gvk9X9Yo4AHg7XTP
          claim_id: c_BmXkh5xJCKRh1jyvZtLgaF
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
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
        id: c_RyAghFG6iNydq5oZU3NY4L
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
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
        - id: cs_ZQE5Qoq1DMTLVz21o15eWi
          claim_id: c_RyAghFG6iNydq5oZU3NY4L
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
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
        id: c_nRnbEWc9Mb5pP5AJY4orlp
        subject_person_id: p_vNNRVNM4fb2RVGCGj65JaG
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_SVgnxxxjLSBHiuLh4vjbmU
          claim_id: c_nRnbEWc9Mb5pP5AJY4orlp
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_vNNRVNM4fb2RVGCGj65JaG
        status: active
        display_name: 王鈍
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_grqJeDJ99YaK64EeO8dn3x
        subject_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_RcohMEe4gfY6Nzm7nKZ8NH
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BTESa9G8KSZplSpZaXbVvr
          claim_id: c_grqJeDJ99YaK64EeO8dn3x
          source_id: s_Dq-FsmqGyX4rDdZ4JEGvFU
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_Dq-FsmqGyX4rDdZ4JEGvFU
            source_type: api_record
            title: 中国历代人物传记资料库：葉氏(王暄妻)（CBDB 247366）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247366&o=json
            external_identifier: CBDB:247366
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_RcohMEe4gfY6Nzm7nKZ8NH
        status: active
        display_name: 葉氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_jV8UhoUm4A0SUCRwYAgwEv
        subject_person_id: p_jf9czE6gj8V3fCw8ZoQ8o7
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_rwT632YsFfSAag9fvfmftc
          claim_id: c_jV8UhoUm4A0SUCRwYAgwEv
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_jf9czE6gj8V3fCw8ZoQ8o7
        status: active
        display_name: 王廷玉
        merged_into_person_id: null
    - claim:
        id: c_YnApwjtA1xoeLE6m0r_THg
        subject_person_id: p_8b5ygBMRrPL5bJPeuV8d8d
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_dHFBy8GTgBZpvwKJGG8hsX
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_30kBGB8w2g-oc9xFQiOROp
          claim_id: c_YnApwjtA1xoeLE6m0r_THg
          source_id: s_UajPbreWAJ8SWtEFXGFhUY
          stance: supports
          locator: 成化八年進士登科錄:一卷，第三甲第一百四十八名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8b5ygBMRrPL5bJPeuV8d8d
        status: active
        display_name: 王斯浩
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王暄

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王暄 | accepted |
| birth.date | 1438年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_vNNRVNM4fb2RVGCGj65JaG | 王鈍 | accepted |
| spouses | p_RcohMEe4gfY6Nzm7nKZ8NH | 葉氏 | accepted |
| ancestors | p_jf9czE6gj8V3fCw8ZoQ8o7 | 王廷玉 | accepted |
| ancestors | p_8b5ygBMRrPL5bJPeuV8d8d | 王斯浩 | accepted |

## 外部来源

- [中国历代人物传记资料库：王暄（CBDB 199620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=199620&o=json)
- [中国历代人物传记资料库：葉氏(王暄妻)（CBDB 247366）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=247366&o=json)
