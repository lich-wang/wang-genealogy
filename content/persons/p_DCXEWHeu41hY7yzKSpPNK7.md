---
schema: wang-person/v1
id: p_DCXEWHeu41hY7yzKSpPNK7
status: active
merged_into: null
display_name: 王斛
revision: 3
properties:
  - predicate: name.primary
    recommended:
      claim:
        id: c_AHCCMSCCAAJ6knZpV5hdZW
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: property
        predicate: name.primary
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          text: 王斛
          language: zh-Hant
        status: accepted
        confidence: high
        current_revision: 1
      sources:
        - id: cs_ASPQaBTNH3sgw2yhWmAxjk
          claim_id: c_AHCCMSCCAAJ6knZpV5hdZW
          source_id: s_rLLqfnFEVDpd1if1VyZPQa
          stance: supports
          locator: CBDB:203566
          quotation: null
          interpretation_note: CBDB 明确记录的王姓历史人物（203566）
          source: &a1
            id: s_rLLqfnFEVDpd1if1VyZPQa
            source_type: api_record
            title: 中国历代人物传记资料库：王斛（CBDB 203566）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203566&o=json
            external_identifier: CBDB:203566
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:16.792Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person: null
    alternatives: []
  - predicate: birth.date
    recommended:
      claim:
        id: c_VMTJsSVhiSHcJxNRfVoAT3
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        claim_kind: property
        predicate: birth.date
        object_person_id: null
        generation_count: null
        parent_role: null
        value_json:
          date:
            original_text: 1525年
            calendar_note: CBDB 生年字段，精度：年
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_BKbx4Ckq2ToRzJz4emsdnx
          claim_id: c_VMTJsSVhiSHcJxNRfVoAT3
          source_id: s_rLLqfnFEVDpd1if1VyZPQa
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
        id: c_y3mAd7j47WFXKAW9sLPFxT
        subject_person_id: p_DCXEWHeu41hY7yzKSpPNK7
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
        - id: cs_3EQp9Eq6UsprjaFzh7rT37
          claim_id: c_y3mAd7j47WFXKAW9sLPFxT
          source_id: s_rLLqfnFEVDpd1if1VyZPQa
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
        id: c_nxNKRXO0rajjSqpnu8g8MW
        subject_person_id: p_asR7CUjP1iXKvRkyGBMSJF
        claim_kind: relationship
        predicate: kinship.father_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: null
        parent_role: father
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_ZV5vF_RR_YV8JSmHFdc3Vv
          claim_id: c_nxNKRXO0rajjSqpnu8g8MW
          source_id: s_jQ1xVhGJBYhR3uYYGyKa7V
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十名：子
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_jQ1xVhGJBYhR3uYYGyKa7V
            source_type: api_record
            title: 中国历代人物传记资料库：王教（CBDB 306622）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306622&o=json
            external_identifier: CBDB:306622
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.772Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_asR7CUjP1iXKvRkyGBMSJF
        status: active
        display_name: 王教
        merged_into_person_id: null
  children: []
  adoptive_parents: []
  adoptive_children: []
  spouses: []
  ancestors:
    - claim:
        id: c_XHCq0fm8phZWYjy9DEgDjZ
        subject_person_id: p_GiRXJTzMrTmS7SYHZYijNT
        claim_kind: relationship
        predicate: kinship.ancestor_of
        object_person_id: p_DCXEWHeu41hY7yzKSpPNK7
        generation_count: 3
        parent_role: null
        value_json: null
        status: accepted
        confidence: medium
        current_revision: 1
      sources:
        - id: cs_8obtELdjAdexT1bQaxQTKz
          claim_id: c_XHCq0fm8phZWYjy9DEgDjZ
          source_id: s_CCKSPDYdztby8shHXQYH1H
          stance: supports
          locator: 嘉靖二十三年登科錄:一卷，第三甲第四十名：曾孫; 重孫
          quotation: null
          interpretation_note: Luna 在线复核 CBDB 实时 API 后补全；关系端点按 CBDB ID 唯一映射。
          source:
            id: s_CCKSPDYdztby8shHXQYH1H
            source_type: api_record
            title: 中国历代人物传记资料库：王繼宗（CBDB 306620）
            creator: China Biographical Database (CBDB)
            publisher: Harvard University / Academia Sinica / Peking University
            canonical_url: https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306620&o=json
            external_identifier: CBDB:306620
            license_code: CC-BY-NC-SA-4.0
            accessed_at: 2026-09-09T00:03:19.770Z
            metadata_json:
              source_release: CBDB 2026-09-05
      object_person:
        id: p_GiRXJTzMrTmS7SYHZYijNT
        status: active
        display_name: 王繼宗
        merged_into_person_id: null
  descendants: []
  other: []
---

# 王斛

> 本文件是该人物的权威数据页。修改 front matter 并提交 Pull Request；正文用于人工阅读。

## 基本信息

| 字段 | 内容 | 状态 |
| --- | --- | --- |
| name.primary | 王斛 | accepted |
| birth.date | 1525年 | accepted |
| bio.summary | CBDB 记载为明人物 | accepted |

## 关联关系

| 关系 | 人物 ID | 姓名 | 状态 |
| --- | --- | --- | --- |
| parents | p_asR7CUjP1iXKvRkyGBMSJF | 王教 | accepted |
| ancestors | p_GiRXJTzMrTmS7SYHZYijNT | 王繼宗 | accepted |

## 外部来源

- [中国历代人物传记资料库：王斛（CBDB 203566）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=203566&o=json)
- [中国历代人物传记资料库：王繼宗（CBDB 306620）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306620&o=json)
- [中国历代人物传记资料库：王教（CBDB 306622）](https://cbdb.fas.harvard.edu/cbdbapi/person.php?id=306622&o=json)
