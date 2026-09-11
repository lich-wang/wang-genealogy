---
schema: wang-person/v1
id: p_5MQS7xTZ7xaRFjWYKoXEEG
status: active
merged_into: null
display_name: 王序
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_gibYsq9go65DC5dhREPcD9
        subject_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王序
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_qqN9sYc6eFaDCDCu1cLXCr
          claim_id: c_gibYsq9go65DC5dhREPcD9
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
          stance: supports
          locator: CBDB:200871
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（200871）
          source: &a1
            id: s_nUcJwoZm9zoYm8ziRTQn3w
            source_type: api_record
            title: 中国历代人物传记资料库：王序（CBDB 200871）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json
            external_identifier: CBDB:200871
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.640Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_85nbKmAKM9SMh5orQCZQyX
        subject_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1456年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_PaXL9fUCNZLhqDk4KBBUSN
          claim_id: c_85nbKmAKM9SMh5orQCZQyX
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
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
        id: c_PFnxxGDTuxXPxzYm2LmJAL
        subject_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
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
        - id: cs_XmHwDF4VMAy11E3zbxZ7xS
          claim_id: c_PFnxxGDTuxXPxzYm2LmJAL
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
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
        id: c_KUy9k_heECT3r42OQa-ho0
        subject_person_id: p_VXctFzdW1A9SQFV1nH5uCc
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_LXUDjCrlHzJfD19syY6D1V
          claim_id: c_KUy9k_heECT3r42OQa-ho0
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_VXctFzdW1A9SQFV1nH5uCc
        status: active
        display_name: 王章
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses:
    - claim:
        id: c_eLZGbSlAMAfmtIg_VRG7J6
        subject_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        claim_kind: relationship
        predicate: kinship.spouse_of
        object_person_id: p_JPpDP1bCMNthbvRocDHp12
        generation_count: null
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_R_Q-etkPspb-0KqYr7WBdy
          claim_id: c_eLZGbSlAMAfmtIg_VRG7J6
          source_id: s_CWujTfh6N9IMn7UfP5olj0
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：妻子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CWujTfh6N9IMn7UfP5olj0
            source_type: api_record
            title: 中国历代人物传记资料库：曹氏(王序妻)（CBDB 263785）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263785&o=json
            external_identifier: CBDB:263785
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-11T06:08:33.163Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_JPpDP1bCMNthbvRocDHp12
        status: active
        display_name: 曹氏
        merged_into_person_id: null
  ancestors:
    - claim:
        id: c_1ZxumKXSqY-j1174C3HQiG
        subject_person_id: p_Mf2cCNPP13nfvHrxcNv96C
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_XeoDcuzyMB_VhBP3OIQPRA
          claim_id: c_1ZxumKXSqY-j1174C3HQiG
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：曾祖
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_Mf2cCNPP13nfvHrxcNv96C
        status: active
        display_name: 王仁美
        merged_into_person_id: null
    - claim:
        id: c_FfVjgZXzvfWG-j4ZA8n6pV
        subject_person_id: p_8MqHrKyQJm4DCK5auZ9vkj
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_5MQS7xTZ7xaRFjWYKoXEEG
        generation_count: 2
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_tIOMhsDxg4pDcHf0SV5zKs
          claim_id: c_FfVjgZXzvfWG-j4ZA8n6pV
          source_id: s_nUcJwoZm9zoYm8ziRTQn3w
          stance: supports
          locator: 弘治三年進士登科錄:一卷，第三甲第二百零五名：祖父
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source: *a1
      object_person:
        id: p_8MqHrKyQJm4DCK5auZ9vkj
        status: active
        display_name: 王讓
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王序

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王序 | accepted |
| birth.date | 1456年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_VXctFzdW1A9SQFV1nH5uCc | 王章 | accepted |
| spouses | p_JPpDP1bCMNthbvRocDHp12 | 曹氏 | accepted |
| ancestors | p_Mf2cCNPP13nfvHrxcNv96C | 王仁美 | accepted |
| ancestors | p_8MqHrKyQJm4DCK5auZ9vkj | 王讓 | accepted |

## 外部来源

- [中国历代人物传记资料库：曹氏(王序妻)（CBDB 263785）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=263785&o=json)
- [中国历代人物传记资料库：王序（CBDB 200871）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=200871&o=json)
