---
schema: wang-person/v1
id: p_cUEh25oPwuAacU7D2hTAPV
status: active
merged_into: null
display_name: 王臨亨
revision: 2
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_o2ghTrVJ15uMSWhyVVwKjL
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王臨亨
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ZJMKtJQHhUQX16fGC6yhVV
          claim_id: c_o2ghTrVJ15uMSWhyVVwKjL
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: CBDB:126852
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（126852）
          source: &a1
            id: s_kEUVXVMNSjJdG7sCHKLhxA
            source_type: api_record
            title: 中国历代人物传记资料库：王臨亨（CBDB 126852）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json
            external_identifier: CBDB:126852
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:15.261Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_JDmAJs5vWotHbi9XveDGfd
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1556年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_2NuZsGzRhnw87dvLVNVjf7
          claim_id: c_JDmAJs5vWotHbi9XveDGfd
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
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
        id: c_Ds1WnGpQ7UG24r1oWXuLpy
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: property
        predicate: death.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1603年
            calendar_note: CBDB 卒年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_a2TiQv1SWqsqQ913GCXycD
          claim_id: c_Ds1WnGpQ7UG24r1oWXuLpy
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
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
        id: c_N5KXd9DzTGBrEKM8S6CffF
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
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
        - id: cs_U71mHfUT5orkgakYEamoK8
          claim_id: c_N5KXd9DzTGBrEKM8S6CffF
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: null
          quotation: null
          interpretation_note: CBDB 朝代归属
          source: *a1
      object_person: null
    alternatives: []
relationships:
  parents: []
  children:
    - claim:
        id: c_9qOlK6xAhFpkI5w8mgLxTM
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_WP2TCGKdqkuWFjHVRTiLcW
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_t0IkMd5nIfZJPnx5KuJxlL
          claim_id: c_9qOlK6xAhFpkI5w8mgLxTM
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 萬曆三十八年庚戌科序齒錄:一卷，第二甲第五十七名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_WP2TCGKdqkuWFjHVRTiLcW
        status: active
        display_name: 王志堅
        merged_into_person_id: null
    - claim:
        id: c_5T0b0bySOcpqWHd2x2Pc0r
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_S59f4ecKi74gcNZvVCFxMo
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BhypxmFj2jZBcA7GC-kIpG
          claim_id: c_5T0b0bySOcpqWHd2x2Pc0r
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 江南通志，lgid=65730-65731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_S59f4ecKi74gcNZvVCFxMo
        status: active
        display_name: 王志長
        merged_into_person_id: null
    - claim:
        id: c_YVwI0_lxX2IkrfNLBuj8ij
        subject_person_id: p_cUEh25oPwuAacU7D2hTAPV
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_uhBvBPtXf315t4tLh9pNU3
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BEd5GFRXCQ2Klv_gL99zMA
          claim_id: c_YVwI0_lxX2IkrfNLBuj8ij
          source_id: s_kEUVXVMNSjJdG7sCHKLhxA
          stance: supports
          locator: 江南通志，lgid=65730-65731：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_uhBvBPtXf315t4tLh9pNU3
        status: active
        display_name: 王志慶
        merged_into_person_id: null
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors: []
  descendants: []
  other: []
---

# 王臨亨

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王臨亨 | accepted |
| birth.date | 1556年 | accepted |
| death.date | 1603年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| children | p_WP2TCGKdqkuWFjHVRTiLcW | 王志堅 | accepted |
| children | p_S59f4ecKi74gcNZvVCFxMo | 王志長 | accepted |
| children | p_uhBvBPtXf315t4tLh9pNU3 | 王志慶 | accepted |

## 外部来源

- [中国历代人物传记资料库：王臨亨（CBDB 126852）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=126852&o=json)
